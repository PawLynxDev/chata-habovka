import { upload } from "@vercel/blob/client";

/** Nahrá fotku priamo do Vercel Blob (cez handshake /api/upload) a vráti jej URL. */
export async function uploadImage(file: File): Promise<string> {
  const blob = await upload(file.name, file, {
    access: "public",
    handleUploadUrl: "/api/upload",
  });
  return blob.url;
}
