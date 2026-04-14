import { useEffect, useState } from 'react';

const marqueeItems = [
  'FRACTIONAL AI CFO', 'INVESTOR PIPELINE', 'CHINA MARKET ENTRY',
  'CRO SELECTION', 'INSTITUTIONAL PARTNERSHIPS', 'AI-AUGMENTED RESEARCH',
  'CROSS-BORDER EXECUTION', 'CLINICAL TRIAL STRATEGY',
];

const services = [
  {
    title: 'Cross-Border China Strategy & Execution',
    tagline: 'Market entry, CRO selection, and execution management for US biotech entering Greater China.',
    // Detail page content
    heroLine: 'We design your market entry so you don\'t navigate it alone.',
    paragraphs: [
      'End-to-end advisory for US biotech companies entering Greater China. We design your market entry, select CRO and hospital partners, build execution budgets, and manage the cross-border relationship.',
      'Our team has direct access to China-side institutional relationships: CROs, hospitals, investors, and regulatory networks, enabling us to move faster and with more precision than traditional advisory firms.',
    ],
    capabilities: ['CRO Matching', 'Clinical Cost Analysis', 'Regulatory Landscape', 'Partner Selection', 'AI-Powered Research'],
  },
  {
    title: 'Institutional Partnership Facilitation',
    tagline: 'Structured matchmaking between US academic medical centers and Chinese hospitals.',
    heroLine: 'Building collaborations that last across the Pacific.',
    paragraphs: [
      'We design the collaboration framework between US academic medical centers and leading Chinese hospitals, identifying counterparties, packaging the value proposition, and managing the ongoing partnership.',
      'Our partnerships cover education programs, remote tumor board services, strategic research collaboration, and clinical exchange programs.',
    ],
    capabilities: ['AMC Partnerships', 'Hospital Matching', 'Program Design', 'Relationship Management', 'AI-Curated Intelligence'],
  },
  {
    title: 'Continuous Investor Pipeline',
    tagline: 'Always-on AI investor matching and warm-intro mapping on a monthly retainer.',
    heroLine: 'Your investor pipeline, running every month, not just before the raise.',
    paragraphs: [
      'A monthly retainer that keeps your investor pipeline live at all times. AI thesis-fit scoring across hundreds of biotech investors, warm-intro mapping, sentiment tracking, and weekly briefing packages. An optional 2 to 4 week onboarding sprint brings the pipeline to full speed.',
      'When the data reads out, the list is already prioritized. No cold-start scramble, no piecemeal outreach. Retainer pricing, not hourly billing.',
    ],
    capabilities: ['AI Investor Matching', 'Warm-Intro Mapping', 'Investor Sentiment Tracking', 'Weekly Briefing Packages', 'Onboarding Sprint Option'],
  },
  {
    title: 'Fractional AI CFO Retainer',
    tagline: 'Monthly retainer: live runway, board decks, investor pipeline, and KPI dashboard, AI-augmented.',
    heroLine: 'The finance function a biotech actually needs, on subscription.',
    paragraphs: [
      'Our flagship product. A bundled monthly subscription built for biotech finance: a continuously updated cash runway and scenario model, a monthly board deck and investor update drafted from the live model and finalized by a senior advisor, an always-on investor pipeline with AI thesis-fit scoring, and a KPI dashboard tracking burn, milestones, and cash-to-milestone coverage.',
      'AI does the analytical work. A senior advisor owns the judgment and the client relationship. Retainer pricing replaces hourly billing, because cash runway, investor relationships, and board reporting are continuous functions, not discrete projects.',
    ],
    capabilities: ['Live Runway Model', 'Monthly Board Deck', 'AI Investor Pipeline', 'KPI Dashboard', 'Senior Advisor Judgment Layer'],
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  // Lock body scroll when detail panel is open
  useEffect(() => {
    document.body.style.overflow = activeService !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeService]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Scroll animation
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#services .fade-in');
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

  const detail = activeService !== null ? services[activeService] : null;

  return (
    <section id="services">
      {/* Marquee ticker */}
      <div className="bg-secondary py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-white/60 text-sm font-heading font-medium tracking-[0.15em] uppercase">
              {item}
              <span className="ml-12 text-white/20">{'///'}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services content */}
      <div className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="mb-16 md:mb-20 fade-in">
            <span className="section-label">CONSULTING SERVICES</span>
            <h2 className="section-heading">What We Do</h2>
          </div>

          {/* Service cards — 2×2 grid with numbers */}
          <div className="grid md:grid-cols-2 gap-5 fade-in">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-borderLight rounded-lg p-8 md:p-10 group cursor-pointer card-lift shadow-card relative overflow-hidden"
                onClick={() => setActiveService(index)}
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 font-heading text-[4.5rem] font-bold text-primary/[0.06] leading-none select-none" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Top accent line */}
                <div className="w-8 h-0.5 bg-primary mb-6 group-hover:w-12 transition-all duration-300" />

                <h3 className="font-heading text-lg md:text-xl font-semibold text-textDark leading-snug mb-3 group-hover:text-primary transition-colors duration-200 relative">
                  {service.title}
                </h3>
                <p className="text-textMedium text-sm md:text-[15px] leading-relaxed relative">
                  {service.tagline}
                </p>
                <div className="mt-6 flex items-center text-primary text-sm font-heading font-medium opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail overlay — slides in from right */}
      {detail && (
        <div className="fixed inset-0 z-[200] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
          />

          {/* Panel */}
          <div className="relative ml-auto w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl animate-slide-in-right">
            {/* Close button */}
            <button
              className="sticky top-0 right-0 float-right m-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-lightBg transition-colors cursor-pointer z-10"
              onClick={() => setActiveService(null)}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-10 md:p-14 pt-6">
              {/* Category label */}
              <span className="section-label">CONSULTING SERVICES</span>

              {/* Title */}
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-textDark leading-snug mt-3 mb-4">
                {detail.title}
              </h2>

              {/* Hero line */}
              <p className="text-primary font-heading font-medium text-lg mb-8">
                {detail.heroLine}
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-primary mb-8" />

              {/* Content paragraphs */}
              {detail.paragraphs.map((p, i) => (
                <p key={i} className="text-textMedium text-base leading-relaxed mb-5">
                  {p}
                </p>
              ))}

              {/* Capabilities */}
              <div className="mt-10">
                <h4 className="font-heading text-sm font-semibold text-textDark tracking-[0.1em] uppercase mb-4">
                  Capabilities
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {detail.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-borderLight">
                <button
                  className="btn-primary cursor-pointer"
                  onClick={() => {
                    setActiveService(null);
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                  }}
                >
                  Discuss This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
