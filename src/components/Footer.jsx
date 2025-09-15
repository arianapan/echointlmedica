import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import assets from '../assets';
import FooterSkeleton from './FooterSkeleton';

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // 延迟加载 Footer 内容，确保关键渲染路径完成
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 如果还未加载，显示骨架屏
  if (!isLoaded) {
    return <FooterSkeleton />;
  }
  
  // 快速链接数据
  const quickLinks = [
    { path: '/#hero', label: 'Home' },
    { path: '/#about', label: 'About Us' },
    { path: '/#products', label: 'Products' },
    { path: '/#services', label: 'Services' },
    { path: '/#mission', label: 'Mission' },
    { path: '/#contact', label: 'Contact' }
  ];
  
  // 区域链接数据
  const regions = [
    { path: '#', label: 'Hong Kong' },
    { path: '#', label: 'Macau' },
    { path: '#', label: 'Taiwan' },
    { path: '#', label: 'Mainland China' },
    { path: '#', label: 'United States' }
  ];
  
  // 社交媒体数据
  const socialLinks = [
    { label: 'LinkedIn', path: 'https://www.linkedin.com/company/echo-international-medica/' },
    { label: 'Twitter', path: '#' },
    { label: 'Facebook', path: '#' },
    { label: 'Instagram', path: '#' }
  ];

  const isUsableLink = (path) => path && path !== '#';

  const SocialIcon = ({ label }) => {
    const common = { 
      xmlns: 'http://www.w3.org/2000/svg', 
      viewBox: '0 0 24 24', 
      width: 22, 
      height: 22, 
      fill: 'currentColor', 
      'aria-hidden': true,
      style: { 
        flexShrink: 0,
        shapeRendering: 'geometricPrecision'
      }
    };
    
    switch (label) {
      case 'LinkedIn':
        return (
          <svg {...common}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'Twitter':
        return (
          <svg {...common}>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
      case 'Facebook':
        return (
          <svg {...common}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg {...common}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // 处理链接点击滚动
  const handleLinkClick = (path) => {
    const targetId = path.replace('/#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // 更新URL hash，这样可以让导航栏的滚动监听检测到变化
      window.history.replaceState(null, null, `#${targetId}`);
      
      // 平滑滚动到目标元素
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // 手动触发一个滚动事件，让导航栏能检测到变化
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
      }, 100);
    }
  };
  
  return (
    <footer 
      className="bg-lightBg text-textLight pt-15 pb-6 border-t border-borderLight"
      style={{ minHeight: '400px' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 页脚内容区 */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* 左侧Logo和描述 */}
          <div className="md:w-1/3">
            <Link to="/" className="flex items-center mb-6">
              <div className="w-8 h-8 flex-shrink-0 mr-2 hidden sm:block">
                <picture>
                  <source type="image/webp" srcSet={assets.companylogoWebp128} />
                  <img 
                    src={assets.companylogo} 
                    alt="Echo International Medica Logo" 
                    className="w-full h-full object-contain"
                    width="32"
                    height="32"
                    decoding="async"
                    loading="eager"
                  />
                </picture>
              </div>
              <span 
                className="text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent whitespace-nowrap leading-none"
                style={{ 
                  minHeight: '1.5rem',
                  display: 'inline-block',
                  fontDisplay: 'swap'
                }}
              >
                Echo International Medica
              </span>
            </Link>
            <p 
              className="mb-6"
              style={{ 
                minHeight: '3rem',
                fontDisplay: 'swap'
              }}
            >
              Bridging Innovation in Medical Devices and Medicines Across Borders.
            </p>
            
            {/* 社交媒体链接 */}
            <div 
              className="flex space-x-4"
              style={{ minHeight: '2.5rem' }}
            >
              {socialLinks.map((social, index) => {
                const baseClass = "w-12 h-12 rounded-full bg-borderLight text-textLight flex items-center justify-center transition-all duration-300 flex-shrink-0";
                const hoverClass = "hover:bg-primary hover:text-white hover:-translate-y-1";
                const commonStyle = { minWidth: '3rem', minHeight: '3rem' };
                const usable = isUsableLink(social.path);
                if (usable) {
                  return (
                    <a
                      key={index}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${baseClass} ${hoverClass}`}
                      aria-label={social.label}
                      style={commonStyle}
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  );
                }
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`${social.label} (unavailable)`}
                    className={`${baseClass} ${hoverClass}`}
                    style={commonStyle}
                    aria-disabled="true"
                    onClick={(e) => { /* 无链接：点击无动作 */ }}
                  >
                    <SocialIcon label={social.label} />
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* 中间快速链接 */}
          <div style={{ minHeight: '200px' }}>
            <h4 
              className="text-textDark font-semibold mb-6 pb-2 relative"
              style={{ minHeight: '2rem', fontDisplay: 'swap' }}
            >
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3" style={{ minHeight: '150px' }}>
              {quickLinks.map((link, index) => (
                <li key={index} style={{ minHeight: '1.5rem' }}>
                  <button 
                    className="text-textLight hover:text-primary transition-colors text-left"
                    onClick={() => handleLinkClick(link.path)}
                    style={{ fontDisplay: 'swap' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 右侧区域链接 */}
          <div style={{ minHeight: '200px' }}>
            <h4 
              className="text-textDark font-semibold mb-6 pb-2 relative"
              style={{ minHeight: '2rem', fontDisplay: 'swap' }}
            >
              Regions
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3" style={{ minHeight: '150px' }}>
              {regions.map((region, index) => {
                const usable = isUsableLink(region.path);
                return (
                  <li key={index} style={{ minHeight: '1.5rem' }}>
                    {usable ? (
                      <Link
                        to={region.path}
                        className="text-textLight hover:text-primary transition-colors"
                        style={{ fontDisplay: 'swap' }}
                      >
                        {region.label}
                      </Link>
                    ) : (
                      <span
                        className="text-textLight cursor-default opacity-80"
                        style={{ fontDisplay: 'swap' }}
                        aria-disabled="true"
                      >
                        {region.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div 
          className="text-center pt-6 border-t border-borderLight text-sm"
          style={{ minHeight: '3rem' }}
        >
          <p style={{ fontDisplay: 'swap' }}>
            &copy; 2025 Echo International Medica | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;