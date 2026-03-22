import { useEffect, useState } from 'react';

const cases = [
  {
    category: 'CAPITAL ADVISORY & CHINA EXPANSION',
    title: 'US Oncology Biotech Enters Greater China Clinical Pathway',
    brief: 'Complete China clinical and commercialization strategy for a first-in-class therapeutic.',
    detail: 'Designed a complete China clinical and commercialization strategy for a first-in-class therapeutic, including CRO selection, cost modeling, regulatory timeline, and investor narrative for a $5M+ capital raise.',
    metrics: [
      { value: '65%', label: 'Cost reduction vs. US trials' },
      { value: '$5M+', label: 'Raise supported' },
    ],
  },
  {
    category: 'INSTITUTIONAL PARTNERSHIPS',
    title: 'Top-Tier US Cancer Center × Chinese Hospital Collaboration',
    brief: 'Cross-border partnership between leading institutions across the Pacific.',
    detail: 'Structured a cross-border partnership between a leading US academic medical center and Chinese hospital network — covering education programs, remote tumor board services, and strategic research collaboration.',
    metrics: [
      { value: '2', label: 'Institutions connected' },
      { value: 'Multi-year', label: 'Partnership structure' },
    ],
  },
  {
    category: 'AI-AUGMENTED DELIVERY',
    title: 'Fundraising Support Package Delivered in Days, Not Weeks',
    brief: 'AI-accelerated workflows delivering complete investor readiness in under one week.',
    detail: 'Deployed AI-accelerated workflows to deliver a complete investor readiness package — financial model, 80+ investor targeting report, meeting prep briefs, and pipeline dashboard — in under one week.',
    metrics: [
      { value: '5 days', label: 'Full package delivered' },
      { value: '80+', label: 'Investors mapped' },
    ],
  },
];

const ResultsSection = () => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#results .fade-in');
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
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20 fade-in">
          <span className="section-label">CLIENT RESULTS</span>
          <h2 className="section-heading">Bold steps forward.</h2>
        </div>

        {/* Case cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {cases.map((c, index) => {
            const isOpen = expanded === index;
            return (
              <div
                key={index}
                className={`fade-in stagger-${index + 1} bg-white rounded-lg border border-borderLight overflow-hidden cursor-pointer card-lift shadow-card flex flex-col`}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                {/* Top gradient bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />

                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  {/* Category */}
                  <span className="text-[11px] font-heading font-medium text-primary tracking-[0.15em] uppercase mb-4">
                    {c.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-semibold text-textDark leading-snug mb-3">
                    {c.title}
                  </h3>

                  {/* Brief (surface) or Detail (expanded) */}
                  <p className="text-textMedium text-sm leading-relaxed mb-6 flex-1">
                    {isOpen ? c.detail : c.brief}
                  </p>

                  {/* Toggle indicator */}
                  <div className="flex items-center text-primary text-xs font-heading font-medium mb-5">
                    {isOpen ? 'Show less' : 'Read the full story'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className={`ml-1.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  {/* Metrics — bold display */}
                  <div className="flex gap-8 pt-6 border-t border-borderLight">
                    {c.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="font-heading text-2xl md:text-3xl font-bold text-primary leading-none tracking-tight whitespace-nowrap">{m.value}</div>
                        <div className="text-textLight text-xs mt-1.5 leading-snug">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
