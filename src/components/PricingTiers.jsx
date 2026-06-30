import { useState } from 'react';
import { Link } from 'react-router-dom';

export const TIERS = [
  {
    name: 'Monthly Finance Clarity',
    monthly: 750,
    annual: 675,
    stage: 'Solo & very early',
    role: 'Beyond a part-time bookkeeper',
    highlight: false,
    features: [
      'Monthly P&L + cash-flow statement',
      'Live runway forecast',
      'One-page founder operating report',
      'Cash-flow risk & unusual-spend flags',
      'Email support',
    ],
  },
  {
    name: 'Growth CFO Support',
    monthly: 2000,
    annual: 1800,
    stage: 'Pre-seed to Series A',
    role: 'Your outsourced finance team',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Monthly Finance Clarity',
      'Budget vs. actuals + scenario runway',
      'Monthly investor update, drafted for you',
      'Diligence data room, maintained',
      'Monthly 30-min advisor call',
      'Slack + email support',
    ],
  },
  {
    name: 'Fractional CFO Review',
    monthly: 5000,
    annual: 4500,
    stage: 'Raising or cross-border',
    role: 'Senior fractional CFO partner',
    highlight: false,
    features: [
      'Everything in Growth CFO Support',
      'Senior fractional CFO, every number human-reviewed',
      'Cross-border (China-US) cash & entities',
      'Fundraising model + board deck + cap table',
      'Always-on investor pipeline + prep briefs',
      'Bi-weekly advisor call + monthly CEO strategy',
    ],
  },
];

export const fmt = (n) => `$${n.toLocaleString('en-US')}`;

const PricingTiers = ({ children, variant = 'full' }) => {
  const [billing, setBilling] = useState('monthly');
  const paddingClass = variant === 'home' ? 'pt-0 pb-20 md:pb-24' : 'py-20 md:py-24';

  return (
    <section id="pricing" className={paddingClass}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <span className="section-label">PRICING</span>
          <h2 className="section-heading max-w-2xl mx-auto mb-3">Cross-Border CFO Service</h2>
          <p className="text-textDark text-base leading-relaxed max-w-2xl mx-auto mb-2">
            A senior finance team, amplified by AI. Fewer errors, faster answers, a fraction of a full-time CFO.
          </p>
          <p className="text-textMedium text-sm leading-relaxed max-w-xl mx-auto">
            One flat rate. Every month. No lock-in. Annual pre-payment saves 10%. One-time onboarding from $500.
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
                  Book a Finance Review
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-textLight text-xs mt-6 text-center">
          All tiers · no equity · no long-term contract · 30-day notice to cancel
        </p>

        {children}
      </div>
    </section>
  );
};

export default PricingTiers;
