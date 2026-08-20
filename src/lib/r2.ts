// Cloudflare R2 (S3 API) – lazy klient a pomocníci na tvorbu/rozklad verejných URL.
// Používa sa len na serveri (vyžaduje R2_* env premenné).
import "server-only";
import { S3Client } from "@aws-sdk/client-s3";

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Chýba env premenná ${name}`);
  return v;
}

let client: S3Client | null = null;

/** Lazy singleton S3 klienta pre R2 (endpoint a kľúče z env). */
export function r2(): S3Client {
  if (!client) {
    client = new S3Client({
      region: "auto",
      endpoint: env("R2_ENDPOINT"),
      credentials: {
        accessKeyId: env("R2_ACCESS_KEY_ID"),
        secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
      },
    });
  }
  return client;
}

/** Názov R2 bucketu. */
export function r2Bucket(): string {
  return env("R2_BUCKET");
}

/** Verejná URL objektu (cez public doménu bucketu, napr. pub-…r2.dev). */
export function r2PublicUrl(key: string): string {
  return `${env("R2_PUBLIC_BASE_URL").replace(/\/+$/, "")}/${key}`;
}

/** Kľúč objektu z verejnej URL; null ak URL nepatrí nášmu bucketu. */
export function r2KeyFromUrl(url: string): string | null {
  const base = env("R2_PUBLIC_BASE_URL").replace(/\/+$/, "");
  return url.startsWith(`${base}/`) ? url.slice(base.length + 1) : null;
}
