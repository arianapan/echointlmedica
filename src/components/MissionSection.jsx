import { useEffect } from 'react';

const steps = [
  { num: '01', title: 'Secure Data Ingestion', brief: 'Bank and card statements, QuickBooks or Excel exports, payroll and invoices, uploaded securely in whatever format you already have.' },
  { num: '02', title: 'AI Categorization & Reconciliation', brief: 'AI sorts every transaction into revenue, cost, and expense categories and reconciles the month, turning raw activity into structured numbers in hours, not days.' },
  { num: '03', title: 'Modeling & Analysis', brief: 'Cash-flow, runway, budget-vs-actuals, and scenarios are built from the structured data, surfacing the few drivers that actually move your business.' },
  { num: '04', title: 'Senior CFO Review', brief: 'A senior finance professional checks every figure, pressure-tests the assumptions, and adds the judgment AI cannot, before anything reaches you.' },
  { num: '05', title: 'Founder-Ready Reporting', brief: 'You get a one-page report in plain English: what changed this month, whether you are profitable, how long your cash lasts, and what to watch next.' },
];

const metrics = [
  { value: '48 hrs', label: 'Typical turnaround from your data to a first-draft monthly report' },
  { value: '100%', label: 'Of figures reviewed by a senior finance professional before delivery' },
  { value: '1 page', label: 'Plain-English summary of what changed and what to watch next' },
];

const AIAdvantageSection = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#ai-advantage .fade-in');
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

  return (
    <section id="ai-advantage" className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
      {/* Subtle geometric accent */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/[0.04] to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20 fade-in">
          <span className="font-heading font-semibold text-xs tracking-[0.25em] uppercase mb-4 block text-primary">
            OUR AI ADVANTAGE
          </span>
          <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold max-w-2xl" style={{ lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            How We Work
          </h2>
        </div>

        {/* Two-column: steps left, metrics right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Steps */}
          <div className="lg:w-3/5">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`fade-in stagger-${index + 1} flex gap-6 py-6 border-t border-white/10 ${
                  index === steps.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-heading text-primary font-bold text-sm mt-0.5 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">{step.brief}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="fade-in bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-xl p-8 md:p-10 border border-white/10 backdrop-blur-sm">
              <p className="text-white/80 text-base leading-relaxed mb-10">
                AI does the heavy lifting. A senior finance professional owns the judgment, and every number that reaches you.
              </p>
              <div className="space-y-7">
                {metrics.map((m, i) => (
                  <div key={i}>
                    <div className="font-heading text-4xl md:text-5xl font-bold text-primary leading-none tracking-tight mb-1.5" style={{ letterSpacing: '-0.03em' }}>
                      {m.value}
                    </div>
                    <div className="text-white/50 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantageSection;
