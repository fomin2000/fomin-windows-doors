// Regenerates public/og-image.png (the social sharing image). Run: node scripts/make-og-image.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#15324F"/>
  <rect x="0" y="560" width="1200" height="70" fill="#0D2236"/>
  <g transform="translate(90 120)">
    <rect width="120" height="120" rx="18" fill="#FFFFFF"/>
    <rect x="16" y="16" width="40" height="40" rx="5" fill="#2563EB"/>
    <rect x="64" y="16" width="40" height="40" rx="5" fill="#15324F"/>
    <rect x="16" y="64" width="40" height="40" rx="5" fill="#15324F"/>
    <rect x="64" y="64" width="40" height="40" rx="5" fill="#15324F"/>
  </g>
  <text x="90" y="340" font-family="Inter, Helvetica, Arial, sans-serif" font-size="76" font-weight="800" fill="#FFFFFF">Fomin Windows &amp; Doors</text>
  <text x="90" y="410" font-family="Inter, Helvetica, Arial, sans-serif" font-size="36" fill="#C4D2E0">Certified master installers · Salem, Oregon</text>
  <text x="90" y="604" font-family="Inter, Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#FFFFFF">(503) 583-7956 · fominwindowsdoors.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-image.png');
console.log('Wrote public/og-image.png');
