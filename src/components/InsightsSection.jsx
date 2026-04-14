import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import snap2Img from '../assets/Snap2.jpg';

const croCoverImg = '/articles/cro-cost-arbitrage.jpg';
const aiCoverImg = '/articles/ai-advisory.jpg';

const articles = [
  {
    category: 'CROSS-BORDER STRATEGY',
    title: 'Why Chinese CROs Are 65% Cheaper — and What US Biotechs Need to Know',
    brief: 'A deep look at the cost arbitrage in cross-border clinical development and the operational considerations that determine success.',
    href: '/insights/chinese-cros-cost-arbitrage',
    image: croCoverImg,
  },
  {
    category: 'AI & ADVISORY',
    title: 'The 3× Deliverable Model: How AI Is Reshaping Biotech Consulting',
    brief: 'Why the future of advisory isn\'t cheaper consulting — it\'s fundamentally better outcomes delivered through AI-augmented intelligence.',
    href: '/insights/ai-reshaping-biotech-consulting',
    image: aiCoverImg,
  },
  {
    category: 'INSTITUTIONAL PARTNERSHIPS',
    title: 'Building Hospital Partnerships Across the Pacific: A Practitioner\'s Guide',
    brief: 'Lessons from structuring US–China academic medical center collaborations, from framework design to ongoing management.',
    href: '/insights/pacific-hospital-partnerships',
    image: snap2Img,
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
          <h2 className="section-heading">Our Thinking</h2>
        </div>

        {/* Article cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              to={article.href}
              className={`fade-in stagger-${index + 1} bg-white rounded-lg overflow-hidden group cursor-pointer card-lift shadow-card flex flex-col`}
            >
              {/* Card image — real photo or brand gradient */}
              <div className={`relative h-44 overflow-hidden ${article.image ? '' : `bg-gradient-to-br ${article.gradient}`}`}>
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <>
                    {/* Decorative geometric lines */}
                    <div className="absolute inset-0 opacity-[0.07]" style={{
                      backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30.5%, rgba(255,255,255,0.5) 31%, transparent 31.5%), linear-gradient(-45deg, transparent 70%, rgba(255,255,255,0.3) 70.5%, rgba(255,255,255,0.3) 71%, transparent 71.5%)',
                    }} />
                    {/* Icon */}
                    <div className="absolute bottom-4 right-5">
                      {article.icon}
                    </div>
                  </>
                )}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
