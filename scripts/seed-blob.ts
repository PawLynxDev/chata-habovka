// Jednorazový skript: nahrá východiskový obsah (SEED_CONTENT) do Vercel Blob.
// Spustenie: nastav BLOB_READ_WRITE_TOKEN (napr. `vercel env pull .env.local`) a `npm run seed`.
// Idempotentný – opätovné spustenie obnoví pôvodný obsah (užitočné na reset).
import { put } from "@vercel/blob";
import { SEED_CONTENT } from "../src/lib/seed";
import { CONTENT_PATHNAME } from "../src/lib/content-types";

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error(
      "Chýba BLOB_READ_WRITE_TOKEN. Spusti `vercel env pull .env.local` alebo nastav token v prostredí."
    );
    process.exit(1);
  }

  const res = await put(
    CONTENT_PATHNAME,
    JSON.stringify(SEED_CONTENT, null, 2),
    {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 0,
    }
  );

  console.log("✓ Seed obsahu nahraný do Blob:", res.url);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
