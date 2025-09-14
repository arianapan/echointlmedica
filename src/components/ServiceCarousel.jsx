import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceCarousel = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  // 检查是否为移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 处理滚动动画
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#services .fade-in, #services .scale-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);
  
  // 服务数据
  const services = [
    {
      icon: 'doc',
      title: 'Regulatory Compliance',
      description: 'Expert guidance through complex approval processes for medical devices in Greater China, including LRP services and documentation.'
    },
    {
      icon: 'truck',
      title: 'Distribution Network',
      description: 'Extensive logistics network ensuring timely delivery and efficient supply chain management across all regions.'
    },
    {
      icon: 'hospital',
      title: 'Hospital Engagement',
      description: 'Direct relationships with key decision-makers in hospitals and clinics throughout Mainland China, Hong Kong, Taiwan and Macau.'
    },
    {
      icon: 'training',
      title: 'Training & Support',
      description: 'Multilingual customer training and ongoing technical support for all distributed products.'
    },
    {
      icon: 'bell',
      title: 'Market Expansion',
      description: 'Strategic guidance for U.S. manufacturers looking to enter and expand in Asian healthcare markets.'
    }
  ];

  const IconSvg = ({ name, size = 28 }) => {
    const common = {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      'aria-hidden': true
    };
    switch (name) {
      case 'doc':
        return (
          <svg {...common}><path d="M14 2H6c-1.1 0-2 .9-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm0 7V3.5L18.5 9H15a1 1 0 01-1-1z"/></svg>
        );
      case 'truck':
        return (
          <svg {...common}><path d="M20 8h-3V4H3v10h2a3 3 0 006 0h2a3 3 0 006 0h1v-4l-2-2zm-9 6a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        );
      case 'hospital':
        return (
          <svg {...common}><path d="M3 21V3h10l6 6v12H3zm9-11V7H9v3H6v3h3v3h3v-3h3v-3h-3z"/></svg>
        );
      case 'training':
        return (
          <svg {...common}><path d="M4 6h16v2H4V6zm0 4h10v2H4v-2zm0 4h16v2H4v-2zm12-7h4v4h-4V7z"/></svg>
        );
      case 'bell':
        return (
          <svg {...common}><path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11a6 6 0 10-12 0v5L4 18v2h16v-2l-2-2z"/></svg>
        );
      default:
        return null;
    }
  };
  
  // 桌面端轮播配置 - 简化版本
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: (
      <button aria-label="Previous slide" className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-primary flex items-center justify-center hover:bg-white shadow-md transition-all z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
    ),
    nextArrow: (
      <button aria-label="Next slide" className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-primary flex items-center justify-center hover:bg-white shadow-md transition-all z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
      </button>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <section id="services" className="py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 标题区 */}
        <div className="text-center mb-15 fade-in">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">OUR SERVICES</h2>
          <div className="section-divider"></div>
        </div>
        
  {/* 服务轮播 */}
  <div className="relative pt-10" style={{ minHeight: '380px', paddingBottom: '24px' }}>
          {/* 移动端：简化的轮播显示 */}
          {isMobile ? (
            <div className="mobile-service-carousel">
              <Slider 
                dots={true}
                infinite={true}
                speed={600}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                arrows={true}
                prevArrow={
                  <button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-primary flex items-center justify-center hover:bg-white shadow-md transition-all z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                  </button>
                }
                nextArrow={
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-primary flex items-center justify-center hover:bg-white shadow-md transition-all z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
                  </button>
                }
              >
                {services.map((service, index) => (
                  <div key={index} className="px-4">
                    <div className="scale-in bg-white rounded-lg shadow-sm p-6 text-center min-h-[350px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                      {/* 服务图标 */}
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-all duration-300">
                        <IconSvg name={service.icon} size={28} />
                      </div>
                      
                      {/* 服务内容 */}
                      <h3 className="text-xl font-semibold mb-4 text-textDark min-h-[60px] flex items-center justify-center">
                        {service.title}
                      </h3>
                      <p className="text-textLight flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            /* 桌面端：正常的轮播显示 */
            <div className="desktop-service-carousel">
              <Slider {...settings}>
                {services.map((service, index) => (
                  <div key={index} className="px-4">
                    <div className="scale-in bg-white rounded-lg shadow-sm p-6 text-center min-h-[350px] flex flex-col justify-between hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                      {/* 服务图标 */}
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-all duration-300">
                        <IconSvg name={service.icon} size={28} />
                      </div>
                      
                      {/* 服务内容 */}
                      <h3 className="text-xl font-semibold mb-4 text-textDark min-h-[60px] flex items-center justify-center">
                        {service.title}
                      </h3>
                      <p className="text-textLight flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;