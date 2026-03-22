import { useEffect } from 'react';

const articles = [
  {
    category: 'CROSS-BORDER STRATEGY',
    title: 'Why Chinese CROs Are 65% Cheaper — and What US Biotechs Need to Know',
    brief: 'A deep look at the cost arbitrage in cross-border clinical development and the operational considerations that determine success.',
  },
  {
    category: 'AI & ADVISORY',
    title: 'The 3× Deliverable Model: How AI Is Reshaping Biotech Consulting',
    brief: 'Why the future of advisory isn\'t cheaper consulting — it\'s fundamentally better outcomes delivered through AI-augmented intelligence.',
  },
  {
    category: 'INSTITUTIONAL PARTNERSHIPS',
    title: 'Building Hospital Partnerships Across the Pacific: A Practitioner\'s Guide',
    brief: 'Lessons from structuring US–China academic medical center collaborations, from framework design to ongoing management.',
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
        <div className="grid lg:grid-cols-3 gap-5">
          {articles.map((article, index) => (
            <a
              key={index}
              href="#"
              className={`fade-in stagger-${index + 1} bg-white rounded-lg border border-borderLight p-8 md:p-10 group cursor-pointer card-lift shadow-card flex flex-col`}
              onClick={(e) => e.preventDefault()}
            >
              {/* Category pill */}
              <span className="inline-block self-start text-[11px] font-heading font-semibold text-primary bg-primary/8 px-3 py-1 rounded-full tracking-[0.12em] uppercase mb-5">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg md:text-xl font-semibold text-textDark leading-snug mb-4 group-hover:text-primary transition-colors duration-300 flex-1">
                {article.title}
              </h3>

              {/* Brief */}
              <p className="text-textMedium text-sm leading-relaxed mb-6">
                {article.brief}
              </p>

              {/* Read more arrow */}
              <div className="flex items-center text-primary text-sm font-heading font-medium">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
