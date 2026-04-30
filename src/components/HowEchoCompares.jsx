import { useEffect } from 'react';

const columns = [
  {
    header: 'vs. Western databases',
    competitors: 'Citeline, GlobalData, Evaluate',
    body: "Comprehensive global pipelines, but China coverage is shallow at the early-clinical and pre-clinical stages where the best deal terms exist. Echo goes deeper on the assets they miss, with primary-source CDE fluency they don't have.",
  },
  {
    header: 'vs. Chinese databases',
    competitors: 'PharmCube, Yaozhi',
    body: 'Source-side data depth, but built for Chinese readers — not Western BD workflows. Echo translates structure, not just language: every brief is decision-grade and reframed for how global pharma sourcing teams actually evaluate assets.',
  },
  {
    header: 'vs. BD consultancies',
    competitors: 'Locust Walk, Back Bay, McKinsey',
    body: "Strong relationship-led project advisory, but project-paced and not productized. Echo's recurring intelligence accumulates depth across every engagement, with named-analyst views you can cite, not anonymous consulting decks.",
  },
];

const HowEchoCompares = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#how-echo-compares .fade-in');
      elements.forEach((el) => {
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
    <section id="how-echo-compares" className="pt-24 md:pt-32 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-14 fade-in">
          <span className="section-label">WHERE ECHO FITS</span>
          <h2 className="section-heading">Built for the gap incumbents can&apos;t fill.</h2>
        </div>

        {/* Three-column comparison */}
        <div className="grid md:grid-cols-3 gap-5 fade-in">
          {columns.map((col, index) => (
            <div
              key={index}
              className="bg-white border border-borderLight rounded-lg p-8 md:p-10 group card-lift shadow-card relative overflow-hidden flex flex-col"
            >
              {/* Top accent line */}
              <div className="w-8 h-0.5 bg-primary mb-6 group-hover:w-12 transition-all duration-300" />

              <h3 className="font-heading text-lg md:text-xl font-semibold text-textDark leading-snug mb-1 group-hover:text-primary transition-colors duration-200 relative">
                {col.header}
              </h3>
              <p className="text-textMedium/70 text-xs md:text-[13px] tracking-wide mb-4 relative">
                {col.competitors}
              </p>
              <p className="text-[#444] text-sm md:text-[15px] leading-relaxed relative">
                {col.body}
              </p>
            </div>
          ))}
        </div>

        {/* Italic centered closing line */}
        <p className="mt-14 md:mt-16 text-center text-textMedium italic text-sm md:text-base max-w-3xl mx-auto fade-in">
          Echo sits alongside the database you already subscribe to — not against it.
        </p>
      </div>
    </section>
  );
};

export default HowEchoCompares;
