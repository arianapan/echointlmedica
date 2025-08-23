import { useEffect } from 'react';

const MissionSection = () => {
  // 处理滚动动画
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#mission .fade-in');
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
  
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-primary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 标题区 */}
        <div className="text-center mb-15 fade-in">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">OUR MISSION</h2>
          <div className="section-divider"></div>
        </div>
        
        {/* 使命内容 */}
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h3 className="text-2xl font-bold uppercase tracking-wide mb-6 text-textDark">
            Bridging Global Innovation with Local Healthcare
          </h3>
          <p className="text-textMedium text-lg leading-relaxed mb-6">
            To bridge the gap between global medical innovation and clinical excellence in Greater China by providing reliable distribution, regulatory expertise, and strategic partnerships that enhance patient outcomes and healthcare quality.
          </p>
          <p className="text-textMedium text-lg leading-relaxed">
            We believe that patients across Asia deserve access to the same cutting-edge medical technologies available in the United States, and we're committed to making that a reality through our expertise and network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;