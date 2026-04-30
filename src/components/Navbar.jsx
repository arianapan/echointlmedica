import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import assets from '../assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    {
      path: '/#about',
      label: 'About',
      children: [
        { path: '/#services', label: 'Service' },
        { path: '/#engagement', label: 'Deliverables' },
      ],
    },
    {
      path: '/#ai-advantage',
      label: 'AI Approach',
      children: [
        { path: '/#ai-advantage', label: 'Methodology' },
        { path: '/#how-echo-compares', label: 'Comparative Advantages' },
      ],
    },
    { path: '/#results', label: 'Results' },
    {
      path: '/#insights',
      label: 'Insights',
      children: [
        { path: '/#insights', label: 'Articles' },
        { path: '/#faq', label: 'Q&A' },
      ],
    },
  ];

  // Track scroll position for navbar style + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'services', 'engagement', 'ai-advantage', 'how-echo-compares', 'results', 'insights', 'faq', 'about', 'contact'];
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

  const getIsActive = useCallback((link) => {
    const path = link.path;
    if (path && !path.startsWith('/#')) {
      return location.pathname === path;
    }
    if (location.pathname === '/thanks') return path === '/#contact';
    const ownId = path.replace('/#', '');
    if (activeSection === ownId) return true;
    if (link.children) {
      return link.children.some((c) => activeSection === c.path.replace('/#', ''));
    }
    return false;
  }, [location.pathname, activeSection]);

  const handleLinkClick = useCallback((path) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
    const targetId = path.replace('/#', '');

    const scrollToTarget = () => {
      const el = document.getElementById(targetId);
      if (el) {
        setActiveSection(targetId);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, null, `#${targetId}`);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTarget, 80);
      return;
    }

    scrollToTarget();
  }, [location.pathname, navigate]);

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
                const active = getIsActive(link);
                const baseClass = `relative py-2 text-[15px] font-medium transition-colors duration-300 cursor-pointer ${
                  active
                    ? scrolled ? 'text-secondary' : 'text-white'
                    : scrolled
                      ? 'text-textMedium hover:text-secondary'
                      : 'text-white/70 hover:text-white'
                }`;
                const underline = active && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300 ${
                    scrolled ? 'bg-primary' : 'bg-white'
                  }`} />
                );

                if (link.children) {
                  const isOpen = openDropdown === link.label;
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`${baseClass} flex items-center gap-1`}
                        onClick={() => handleLinkClick(link.path)}
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                        {underline}
                      </button>
                      {isOpen && (
                        <div className="absolute left-0 top-full pt-2 min-w-[220px]">
                          <div className="bg-white border border-borderLight rounded-md shadow-lg py-2">
                            {link.children.map((child) => (
                              <button
                                key={child.path}
                                className="w-full text-left px-4 py-2 text-[14px] text-textMedium hover:text-secondary hover:bg-lightBg transition-colors cursor-pointer"
                                onClick={() => handleLinkClick(child.path)}
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.path}
                    className={baseClass}
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
          <nav className="flex-1 flex flex-col px-10 py-6 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              const active = getIsActive(link);
              const baseClass = `text-left text-2xl font-heading font-semibold py-3 border-b border-borderLight transition-colors ${
                active ? 'text-primary' : 'text-secondary hover:text-primary'
              }`;

              if (link.children) {
                const isOpen = openMobileGroup === link.label;
                return (
                  <div key={link.path} className="border-b border-borderLight">
                    <button
                      className={`flex items-center justify-between w-full text-left text-2xl font-heading font-semibold py-3 transition-colors ${
                        active ? 'text-primary' : 'text-secondary hover:text-primary'
                      }`}
                      onClick={() => setOpenMobileGroup(isOpen ? null : link.label)}
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="pb-3 pl-2 flex flex-col">
                        <button
                          className="text-left text-base font-heading font-medium py-2 text-textMedium hover:text-primary"
                          onClick={() => handleLinkClick(link.path)}
                        >
                          Overview
                        </button>
                        {link.children.map((child) => (
                          <button
                            key={child.path}
                            className="text-left text-base font-heading font-medium py-2 text-textMedium hover:text-primary"
                            onClick={() => handleLinkClick(child.path)}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.path}
                  className={baseClass}
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
