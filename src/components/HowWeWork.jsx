import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const engagements = [
  {
    title: 'Monthly Operating Report',
    description:
      'A one-page report built for founders: what happened to revenue, cost, and cash this month, what it means, and what to watch. It is backed by a full P&L and cash-flow statement reviewed by a senior advisor.',
    footer: <>Delivered every month, on a fixed schedule.</>,
  },
  {
    title: 'Cash-Flow & Runway Forecast',
    description:
      'A live runway model showing how many months of cash you have under base and downside scenarios, updated each month and stress-tested against your real burn, so cash surprises never come from your own books.',
    footer: <>Updated monthly · scenario-ready.</>,
  },
  {
    title: 'Investor Update & Data Room',
    description:
      'A drafted monthly investor update plus a maintained diligence data room, so your investors stay informed between rounds and your next raise starts ahead instead of from scratch.',
    footer: <>Drafted for you · finalized by a senior advisor.</>,
  },
  {
    title: 'Fundraising & Board Materials',
    description:
      'Board decks, cap-table scenarios, and the financial model investors ask for, prepared when you need them instead of the night before a partner meeting.',
    footer: <>On-demand within your monthly retainer.</>,
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

        {/* Summary lines — generous gap above */}
        <p className="mt-14 md:mt-16 text-center text-textMedium text-sm md:text-base max-w-3xl mx-auto fade-in">
          One predictable bundle every month, not a stack of one-off projects.
        </p>
        <p className="mt-2 text-center text-textMedium text-sm md:text-base max-w-3xl mx-auto fade-in">
          Flat monthly retainers from <strong className="font-semibold">$750</strong>. No equity, no long-term contract.
        </p>

        {/* 16px gap, then single CTA */}
        <div className="mt-4 flex flex-col items-center gap-3 fade-in">
          <Link to="/#contact" className="btn-primary inline-block">
            Book a Finance Review
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link to="/sample-report" className="text-primary text-sm font-heading font-semibold hover:underline">
              See a sample monthly report &rarr;
            </Link>
            <Link to="/services/fractional-ai-cfo" className="text-primary text-sm font-heading font-semibold hover:underline">
              See full pricing and packages &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
