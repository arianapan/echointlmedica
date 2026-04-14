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
    <linearGradient id="judgFill" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgba(245,158,11,0.75)"/>
      <stop offset="1" stop-color="rgba(245,158,11,1)"/>
    </linearGradient>
    <style>
      .h { font-family: 'Lexend', 'Helvetica Neue', Arial, sans-serif; }
    </style>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#lines)"/>
  <circle cx="900" cy="280" r="310" fill="url(#glow)"/>

  <!-- Eyebrow -->
  <g transform="translate(72, 88)">
    <rect x="0" y="-18" width="28" height="2" fill="#2e8bc0"/>
    <text x="44" y="0" class="h" fill="#7fb7d9" font-size="14" font-weight="600" letter-spacing="3">AI &amp; ADVISORY · RESEARCH</text>
  </g>

  <!-- Giant 3x in primary blue -->
  <text x="72" y="300" class="h" fill="#7fb7d9" font-size="232" font-weight="700" letter-spacing="-4">3×</text>

  <!-- Supporting line -->
  <text x="76" y="348" class="h" fill="#ffffff" font-size="30" font-weight="500">deeper deliverable per consultant week</text>

  <!-- Sub-caption -->
  <text x="76" y="380" class="h" fill="rgba(255,255,255,0.55)" font-size="15" letter-spacing="2.5">AI-AUGMENTED ADVISORY · ILLUSTRATIVE</text>

  <!-- Hours comparison row -->
  <g transform="translate(76, 460)">
    <text x="0" y="0" class="h" fill="#ffffff" font-size="42" font-weight="600">~100 hrs</text>
    <text x="2" y="28" class="h" fill="rgba(255,255,255,0.55)" font-size="13" font-weight="500" letter-spacing="3">PRE-AI</text>

    <g transform="translate(200, -10)" stroke="#f59e0b" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <line x1="0" y1="0" x2="86" y2="0"/>
      <polyline points="74,-7 86,0 74,7"/>
    </g>

    <text x="310" y="0" class="h" fill="#f59e0b" font-size="42" font-weight="700">~25 hrs</text>
    <text x="312" y="28" class="h" fill="rgba(255,255,255,0.55)" font-size="13" font-weight="500" letter-spacing="3">AI-AUGMENTED</text>
  </g>

  <!-- Right side: horizontal time allocation bars -->
  <g transform="translate(640, 140)">
    <text x="0" y="0" class="h" fill="rgba(255,255,255,0.55)" font-size="12" letter-spacing="2.5" font-weight="500">ONE CONSULTANT WEEK · TIME ALLOCATION</text>
    <line x1="0" y1="10" x2="40" y2="10" stroke="#2e8bc0" stroke-width="1.5"/>

    <!-- Row 1: PRE-AI -->
    <text x="0" y="50" class="h" fill="rgba(255,255,255,0.7)" font-size="13" font-weight="500" letter-spacing="2">PRE-AI</text>
    <g transform="translate(0, 64)">
      <rect x="0" y="0" width="330" height="44" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.28)" stroke-width="1"/>
      <rect x="330" y="0" width="110" height="44" fill="url(#judgFill)"/>
      <text x="165" y="28" class="h" fill="rgba(255,255,255,0.72)" font-size="11" font-weight="500" letter-spacing="2.5" text-anchor="middle">ASSEMBLY · 75%</text>
      <text x="385" y="28" class="h" fill="#ffffff" font-size="11" font-weight="600" letter-spacing="1.5" text-anchor="middle">JUDGMENT</text>
    </g>

    <!-- Row 2: AI-AUGMENTED -->
    <text x="0" y="160" class="h" fill="#7fb7d9" font-size="13" font-weight="500" letter-spacing="2">AI-AUGMENTED</text>
    <g transform="translate(0, 174)">
      <rect x="0" y="0" width="88" height="44" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.28)" stroke-width="1"/>
      <rect x="88" y="0" width="352" height="44" fill="url(#judgFill)"/>
      <text x="44" y="28" class="h" fill="rgba(255,255,255,0.68)" font-size="10" font-weight="500" letter-spacing="1.5" text-anchor="middle">20%</text>
      <text x="264" y="28" class="h" fill="#ffffff" font-size="12" font-weight="600" letter-spacing="2" text-anchor="middle">JUDGMENT · 80%</text>
    </g>

    <!-- Dotted guide showing judgment-edge shift -->
    <path d="M 330 108 Q 220 141 88 174" fill="none" stroke="rgba(245,158,11,0.55)" stroke-width="1.2" stroke-dasharray="3 4"/>

    <!-- 3x judgment callout -->
    <g transform="translate(460, 142)">
      <text x="0" y="0" class="h" fill="#f59e0b" font-size="24" font-weight="700">3×</text>
      <text x="0" y="18" class="h" fill="rgba(245,158,11,0.75)" font-size="10" letter-spacing="2">JUDGMENT</text>
    </g>
  </g>

  <!-- Divider and footer -->
  <line x1="72" y1="560" x2="1128" y2="560" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
  <text x="72" y="595" class="h" fill="rgba(255,255,255,0.78)" font-size="16" font-weight="500">
    The 3× Deliverable Model — How AI Is Reshaping Biotech Consulting
  </text>
  <text x="1128" y="595" class="h" fill="#ffffff" font-size="15" font-weight="600" letter-spacing="1.5" text-anchor="end">
    ECHO INTERNATIONAL MEDICA
  </text>
</svg>
`;

const output = path.join(ROOT, 'public', 'articles', 'ai-advisory.jpg');

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(output);

console.log(`AI cover generated: ${output}`);
