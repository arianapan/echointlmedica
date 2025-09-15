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

  const IconSvg = ({ name, size = 34 }) => {
    const common = {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      'aria-hidden': true,
      style: { 
        flexShrink: 0,
        shapeRendering: 'geometricPrecision'
      }
    };
    
    switch (name) {
      case 'doc':
        return (
          <svg {...common}>
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            <path d="M8,12V14H16V12H8M8,16V18H13V16H8Z" />
          </svg>
        );
      case 'truck':
        return (
          <svg {...common}>
            <path d="M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z" />
          </svg>
        );
      case 'hospital':
        return (
          <svg {...common}>
            <path d="M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
          </svg>
        );
      case 'training':
        return (
          <svg {...common}>
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
          </svg>
        );
      case 'bell':
        return (
          <svg {...common}>
            <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.19 14,4.1 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
          </svg>
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
                      <div 
                        className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-all duration-300"
                        style={{ minWidth: '5rem', minHeight: '5rem' }}
                      >
                        <IconSvg name={service.icon} size={34} />
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
                      <div 
                        className="w-20 h-20 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-all duration-300"
                        style={{ minWidth: '5rem', minHeight: '5rem' }}
                      >
                        <IconSvg name={service.icon} size={34} />
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