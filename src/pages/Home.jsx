import { Suspense, lazy, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';

const AboutSection = lazy(() => import('../components/AboutSection'));
const ServiceSection = lazy(() => import('../components/ServiceCarousel'));
const AIAdvantageSection = lazy(() => import('../components/MissionSection'));
const ResultsSection = lazy(() => import('../components/ResultsSection'));
const PricingTiers = lazy(() => import('../components/PricingTiers'));
const PricingDetails = lazy(() => import('../components/PricingDetails'));
const QuoteSection = lazy(() => import('../components/QuoteSection'));
const InsightsSection = lazy(() => import('../components/InsightsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

/* Thin gray divider between light-background sections */
const Divider = () => (
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
    <hr className="border-borderLight" />
  </div>
);

const Home = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    let attempts = 0;
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        document.documentElement.style.scrollBehavior = prev;
        return;
      }
      if (attempts++ < 20) setTimeout(scrollToTarget, 50);
    };
    scrollToTarget();
  }, [hash]);

  return (
    <div>
      {/* 1. Hero — dark, full-screen carousel with background images */}
      <HeroCarousel />

      {/* 2. About — establish credibility right after hero */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <AboutSection />
      </Suspense>

      {/* ─ divider ─ */}
      <Divider />

      {/* 3. Services — What we do (companion to About) */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <ServiceSection />
      </Suspense>

      {/* 4. Pricing — 3-tier summary + collapsible feature matrix / add-ons / scenarios / FAQ */}
      <Suspense fallback={<section style={{ minHeight: '500px' }} aria-hidden="true" />}>
        <PricingTiers variant="home">
          <PricingDetails />
        </PricingTiers>
      </Suspense>

      {/* 5. AI Advantage — dark section, numbered steps + metrics */}
      <Suspense fallback={<section style={{ minHeight: '500px' }} aria-hidden="true" />}>
        <AIAdvantageSection />
      </Suspense>

      {/* 6. Results — white, case study cards */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <ResultsSection />
      </Suspense>

      {/* 7. Quote — dark statement break */}
      <Suspense fallback={<section style={{ minHeight: '200px' }} aria-hidden="true" />}>
        <QuoteSection />
      </Suspense>

      {/* 8. Insights — light gray, article cards */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <InsightsSection />
      </Suspense>

      {/* 9. Contact — dark, full form + info */}
      <Suspense fallback={<section style={{ minHeight: '300px' }} aria-hidden="true" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;
