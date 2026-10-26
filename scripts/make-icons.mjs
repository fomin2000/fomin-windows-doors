// Regenerates the favicons and social sharing image from src/assets/logo/fomin-logo.png.
// Run: node scripts/make-icons.mjs
import sharp from 'sharp';

const LOGO = 'src/assets/logo/fomin-logo.png';
// The square-ish window mark on the left of the logo (pixels in the source file).
const MARK = { left: 0, top: 2, width: 177, height: 205 };

const mark = await sharp(LOGO).extract(MARK).toBuffer();

async function icon(size, file, background, pad) {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: m, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(file);
}

const clear = { r: 0, g: 0, b: 0, alpha: 0 };
const white = { r: 255, g: 255, b: 255, alpha: 1 };
await icon(48, 'public/favicon.png', clear, 0.02);
await icon(180, 'public/apple-touch-icon.png', white, 0.14);
await icon(512, 'public/icon-512.png', white, 0.14);

// Social sharing image (1200x630): logo on white, navy band with contact details.
const logo = await sharp(LOGO).resize({ width: 900 }).toBuffer();
const band = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="150">
  <rect width="1200" height="150" fill="#15324F"/>
  <text x="600" y="68" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF">Certified Master Installers · Salem, Oregon</text>
  <text x="600" y="116" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="30" fill="#C4D2E0">(503) 583-7956 · fominwindowsdoors.com</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 4, background: white } })
  .composite([
    { input: logo, top: 125, left: 150 },
    { input: band, top: 480, left: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');

console.log('Wrote favicon.png, apple-touch-icon.png, icon-512.png, og-image.png');
