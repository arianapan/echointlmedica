import { Suspense, lazy } from 'react';
const HeroCarousel = lazy(() => import('../components/HeroCarousel'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const ProductSection = lazy(() => import('../components/ProductSection'));
const ServiceCarousel = lazy(() => import('../components/ServiceCarousel'));
const MissionSection = lazy(() => import('../components/MissionSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Home = () => {
  return (
    <div className="pt-16"> {/* 为固定导航栏留出空间 */}
      <Suspense fallback={null}>
        <HeroCarousel />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <ProductSection />
      </Suspense>
      <Suspense fallback={null}>
        <ServiceCarousel />
      </Suspense>
      <Suspense fallback={null}>
        <MissionSection />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;