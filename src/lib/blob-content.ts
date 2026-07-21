// Čítanie a zápis content.json do Vercel Blob.
// Používa sa na serveri (vyžaduje BLOB_READ_WRITE_TOKEN).
import "server-only";
import { del, list, put } from "@vercel/blob";
import {
  CONTENT_PATHNAME,
  CONTENT_SCHEMA_VERSION,
  type SiteContent,
} from "./content-types";

export { CONTENT_PATHNAME };

/** Či je URL skutočná Vercel Blob URL (nie pôvodná /images/ seed cesta). */
export function isBlobUrl(url: string): boolean {
  return url.includes(".blob.vercel-storage.com");
}

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

/** Zmaže z Blob fotky, ktoré boli v starom obsahu, ale už nie sú v novom (len Blob URL). */
export async function deleteOrphanedImages(
  oldContent: SiteContent,
  newContent: SiteContent
): Promise<void> {
  const newUrls = new Set(collectImageUrls(newContent));
  const orphans = collectImageUrls(oldContent).filter(
    (u) => isBlobUrl(u) && !newUrls.has(u)
  );
  if (orphans.length === 0) return;
  try {
    await del(orphans);
  } catch {
    // best-effort: zlyhanie čistenia nesmie zhodiť uloženie
  }
}

/** Načíta content.json z Blob. Vráti null ak neexistuje alebo Blob nie je dostupný. */
export async function readContentRaw(): Promise<SiteContent | null> {
  try {
    const { blobs } = await list({ prefix: CONTENT_PATHNAME, limit: 1 });
    const blob = blobs.find((b) => b.pathname === CONTENT_PATHNAME);
    if (!blob) return null;
    const res = await fetch(blob.url, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as SiteContent;
  } catch {
    return null;
  }
}

/** Zapíše content.json do Blob (prepíše existujúci). Aktualizuje updatedAt a schemaVersion. */
export async function writeContent(content: SiteContent): Promise<SiteContent> {
  const toWrite: SiteContent = {
    ...content,
    schemaVersion: CONTENT_SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
  };
  await put(CONTENT_PATHNAME, JSON.stringify(toWrite), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
  return toWrite;
}
