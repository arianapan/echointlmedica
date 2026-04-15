import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from '../assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  const navLinks = [
    { path: '/#about', label: 'About' },
    { path: '/services/fractional-ai-cfo', label: 'Pricing', external: true },
    { path: '/#ai-advantage', label: 'AI Approach' },
    { path: '/#results', label: 'Results' },
    { path: '/#insights', label: 'Insights' },
  ];

  // Track scroll position for navbar style + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'services', 'ai-advantage', 'results', 'insights', 'about', 'contact'];
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const getIsActive = useCallback((path) => {
    if (path && !path.startsWith('/#')) {
      return location.pathname === path;
    }
    if (location.pathname === '/thanks') return path === '/#contact';
    const sectionId = path.replace('/#', '');
    return activeSection === sectionId;
  }, [location.pathname, activeSection]);

  const handleLinkClick = useCallback((path) => {
    setIsMenuOpen(false);
    const targetId = path.replace('/#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setActiveSection(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, null, `#${targetId}`);
    }
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-white border-b border-borderLight shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center min-w-0">
              <picture className="block">
                <source type="image/webp" srcSet={assets.companylogoWebp128} />
                <img
                  src={assets.companylogo}
                  alt="Echo International Medica Logo"
                  className={`h-8 w-auto mr-2.5 shrink-0 transition-all duration-500 ${
                    scrolled ? '' : 'brightness-0 invert'
                  }`}
                  width="128"
                  height="128"
                  decoding="async"
                />
              </picture>
              <span
                className={`font-heading font-bold uppercase whitespace-nowrap tracking-tight text-[clamp(12px,3.5vw,17px)] transition-all duration-500 ${
                  scrolled
                    ? 'bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'
                    : 'text-white'
                }`}
              >
                Echo International Medica
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isExternal = link.external || !link.path.startsWith('/#');
                const className = `relative py-2 text-[15px] font-medium transition-colors duration-300 cursor-pointer ${
                  getIsActive(link.path)
                    ? scrolled ? 'text-secondary' : 'text-white'
                    : scrolled
                      ? 'text-textMedium hover:text-secondary'
                      : 'text-white/70 hover:text-white'
                }`;
                const underline = getIsActive(link.path) && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? 'bg-primary' : 'bg-white'
                  }`} />
                );
                return isExternal ? (
                  <Link key={link.path} to={link.path} className={className}>
                    {link.label}
                    {underline}
                  </Link>
                ) : (
                  <button
                    key={link.path}
                    className={className}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.label}
                    {underline}
                  </button>
                );
              })}
              <button
                className={`!py-2.5 !px-6 text-[15px] font-heading font-semibold rounded transition-all duration-300 cursor-pointer ${
                  scrolled
                    ? 'bg-primary text-white hover:bg-secondary'
                    : 'bg-white text-secondary hover:bg-white/90'
                }`}
                onClick={() => handleLinkClick('/#contact')}
              >
                Get in Touch
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                scrolled || isMenuOpen ? 'text-secondary' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-white flex flex-col lg:hidden">
          <div className="h-16" />
          <nav className="flex-1 flex flex-col justify-center px-10 space-y-2">
            {navLinks.map((link) => {
              const isExternal = link.external || !link.path.startsWith('/#');
              const className = `text-left text-2xl font-heading font-semibold py-3 border-b border-borderLight transition-colors ${
                getIsActive(link.path) ? 'text-primary' : 'text-secondary hover:text-primary'
              }`;
              return isExternal ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className={className}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.path}
                  className={className}
                  onClick={() => handleLinkClick(link.path)}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              className="btn-primary mt-8 text-lg w-full cursor-pointer"
              onClick={() => handleLinkClick('/#contact')}
            >
              Get in Touch
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
