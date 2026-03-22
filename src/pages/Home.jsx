import { Suspense, lazy } from 'react';
import HeroCarousel from '../components/HeroCarousel';

const AboutSection = lazy(() => import('../components/AboutSection'));
const ServiceSection = lazy(() => import('../components/ServiceCarousel'));
const AIAdvantageSection = lazy(() => import('../components/MissionSection'));
const ResultsSection = lazy(() => import('../components/ResultsSection'));
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

      {/* 3. Services — dark marquee + white cards with slide-in detail */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <ServiceSection />
      </Suspense>

      {/* 4. AI Advantage — dark section, numbered steps + metrics */}
      <Suspense fallback={<section style={{ minHeight: '500px' }} aria-hidden="true" />}>
        <AIAdvantageSection />
      </Suspense>

      {/* 5. Results — white, case study cards */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <ResultsSection />
      </Suspense>

      {/* 6. Quote — dark statement break */}
      <Suspense fallback={<section style={{ minHeight: '200px' }} aria-hidden="true" />}>
        <QuoteSection />
      </Suspense>

      {/* 7. Insights — light gray, article cards */}
      <Suspense fallback={<section style={{ minHeight: '400px' }} aria-hidden="true" />}>
        <InsightsSection />
      </Suspense>

      {/* 8. Contact — dark, full form + info */}
      <Suspense fallback={<section style={{ minHeight: '300px' }} aria-hidden="true" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;
