import { Suspense, lazy } from 'react';
import HeroCarousel from '../components/HeroCarousel';
const AboutSection = lazy(() => import('../components/AboutSection'));
// const ProductSection = lazy(() => import('../components/ProductSection'));
const ServiceCarousel = lazy(() => import('../components/ServiceCarousel'));
const MissionSection = lazy(() => import('../components/MissionSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Home = () => {
  return (
    <div className="pt-16"> {/* 为固定导航栏留出空间 */}
      {/* Hero 为首屏，使用同步加载，避免首屏空白导致 CLS */}
      <HeroCarousel />
      <Suspense fallback={<section style={{minHeight:'400px'}} aria-hidden="true"/>}>
        <AboutSection />
      </Suspense>
      {/* <Suspense fallback={<section style={{minHeight:'500px'}} aria-hidden="true"/>}>
        <ProductSection />
      </Suspense> */}
      <Suspense fallback={<section style={{minHeight:'420px'}} aria-hidden="true"/>}>
        <ServiceCarousel />
      </Suspense>
      <Suspense fallback={<section style={{minHeight:'360px'}} aria-hidden="true"/>}>
        <MissionSection />
      </Suspense>
      <Suspense fallback={<section style={{minHeight:'420px'}} aria-hidden="true"/>}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Home;