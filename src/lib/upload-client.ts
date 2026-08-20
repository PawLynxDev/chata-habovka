// Klientský upload fotiek: fotka sa v prehliadači zmenší/skomprimuje a pošle na /api/upload,
// ktorý ju uloží do R2. Kompresia drží telo requestu pod 4,5 MB limitom Vercel funkcií
// a zároveň zrýchľuje web (originály z foťákov mávajú aj 8 MB).

const MAX_DIM = 2560; // dlhšia strana vo px – na web bohato stačí
const MAX_UPLOAD_BYTES = 4 * 1024 * 1024;
const KEEP_ORIGINAL_UNDER = 2 * 1024 * 1024;

/** Zmenší fotku na max 2560 px a JPEG-y prekóduje (q 0.85). PNG ostáva PNG (priehľadnosť). */
async function compressImage(file: File): Promise<File> {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    return file; // dekódovanie zlyhalo – nechaj validáciu na server
  }

  const scale = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height));
  if (scale === 1 && file.size <= KEEP_ORIGINAL_UNDER) {
    bitmap.close();
    return file;
  }

  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    return file;
  }
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  // PNG nechávame ako PNG (priehľadnosť), všetko ostatné ide do JPEG.
  const outType = file.type === "image/png" ? "image/png" : "image/jpeg";
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, outType, 0.85)
  );
  if (!blob || blob.size >= file.size) return file;

  const newName =
    file.name.replace(/\.[^.]+$/, "") + (outType === "image/png" ? ".png" : ".jpg");
  return new File([blob], newName, { type: outType });
}

/** Nahrá fotku (cez /api/upload do R2) a vráti jej verejnú URL. */
export async function uploadImage(file: File): Promise<string> {
  const compressed = await compressImage(file);
  if (compressed.size > MAX_UPLOAD_BYTES) {
    throw new Error("Fotka je príliš veľká aj po kompresii (max 4 MB).");
  }

  const form = new FormData();
  form.append("file", compressed);

  const res = await fetch("/api/upload", { method: "POST", body: form });
  if (!res.ok) {
    const data = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new Error(data?.error ?? "Upload zlyhal");
  }
  const data = (await res.json()) as { url: string };
  return data.url;
}
