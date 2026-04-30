import { useEffect, useState } from 'react';

const faqs = [
  {
    q: 'What kinds of assets does Echo cover?',
    a: 'Echo specializes in China-origin antibody and cell therapy assets — antibody-drug conjugates (ADCs), bispecific antibodies, T-cell engagers, CAR-T cell therapy, TIL therapy, allogeneic platforms, and next-generation antibody scaffolds. We track these classes across mainland China and, increasingly, Korea and Japan. Therapeutic areas outside antibody and cell therapy are out of scope.',
  },
  {
    q: "Who are Echo's typical clients?",
    a: 'Global pharma BD, search & evaluation, and external innovation teams — from mid-cap specialty pharma to top-20 multinationals. Echo does not serve early-stage US biotech fundraising, CRO selection, fractional CFO needs, or hospital partnership facilitation.',
  },
  {
    q: 'How is Echo different from Citeline or GlobalData?',
    a: 'Citeline and GlobalData are comprehensive global pipeline databases. Echo is an analyst-led intelligence firm specializing in China-origin antibody and cell therapy assets. We go deeper on early-clinical and pre-clinical Chinese assets where the global databases under-cover, and we deliver decision-grade memos with named-analyst views — not database access. Most of our clients subscribe to a global database and add Echo for China depth.',
  },
  {
    q: 'How is Echo different from PharmCube?',
    a: 'PharmCube has strong source-side coverage of Chinese pharma, originally built for the Chinese market. Echo reframes intelligence for Western BD workflows: every brief is structured for how global pharma sourcing teams actually evaluate assets, written in English by analysts fluent in both CDE regulatory mechanics and Western BD framing.',
  },
  {
    q: 'What does an engagement with Echo look like?',
    a: 'Four engagement models. Single-asset deep dives are 15–20 page memos delivered in 10–15 business days. Therapeutic area landscape reports are quarterly publications, available standalone or as annual bundles. Echo subscriptions are year-long intelligence partnerships across one or more therapeutic areas. Strategic briefings are custom-scoped 4–8 week research engagements.',
  },
  {
    q: "How is Echo's pricing structured?",
    a: 'Engagements range from high five-figure project work to low six-figure annual subscriptions. Standalone landscape reports start at $25,000. Subscription pricing scales with therapeutic area coverage. Specific pricing is set during a scoping call.',
  },
  {
    q: 'Where is Echo based?',
    a: 'Hong Kong headquartered, with analysts on the ground in mainland China (Shanghai and Beijing) and commercial reach in the US and Europe.',
  },
  {
    q: 'Does Echo work with Chinese biotech companies directly?',
    a: "Echo's primary work is buy-side intelligence for global pharma BD teams. We also offer sell-side BD readiness advisory to selected Chinese biotechs preparing for outbound licensing — managed under a published conflict policy with internal Chinese walls. Sell-side engagements are not advertised on our buy-side channels.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#faq .fade-in');
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
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-14 fade-in">
          <span className="section-label">FAQs</span>
          <h2 className="section-heading">What BD Teams Ask</h2>
        </div>

        {/* Q&A accordion — answers stay in DOM for AI crawler indexing, visually collapsed */}
        <div className="max-w-4xl fade-in">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={index}
                className="border-t border-borderLight last:border-b"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-7 text-left cursor-pointer group"
                  >
                    <span className="font-heading text-lg md:text-xl font-semibold text-textDark leading-snug group-hover:text-primary transition-colors duration-200">
                      {item.q}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                      className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-6 md:pb-7 pr-10"
                >
                  <p className="text-[#444] text-sm md:text-[15px] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
