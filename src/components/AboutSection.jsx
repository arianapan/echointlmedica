import { useEffect } from 'react';

const capabilities = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
    title: 'Cross-Border Access',
    brief: 'Direct relationships with US institutions, Chinese hospitals, CROs, and investors on both sides of the Pacific.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
    title: 'AI-First Operations',
    brief: 'Proprietary AI workflows power every engagement, from research synthesis to financial modeling.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a4 4 0 00-8 0v2" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
    title: 'Finance Expertise',
    brief: 'Silicon Valley hedge fund and operations background applied to biotech capital strategy.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Outcome-Driven Pricing',
    brief: 'Retainer and success-fee models aligned with client outcomes, not hours billed.',
  },
];

const AboutSection = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#about .fade-in');
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
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20 fade-in">
          <span className="section-label">ABOUT ECHO</span>
          <h2 className="section-heading mb-6">The firm behind the platform</h2>
          <p className="text-textMedium text-lg md:text-xl max-w-3xl leading-relaxed">
            Echo International Medica is a specialized cross-border biotech advisory firm headquartered in Hong Kong, connecting US life sciences companies with high-value opportunities across Greater China.
          </p>
        </div>

        {/* Capabilities — 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`fade-in stagger-${index + 1} bg-white border border-borderLight rounded-lg p-7 card-lift shadow-card`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center mb-5">
                {cap.icon}
              </div>
              <h3 className="font-heading text-[15px] font-semibold text-textDark mb-2.5">{cap.title}</h3>
              <p className="text-textMedium text-sm leading-relaxed">{cap.brief}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
