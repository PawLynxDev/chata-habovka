// Jednorazový skript: nahrá východiskový obsah (SEED_CONTENT) do Cloudflare R2.
// Spustenie: nastav R2_* env premenné (napr. v .env.local) a `npm run seed`.
// Idempotentný – opätovné spustenie obnoví pôvodný obsah (užitočné na reset).
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { SEED_CONTENT } from "../src/lib/seed";
import { CONTENT_PATHNAME } from "../src/lib/content-types";

function env(name: string): string {
  const v = process.env[name];
  if (!v) {
    console.error(`Chýba env premenná ${name}.`);
    process.exit(1);
  }
  return v;
}

async function main() {
  const client = new S3Client({
    region: "auto",
    endpoint: env("R2_ENDPOINT"),
    credentials: {
      accessKeyId: env("R2_ACCESS_KEY_ID"),
      secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
    },
  });

  await client.send(
    new PutObjectCommand({
      Bucket: env("R2_BUCKET"),
      Key: CONTENT_PATHNAME,
      Body: JSON.stringify(SEED_CONTENT, null, 2),
      ContentType: "application/json",
      CacheControl: "no-store",
    })
  );

  console.log(
    "✓ Seed obsahu nahraný do R2:",
    `${env("R2_PUBLIC_BASE_URL").replace(/\/+$/, "")}/${CONTENT_PATHNAME}`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
