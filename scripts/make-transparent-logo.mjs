// Converts public/myali-logo.jpeg (white bg, black ink) into
// public/myali-logo.png with a true-transparent background.
//
// Strategy: derive the alpha channel from the inverted luminance —
// pure white becomes fully transparent, pure black stays fully opaque,
// and anti-aliased edges keep their soft transitions.
//
// Run once:  node scripts/make-transparent-logo.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INPUT = path.join(ROOT, "public", "myali-logo.jpeg");
const OUTPUT = path.join(ROOT, "public", "myali-logo.png");

const meta = await sharp(INPUT).metadata();
const w = meta.width;
const h = meta.height;
if (!w || !h) throw new Error("could not read image dimensions");

// alpha = inverted grayscale (1 byte per pixel)
const alpha = await sharp(INPUT).grayscale().negate().raw().toBuffer();

// rgb = original colors (3 bytes per pixel)
const rgb = await sharp(INPUT).removeAlpha().raw().toBuffer();

// Force the visible ink to pure black so any color cast in the JPEG
// (slight greys around the wordmark) doesn't muddy the result.
const out = Buffer.alloc(w * h * 4);
for (let i = 0; i < w * h; i++) {
  const a = alpha[i];
  out[i * 4 + 0] = a > 12 ? 0 : rgb[i * 3 + 0]; // R
  out[i * 4 + 1] = a > 12 ? 0 : rgb[i * 3 + 1]; // G
  out[i * 4 + 2] = a > 12 ? 0 : rgb[i * 3 + 2]; // B
  out[i * 4 + 3] = a; // A
}

// Build the full RGBA image, then trim the transparent border so the
// wordmark is flush with the canvas edges (looks much better at small
// nav/footer sizes).
const trimmed = await sharp(out, { raw: { width: w, height: h, channels: 4 } })
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toBuffer();

await sharp(trimmed).toFile(OUTPUT);

const finalMeta = await sharp(OUTPUT).metadata();
console.log(`✅ wrote ${OUTPUT} (${finalMeta.width}x${finalMeta.height}, was ${w}x${h})`);
