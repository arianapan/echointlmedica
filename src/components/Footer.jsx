import { Link } from 'react-router-dom';
import assets from '../assets';

const Footer = () => {
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
    { label: 'LinkedIn', path: '#' },
    { label: 'Twitter', path: '#' },
    { label: 'Facebook', path: '#' },
    { label: 'Instagram', path: '#' }
  ];

  const SocialIcon = ({ label }) => {
    const common = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', width: 18, height: 18, fill: 'currentColor', 'aria-hidden': true };
    switch (label) {
      case 'LinkedIn':
        return (
          <svg {...common}><path d="M6.94 8.5H4V20h2.94V8.5zM5.47 7.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM20 20h-2.94v-5.6c0-1.33-.48-2.24-1.67-2.24-.91 0-1.45.61-1.69 1.2-.09.22-.11.53-.11.84V20H9.65s.04-9.87 0-10.9H12.6v1.55c.39-.6 1.08-1.45 2.63-1.45 1.92 0 3.36 1.25 3.36 3.94V20z"/></svg>
        );
      case 'Twitter':
        return (
          <svg {...common}><path d="M22 5.92a8.2 8.2 0 01-2.36.65 4.13 4.13 0 001.8-2.28 8.23 8.23 0 01-2.6 1 4.11 4.11 0 00-7 3.75A11.67 11.67 0 013 4.89a4.1 4.1 0 001.27 5.48 4.06 4.06 0 01-1.86-.52v.05a4.12 4.12 0 003.3 4.04 4.18 4.18 0 01-1.85.07 4.12 4.12 0 003.84 2.86A8.25 8.25 0 012 18.57 11.64 11.64 0 008.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0022 5.92z"/></svg>
        );
      case 'Facebook':
        return (
          <svg {...common}><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.52h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.91h-2.39v7.04A10 10 0 0022 12z"/></svg>
        );
      case 'Instagram':
        return (
          <svg {...common}><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5A4.5 4.5 0 1112 17.5 4.5 4.5 0 0112 7.5zm0 2A2.5 2.5 0 1014.5 12 2.5 2.5 0 0012 9.5zM17.8 6.2a1 1 0 11-1.6 1.2 1 1 0 011.6-1.2z"/></svg>
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
    <footer className="bg-lightBg text-textLight pt-15 pb-6 border-t border-borderLight">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* 页脚内容区 */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* 左侧Logo和描述 */}
          <div className="md:w-1/3">
            <Link to="/" className="flex items-center mb-6">
              <picture>
                <source type="image/webp" srcSet={assets.companylogoWebp128} />
                <img 
                  src={assets.companylogo} 
                  alt="Echo International Medica Logo" 
                  className="h-8 w-auto mr-2"
                  width="128"
                  height="128"
                  decoding="async"
                />
              </picture>
              <span className="text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent whitespace-nowrap leading-none">
                Echo International Medica
              </span>
            </Link>
            <p className="mb-6">
              Bridging global medtech with Greater China through expert distribution and regulatory guidance.
            </p>
            
            {/* 社交媒体链接 */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-borderLight text-textLight flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
          
          {/* 中间快速链接 */}
          <div>
            <h4 className="text-textDark font-semibold mb-6 pb-2 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="text-textLight hover:text-primary transition-colors text-left"
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 右侧区域链接 */}
          <div>
            <h4 className="text-textDark font-semibold mb-6 pb-2 relative">
              Regions
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {regions.map((region, index) => (
                <li key={index}>
                  <Link 
                    to={region.path} 
                    className="text-textLight hover:text-primary transition-colors"
                  >
                    {region.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="text-center pt-6 border-t border-borderLight text-sm">
          <p>&copy; 2025 Echo International Medica | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;