import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets';

const ProductSection = () => {
  // 处理滚动动画
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#products .fade-in, #products .scale-in');
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
  
  // 产品数据
  const products = [
    {
      title: 'Surgiform (U.S.) – EPTFE Implants',
      image: assets.Product1,
      srcSet: assets.Product1SrcSet,
      features: [
        'Biocompatible facial and body implants',
        'Trusted by surgeons in the U.S.',
        'Launching in Hong Kong and Macau'
      ],
      alt: 'Surgiform EPTFE Implants'
    },
    {
      title: 'ScarX – Advanced Scar Gel',
      image: assets.Product2,
      srcSet: assets.Product2SrcSet,
      features: [
        'Exclusive distributor in Asia',
        'Clinically backed scar care',
        'Targeting plastic surgery and postpartum segments'
      ],
      alt: 'ScarX Advanced Scar Gel'
    },
    {
      title: 'MediScan – Diagnostic Tools',
      image: assets.Product3,
      srcSet: assets.Product3SrcSet,
      features: [
        'High-throughput automated screening',
        'Precision assay reproducibility',
        'Integrated data analysis software'
      ],
      alt: 'MediScan Diagnostic Tools'
    }
  ];
  
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 标题区 */}
        <div className="text-center mb-15 fade-in">
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">FEATURED PRODUCTS</h2>
          <div className="section-divider"></div>
        </div>
        
        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="scale-in bg-white rounded-lg shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-md transition-all duration-300 flex flex-col h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* 产品图片 */}
              <div className="h-72 sm:h-80 overflow-hidden">
                <picture>
                  <source type="image/avif" srcSet={product.srcSet.avif} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
                  <source type="image/webp" srcSet={product.srcSet.webp} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
                  <source type="image/jpeg" srcSet={product.srcSet.jpg} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
                  <img 
                    src={product.image} 
                    alt={product.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="432"
                    height="288"
                  />
                </picture>
              </div>
              
              {/* 产品信息 */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-textDark">{product.title}</h3>
                <ul className="text-textLight mb-6 list-disc list-inside pl-4 space-y-2 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="pl-2">{feature}</li>
                  ))}
                </ul>
                <button 
                  className="btn-primary inline-block"
                  onClick={() => {
                    const targetElement = document.getElementById('contact');
                    if (targetElement) {
                      // 更新URL hash
                      window.history.replaceState(null, null, '#contact');
                      
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
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;