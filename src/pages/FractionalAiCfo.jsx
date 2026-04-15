import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://echointlmedica.com';
const PAGE_PATH = '/services/fractional-ai-cfo';
const PAGE_TITLE = 'Fractional AI CFO for Biotech | Monthly Retainer for Cross-Border Life Sciences';
const PAGE_DESCRIPTION =
  'Fractional AI CFO for biotech. Live runway, AI-driven investor pipeline, board-ready reporting, cross-border strategy. From $1,450/mo. Annual saves 10%. Month-to-month, no equity. Free 30-min diagnostic.';
const OG_IMAGE = '/articles/ai-advisory.jpg';

const FAQS = [
  {
    q: 'Who is this service for?',
    a: 'Seed through Series A-B biotech companies that need senior finance leadership but are not ready to hire a full-time CFO. We are especially well-fit for biotech sponsors running cross-border US-China programs or planning a raise in the next 3 to 12 months. Series B+ biotechs typically bring finance in-house and are not our core fit.',
  },
  {
    q: 'How does this compare to a full-time CFO?',
    a: 'A biotech FTE CFO in the US costs $250,000 to $400,000 in base salary plus 0.5 to 1.5 percent equity, typically $350,000+ fully loaded. Our Growth retainer at $8,500 per month equals about $102,000 per year (or $91,800 on the annual plan), roughly one-third the cost, with no equity dilution.',
  },
  {
    q: 'What AI tools are used, and how is the output verified?',
    a: 'Frontier large language models for unstructured synthesis and first-draft generation, structured data pipelines for financial model updates and KPI dashboards, and proprietary workflows for biotech-specific tasks like trial cost benchmarking and investor thesis scoring. All AI output is supervised by a senior advisor with biotech finance experience. Judgment under ambiguity, investor tone calibration, and objection handling remain the senior advisor\'s work.',
  },
  {
    q: 'How is pricing structured?',
    a: 'SaaS-style monthly subscription across three flat-rate tiers. Insight at $1,450/mo ($1,305 on annual) for seed biotechs, delivering more than an in-house FP&A analyst. Foundation at $4,500/mo ($4,050 annual), our most popular tier, is finance-manager-level partner with scenario-modeled runway, scored investor universe, cap table modeling, and bi-weekly advisor calls. Growth at $8,500/mo ($7,650 annual) is CFO-level support for Series A to B fundraising or cross-border programs, including weekly advisor calls, monthly CEO strategy, and always-on investor pipeline. Annual pre-payment saves 10 percent. Month-to-month billing has no commitment beyond the current month.',
  },
  {
    q: 'How fast is onboarding?',
    a: 'Free diagnostic in 24 to 48 hours. Full retainer kickoff in 5 to 7 business days, during which we ingest financials, build the initial runway model, and assemble the first investor universe pass. By end of week two, you have a live model, an initial investor pipeline, and a draft KPI dashboard.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No long-term contract. The retainer is month-to-month with a 30-day notice period to wind down, so the only commitment is the current month. Most clients stay 12 to 24 months because the work is continuous.',
  },
];

const TIERS = [
  {
    name: 'Insight',
    monthly: 1450,
    annual: 1305,
    stage: 'Seed',
    role: 'Beyond an in-house FP&A analyst',
    highlight: false,
    features: [
      'Live runway dashboard',
      'Investor database (300+ funds)',
      'Monthly financial snapshot (PDF + live view)',
      'Monthly 45-min advisor call',
      'Email support',
    ],
  },
  {
    name: 'Foundation',
    monthly: 4500,
    annual: 4050,
    stage: 'Seed to Series A',
    role: 'Finance-manager level',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Insight',
      'Scenario runway (senior-owned)',
      '80+ scored investor universe',
      'Monthly KPI dashboard + budget vs. actuals',
      'Quarterly board deck + cap table modeling',
      'Bi-weekly 45-min advisor call',
      'Slack + email support',
    ],
  },
  {
    name: 'Growth',
    monthly: 8500,
    annual: 7650,
    stage: 'Series A to B',
    role: 'CFO-level partner',
    highlight: false,
    features: [
      'Everything in Foundation',
      'Monthly board deck, senior-finalized',
      'Always-on investor pipeline + prep briefs',
      'Cross-border (CRO, NMPA, PIPL) touchpoint',
      'Investor update drafting + DD data room',
      'Weekly advisor call + monthly CEO strategy',
      'Quarterly strategic planning session',
    ],
  },
];

const fmt = (n) => `$${n.toLocaleString('en-US')}`;

// AI-automation vs Senior-judgment tagging.
// [AI] = AI pipeline, senior spot-checks. [Senior] = senior-owned.
// [AI + Senior] = AI drafts, senior finalizes. Cols: Insight / Foundation / Growth.
const FEATURE_GROUPS = [
  {
    group: 'Financial Operations',
    rows: [
      { name: 'Live runway model', mode: 'AI', i: true, f: 'Scenarios', g: 'Weekly, senior-reviewed' },
      { name: 'Burn & cash-to-milestone tracking', mode: 'AI', i: true, f: true, g: true },
      { name: 'Headcount & hiring plan', mode: 'AI', i: true, f: true, g: true },
      { name: 'Monthly financial snapshot', mode: 'AI', i: true, f: true, g: true },
      { name: 'Budget vs. actuals review', mode: 'AI', i: false, f: 'Monthly', g: 'Monthly + variance analysis' },
      { name: 'Cap table scenario modeling', mode: 'AI + Senior', i: false, f: true, g: true },
      { name: 'Scenario modeling (base / accelerated / delayed)', mode: 'AI', i: false, f: true, g: 'With sensitivity' },
    ],
  },
  {
    group: 'Investor Relations',
    rows: [
      { name: 'Investor database (300+ biotech funds)', mode: 'AI', i: true, f: true, g: true },
      { name: 'Scored investor universe (80+ funds)', mode: 'AI', i: false, f: true, g: true },
      { name: 'Always-on pipeline refresh', mode: 'AI', i: false, f: false, g: true },
      { name: 'Per-meeting prep briefs', mode: 'AI + Senior', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Board & Reporting',
    rows: [
      { name: 'Monthly KPI dashboard', mode: 'AI', i: false, f: true, g: true },
      { name: 'Quarterly board deck', mode: 'AI + Senior', i: false, f: true, g: 'Monthly' },
      { name: 'Monthly board deck (senior-finalized)', mode: 'AI + Senior', i: false, f: false, g: true },
      { name: 'Investor update template', mode: 'AI', i: false, f: true, g: true },
      { name: 'Investor update drafting (senior-reviewed)', mode: 'AI + Senior', i: false, f: false, g: true },
      { name: 'Due-diligence data room support', mode: 'AI + Senior', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Cross-Border (US–China)',
    rows: [
      { name: 'NMPA regulatory watch', mode: 'AI + Senior', i: false, f: false, g: true },
      { name: 'CRO oversight + shortlist refresh', mode: 'Senior', i: false, f: false, g: true },
      { name: 'Data governance (PIPL / DSL)', mode: 'Senior', i: false, f: false, g: true },
      { name: 'Cross-border investor narrative', mode: 'Senior', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Advisor Access',
    rows: [
      { name: 'Email support', mode: 'Senior', i: true, f: true, g: true },
      { name: 'Slack support', mode: 'Senior', i: false, f: true, g: true },
      { name: 'Advisor review call', mode: 'Senior', i: 'Monthly 45-min', f: 'Bi-weekly 45-min', g: 'Weekly 30-min' },
      { name: 'CEO strategy session', mode: 'Senior', i: false, f: false, g: 'Monthly 60-min' },
      { name: 'Quarterly strategic planning', mode: 'Senior', i: false, f: false, g: true },
    ],
  },
];

const ADDONS = [
  {
    name: 'Bookkeeping',
    price: '$950 / mo',
    detail: 'Monthly close, accrual + cash, QuickBooks or Xero ownership, 1099 prep. AI categorization, senior-reviewed.',
  },
  {
    name: 'R&D tax credit filing',
    price: '$1,500 / yr',
    detail: 'Form 6765 preparation + substantiation memo delivered with your annual tax return.',
  },
];

const PROJECT_ENGAGEMENTS = [
  {
    name: 'Fundraising Sprint',
    price: '$9,000',
    detail: 'Full investor-readiness package in one week: integrated financial model, 80+ investor targeting, per-meeting prep briefs, board-ready KPI dashboard.',
    href: '/case-studies/ai-fundraising-package-5-days',
  },
  {
    name: 'China Entry Engagement',
    price: '$30,000',
    detail: 'End-to-end China clinical and commercialization strategy: CRO shortlisting, per-patient cost model, FDA + NMPA timeline, investor narrative. 40–65% program cost reduction typical.',
    href: '/case-studies/us-oncology-china-entry',
  },
  {
    name: 'Standalone CRO Selection',
    price: '$12,000',
    detail: 'Independent CRO shortlisting, site-visit diligence, per-patient cost benchmarking, contract-term review. Decision memo with 3 shortlisted vendors.',
    href: null,
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

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary inline-block" aria-hidden="true">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const renderCell = (v) => {
  if (v === true) return <Check />;
  if (v === false || v == null) return <span className="text-textLight/50 text-[16px]">·</span>;
  return <span className="text-[12px] text-textDark font-medium">{v}</span>;
};

const FractionalAiCfo = () => {
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'annual'

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
    setMeta('name', 'keywords', 'fractional AI CFO biotech, fractional CFO biotech, biotech fractional CFO, cross-border biotech CFO, US China biotech CFO, AI-powered CFO biotech, biotech finance retainer, NMPA fundraising, biotech runway advisor');
    setLink('canonical', canonical);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', PAGE_TITLE);
    setMeta('property', 'og:description', PAGE_DESCRIPTION);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImageUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', PAGE_TITLE);
    setMeta('name', 'twitter:description', PAGE_DESCRIPTION);
    setMeta('name', 'twitter:image', ogImageUrl);

    const serviceLdId = 'service-jsonld';
    const faqLdId = 'faq-jsonld';
    document.getElementById(serviceLdId)?.remove();
    document.getElementById(faqLdId)?.remove();

    const serviceLd = document.createElement('script');
    serviceLd.type = 'application/ld+json';
    serviceLd.id = serviceLdId;
    serviceLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Fractional AI CFO for Biotech',
      serviceType: 'Fractional CFO Services',
      provider: {
        '@type': 'Organization',
        name: 'Echo International Medica',
        url: SITE_URL,
      },
      areaServed: ['United States', 'China', 'Hong Kong', 'Singapore'],
      description: PAGE_DESCRIPTION,
      url: canonical,
      offers: TIERS.map(t => ({
        '@type': 'Offer',
        name: `${t.name} Retainer`,
        price: t.monthly,
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: t.monthly,
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
      })),
    });
    document.head.appendChild(serviceLd);

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
      document.getElementById(serviceLdId)?.remove();
      document.getElementById(faqLdId)?.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30.5%, rgba(255,255,255,0.5) 31%, transparent 31.5%), linear-gradient(-45deg, transparent 70%, rgba(255,255,255,0.3) 70.5%, rgba(255,255,255,0.3) 71%, transparent 71.5%)',
        }} />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 text-center">
          <span className="inline-block text-[11px] font-heading font-semibold text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.16em] uppercase mb-6">
            Monthly Retainer · Biotech · Cross-Border
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 max-w-3xl mx-auto">
            <span className="relative inline-block">
              <span className="relative z-10">Flat-Rate</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.3em] bg-primary/60 -z-0 rounded-sm"></span>
            </span>{' '}
            Fractional CFO.<br className="hidden sm:block" /> Built For{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Biotech</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.3em] bg-primary/60 -z-0 rounded-sm"></span>
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Senior finance leadership on a flat monthly retainer. AI-augmented delivery at one-third the cost of an FTE CFO.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a href="#pricing" className="btn-primary inline-block bg-white !text-secondary hover:!bg-white/90">
              See pricing
            </a>
            <Link to="/#contact" className="text-white/90 hover:text-white text-sm font-heading font-semibold border-b border-white/40 hover:border-white pb-1 transition-colors">
              Book free 30-min diagnostic &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">PRICING</span>
            <h2 className="section-heading max-w-2xl mx-auto mb-4">One Flat Rate.<br />Every Month. No Lock-In.</h2>
            <p className="text-textMedium text-base leading-relaxed max-w-xl mx-auto">
              Month-to-month billing. Annual pre-payment saves 10%.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center bg-lightBg border border-borderLight rounded-full p-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-5 py-2 text-sm font-heading font-semibold rounded-full transition-all cursor-pointer ${
                  billing === 'monthly' ? 'bg-white text-textDark shadow-sm' : 'text-textMedium hover:text-textDark'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-5 py-2 text-sm font-heading font-semibold rounded-full transition-all cursor-pointer ${
                  billing === 'annual' ? 'bg-white text-textDark shadow-sm' : 'text-textMedium hover:text-textDark'
                }`}
              >
                Pay yearly <span className="text-primary ml-1 font-bold">save 10%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((t, i) => {
              const price = billing === 'monthly' ? t.monthly : t.annual;
              return (
                <div
                  key={i}
                  className={`rounded-lg p-6 border flex flex-col ${
                    t.highlight
                      ? 'border-primary bg-gradient-to-br from-white to-primary/[0.03] shadow-lg relative'
                      : 'border-borderLight bg-white'
                  }`}
                >
                  {t.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-heading font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full whitespace-nowrap">
                      {t.badge}
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-textDark mb-1">{t.name}</h3>
                  <p className="text-textLight text-[11px] uppercase tracking-[0.12em] font-heading leading-snug mb-5 min-h-[3rem]">
                    {t.stage}
                    <br />
                    {t.role}
                  </p>
                  <div className="mb-5">
                    <span className="font-heading text-3xl md:text-4xl font-bold text-textDark tracking-tight">{fmt(price)}</span>
                    <span className="text-textMedium text-sm ml-1">/mo</span>
                    <div className="text-textLight text-[11px] mt-1">
                      {billing === 'annual'
                        ? `Billed annually · ${fmt(price * 12)} / year`
                        : 'Billed monthly · cancel any time'}
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {t.features.map((f, j) => (
                      <li key={j} className="text-[13px] text-textMedium leading-relaxed flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary mt-0.5 mr-2 shrink-0" aria-hidden="true">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/#contact"
                    className={`w-full text-center py-2.5 px-4 rounded font-heading font-semibold text-[13px] transition-all ${
                      t.highlight
                        ? 'bg-primary text-white hover:bg-secondary'
                        : 'border border-textDark text-textDark hover:bg-textDark hover:text-white'
                    }`}
                  >
                    Claim My Free Diagnostic
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="text-textLight text-xs mt-6 text-center">
            All tiers · no equity · no long-term contract · 30-day notice to cancel
          </p>

          {/* Collapsible: feature matrix */}
          <details className="mt-14 group">
            <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-sm font-heading font-semibold text-textDark hover:text-primary transition-colors">
              <span>See full feature comparison</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[720px] border border-borderLight rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-lightBg text-left">
                    <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-textMedium">Feature</th>
                    <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-textMedium text-center w-[120px]">Insight</th>
                    <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-textMedium text-center w-[140px]">Foundation</th>
                    <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-primary text-center w-[160px]">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_GROUPS.map((g, gi) => (
                    <Fragment key={`g-${gi}`}>
                      <tr className="bg-lightBg/50">
                        <td colSpan={4} className="py-2 px-4 text-[11px] font-heading font-bold tracking-[0.14em] uppercase text-secondary">{g.group}</td>
                      </tr>
                      {g.rows.map((r, ri) => (
                        <tr key={`r-${gi}-${ri}`} className="border-t border-borderLight">
                          <td className="py-3 px-4 text-[13px] text-textDark">
                            <span className="align-middle">{r.name}</span>
                          </td>
                          <td className="py-3 px-4 text-center">{renderCell(r.i)}</td>
                          <td className="py-3 px-4 text-center">{renderCell(r.f)}</td>
                          <td className="py-3 px-4 text-center">{renderCell(r.g)}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </details>

          {/* Collapsible: add-ons + projects */}
          <details className="mt-8 group">
            <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-sm font-heading font-semibold text-textDark hover:text-primary transition-colors">
              <span>Add-ons &amp; one-time projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>

            <div className="mt-8">
              <h3 className="font-heading text-sm font-bold tracking-[0.14em] uppercase text-secondary mb-4">Add-ons · stack on any tier</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {ADDONS.map((a, i) => (
                  <div key={i} className="border border-borderLight rounded-lg p-5 bg-white">
                    <div className="flex items-baseline justify-between mb-2 flex-wrap gap-1">
                      <h4 className="font-heading text-base font-bold text-textDark">{a.name}</h4>
                      <span className="font-heading text-sm font-bold text-primary whitespace-nowrap">{a.price}</span>
                    </div>
                    <p className="text-textMedium text-[13px] leading-relaxed">{a.detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-sm font-bold tracking-[0.14em] uppercase text-secondary mb-4">One-time project engagements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {PROJECT_ENGAGEMENTS.map((p, i) => (
                  <div key={i} className="border border-borderLight rounded-lg p-5 bg-white">
                    <div className="flex items-baseline justify-between mb-2 flex-wrap gap-1">
                      <h4 className="font-heading text-base font-bold text-textDark">{p.name}</h4>
                      <span className="font-heading text-sm font-bold text-primary whitespace-nowrap">
                        {p.price}
                      </span>
                    </div>
                    <p className="text-textMedium text-[13px] leading-relaxed mb-2">{p.detail}</p>
                    {p.href && (
                      <Link to={p.href} className="text-primary text-[12px] font-heading font-semibold hover:underline">
                        See the case study &rarr;
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Comparison teaser */}
      <section className="py-16 bg-lightBg">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-textDark mb-3">Comparing options?</h2>
          <p className="text-textMedium text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Honest 2026 comparison vs. Pilot, Toptal, Brightbal, Burkland, and Kruze. See how Echo compares on price, biotech depth, and cross-border.
          </p>
          <Link to="/compare/fractional-cfo-biotech" className="btn-primary inline-block">
            Read the comparison
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">FAQ</span>
            <h2 className="section-heading">Questions biotech CEOs ask us.</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group bg-white rounded-lg border border-borderLight open:shadow-sm">
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-[15px] md:text-base font-semibold text-textDark leading-snug">{f.q}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-textLight shrink-0 mt-1 transition-transform group-open:rotate-180" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-textMedium text-[14px] leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary/80 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">Book your free 30-min diagnostic.</h2>
          <p className="text-white/85 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Senior advisor walks your runway, flags 2–3 highest-leverage decisions, identifies cross-border optionality. No pitch. One-page summary within 48 hours.
          </p>
          <Link to="/#contact" className="btn-primary inline-block bg-white !text-secondary hover:!bg-white/90">
            Contact Echo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FractionalAiCfo;
