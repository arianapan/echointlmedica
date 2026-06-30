import { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://echointlmedica.com';
const PAGE_PATH = '/compare/fractional-cfo-biotech';
const PAGE_TITLE = 'Fractional CFO Comparison: Pilot vs Toptal vs Brightbal vs Echo | 2026';
const PAGE_DESCRIPTION =
  'An honest 2026 comparison of fractional CFO options for founders: Pilot, Toptal, Brightbal, Burkland, Kruze, and Echo. Pricing, specialization, cross-border China-US capability, and which fits your stage. From $750/mo.';
const OG_IMAGE = '/articles/ai-advisory.jpg';

const PROVIDERS = [
  {
    name: 'Pilot',
    shortName: 'Pilot',
    price: '~$4,500 / mo',
    specialization: 'Generalist bookkeeping+',
    crossBorder: 'No',
    aiWorkflows: 'Limited',
  },
  {
    name: 'Brightbal',
    shortName: 'Brightbal',
    price: '~$11,500 / mo',
    specialization: 'Startup-focused',
    crossBorder: 'Limited',
    aiWorkflows: 'Traditional',
  },
  {
    name: 'Burkland',
    shortName: 'Burkland',
    price: '~$7,000 / mo',
    specialization: 'Startup practice',
    crossBorder: 'Limited',
    aiWorkflows: 'Traditional',
  },
  {
    name: 'Echo',
    shortName: 'Echo',
    price: 'From $750 / mo',
    specialization: 'Founder & cross-border',
    crossBorder: 'Core specialty',
    aiWorkflows: 'Core to delivery',
    featured: true,
  },
];

const COMPARISON_ROWS = [
  { label: 'Typical price / mo', key: 'price' },
  { label: 'Specialization', key: 'specialization' },
  { label: 'Cross-border (China-US)', key: 'crossBorder' },
  { label: 'AI-augmented delivery', key: 'aiWorkflows' },
];

const FAQS = [
  {
    q: 'What makes Echo different from a generalist fractional CFO?',
    a: 'Echo is built for founders and cross-border (China-US) businesses, and AI-augmented from the ground up. Senior advisors spend their hours on judgment: cash strategy, investor framing, and cross-border structure. AI handles the analytical assembly. Generalist firms either avoid AI (slow and expensive) or treat cross-border as an afterthought.',
  },
  {
    q: 'Why is Echo priced below most of the alternatives?',
    a: 'AI-augmented delivery compresses the cost structure without reducing quality. Monthly Finance Clarity starts at $750/mo for clean monthly reporting and runway; Growth CFO Support at $2,000/mo adds budgeting, scenarios, and investor updates; Fractional CFO Review at $5,000/mo is senior fractional-CFO support with cross-border finance. All three cost a fraction of a full-time CFO or a traditional specialized firm.',
  },
  {
    q: 'Why does cross-border capability matter?',
    a: 'If you operate across China and the US, you have multiple entities, currencies, and compliance calendars, and most fractional CFOs have never handled that. Echo builds multi-entity cash, FX, intercompany flows, and a cross-border investor narrative into its senior tier, instead of avoiding the complexity or under-pricing it.',
  },
  {
    q: 'How does Echo compare to hiring a full-time CFO?',
    a: 'A US full-time CFO typically costs $250,000 to $400,000 in base salary plus equity, or $350,000+ fully loaded. Fractional CFO Review at $5,000/mo equals $60,000/year ($54,000 on annual billing) with no equity dilution, and you can start far lower and scale up only when you raise.',
  },
  {
    q: 'What if I already have an accountant or bookkeeper?',
    a: 'Echo does not replace them. We work above the accounting layer on runway modeling, scenario analysis, board and investor reporting, and capital strategy, and we coordinate with your existing bookkeeper, CPA, and tax advisor. We do not file taxes or provide audit or legal opinions.',
  },
  {
    q: 'How do I evaluate any fractional CFO in 2026 now that AI has changed delivery economics?',
    a: 'Ask four questions. What percentage of the analytical work is AI-augmented, and how is the output verified? Where do you explicitly not use AI, and why? Can I see a sample deliverable? What has happened to your pricing in the last 24 months? Firms that cannot answer crisply have either resisted AI (slow and expensive) or adopted it uncritically (confidently wrong work at speed). Echo answers all four in the free finance review.',
  },
];

const setMeta = (attr, key, value) => {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const setLink = (rel, href) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const CompareFractionalCfo = () => {
  useLayoutEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = prev;
  }, []);

  useEffect(() => {
    const canonical = `${SITE_URL}${PAGE_PATH}`;
    const ogImageUrl = OG_IMAGE.startsWith('http') ? OG_IMAGE : `${SITE_URL}${OG_IMAGE}`;

    document.title = PAGE_TITLE;
    setMeta('name', 'description', PAGE_DESCRIPTION);
    setMeta('name', 'keywords', 'fractional CFO comparison, Pilot vs Toptal, fractional CFO for startups, outsourced CFO comparison, cross-border CFO, Brightbal, Burkland, Kruze Consulting, AI CFO');
    setLink('canonical', canonical);

    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:title', PAGE_TITLE);
    setMeta('property', 'og:description', PAGE_DESCRIPTION);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImageUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', PAGE_TITLE);
    setMeta('name', 'twitter:description', PAGE_DESCRIPTION);
    setMeta('name', 'twitter:image', ogImageUrl);

    const articleLdId = 'compare-article-jsonld';
    const faqLdId = 'compare-faq-jsonld';
    document.getElementById(articleLdId)?.remove();
    document.getElementById(faqLdId)?.remove();

    const articleLd = document.createElement('script');
    articleLd.type = 'application/ld+json';
    articleLd.id = articleLdId;
    articleLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      image: ogImageUrl,
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      author: { '@type': 'Organization', name: 'Echo International Medica', url: SITE_URL },
      publisher: {
        '@type': 'Organization',
        name: 'Echo International Medica',
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/companylogo.jpg` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    });
    document.head.appendChild(articleLd);

    const faqLd = document.createElement('script');
    faqLd.type = 'application/ld+json';
    faqLd.id = faqLdId;
    faqLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
    document.head.appendChild(faqLd);

    return () => {
      document.getElementById(articleLdId)?.remove();
      document.getElementById(faqLdId)?.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-primary/70 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30.5%, rgba(255,255,255,0.5) 31%, transparent 31.5%), linear-gradient(-45deg, transparent 70%, rgba(255,255,255,0.3) 70.5%, rgba(255,255,255,0.3) 71%, transparent 71.5%)',
        }} />
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28">
          <span className="inline-block text-[11px] font-heading font-semibold text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.16em] uppercase mb-6">
            2026 Comparison &middot; Honest &middot; Updated Quarterly
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            Fractional CFO Comparison: Pilot vs Toptal vs Brightbal vs Echo
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-3xl">
            An honest side-by-side of the most common fractional CFO options for founders, including where each one is the right call, and where Echo is explicitly not the right fit.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-textMedium text-lg md:text-xl leading-relaxed">
            Echo is founder-focused, cross-border, and AI-augmented, at a flat monthly rate that starts well below the rest of the market.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 md:py-20 bg-lightBg">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="section-label">HEAD-TO-HEAD</span>
          <h2 className="section-heading mb-10">Comparison.</h2>
          <div className="overflow-x-auto border border-borderLight rounded-lg bg-white">
            <table className="w-full min-w-[720px] text-left text-[13px]">
              <thead>
                <tr className="border-b border-borderLight">
                  <th className="p-4 bg-lightBg font-heading font-semibold text-textDark text-[11px] tracking-[0.12em] uppercase w-[180px]"></th>
                  {PROVIDERS.map((p, i) => (
                    <th
                      key={i}
                      className={`p-4 font-heading font-bold text-center align-bottom ${
                        p.featured ? 'bg-primary/[0.06] text-primary' : 'bg-lightBg text-textDark'
                      }`}
                    >
                      <div className="text-[13px] md:text-sm whitespace-nowrap">{p.shortName}</div>
                      {p.featured && (
                        <div className="mt-1 text-[9px] bg-primary text-white px-2 py-0.5 rounded-full tracking-[0.1em] uppercase inline-block">Us</div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, ri) => (
                  <tr key={ri} className="border-b border-borderLight last:border-0">
                    <td className="p-4 font-heading font-semibold text-textDark bg-lightBg/60 text-[12px] tracking-[0.06em] uppercase">
                      {row.label}
                    </td>
                    {PROVIDERS.map((p, pi) => (
                      <td
                        key={pi}
                        className={`p-4 text-center ${
                          p.featured ? 'bg-primary/[0.04] text-textDark font-semibold' : 'text-textMedium'
                        }`}
                      >
                        {p[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-textLight text-xs mt-4 max-w-4xl leading-relaxed">
            Pricing and positioning reflect publicly available information and industry estimates as of April 2026. Provider names are trademarks of their respective owners and appear here for nominative comparison only. This page is an independent editorial view; corrections welcome via our <Link to="/#contact" className="underline hover:text-primary">contact form</Link>.
          </p>
        </div>
      </section>

      {/* Scenario guidance */}
      <section className="py-16 md:py-20 bg-lightBg">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="section-label">BY SCENARIO</span>
          <h2 className="section-heading mb-10">If you are...</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Solo founder or small business, want clean monthly numbers', answer: 'Monthly Finance Clarity at $750/mo ($675 annual). P&L, cash-flow, runway, and a one-page founder report, all senior-reviewed.' },
              { scenario: 'Funded startup with recurring revenue, preparing to raise', answer: 'Growth CFO Support at $2,000/mo, our most popular tier. Budgeting, scenario runway, monthly investor updates, and a maintained diligence data room.' },
              { scenario: 'Actively fundraising, need investor-ready materials', answer: 'Fractional CFO Review at $5,000/mo. Senior fractional CFO: investor-grade model, board deck, cap-table scenarios, always-on investor pipeline.' },
              { scenario: 'Operating across China and the US', answer: 'Fractional CFO Review at $5,000/mo. Cross-border finance is a core specialty: multi-entity cash, FX, intercompany flows, and a cross-border investor narrative.' },
              { scenario: 'Healthcare, biotech, or medical-device company', answer: 'A direct fit. Our team’s deepest domain experience is in healthcare and cross-border life sciences, now applied to your finance function.' },
              { scenario: 'Need a one-time project rather than a retainer', answer: 'An Investor-Ready Sprint or a Financial Model Build, billed as a fixed project. Retainer optional afterward.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-borderLight">
                <h3 className="font-heading text-[15px] font-semibold text-textDark leading-snug mb-3">
                  &ldquo;{s.scenario}&rdquo;
                </h3>
                <p className="text-textMedium text-[14px] leading-relaxed">
                  <span className="text-primary font-semibold">Recommendation: </span>{s.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <span className="section-label">FREQUENTLY ASKED</span>
          <h2 className="section-heading mb-10">How to decide.</h2>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details key={i} className="group bg-white rounded-lg border border-borderLight open:shadow-sm">
                <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-textDark leading-snug">{f.q}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-textLight shrink-0 mt-1 transition-transform group-open:rotate-180" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-textMedium text-[15px] leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-6">Ready to talk to Echo?</h2>
          <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Book a free 20-minute finance review. A senior advisor walks through your runway, flags the 2 to 3 highest-leverage decisions in front of you, and points out any cross-border optionality. No pitch. One-page summary within 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services/fractional-ai-cfo" className="btn-primary inline-block bg-white !text-secondary hover:!bg-white/90">
              See our service details
            </Link>
            <Link to="/#contact" className="inline-block border border-white/60 text-white px-8 py-3.5 rounded font-heading font-semibold hover:bg-white/10 transition-all">
              Book a finance review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompareFractionalCfo;
