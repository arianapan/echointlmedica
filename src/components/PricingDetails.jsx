import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const FAQS = [
  {
    q: 'Who is this service for?',
    a: 'Founders and small-business owners who need a real finance function but are not ready to hire a full-time CFO. We are especially well-fit for cross-border founders operating across China and global markets (startups, medical device and hardtech companies, consulting firms), and for anyone preparing to raise in the next 3 to 12 months. Companies with a mature in-house finance team are not our core fit.',
  },
  {
    q: 'How does this compare to a full-time CFO?',
    a: 'A full-time CFO in the US costs $250,000 to $400,000 in base salary plus equity, typically $350,000+ fully loaded. Our Fractional CFO Review retainer at $5,000 per month equals about $60,000 per year (or $54,000 on the annual plan), roughly one-sixth the cost, with no equity dilution. You can start at $750/mo and scale up only when you raise.',
  },
  {
    q: 'What AI tools are used, and how is the output verified?',
    a: 'Frontier large language models for transaction categorization and first-draft reports, and structured spreadsheet pipelines for the actual numbers: P&L, cash flow, and runway. AI never produces a final figure on its own. Every number that reaches you is calculated by formula and reviewed by a senior advisor before delivery. Judgment, investor tone, and anything that touches tax or compliance remain human work, and reports are clearly marked as management information, not an audit or tax opinion.',
  },
  {
    q: 'How is pricing structured?',
    a: 'A flat monthly retainer across three tiers, plus a one-time onboarding fee from $500 to clean up and build your initial model. Monthly Finance Clarity at $750/mo ($675 annual) covers monthly reporting, a one-page operating report, and a live runway forecast. Growth CFO Support at $2,000/mo ($1,800 annual), our most popular tier, adds budget-vs-actuals, scenario runway, monthly investor updates, and a maintained data room. Fractional CFO Review at $5,000/mo ($4,500 annual) is senior fractional CFO support with cross-border China-US finance, fundraising materials, and an always-on investor pipeline. Annual pre-payment saves 10 percent; month-to-month has no commitment beyond the current month.',
  },
  {
    q: 'How fast is onboarding?',
    a: 'Free CFO review in 24 to 48 hours. Full retainer kickoff in 5 to 7 business days, during which we ingest your transactions, build the initial runway model, and produce your first operating report. By end of week two you have a live model, a clean monthly report, and a clear view of your runway.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'No long-term contract. The retainer is month-to-month with a 30-day notice period to wind down, so the only commitment is the current month. Most clients stay because the work is continuous: cash, reporting, and fundraising never stop.',
  },
];

const SCENARIOS = [
  { scenario: 'Solo founder, just need clean numbers and a runway I can trust', answer: 'Monthly Finance Clarity at $750/mo ($675 annual). Monthly P&L, cash-flow statement, a one-page operating report, and a live runway forecast, all senior-reviewed.' },
  { scenario: 'Pre-seed or seed startup, preparing to raise', answer: 'Growth CFO Support at $2,000/mo, our most popular tier. Your outsourced finance team: scenario runway, budget vs. actuals, monthly investor updates, and a maintained diligence data room.' },
  { scenario: 'Raising now, need investor-ready materials and a model', answer: 'Fractional CFO Review at $5,000/mo. Senior fractional CFO: fundraising model, board deck, cap table scenarios, always-on investor pipeline, bi-weekly advisor call.' },
  { scenario: 'Operating across China and global markets', answer: 'Fractional CFO Review at $5,000/mo. Cross-border China-US finance is a core specialty, not an add-on: multi-entity cash, FX, and a cross-border investor narrative are built in.' },
  { scenario: 'Small business owner who just wants the books to make sense', answer: 'Start with Monthly Finance Clarity at $750/mo. If you also want a senior person owning your finance decisions, step up to Growth CFO Support.' },
  { scenario: 'Need a one-time push rather than a retainer', answer: 'Echo Fundraising Sprint ($9,000) gets your investor materials and model ready in a week. Retainer optional afterward.' },
];

const FEATURE_GROUPS = [
  {
    group: 'Financial Operations',
    rows: [
      { name: 'Monthly P&L + cash-flow statement', i: true, f: true, g: true },
      { name: 'Live runway forecast', i: true, f: 'Scenarios', g: 'Scenarios + sensitivity' },
      { name: 'One-page founder operating report', i: true, f: true, g: true },
      { name: 'Cash-flow risk & unusual-spend flags', i: true, f: true, g: true },
      { name: 'Budget vs. actuals review', i: false, f: 'Monthly', g: 'Monthly + variance analysis' },
      { name: 'Cap table scenario modeling', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Investor Relations',
    rows: [
      { name: 'Investor database access', i: false, f: true, g: true },
      { name: 'Monthly investor update (drafted)', i: false, f: true, g: 'Senior-reviewed' },
      { name: 'Always-on investor pipeline', i: false, f: false, g: true },
      { name: 'Per-meeting prep briefs', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Board & Reporting',
    rows: [
      { name: 'Diligence data room', i: false, f: 'Maintained', g: 'Maintained + DD support' },
      { name: 'Board deck', i: false, f: false, g: 'Monthly, senior-finalized' },
      { name: 'Fundraising financial model', i: false, f: 'Standard', g: 'Investor-grade' },
    ],
  },
  {
    group: 'Cross-Border (China-US)',
    rows: [
      { name: 'Multi-entity cash & reporting', i: false, f: false, g: true },
      { name: 'FX & cross-border payments view', i: false, f: false, g: true },
      { name: 'Data & compliance reminders', i: false, f: false, g: true },
      { name: 'Cross-border investor narrative', i: false, f: false, g: true },
    ],
  },
  {
    group: 'Advisor Access',
    rows: [
      { name: 'Email support', i: true, f: true, g: true },
      { name: 'Slack support', i: false, f: true, g: true },
      { name: 'Advisor review call', i: false, f: 'Monthly 30-min', g: 'Bi-weekly 45-min' },
      { name: 'CEO strategy session', i: false, f: false, g: 'Monthly 60-min' },
      { name: 'Every figure human-reviewed', i: true, f: true, g: true },
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
    name: 'Tax-prep package',
    price: 'From $1,500 / yr',
    detail: 'Year-end books cleaned and organized into a filing-ready package for your accountant. We prepare; your CPA files.',
  },
];

const PROJECT_ENGAGEMENTS = [
  {
    name: 'Fundraising Sprint',
    price: '$9,000',
    detail: 'Full investor-readiness package in one week: integrated financial model, scenario runway, investor update, and a board-ready KPI dashboard.',
    href: '/case-studies/ai-fundraising-package-5-days',
  },
  {
    name: 'Cross-Border Finance Setup',
    price: 'From $6,000',
    detail: 'Get your China-US finances in order: multi-entity cash map, FX and intercompany flow, reporting structure, and a compliance checklist. Retainer optional afterward.',
    href: null,
  },
  {
    name: 'Financial Model Build',
    price: 'From $4,000',
    detail: 'A clean, investor-grade operating and runway model built from your real numbers, with base and downside scenarios you can drive yourself.',
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
              <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-textMedium text-center w-[120px]">Clarity</th>
              <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-textMedium text-center w-[140px]">Growth</th>
              <th className="py-3 px-4 text-[11px] font-heading font-semibold tracking-[0.1em] uppercase text-primary text-center w-[160px]">Fractional CFO</th>
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
        <div className="space-y-3 max-w-3xl">
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
