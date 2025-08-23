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
    { icon: 'fab fa-linkedin-in', path: '#' },
    { icon: 'fab fa-twitter', path: '#' },
    { icon: 'fab fa-facebook-f', path: '#' },
    { icon: 'fab fa-instagram', path: '#' }
  ];

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
              <img 
                src={assets.companylogo} 
                alt="Echo International Medica Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
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
                  className="w-10 h-10 rounded-full bg-borderLight text-textLight flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <i className={social.icon}></i>
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