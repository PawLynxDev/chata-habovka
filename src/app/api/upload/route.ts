// Upload fotiek: klient pošle (v prehliadači zmenšenú) fotku sem a server ju zapíše do R2.
// Telo requestu má na Verceli limit 4,5 MB – preto klient fotky pred odoslaním komprimuje
// (pozri lib/upload-client.ts) a tu je tvrdý strop 4 MB.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { r2, r2Bucket, r2PublicUrl } from "@/lib/r2";
import { requireAuth } from "@/lib/auth";

export const runtime = "nodejs";

const MAX_BYTES = 4 * 1024 * 1024;

const EXT_BY_TYPE: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
};

/** Z názvu súboru spraví bezpečný základ kľúča (bez diakritiky a špeciálnych znakov). */
function slugifyName(name: string): string {
  const base = name
    .replace(/\.[^.]+$/, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 60);
  return base || "foto";
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  let file: File;
  try {
    const form = await req.formData();
    const f = form.get("file");
    if (!(f instanceof File)) {
      return NextResponse.json({ error: "Chýba súbor" }, { status: 400 });
    }
    file = f;
  } catch {
    return NextResponse.json({ error: "Neplatný request" }, { status: 400 });
  }

  const ext = EXT_BY_TYPE[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Nepodporovaný typ súboru (povolené: JPEG, PNG, WebP, AVIF)" },
      { status: 400 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Fotka je príliš veľká (max 4 MB)" },
      { status: 400 }
    );
  }

  // Náhodný sufix bráni prepísaniu existujúcej fotky s rovnakým názvom.
  const key = `images/${slugifyName(file.name)}-${crypto.randomUUID().slice(0, 8)}.${ext}`;

  try {
    await r2().send(
      new PutObjectCommand({
        Bucket: r2Bucket(),
        Key: key,
        Body: Buffer.from(await file.arrayBuffer()),
        ContentType: file.type,
        CacheControl: "public, max-age=31536000, immutable",
      })
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Upload zlyhal", detail: String(e) },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: r2PublicUrl(key) });
}
