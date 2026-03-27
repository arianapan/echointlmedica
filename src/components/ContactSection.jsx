import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactSection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', _honey: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      navigate('/thanks');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll('#contact .fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <section id="contact" className="bg-secondary text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/[0.03] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-16 md:mb-20 fade-in">
          <span className="font-heading font-semibold text-xs tracking-[0.25em] uppercase mb-4 block text-primary">
            CONTACT US
          </span>
          <h2 className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.08]" style={{ letterSpacing: '-0.02em' }}>
            What can we help you achieve?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left — Contact info */}
          <div className="lg:w-5/12 fade-in">
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Whether you&apos;re raising capital, entering China, or building cross-border institutional partnerships — we&apos;d like to hear about your challenge.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.07] text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-white/80 mb-1">Email</h4>
                  <a href="mailto:ariana@echointlmedica.com" className="text-white/50 text-[15px] hover:text-primary transition-colors">
                    ariana@echointlmedica.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.07] text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-white/80 mb-1">Phone</h4>
                  <a href="tel:+16282258386" className="text-white/50 text-[15px] hover:text-primary transition-colors">
                    +1 (628) 225-8386
                  </a>
                </div>
              </div>

              {/* Offices */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.07] text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-white/80 mb-3">Offices</h4>
                  <div className="space-y-3 text-white/50 text-[14px] leading-relaxed">
                    <p>
                      <span className="text-white/70 font-medium">Hong Kong:</span><br />
                      RM22 2/F Fu Tao Bldg, No.98 Argyle St, Mong Kok, Hong Kong
                    </p>
                    <p>
                      <span className="text-white/70 font-medium">China:</span><br />
                      Unit 2806, Bldg C, Huangdu Plaza, Futian Dist, Shenzhen, China
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:w-7/12 fade-in">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-8 md:p-10">
              <h3 className="font-heading text-lg font-semibold text-white mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Honeypot */}
                <input type="text" name="_honey" value={form._honey} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-white/40 text-xs font-heading tracking-wider uppercase mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.06] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-white/40 text-xs font-heading tracking-wider uppercase mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.06] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="contact-company" className="block text-white/40 text-xs font-heading tracking-wider uppercase mb-2">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="contact-message" className="block text-white/40 text-xs font-heading tracking-wider uppercase mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/10 rounded px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your challenge..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-heading font-semibold px-10 py-3.5 rounded text-sm tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
