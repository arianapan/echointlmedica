import { useEffect } from 'react';

const AboutSection = () => {
  // 处理滚动动画
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#about .fade-in, #about .scale-in');
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
  
  // 统计数据
  const stats = [
    { number: '500+', label: 'Partner Hospitals' },
    { number: '100+', label: 'Medical Groups' },
    { number: '15+', label: 'U.S. Partners' },
    { number: '3', label: 'Regions Served' }
  ];
  
  return (
    <section id="about" className="py-20 bg-lightBg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 标题区 */}
        <div className="text-center mb-15 fade-in">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">ABOUT US</h2>
          <div className="section-divider"></div>
        </div>
        
        {/* 内容区 */}
        <div className="flex flex-col xl:flex-row gap-16 items-start">
          {/* 左侧文字 */}
          <div className="xl:w-3/5 fade-in">
            <p className="text-textMedium text-lg leading-relaxed mb-6">
              Echo International Medica is a cross-border distributor of high-quality surgical and aesthetic medical devices, connecting U.S. innovations with hospitals and clinics in Hong Kong, Macau, Taiwan, and China mainland.
            </p>
            <p className="text-textMedium text-lg leading-relaxed mb-6">
              Founded with a vision to bridge global healthcare innovation with Asian markets, we provide end-to-end solutions from regulatory compliance to distribution and customer support.
            </p>
            <p className="text-textMedium text-lg leading-relaxed mb-8">
              Our team of medical and regulatory experts ensures that cutting-edge technologies reach the healthcare providers who need them most, ultimately benefiting patients across the region.
            </p>
            <button 
              className="btn-primary inline-block"
              onClick={() => {
                const targetElement = document.getElementById('mission');
                if (targetElement) {
                  // 更新URL hash
                  window.history.replaceState(null, null, '#mission');
                  
                  targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                  
                  // 手动触发滚动事件
                  setTimeout(() => {
                    window.dispatchEvent(new Event('scroll'));
                  }, 100);
                }
              }}
            >
              Our Mission
            </button>
          </div>
          
          {/* 右侧统计卡片 */}
          <div className="xl:w-2/5 grid grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="scale-in bg-white rounded-lg shadow-sm p-6 text-center hover:-translate-y-2 transition-transform duration-300 min-h-[140px] flex flex-col justify-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-3">{stat.number}</div>
                <div className="text-textLight text-base lg:text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;