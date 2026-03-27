import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const WIDTH = 1200;
const HEIGHT = 630;

// Brand colors from tailwind config
const BG_COLOR = '#0d2b45'; // secondary (dark navy)
const PRIMARY = '#2e8bc0';

async function generate() {
  const logoPath = path.join(ROOT, 'public', 'companylogo.jpg');

  // Resize logo and ensure it has alpha channel
  const logo = await sharp(logoPath)
    .resize({ height: 220, fit: 'inside' })
    .ensureAlpha()
    .png()
    .toBuffer();

  // Remove white/near-white background by making it transparent
  const { data, info } = await sharp(logo)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = Buffer.from(data);
  for (let i = 0; i < pixels.length; i += info.channels) {
    const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
    // If pixel is white-ish, make it transparent
    if (r > 230 && g > 230 && b > 230) {
      pixels[i + 3] = 0; // set alpha to 0
    }
  }

  const logoClean = await sharp(pixels, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toBuffer();

  const logoMeta = await sharp(logoClean).metadata();
  const logoW = logoMeta.width;
  const logoH = logoMeta.height;

  // Center logo horizontally, place it in upper-center area
  const logoX = Math.round((WIDTH - logoW) / 2);
  const logoY = Math.round((HEIGHT - logoH) / 2) - 60;

  // Create SVG overlay with company name and tagline
  const textSvg = `
    <svg width="${WIDTH}" height="${HEIGHT}">
      <style>
        .title { fill: #ffffff; font-size: 48px; font-weight: 600; font-family: sans-serif; }
        .tagline { fill: ${PRIMARY}; font-size: 22px; font-weight: 400; font-family: sans-serif; }
        .line { stroke: ${PRIMARY}; stroke-width: 2; }
      </style>
      <line class="line" x1="460" y1="${logoY + logoH + 45}" x2="740" y2="${logoY + logoH + 45}" />
      <text class="title" x="50%" y="${logoY + logoH + 100}" text-anchor="middle">Echo International Medica</text>
      <text class="tagline" x="50%" y="${logoY + logoH + 140}" text-anchor="middle">AI-Powered Cross-Border Biotech Advisory</text>
    </svg>
  `;

  const output = path.join(ROOT, 'public', 'og-preview.jpg');

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: BG_COLOR,
    },
  })
    .composite([
      { input: logoClean, left: logoX, top: logoY },
      { input: Buffer.from(textSvg), top: 0, left: 0 },
    ])
    .jpeg({ quality: 90 })
    .toFile(output);

  console.log(`OG image generated: ${output}`);
}

generate().catch(console.error);
