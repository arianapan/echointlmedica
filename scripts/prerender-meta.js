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
  {
    pathPrefix: 'case-studies',
    slug: 'us-oncology-china-entry',
    title: 'How a US Oncology Biotech Opened a Greater China Clinical Pathway at 65% Lower Cost',
    description: 'Inside the 16-week engagement that designed a full China clinical and commercialization strategy for a first-in-class therapeutic, and anchored a $10M+ capital raise.',
    ogImage: '/articles/ai-advisory.jpg',
    category: 'Client Success Story',
    isoDate: '2026-04-14',
  },
  {
    pathPrefix: 'case-studies',
    slug: 'us-china-cancer-center-partnership',
    title: 'A Top-Tier US Cancer Center × Chinese Hospital Partnership That Actually Produces Output',
    description: 'How Echo structured a multi-year cross-Pacific collaboration covering physician education, remote tumor boards, and joint research, and the governance that kept it alive past the signing ceremony.',
    ogImage: '/og-preview.jpg',
    category: 'Client Success Story',
    isoDate: '2026-04-14',
  },
  {
    pathPrefix: 'case-studies',
    slug: 'ai-fundraising-package-5-days',
    title: 'A Complete Biotech Fundraising Package in 5 Days: Inside an AI-Accelerated Workflow',
    description: 'How Echo delivered a full investor-readiness package — financial model, 80+ investor targeting report, meeting prep briefs, and pipeline dashboard — end-to-end in under a week.',
    ogImage: '/articles/ai-advisory.jpg',
    category: 'Client Success Story',
    isoDate: '2026-04-14',
  },
];

// Non-article landing pages (services, comparison). Prerendered into per-route
// HTML so social scrapers and AI crawlers see full meta without executing JS.
const pages = [
  {
    path: '/services/fractional-ai-cfo',
    title: 'Fractional AI CFO for Biotech | Monthly Retainer for Cross-Border Life Sciences',
    description: 'Fractional AI CFO for biotech. Live runway, AI-driven investor pipeline, board-ready reporting, cross-border strategy. From $1,450/mo. Annual saves 10%. Month-to-month, no equity. Free 30-min diagnostic.',
    ogImage: '/articles/ai-advisory.jpg',
    ogType: 'website',
  },
  {
    path: '/compare/fractional-cfo-biotech',
    title: 'Fractional CFO for Biotech: Pilot vs Toptal vs Brightbal vs Echo | 2026 Comparison',
    description: 'An honest 2026 comparison of fractional CFO options for biotech: Pilot, Toptal, Brightbal, Burkland, Kruze, and Echo. Pricing, specialization, cross-border capability, and which fits your stage.',
    ogImage: '/articles/ai-advisory.jpg',
    ogType: 'article',
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
  const prefix = a.pathPrefix || 'insights';
  const canonical = `${SITE_URL}/${prefix}/${a.slug}`;
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

  const outDir = path.join(distDir, prefix, a.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered: /${prefix}/${a.slug}/index.html`);
}

// Prerender non-article pages (services, comparison)
for (const p of pages) {
  const canonical = `${SITE_URL}${p.path}`;
  const ogImageUrl = p.ogImage.startsWith('http') ? p.ogImage : `${SITE_URL}${p.ogImage}`;
  const pageTitle = `${p.title.includes('Echo') ? p.title : p.title + ' | Echo International Medica'}`;

  let html = template;
  const replaceTag = (pattern, replacement) => {
    if (pattern.test(html)) html = html.replace(pattern, replacement);
    else html = html.replace('</head>', `    ${replacement}\n  </head>`);
  };

  replaceTag(/<title>[^<]*<\/title>/i, `<title>${esc(pageTitle)}</title>`);
  replaceTag(/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${esc(p.description)}" />`);
  replaceTag(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`);

  replaceTag(/<meta\s+property="og:type"[^>]*>/i, `<meta property="og:type" content="${p.ogType || 'website'}" />`);
  replaceTag(/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}" />`);
  replaceTag(/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(p.title)}" />`);
  replaceTag(/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(p.description)}" />`);
  replaceTag(/<meta\s+property="og:image"[^>]*>/i, `<meta property="og:image" content="${ogImageUrl}" />`);

  replaceTag(/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${esc(p.title)}" />`);
  replaceTag(/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${esc(p.description)}" />`);
  replaceTag(/<meta\s+name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${ogImageUrl}" />`);

  const outDir = path.join(distDir, ...p.path.split('/').filter(Boolean));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  console.log(`Prerendered: ${p.path}/index.html`);
}

// SPA fallback for GitHub Pages: any unknown route → 404.html → React Router
// reads window.location and navigates client-side.
fs.copyFileSync(templatePath, path.join(distDir, '404.html'));
console.log(`SPA fallback: 404.html written`);

console.log(`\nDone. ${articles.length} article HTMLs + ${pages.length} page HTMLs + 404 fallback generated.`);
