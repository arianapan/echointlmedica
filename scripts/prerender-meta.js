import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://echointlmedica.com';

// Keep in sync with src/pages/articles/*.jsx props.
// When you add a new article, add its metadata here so OG/SEO tags bake into
// a per-route HTML file that social scrapers can read without executing JS.
const articles = [
  {
    slug: 'chinese-cros-cost-arbitrage',
    title: 'Why Chinese CROs Are 65% Cheaper, and What US Biotechs Need to Know',
    description: 'A deep look at the cost arbitrage in cross-border clinical development, and the operational realities that separate successful programs from expensive lessons.',
    ogImage: '/articles/cro-cost-arbitrage.jpg',
    category: 'Cross-Border Strategy',
    isoDate: '2026-04-14',
  },
  {
    slug: 'ai-reshaping-biotech-consulting',
    title: 'The 3x Deliverable Model: How AI Is Reshaping Biotech Consulting',
    description: "Why the future of advisory isn't cheaper consulting. It's fundamentally better outcomes, delivered through AI-augmented intelligence.",
    ogImage: '/articles/ai-advisory.jpg',
    category: 'AI & Advisory',
    isoDate: '2026-04-14',
  },
  {
    slug: 'pacific-hospital-partnerships',
    title: "Building Hospital Partnerships Across the Pacific: A Practitioner's Guide",
    description: 'Lessons from structuring US–China academic medical center collaborations, from framework design to ongoing management, and why most partnerships stall in year two.',
    ogImage: '/og-preview.jpg',
    category: 'Institutional Partnerships',
    isoDate: '2026-04-14',
  },
];

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const distDir = path.join(ROOT, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error(`dist/index.html not found. Run \`vite build\` first.`);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

for (const a of articles) {
  const canonical = `${SITE_URL}/insights/${a.slug}`;
  const ogImageUrl = a.ogImage.startsWith('http') ? a.ogImage : `${SITE_URL}${a.ogImage}`;
  const pageTitle = `${a.title} | Echo International Medica`;

  let html = template;

  // Targeted replacements (preserve existing tag positions)
  const replaceTag = (pattern, replacement) => {
    if (pattern.test(html)) html = html.replace(pattern, replacement);
    else html = html.replace('</head>', `    ${replacement}\n  </head>`);
  };

  replaceTag(/<title>[^<]*<\/title>/i, `<title>${esc(pageTitle)}</title>`);
  replaceTag(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${esc(a.description)}" />`);
  replaceTag(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);

  replaceTag(/<meta\s+property="og:type"[^>]*>/i, `<meta property="og:type" content="article" />`);
  replaceTag(/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  replaceTag(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(a.title)}" />`);
  replaceTag(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(a.description)}" />`);
  replaceTag(/<meta\s+property="og:image"[^>]*>/i, `<meta property="og:image" content="${ogImageUrl}" />`);

  replaceTag(/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${esc(a.title)}" />`);
  replaceTag(/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${esc(a.description)}" />`);
  replaceTag(/<meta\s+name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${ogImageUrl}" />`);

  // Article-specific meta (inject before </head>)
  const articleMeta = `
    <meta property="article:published_time" content="${a.isoDate}" />
    <meta property="article:author" content="Echo International Medica" />
    <meta property="article:section" content="${esc(a.category)}" />`;

  // JSON-LD Article schema
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    image: ogImageUrl,
    articleSection: a.category,
    datePublished: a.isoDate,
    dateModified: a.isoDate,
    author: { '@type': 'Organization', name: 'Echo International Medica', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Echo International Medica',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/companylogo.jpg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    inLanguage: 'en',
  };

  const ldScript = `<script type="application/ld+json">${JSON.stringify(articleLd)}</script>`;

  html = html.replace('</head>', `${articleMeta}\n    ${ldScript}\n  </head>`);

  const outDir = path.join(distDir, 'insights', a.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered: /insights/${a.slug}/index.html`);
}

// SPA fallback for GitHub Pages: any unknown route → 404.html → React Router
// reads window.location and navigates client-side.
fs.copyFileSync(templatePath, path.join(distDir, '404.html'));
console.log(`SPA fallback: 404.html written`);

console.log(`\nDone. ${articles.length} article HTMLs + 404 fallback generated.`);
