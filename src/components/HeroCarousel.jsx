import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import assets from '../assets';

// 自定义箭头组件
const CustomPrevArrow = ({ onClick }) => (
  <button 
    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-all z-10"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button 
    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-all z-10"
    onClick={onClick}
    aria-label="Next slide"
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

// 移动端自定义箭头组件
const MobilePrevArrow = ({ onClick }) => (
  <button 
    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-all z-10"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <i className="fas fa-chevron-left"></i>
  </button>
);

const MobileNextArrow = ({ onClick }) => (
  <button 
    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-all z-10"
    onClick={onClick}
    aria-label="Next slide"
  >
    <i className="fas fa-chevron-right"></i>
  </button>
);

const HeroCarousel = () => {
  const sliderRef = useRef(null);
  const carouselItems = [
    {
      title: 'BRIDGING GLOBAL <span>MEDTECH</span> WITH GREATER CHINA',
      description: 'Connecting U.S. medical innovations with healthcare providers across Hong Kong, Macau, Taiwan, and Mainland China through expert distribution and regulatory guidance.',
      backgroundImage: `url(https://picsum.photos/id/287/1920/1080)` // 第一张用在线图片
    },
    {
      title: 'GLOBAL <span>EXPERTISE</span>, LOCAL KNOWLEDGE',
      description: 'Our team combines international medical device experience with deep understanding of Asian healthcare markets to deliver seamless distribution solutions.',
      backgroundImage: `url(${assets.background2})` // 第二张用本地图片
    },
    {
      title: 'ENHANCING <span>HEALTHCARE</span> OUTCOMES',
      description: 'Bringing cutting-edge medical technologies to patients across Asia through strategic partnerships with leading U.S. manufacturers.',
      backgroundImage: `url(${assets.background3})` // 第三张用本地图片
    }
  ];
  
  // 轮播配置
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    dotsClass: 'slick-dots absolute bottom-8 z-10',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          prevArrow: <MobilePrevArrow />,
          nextArrow: <MobileNextArrow />,
          dotsClass: 'slick-dots absolute bottom-5 z-10'
        }
      }
    ]
  };
  
  // 初始化时检查可见性
  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('hero');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      }
    };
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="fade-in min-h-screen relative overflow-hidden"
    >
      <Slider ref={sliderRef} {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-screen">
            {/* 背景图片 - 使用对应的背景图片 */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: item.backgroundImage
              }}
            >
              {/* 半透明遮罩 */}
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            
            {/* 轮播内容 */}
            <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
              <div className="max-w-4xl text-center text-white px-6">
                <h1 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider uppercase leading-tight"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                  dangerouslySetInnerHTML={{ __html: item.title.replace('<span>', '<span class="text-primary">').replace('</span>', '</span>') }}
                ></h1>
                <p 
                  className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;