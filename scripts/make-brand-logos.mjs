// Prepares supplier logos that don't come as ready-to-use files.
// Run: node scripts/make-brand-logos.mjs
//
// - Alpine and Cascade were supplied as small, white, single-color images. They are
//   recolored to the site navy so they read on white cards, and upscaled 4x with the
//   edges re-sharpened (a single-color logo is just a shape, so its outline can be
//   rebuilt cleanly from the transparency mask).
// - Marvin was supplied as AVIF and is converted to PNG.
// Replace these with official high-resolution files from the manufacturer when available.
import sharp from 'sharp';

const SRC = 'scripts/brand-sources';
const OUT = 'src/assets/brands';
const NAVY = { r: 0x15, g: 0x32, b: 0x4f };

async function recolorSingleColor(input, output, scale = 4) {
  const { width, height } = await sharp(input).metadata();
  const w = width * scale;
  const h = height * scale;
  // Upscale the transparency mask, then steepen it so edges are crisp, not blurry.
  const alpha = await sharp(input)
    .ensureAlpha()
    .extractChannel('alpha')
    .resize(w, h, { kernel: 'lanczos3' })
    .linear(1.8, -0.4 * 255)
    .toBuffer();
  await sharp({ create: { width: w, height: h, channels: 3, background: NAVY } })
    .joinChannel(alpha, { raw: undefined })
    .png()
    .toBuffer()
    .then((buf) => sharp(buf).trim().png({ compressionLevel: 9 }).toFile(output));
}

await recolorSingleColor(`${SRC}/alpine-white.webp`, `${OUT}/alpine.png`);
await recolorSingleColor(`${SRC}/cascade-white.webp`, `${OUT}/cascade.png`);
await sharp(`${SRC}/marvin.avif`).trim().png({ compressionLevel: 9 }).toFile(`${OUT}/marvin.png`);
console.log('Wrote alpine.png, cascade.png, marvin.png');
