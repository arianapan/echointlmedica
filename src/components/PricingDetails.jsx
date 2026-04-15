import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const FAQS = [
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

const SCENARIOS = [
  { scenario: 'Seed biotech, want biotech-specific FP&A on a tight budget', answer: 'Echo Insight at $1,450/mo ($1,305 annual). Biotech-native runway and investor database, roughly 35% below the nearest generalist entry tier.' },
  { scenario: 'Pre-Series A or Series A biotech, preparing to raise', answer: 'Echo Foundation at $4,500/mo, our most popular tier. Finance-manager-level partner with scenario-modeled runway, scored investor universe, monthly KPI dashboard, and cap table modeling.' },
  { scenario: 'Series A to B biotech, actively fundraising', answer: 'Echo Growth at $8,500/mo. CFO-level support: monthly board deck senior-finalized, always-on investor pipeline, DD data room, weekly advisor call.' },
  { scenario: 'Series A to B biotech, evaluating or running a China program', answer: 'Echo Growth at $8,500/mo. Cross-border (US, Greater China) is a core specialty, not an add-on. NMPA regulatory watch, CRO oversight, and cross-border investor narrative are built in.' },
  { scenario: 'Chinese biotech building credible US operations', answer: 'Echo is a direct fit. Our cross-border practice works both directions: FDA-acceptable data strategy, US investor narrative, US BD targeting.' },
  { scenario: 'Need a one-time sprint rather than a retainer', answer: 'Echo Fundraising Sprint ($9,000) or China Entry Engagement ($30,000). Retainer optional.' },
];

const FEATURE_GROUPS = [
  {
    group: 'Financial Operations',
    rows: [
      { name: 'Live runway model', i: true, f: 'Scenarios', g: 'Weekly, senior-reviewed' },
      { name: 'Burn & cash-to-milestone tracking', i: true, f: true, g: true },
      { name: 'Headcount & hiring plan', i: true, f: true, g: true },
      { name: 'Monthly financial snapshot', i: true, f: true, g: true },
      { name: 'Budget vs. actuals review', i: false, f: 'Monthly', g: 'Monthly + variance analysis' },
      { name: 'Cap table scenario modeling', i: false, f: true, g: true },
      { name: 'Scenario modeling (base / accelerated / delayed)', i: false, f: true, g: 'With sensitivity' },
    ],
  },
  {
    group: 'Investor Relations',
    rows: [
      { name: 'Investor database (300+ biotech funds)', i: true, f: true, g: true },
      { name: 'Scored investor universe (80+ funds)', i: false, f: true, g: true },
      { name: 'Always-on pipeline refresh', i: false, f: false, g: true },
      { name: 'Per-meeting prep briefs', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Board & Reporting',
    rows: [
      { name: 'Monthly KPI dashboard', i: false, f: true, g: true },
      { name: 'Quarterly board deck', i: false, f: true, g: 'Monthly' },
      { name: 'Monthly board deck (senior-finalized)', i: false, f: false, g: true },
      { name: 'Investor update template', i: false, f: true, g: true },
      { name: 'Investor update drafting (senior-reviewed)', i: false, f: false, g: true },
      { name: 'Due-diligence data room support', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Cross-Border (US–China)',
    rows: [
      { name: 'NMPA regulatory watch', i: false, f: false, g: true },
      { name: 'CRO oversight + shortlist refresh', i: false, f: false, g: true },
      { name: 'Data governance (PIPL / DSL)', i: false, f: false, g: true },
      { name: 'Cross-border investor narrative', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Advisor Access',
    rows: [
      { name: 'Email support', i: true, f: true, g: true },
      { name: 'Slack support', i: false, f: true, g: true },
      { name: 'Advisor review call', i: 'Monthly 45-min', f: 'Bi-weekly 45-min', g: 'Weekly 30-min' },
      { name: 'CEO strategy session', i: false, f: false, g: 'Monthly 60-min' },
      { name: 'Quarterly strategic planning', i: false, f: false, g: true },
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

const PricingDetails = () => (
  <>
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

    {/* Collapsible: help me decide (scenarios + FAQ) */}
    <details className="mt-8 group">
      <summary className="cursor-pointer list-none flex items-center justify-center gap-2 text-sm font-heading font-semibold text-textDark hover:text-primary transition-colors">
        <span>Help me decide</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-open:rotate-180" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </summary>

      <div className="mt-8">
        <h3 className="font-heading text-sm font-bold tracking-[0.14em] uppercase text-secondary mb-4">Which tier fits you</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {SCENARIOS.map((s, i) => (
            <div key={i} className="bg-white rounded-lg p-5 border border-borderLight">
              <h4 className="font-heading text-[14px] font-semibold text-textDark leading-snug mb-2">
                &ldquo;{s.scenario}&rdquo;
              </h4>
              <p className="text-textMedium text-[13px] leading-relaxed">
                <span className="text-primary font-semibold">Recommendation: </span>{s.answer}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-sm font-bold tracking-[0.14em] uppercase text-secondary mb-4">Frequently asked</h3>
        <div className="space-y-3 max-w-3xl mx-auto">
          {FAQS.map((f, i) => (
            <details key={i} className="group/q bg-white rounded-lg border border-borderLight open:shadow-sm">
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                <h4 className="font-heading text-[14px] font-semibold text-textDark leading-snug">{f.q}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-textLight shrink-0 mt-1 transition-transform group-open/q:rotate-180" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-textMedium text-[13px] leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </details>
  </>
);

export default PricingDetails;
