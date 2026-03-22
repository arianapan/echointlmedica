import { useEffect } from 'react';

const articles = [
  {
    category: 'CROSS-BORDER STRATEGY',
    title: 'Why Chinese CROs Are 65% Cheaper — and What US Biotechs Need to Know',
    brief: 'A deep look at the cost arbitrage in cross-border clinical development and the operational considerations that determine success.',
    gradient: 'from-secondary via-secondary/90 to-primary/70',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-white/30" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
  },
  {
    category: 'AI & ADVISORY',
    title: 'The 3× Deliverable Model: How AI Is Reshaping Biotech Consulting',
    brief: 'Why the future of advisory isn\'t cheaper consulting — it\'s fundamentally better outcomes delivered through AI-augmented intelligence.',
    gradient: 'from-primary via-primary/80 to-secondary/90',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-white/30" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    category: 'INSTITUTIONAL PARTNERSHIPS',
    title: 'Building Hospital Partnerships Across the Pacific: A Practitioner\'s Guide',
    brief: 'Lessons from structuring US–China academic medical center collaborations, from framework design to ongoing management.',
    gradient: 'from-[#1a4a6e] via-secondary to-primary/60',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-white/30" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const InsightsSection = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#insights .fade-in');
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
    <section id="insights" className="py-24 md:py-32 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20 fade-in">
          <span className="section-label">LATEST INSIGHTS</span>
          <h2 className="section-heading">Our thinking</h2>
        </div>

        {/* Article cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href="#"
              className={`fade-in stagger-${index + 1} bg-white rounded-lg overflow-hidden group cursor-pointer card-lift shadow-card flex flex-col`}
              onClick={(e) => e.preventDefault()}
            >
              {/* Card image — brand gradient with icon */}
              <div className={`relative h-44 bg-gradient-to-br ${article.gradient} overflow-hidden`}>
                {/* Decorative geometric lines */}
                <div className="absolute inset-0 opacity-[0.07]" style={{
                  backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30.5%, rgba(255,255,255,0.5) 31%, transparent 31.5%), linear-gradient(-45deg, transparent 70%, rgba(255,255,255,0.3) 70.5%, rgba(255,255,255,0.3) 71%, transparent 71.5%)',
                }} />
                {/* Icon */}
                <div className="absolute bottom-4 right-5">
                  {article.icon}
                </div>
                {/* Category pill on image */}
                <div className="absolute top-5 left-5">
                  <span className="text-[10px] font-heading font-semibold text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.12em] uppercase">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-heading text-[17px] md:text-lg font-semibold text-textDark leading-snug mb-3 group-hover:text-primary transition-colors duration-300 flex-1">
                  {article.title}
                </h3>

                {/* Brief */}
                <p className="text-textMedium text-sm leading-relaxed mb-5">
                  {article.brief}
                </p>

                {/* Read more arrow */}
                <div className="flex items-center text-primary text-sm font-heading font-medium">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
