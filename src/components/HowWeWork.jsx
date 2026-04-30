import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const engagements = [
  {
    title: 'Single-Asset Deep Dive',
    description:
      "A 15–20 page decision memo on one China-origin asset. Covers mechanism, regulatory trajectory, clinical readouts, IP landscape, comparable deals, and Echo's named-analyst view. Built for IC committee review.",
    footer: <>Typically delivered in 10–15 business days.</>,
  },
  {
    title: 'Therapeutic Area Landscape',
    description:
      'A 40–60 page quarterly report covering one vertical: ADCs, bispecifics, CAR-T, or next-generation cell therapies. Profiles clinical-stage assets with comparable deal benchmarks and BD-readiness scoring.',
    footer: (
      <>
        <strong className="font-semibold">Standalone reports from $25,000.</strong> Annual bundles available.
      </>
    ),
  },
  {
    title: 'Echo Subscription',
    description:
      'A year-long intelligence partnership for BD teams with active China-sourcing mandates. Quarterly landscapes, monthly briefings, weekly regulatory alerts, named-analyst access, and ad-hoc deep dives across selected therapeutic areas.',
    footer: <>Annual partnerships. Pricing scales with therapeutic area coverage.</>,
  },
  {
    title: 'Strategic Mandate Briefing',
    description:
      'Bespoke research on a client-defined sourcing, diligence, or competitive strategy question. Delivered as a written report plus presentation, with 90 days of follow-up access to the lead analyst.',
    footer: <>Custom-scoped. Typically 4–8 week engagements.</>,
  },
];

const HowWeWork = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#engagement .fade-in');
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
    <section id="engagement" className="pt-0 pb-24 md:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header — tightened spacing below */}
        <div className="mb-12 md:mb-14 fade-in">
          <span className="section-label">ENGAGEMENT</span>
          <h2 className="section-heading">What We Deliver</h2>
        </div>

        {/* Engagement cards — 2×2 grid with numbers */}
        <div className="grid md:grid-cols-2 gap-5 fade-in">
          {engagements.map((engagement, index) => (
            <div
              key={index}
              className="bg-white border border-borderLight rounded-lg p-8 md:p-10 group card-lift shadow-card relative overflow-hidden flex flex-col"
            >
              {/* Number watermark — slightly more visible */}
              <span
                className="absolute top-5 right-6 font-heading text-[4.5rem] font-bold text-primary/10 leading-none select-none"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Top accent line */}
              <div className="w-8 h-0.5 bg-primary mb-6 group-hover:w-12 transition-all duration-300" />

              <h3 className="font-heading text-lg md:text-xl font-semibold text-textDark leading-snug mb-3 group-hover:text-primary transition-colors duration-200 relative">
                {engagement.title}
              </h3>
              <p className="text-[#444] text-sm md:text-[15px] leading-relaxed relative">
                {engagement.description}
              </p>

              {/* Footer line — same color as body copy */}
              <div className="mt-6 pt-5 border-t border-borderLight relative">
                <span className="text-[#444] text-xs md:text-[13px] leading-relaxed">
                  {engagement.footer}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary line — generous gap above */}
        <p className="mt-14 md:mt-16 text-center text-textMedium text-sm md:text-base max-w-3xl mx-auto fade-in">
          Engagements range from single-asset diligence to annual intelligence partnerships, with standalone landscape reports starting at <strong className="font-semibold">$25,000</strong>.
        </p>

        {/* 16px gap, then single CTA */}
        <div className="mt-4 flex justify-center fade-in">
          <Link to="/sample-brief" className="btn-primary inline-block">
            Request a Sample Brief
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
