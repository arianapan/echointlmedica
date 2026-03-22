import { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import assets from '../assets';

const slides = [
  {
    color: '#0d2b45',
    image: assets.background1,
    label: 'AI-POWERED BIOTECH ADVISORY',
    headline: 'Cross-border biotech strategy, accelerated.',
    description:
      'We help US biotech companies raise capital, enter Greater China, and build institutional partnerships — powered by AI-augmented intelligence.',
    cta: 'Start a Conversation',
    ctaTarget: '#contact',
  },
  {
    color: '#2e8bc0',
    image: assets.background2,
    label: 'CROSS-BORDER EXECUTION',
    headline: <>Navigate China<br />with confidence.</>,
    description:
      'End-to-end advisory for US biotech companies entering Greater China — from CRO selection and clinical cost modeling to regulatory strategy.',
    cta: 'Explore Services',
    ctaTarget: '#services',
  },
  {
    color: '#1a4a6e',
    image: assets.background3,
    label: 'AI-AUGMENTED INTELLIGENCE',
    headline: <>3× the output.<br />A fraction of the cost.</>,
    description:
      'Proprietary AI workflows collapse production time while maintaining premium advisory quality. More insight, faster.',
    cta: 'Our AI Approach',
    ctaTarget: '#ai-advantage',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { setHeroColor } = useAppContext();

  // Sync navbar color with current slide
  useEffect(() => {
    setHeroColor(slides[current].color);
  }, [current, setHeroColor]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 400);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = useCallback((index) => {
    if (index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 400);
  }, [current]);

  const handleCtaClick = useCallback((target) => {
    const el = document.getElementById(target.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, null, target);
    }
  }, []);

  const slide = slides[current];

  return (
    <section id="hero">
      {/* Main hero area */}
      <div
        className="min-h-[85vh] md:min-h-[90vh] flex items-center relative overflow-hidden"
        style={{ backgroundColor: slide.color }}
      >
        {/* Background images — all preloaded, fade in/out */}
        {slides.map((s, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${s.image})`,
              opacity: index === current ? 1 : 0,
            }}
          >
            {/* Layered overlay for depth + readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full pt-28 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-3xl">
            {/* Label */}
            <span
              className={`inline-block text-white/50 font-heading font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-400 ${
                isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.label}
            </span>

            {/* Headline */}
            <h1
              className={`font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white mb-6 transition-all duration-400 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              {slide.headline}
            </h1>

            {/* Description */}
            <p
              className={`text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 transition-all duration-400 delay-75 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.description}
            </p>

            {/* CTA button */}
            <button
              className={`bg-white text-secondary font-heading font-semibold px-8 py-4 rounded text-base md:text-lg cursor-pointer hover:bg-white/90 transition-all duration-400 delay-100 ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              onClick={() => handleCtaClick(slide.ctaTarget)}
            >
              {slide.cta}
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-3 mt-16 md:mt-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                  index === current
                    ? 'bg-white w-10'
                    : 'bg-white/30 w-6 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroCarousel;
