import { useEffect, useState } from 'react';

const faqs = [
  {
    q: 'What exactly does Echo do each month?',
    a: 'We turn your bank, card, and accounting data into a clean profit-and-loss statement, a cash-flow statement, and a runway forecast, plus a one-page report in plain English: what changed, whether you are profitable, and how long your cash lasts. Higher tiers add budgeting, scenario analysis, investor updates, and fundraising materials.',
  },
  {
    q: 'Is Echo a bookkeeper or an accountant?',
    a: 'No. Echo is your management-reporting and CFO function. We work alongside your bookkeeper, CPA, and tax advisor. We do not replace them, file your taxes, or provide audit or legal opinions. We turn the numbers they keep into decisions you can actually act on, and a senior finance professional reviews sensitive outputs before delivery.',
  },
  {
    q: 'Who is Echo for?',
    a: 'Founders and small businesses that need CFO-level clarity without hiring a full-time CFO, especially companies operating across China and the US, and healthcare, biotech, and medical-device companies. We also serve consulting firms, ecommerce sellers, and other small international businesses.',
  },
  {
    q: 'How do you use AI, and is it safe?',
    a: 'AI categorizes transactions and drafts reports so we work faster and at a fraction of the cost of a traditional CFO. It never produces a final number on its own: every figure is calculated by formula and reviewed by a senior finance professional before it reaches you. Your data is handled in a secure, per-client workspace and is not used to train public models.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Usually your bank and card statements and a QuickBooks or Excel export. For fundraising or growth support, also your payroll summary, existing financial model, and investor materials. We send a short checklist before kickoff so nothing is a surprise.',
  },
  {
    q: 'How is Echo priced?',
    a: 'Flat monthly retainers: Monthly Finance Clarity from $750, Growth CFO Support from $2,000, and Fractional CFO Review from $5,000, each with a one-time onboarding fee. No equity and no long-term contract: month-to-month with 30 days’ notice, and annual pre-payment saves 10%.',
  },
  {
    q: 'How fast can we start?',
    a: 'A free finance review within a few days, and your first monthly report within about two weeks of kickoff, once we have ingested your data and built your initial runway model.',
  },
  {
    q: 'Where is Echo based?',
    a: 'Hong Kong headquartered, with a US office in California and a mainland China office in Shenzhen. That is why cross-border China-US finance is a core strength, not an add-on.',
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
          <h2 className="section-heading">What Founders Ask</h2>
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
