import { useEffect, useState } from 'react';
import { TIERS, fmt } from './PricingTiers';

const marqueeItems = [
  'FRACTIONAL CFO', 'CASH-FLOW FORECASTING', 'RUNWAY MODELING',
  'INVESTOR UPDATES', 'FUNDRAISING READINESS', 'MONTHLY REPORTING',
  'CROSS-BORDER FINANCE', 'BUDGET & SCENARIO ANALYSIS',
];

const services = [
  {
    title: 'Monthly Reporting & Cash-Flow',
    tagline: 'We turn your raw bank and card activity into a clean P&L, a cash-flow statement, and a one-page report you can actually read, every month.',
    // Detail page content
    heroLine: 'Close the month in days, not weeks, and actually understand it.',
    paragraphs: [
      'Connect QuickBooks or upload your bank and card statements, and we own the close: every transaction categorized, revenue and cost reconciled, and a clean monthly P&L and cash-flow statement produced. A senior advisor reviews it before it reaches you.',
      'You get a one-page operating report written for founders, not accountants: what changed in revenue, cost, and cash this month, what it means, and what to watch. It also flags unusual spend, late receivables, and cash-flow risk automatically.',
    ],
    capabilities: ['Transaction Categorization', 'Monthly P&L', 'Cash-Flow Statement', 'Founder Operating Report', 'Spend & Risk Flags'],
  },
  {
    title: 'Budgeting & Scenario Planning',
    tagline: 'A live budget and runway model that answers the only question that matters: how many months of cash do you have, and what changes them.',
    heroLine: 'Make the hire, the spend, or the bet with the numbers already in front of you.',
    paragraphs: [
      'We build and maintain your annual budget and a driver-based runway model, then keep it live against actuals so variances surface the moment they appear, not at year-end when it is too late to react.',
      'Before any big decision, whether a key hire, a new market, or a price change, we model it first: base, upside, and downside scenarios with sensitivity on the few drivers that actually move your runway. You decide with evidence instead of gut feel.',
    ],
    capabilities: ['Annual Budget', 'Driver-Based Runway', 'Budget vs. Actuals', 'Scenario & Sensitivity', 'Hiring & Spend Planning'],
  },
  {
    title: 'Fundraising & Investor Materials',
    tagline: 'The model, data room, and investor updates your investors actually ask for, ready before the raise instead of built the night before.',
    heroLine: 'Walk into the raise already prepared.',
    paragraphs: [
      'We build the investor-grade financial model, cap-table scenarios, and a clean diligence data room that hold up under partner scrutiny. Everything is drafted from your live numbers and finalized by a senior advisor.',
      'Between rounds, we draft your monthly investor updates so existing investors stay warm and your next raise starts from a position of strength instead of a cold-start scramble.',
    ],
    capabilities: ['Investor-Grade Model', 'Cap Table Scenarios', 'Diligence Data Room', 'Monthly Investor Updates', 'Board Deck'],
  },
  {
    title: 'Cross-Border Finance',
    tagline: 'For founders running between China and global markets: multi-entity cash, FX, intercompany flows, and filing-ready tax prep, handled by people who do it every day.',
    heroLine: 'One clear financial picture across both sides of the Pacific.',
    paragraphs: [
      'Operating across China and the US multiplies the finance work: multiple entities, currencies, and bank accounts, intercompany transfers, FX exposure, and two separate compliance calendars. We consolidate it into one clear picture of where your cash actually is.',
      'We map your intercompany flows, track FX, keep a cross-border compliance checklist, and organize year-end books into a filing-ready package for your accountants on each side, so nothing falls through the gap between two systems.',
    ],
    capabilities: ['Multi-Entity Consolidation', 'FX & Intercompany Flows', 'Cross-Border Cash Map', 'Tax-Prep Coordination', 'Compliance Reminders'],
    showPricing: true,
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  // Lock body scroll when detail panel is open
  useEffect(() => {
    document.body.style.overflow = activeService !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeService]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Scroll animation
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#services .fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  const detail = activeService !== null ? services[activeService] : null;

  return (
    <section id="services">
      {/* Marquee ticker */}
      <div className="bg-secondary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-white/60 text-sm font-heading font-medium tracking-[0.15em] uppercase">
              {item}
              <span className="ml-12 text-white/20">{'///'}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services content */}
      <div className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="mb-16 md:mb-20 fade-in">
            <span className="section-label">SERVICES</span>
            <h2 className="section-heading">What We Do</h2>
          </div>

          {/* Service cards — 2×2 grid with numbers */}
          <div className="grid md:grid-cols-2 gap-5 fade-in">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-borderLight rounded-lg p-8 md:p-10 group cursor-pointer card-lift shadow-card relative overflow-hidden"
                onClick={() => setActiveService(index)}
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 font-heading text-[4.5rem] font-bold text-primary/[0.06] leading-none select-none" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Top accent line */}
                <div className="w-8 h-0.5 bg-primary mb-6 group-hover:w-12 transition-all duration-300" />

                <h3 className="font-heading text-lg md:text-xl font-semibold text-textDark leading-snug mb-3 group-hover:text-primary transition-colors duration-200 relative">
                  {service.title}
                </h3>
                <p className="text-textMedium text-sm md:text-[15px] leading-relaxed relative">
                  {service.tagline}
                </p>
                <div className="mt-6 flex items-center text-primary text-sm font-heading font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail overlay — slides in from right */}
      {detail && (
        <div className="fixed inset-0 z-[200] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />

          {/* Panel */}
          <div className="relative ml-auto w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl animate-slide-in-right">
            {/* Close button */}
            <button
              className="sticky top-0 right-0 float-right m-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-lightBg transition-colors cursor-pointer z-10"
              onClick={() => setActiveService(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-10 md:p-14 pt-6">
              {/* Category label */}
              <span className="section-label">SERVICES</span>

              {/* Title */}
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-textDark leading-snug mt-3 mb-4">
                {detail.title}
              </h2>

              {/* Hero line */}
              <p className="text-primary font-heading font-medium text-lg mb-8">
                {detail.heroLine}
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-primary mb-8" />

              {/* Content paragraphs */}
              {detail.paragraphs.map((p, i) => (
                <p key={i} className="text-textMedium text-base leading-relaxed mb-5">
                  {p}
                </p>
              ))}

              {/* Capabilities */}
              <div className="mt-10">
                <h4 className="font-heading text-sm font-semibold text-textDark tracking-[0.1em] uppercase mb-4">
                  Capabilities
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {detail.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing — shown on the service flagged with showPricing */}
              {detail.showPricing && (
                <div className="mt-12 pt-8 border-t border-borderLight">
                  <h4 className="font-heading text-sm font-semibold text-textDark tracking-[0.1em] uppercase mb-3">
                    Pricing
                  </h4>
                  <p className="text-textMedium text-sm leading-relaxed mb-6">
                    All four services are delivered through one monthly retainer. No lock-in. Annual pre-payment saves 10%.
                  </p>
                  <div className="space-y-4">
                    {TIERS.map((t) => (
                      <div
                        key={t.name}
                        className={`rounded-lg p-5 border ${
                          t.highlight
                            ? 'border-primary bg-gradient-to-br from-white to-primary/[0.04]'
                            : 'border-borderLight bg-white'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-4 mb-3">
                          <div className="min-w-0">
                            <h5 className="font-heading text-lg font-bold text-textDark">{t.name}</h5>
                            <p className="text-textLight text-[10px] uppercase tracking-[0.12em] font-heading mt-0.5 leading-snug">
                              {t.stage} · {t.role}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-heading text-2xl font-bold text-textDark tracking-tight">
                              {fmt(t.monthly)}
                            </span>
                            <span className="text-textMedium text-xs ml-0.5">/mo</span>
                          </div>
                        </div>
                        <ul className="space-y-1.5">
                          {t.features.map((f, j) => (
                            <li key={j} className="text-[13px] text-textMedium leading-relaxed flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="13"
                                height="13"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="text-primary mt-1 mr-2 shrink-0"
                                aria-hidden="true"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="text-textLight text-xs mt-4">
                    All tiers · no equity · no long-term contract · 30-day notice to cancel
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-borderLight">
                <button
                  className="btn-primary cursor-pointer"
                  onClick={() => {
                    setActiveService(null);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                  }}
                >
                  Discuss This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
