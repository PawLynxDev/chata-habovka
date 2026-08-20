// Čítanie a zápis content.json do Cloudflare R2 (S3 API).
// Používa sa na serveri (vyžaduje R2_* env premenné).
import "server-only";
import {
  DeleteObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { r2, r2Bucket, r2KeyFromUrl } from "./r2";
import {
  CONTENT_PATHNAME,
  CONTENT_SCHEMA_VERSION,
  type SiteContent,
} from "./content-types";

export { CONTENT_PATHNAME };

/** Vyzbiera všetky URL fotiek naprieč celým obsahom. */
export function collectImageUrls(c: SiteContent): string[] {
  const urls: string[] = [];
  const add = (u?: string) => {
    if (u) urls.push(u);
  };
  add(c.hero.image.url);
  add(c.interiorTeaser.living.url);
  add(c.interiorTeaser.kitchen.url);
  add(c.interiorTeaser.bedroom.url);
  add(c.wellnessTeaser.image.url);
  c.interier.living.images.forEach((i) => add(i.url));
  c.interier.kitchen.images.forEach((i) => add(i.url));
  c.interier.bedrooms.forEach((b) => b.images.forEach((i) => add(i.url)));
  c.interier.bathrooms.forEach((b) => b.images.forEach((i) => add(i.url)));
  c.wellness.wellness.images.forEach((i) => add(i.url));
  c.wellness.terrace.images.forEach((i) => add(i.url));
  c.wellness.kids.images.forEach((i) => add(i.url));
  c.okolie.attractions.forEach((a) => add(a.image.url));
  return urls;
}

/** Zmaže z R2 fotky, ktoré boli v starom obsahu, ale už nie sú v novom (len naše nahrané URL). */
export async function deleteOrphanedImages(
  oldContent: SiteContent,
  newContent: SiteContent
): Promise<void> {
  try {
    const newUrls = new Set(collectImageUrls(newContent));
    const orphanKeys = collectImageUrls(oldContent)
      .filter((u) => !newUrls.has(u))
      .map(r2KeyFromUrl)
      .filter((k): k is string => k !== null);
    if (orphanKeys.length === 0) return;
    await r2().send(
      new DeleteObjectsCommand({
        Bucket: r2Bucket(),
        Delete: { Objects: orphanKeys.map((Key) => ({ Key })), Quiet: true },
      })
    );
  } catch {
    // best-effort: zlyhanie čistenia nesmie zhodiť uloženie
  }
}

/** Načíta content.json z R2. Vráti null ak neexistuje alebo R2 nie je dostupné. */
export async function readContentRaw(): Promise<SiteContent | null> {
  try {
    const res = await r2().send(
      new GetObjectCommand({ Bucket: r2Bucket(), Key: CONTENT_PATHNAME })
    );
    const text = await res.Body?.transformToString();
    if (!text) return null;
    return JSON.parse(text) as SiteContent;
  } catch {
    return null;
  }
}

/** Zapíše content.json do R2 (prepíše existujúci). Aktualizuje updatedAt a schemaVersion. */
export async function writeContent(content: SiteContent): Promise<SiteContent> {
  const toWrite: SiteContent = {
    ...content,
    schemaVersion: CONTENT_SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
  };
  await r2().send(
    new PutObjectCommand({
      Bucket: r2Bucket(),
      Key: CONTENT_PATHNAME,
      Body: JSON.stringify(toWrite),
      ContentType: "application/json",
      CacheControl: "no-store",
    })
  );
  return toWrite;
}
