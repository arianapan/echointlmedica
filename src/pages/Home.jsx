import HeroCarousel from '../components/HeroCarousel';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import ServiceCarousel from '../components/ServiceCarousel';
import MissionSection from '../components/MissionSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="pt-16"> {/* 为固定导航栏留出空间 */}
      <HeroCarousel />
      <AboutSection />
      <ProductSection />
      <ServiceCarousel />
      <MissionSection />
      <ContactSection />
    </div>
  );
};

export default Home;