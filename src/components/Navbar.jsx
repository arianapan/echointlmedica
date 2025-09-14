import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from '../assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeSection, setActiveSection] = useState('hero'); // 添加当前激活区域状态
  const location = useLocation();
  
  // 处理滚动时导航栏显示/隐藏和激活状态
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 50;
      
      // 顶部时不隐藏
      if (scrollTop <= 0) {
        setHeaderHidden(false);
        setLastScrollTop(scrollTop);
        return;
      }
      
      // 超过阈值时判断滚动方向
      if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
        setHeaderHidden(scrollTop > lastScrollTop);
        setLastScrollTop(scrollTop);
      }

      // 检查当前激活的区域
      const sections = ['hero', 'about', 'products', 'services', 'mission', 'contact'];
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 考虑导航栏高度，当元素顶部距离视窗顶部小于100px时认为已到达该区域
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        // 更新URL hash
        window.history.replaceState(null, null, `#${currentSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // 初始检查
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, activeSection]);
  
  // 导航链接数据
  const navLinks = [
    { path: '/#hero', label: 'Home' },
    { path: '/#about', label: 'About' },
    { path: '/#products', label: 'Products' },
    { path: '/#services', label: 'Services' },
    { path: '/#mission', label: 'Mission' },
    { path: '/#contact', label: 'Contact' }
  ];
  
  // 判断当前激活的链接
  const getIsActive = (path) => {
    // 特殊处理感谢页
    if (location.pathname === '/thanks') {
      return path === '/#contact';
    }
    
    // 获取路径对应的区域ID
    const sectionId = path.replace('/#', '');
    return activeSection === sectionId;
  };
  
  // 点击链接后关闭移动菜单并滚动到目标位置
  const handleLinkClick = (path) => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
    
    // 获取目标元素的ID（去掉#/）
    const targetId = path.replace('/#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // 立即更新激活状态
      setActiveSection(targetId);
      
      // 平滑滚动到目标元素
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // 更新URL hash
      window.history.replaceState(null, null, `#${targetId}`);
    }
  };
  
  return (
    <header 
      className={`bg-white shadow-sm fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        headerHidden ? 'translate-y-[-100%]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
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
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                className={`text-textDark font-medium relative py-2 transition-colors hover:text-primary ${
                  getIsActive(link.path) ? 'text-secondary font-semibold' : ''
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.label}
                {getIsActive(link.path) ? (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                )}
              </button>
            ))}
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden text-secondary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  getIsActive(link.path)
                    ? 'text-secondary bg-lightBlue'
                    : 'text-textLight hover:bg-lightBg hover:text-primary'
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;