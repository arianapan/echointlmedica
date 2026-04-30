import { useEffect } from 'react';

const steps = [
  { num: '01', title: 'Primary Source Ingestion', brief: 'CDE filings, Chinese trial registries, conference disclosures, and patent records, read in the original Chinese.' },
  { num: '02', title: 'Structured Synthesis', brief: 'AI augmented workflows convert raw source material into structured asset profiles covering mechanism, stage, IP, deal comps, and BD readiness.' },
  { num: '03', title: 'Analyst Judgment Layer', brief: 'Named analysts produce explicit views on every asset, including BD attractiveness, realistic deal range, top risks, and recommended action.' },
  { num: '04', title: 'BD Framing', brief: 'Every brief is structured around how Western BD teams evaluate assets, not how Chinese databases organize them.' },
  { num: '05', title: 'Decision Grade Output', brief: 'Memos and landscapes designed for IC committee submission. Edit and submit, rather than research and rebuild.' },
];

const metrics = [
  { value: '150+', label: 'China origin antibody and cell-therapy assets actively tracked' },
  { value: '25+', label: 'Source types monitored across regulatory, clinical, patent, company, and transaction data' },
  { value: 'Weekly', label: 'CDE filings, trial registry, and conference disclosure monitoring' },
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
                Echo&apos;s analyst layer combines what no database delivers and no consultancy productizes.
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
