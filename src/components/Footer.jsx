import { useState } from 'react';
import assets from '../assets';

const footerLinks = [
  { label: 'About', path: '/#about' },
  { label: 'Services', path: '/#services' },
  { label: 'AI Approach', path: '/#ai-advantage' },
  { label: 'Results', path: '/#results' },
  { label: 'Insights', path: '/#insights' },
  { label: 'Contact', path: '/#contact' },
];

const legalLinks = ['Terms of Use', 'Privacy', 'Cookie Policy', 'Sitemap'];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/echo-international-medica/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (path) => {
    if (path === '#') return;
    const targetId = path.replace('/#', '');
    const el = document.getElementById(targetId);
    if (el) {
      window.history.replaceState(null, null, `#${targetId}`);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#091e33] text-white">

      {/* ── Tier 0 · Newsletter ── */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="lg:max-w-xl">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-4" style={{ letterSpacing: '-0.01em' }}>
                Stay ahead in a rapidly evolving market.
              </h3>
              <p className="text-white/50 text-[15px] leading-relaxed">
                Subscribe to Echo Insights — our periodic look at the forces shaping cross-border biotech, AI-augmented advisory, and US–China life sciences partnerships.
              </p>
            </div>

            <div className="lg:w-[420px] shrink-0">
              {subscribed ? (
                <div className="flex items-center gap-3 text-primary font-heading font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Thank you for subscribing.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 bg-white/[0.07] border border-white/[0.12] rounded px-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-heading font-semibold text-sm tracking-[0.1em] uppercase px-7 py-3.5 rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tier 1 · Logo + Social ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-12 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <picture className="block">
              <source type="image/webp" srcSet={assets.companylogoWebp128} />
              <img
                src={assets.companylogo}
                alt="Echo International Medica Logo"
                className="h-8 w-auto mr-2.5 shrink-0 brightness-0 invert"
                width="128"
                height="128"
                decoding="async"
              />
            </picture>
            <span className="font-heading font-bold uppercase text-[13px] tracking-tight leading-tight bg-gradient-to-r from-white/80 to-primary bg-clip-text text-transparent">
              Echo International Medica
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href !== '#' ? '_blank' : undefined}
                rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                onClick={social.href === '#' ? (e) => e.preventDefault() : undefined}
                className="w-9 h-9 rounded-full border border-white/[0.12] text-white/40 hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tier 2 · Nav links (inline) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-6">
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {footerLinks.map((link) => (
            <button
              key={link.label}
              className="text-white/50 text-[14px] hover:text-white transition-colors duration-200 cursor-pointer"
              onClick={() => handleLinkClick(link.path)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Tier 3 · Legal links (inline) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {legalLinks.map((label) => (
            <button
              key={label}
              className="text-white/30 text-[13px] hover:text-white/50 transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tier 4 · Copyright ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pb-10">
        <p className="text-white/20 text-xs">
          &copy; {new Date().getFullYear()} Echo International Medica, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
