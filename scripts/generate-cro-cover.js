import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#081c33"/>
      <stop offset="0.55" stop-color="#0d2b45"/>
      <stop offset="1" stop-color="#184f7d"/>
    </linearGradient>
    <pattern id="lines" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse">
      <path d="M-10 10 L10 -10 M0 90 L90 0 M80 100 L100 80" stroke="rgba(255,255,255,0.06)" stroke-width="1" fill="none"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="rgba(46,139,192,0.22)"/>
      <stop offset="1" stop-color="rgba(46,139,192,0)"/>
    </radialGradient>
    <style>
      .heading { font-family: 'Lexend', 'Helvetica Neue', Arial, sans-serif; }
      .body    { font-family: 'Source Sans 3', 'Helvetica Neue', Arial, sans-serif; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#lines)"/>
  <circle cx="940" cy="275" r="300" fill="url(#glow)"/>

  <!-- Top eyebrow -->
  <g transform="translate(72, 88)">
    <rect x="0" y="-18" width="28" height="2" fill="#2e8bc0"/>
    <text x="44" y="0" class="heading" fill="#7fb7d9" font-size="14" font-weight="600" letter-spacing="3">CROSS-BORDER STRATEGY · RESEARCH</text>
  </g>

  <!-- Giant 65% -->
  <g transform="translate(72, 300)">
    <text x="0" y="0" class="heading" fill="#f59e0b" font-size="232" font-weight="700" letter-spacing="-8">65%</text>
  </g>

  <!-- Supporting line -->
  <text x="76" y="348" class="heading" fill="#ffffff" font-size="30" font-weight="500" letter-spacing="-0.3">cheaper to run the same trial in China</text>

  <!-- Sub-caption -->
  <text x="76" y="380" class="body" fill="rgba(255,255,255,0.55)" font-size="15" letter-spacing="2.5">PHASE II ONCOLOGY · 120 PATIENTS · ILLUSTRATIVE</text>

  <!-- Cost comparison row -->
  <g transform="translate(76, 460)">
    <!-- Boston -->
    <text x="0" y="0" class="heading" fill="#ffffff" font-size="42" font-weight="600">$12.0M</text>
    <text x="2" y="28" class="heading" fill="rgba(255,255,255,0.55)" font-size="13" font-weight="500" letter-spacing="3">BOSTON</text>

    <!-- Arrow -->
    <g transform="translate(200, -10)" stroke="#2e8bc0" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="0" y1="0" x2="86" y2="0"/>
      <polyline points="74,-7 86,0 74,7"/>
    </g>

    <!-- Shanghai -->
    <text x="310" y="0" class="heading" fill="#2e8bc0" font-size="42" font-weight="700">$4.3M</text>
    <text x="312" y="28" class="heading" fill="rgba(255,255,255,0.55)" font-size="13" font-weight="500" letter-spacing="3">SHANGHAI</text>
  </g>

  <!-- Right-side abstract Pacific globe -->
  <g transform="translate(940, 275)">
    <circle r="205" fill="none" stroke="rgba(127,183,217,0.28)" stroke-width="1"/>
    <circle r="150" fill="none" stroke="rgba(127,183,217,0.18)" stroke-width="1"/>
    <circle r="90"  fill="none" stroke="rgba(127,183,217,0.12)" stroke-width="1"/>

    <!-- latitude/longitude arcs -->
    <ellipse cx="0" cy="0" rx="205" ry="60"  fill="none" stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
    <ellipse cx="0" cy="0" rx="205" ry="120" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <ellipse cx="0" cy="0" rx="60"  ry="205" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <ellipse cx="0" cy="0" rx="120" ry="205" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>

    <!-- Pacific arc connecting Shanghai (left) -> Boston (right) -->
    <path d="M -128 48 Q 0 -175 130 -58" fill="none" stroke="rgba(245,158,11,0.55)" stroke-width="1.6" stroke-dasharray="4 5" stroke-linecap="round"/>

    <!-- Shanghai node -->
    <g transform="translate(-128, 48)">
      <circle r="18" fill="none" stroke="#2e8bc0" stroke-width="1" opacity="0.35"/>
      <circle r="5" fill="#2e8bc0"/>
      <text x="-12" y="-22" class="heading" fill="#ffffff" font-size="13" font-weight="500" text-anchor="end">Shanghai</text>
    </g>

    <!-- Boston node -->
    <g transform="translate(130, -58)">
      <circle r="18" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.4"/>
      <circle r="5" fill="#f59e0b"/>
      <text x="12" y="-12" class="heading" fill="#ffffff" font-size="13" font-weight="500">Boston</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="72" y1="560" x2="1128" y2="560" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>

  <!-- Article title -->
  <text x="72" y="595" class="heading" fill="rgba(255,255,255,0.78)" font-size="16" font-weight="500">
    Why Chinese CROs Are 65% Cheaper — and What US Biotechs Need to Know
  </text>

  <!-- Brand mark -->
  <text x="1128" y="595" class="heading" fill="#ffffff" font-size="15" font-weight="600" letter-spacing="1.5" text-anchor="end">
    ECHO INTERNATIONAL MEDICA
  </text>
</svg>
`;

const output = path.join(ROOT, 'public', 'articles', 'cro-cost-arbitrage.jpg');

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(output);

console.log(`CRO cover generated: ${output}`);
