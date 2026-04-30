/* Regenerate logo.png and all favicons from newLogo.png. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "newLogo.png");
const PUBLIC = path.join(ROOT, "public");

async function main() {
  // 1) Replace public/logo.png with the new logo (full image)
  await sharp(SRC).png().toFile(path.join(PUBLIC, "logo.png"));

  // 2) Build a square master for icons: trim whitespace, then pad to square on white
  const trimmed = await sharp(SRC)
    .flatten({ background: "#ffffff" })
    .trim({ background: "#ffffff", threshold: 10 })
    .toBuffer();
  const meta = await sharp(trimmed).metadata();
  const size = Math.max(meta.width, meta.height);
  const padX = Math.floor((size - meta.width) / 2);
  const padY = Math.floor((size - meta.height) / 2);
  const square = await sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite([{ input: trimmed, left: padX, top: padY }])
    .png()
    .toBuffer();

  // 3) Generate PNG favicons of each size from the square master
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "icon-192x192.png", size: 192 },
    { name: "apple-touch-icon.png", size: 180 },
  ];
  const generated = {};
  for (const { name, size: s } of sizes) {
    const buf = await sharp(square).resize(s, s).png().toBuffer();
    fs.writeFileSync(path.join(PUBLIC, name), buf);
    generated[s] = buf;
  }

  // 4) Build favicon.ico containing 16, 32, 48 PNG entries
  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map((s) => sharp(square).resize(s, s).png().toBuffer())
  );
  const ico = buildIco(icoSizes, icoBuffers);
  fs.writeFileSync(path.join(PUBLIC, "favicon.ico"), ico);

  console.log("Done.");
}

function buildIco(sizes, pngBuffers) {
  const count = sizes.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4);

  const entries = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  for (let i = 0; i < count; i++) {
    const s = sizes[i];
    const buf = pngBuffers[i];
    const w = s >= 256 ? 0 : s;
    const h = s >= 256 ? 0 : s;
    entries.writeUInt8(w, i * 16 + 0);
    entries.writeUInt8(h, i * 16 + 1);
    entries.writeUInt8(0, i * 16 + 2); // colors
    entries.writeUInt8(0, i * 16 + 3); // reserved
    entries.writeUInt16LE(1, i * 16 + 4); // planes
    entries.writeUInt16LE(32, i * 16 + 6); // bpp
    entries.writeUInt32LE(buf.length, i * 16 + 8); // size
    entries.writeUInt32LE(offset, i * 16 + 12); // offset
    offset += buf.length;
  }
  return Buffer.concat([header, entries, ...pngBuffers]);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
