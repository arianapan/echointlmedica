import { useEffect, useState, useCallback } from 'react';
import assets from '../assets';

const cases = [
  {
    category: 'Featured client success story',
    title: 'US Oncology Biotech Enters Greater China Clinical Pathway',
    detail: 'Designed a complete China clinical and commercialization strategy for a first-in-class therapeutic, including CRO selection, cost modeling, regulatory timeline, and investor narrative for a $5M+ capital raise.',
    metrics: [
      { value: '65%', label: 'Cost reduction vs. US clinical trials' },
      { value: '$5M+', label: 'Capital raise supported' },
    ],
    image: assets.Story1,
    srcSet: assets.Story1SrcSet,
    alt: 'Business professionals discussing cross-border biotech strategy',
  },
  {
    category: 'Featured client success story',
    title: 'Top-Tier US Cancer Center × Chinese Hospital Collaboration',
    detail: 'Structured a cross-border partnership between a leading US academic medical center and Chinese hospital network — covering education programs, remote tumor board services, and strategic research collaboration.',
    metrics: [
      { value: '2', label: 'Institutions connected across the Pacific' },
      { value: 'Multi-year', label: 'Partnership structure delivered' },
    ],
    image: assets.Story2,
    srcSet: assets.Story2SrcSet,
    alt: 'Medical professionals in a cross-border tumor board collaboration',
  },
  {
    category: 'Featured client success story',
    title: 'Fundraising Support Package Delivered in Days, Not Weeks',
    detail: 'Deployed AI-accelerated workflows to deliver a complete investor readiness package — financial model, 80+ investor targeting report, meeting prep briefs, and pipeline dashboard — in under one week.',
    metrics: [
      { value: '5 days', label: 'Full package delivered end-to-end' },
      { value: '80+', label: 'Investors mapped and scored' },
    ],
    image: assets.Story3,
    srcSet: assets.Story3SrcSet,
    alt: 'AI-accelerated investor readiness and fundraising workflow',
  },
];

const ResultsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload all carousel images so transitions are instant
  useEffect(() => {
    cases.forEach(c => {
      const img = new Image();
      img.src = c.image;
    });
  }, []);

  const goTo = useCallback((index) => {
    if (index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 300);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % cases.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

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

  const c = cases[current];

  return (
    <section id="results" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Big heading — light weight, elegant */}
        <div className="mb-8 md:mb-10 fade-in">
          <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-light text-textDark" style={{ lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Bold steps forward.
          </h2>
        </div>

        {/* Two-column: text left, image right */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left — case content */}
          <div className={`lg:w-1/2 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Category */}
            <span className="text-textMedium text-base md:text-lg font-heading mb-5 block">
              {c.category}
            </span>

            {/* Divider */}
            <hr className="border-borderLight mb-6" />

            {/* Title */}
            <h3 className="font-heading text-xl md:text-2xl lg:text-[1.75rem] font-bold text-textDark leading-snug mb-5" style={{ letterSpacing: '-0.01em' }}>
              {c.title}
            </h3>

            {/* Detail */}
            <p className="text-textMedium text-[15px] leading-relaxed mb-8">
              {c.detail}
            </p>

            {/* The impact */}
            <span className="text-textLight text-xs font-heading font-semibold tracking-[0.15em] uppercase mb-4 block">
              The impact
            </span>

            {/* Metrics in bordered boxes */}
            <div className="flex gap-0 mb-8">
              {c.metrics.map((m, i) => (
                <div key={i} className="border border-borderLight px-5 py-4 first:rounded-l-lg last:rounded-r-lg flex-1">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-textDark leading-none tracking-tight whitespace-nowrap mb-1.5" style={{ letterSpacing: '-0.02em' }}>
                    {m.value}
                  </div>
                  <div className="text-textLight text-xs leading-snug">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Read story link */}
            <button className="flex items-center text-primary text-sm font-heading font-semibold group cursor-pointer">
              Read story
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-1.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right — image area */}
          <div className={`lg:w-1/2 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <picture>
                {c.srcSet.avif && <source srcSet={c.srcSet.avif} type="image/avif" />}
                {c.srcSet.webp && <source srcSet={c.srcSet.webp} type="image/webp" />}
                <source srcSet={c.srcSet.jpg || c.srcSet.png} type={c.srcSet.jpg ? 'image/jpeg' : 'image/png'} />
                <img
                  src={c.image}
                  alt={c.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  width="600"
                  height="450"
                  loading={current === 0 ? 'eager' : 'lazy'}
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Carousel indicators + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 md:mt-16 pt-8 border-t border-borderLight">
          {/* Dots */}
          <div className="flex gap-2.5 mb-6 sm:mb-0">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to case study ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === current
                    ? 'bg-primary scale-110'
                    : 'bg-borderMedium hover:bg-textLight'
                }`}
              />
            ))}
          </div>

          {/* See all button */}
          <button className="font-heading text-xs font-semibold tracking-[0.15em] uppercase text-textDark border-b-2 border-textDark pb-1 hover:text-primary hover:border-primary transition-colors cursor-pointer">
            See All Client Results
          </button>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
