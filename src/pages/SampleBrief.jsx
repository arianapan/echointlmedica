import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PDF_URL = '/sample-monthly-report.pdf';
const PREVIEW_URL = '/sample-monthly-report-preview.png';

const inside = [
  'A plain-English summary of what changed this month and what to watch next',
  'Profit and loss, with gross margin and net result',
  'Cash position and runway, across your US and China accounts',
  'Cross-border cash and FX, flagged in plain terms instead of buried',
  'Budget versus actual, and the specific risks for the month ahead',
];

const SampleBrief = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', company: '', notes: '', _honey: '' });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Sample Monthly Report | Echo International Medica';
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const message = [
      '[Sample Report / Finance Review request]',
      '',
      form.notes || '(no additional notes)',
    ].join('\n');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message,
          _honey: form._honey,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      navigate('/thanks');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSending(false);
    }
  };

  const scrollToForm = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('request-review');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-secondary text-white pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.06] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="font-heading font-semibold text-xs tracking-[0.25em] uppercase mb-4 block text-primary">
            SAMPLE REPORT
          </span>
          <h1
            className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.08] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Inside an Echo Monthly Report
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            An illustrative monthly operating report for a cross-border founder. This is the kind of report that lands in your inbox every month.
          </p>
        </div>
      </section>

      {/* Preview + CTAs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Preview image */}
            <div className="order-2 lg:order-1">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden ring-1 ring-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_18px_50px_rgba(0,0,0,0.10)] transition-shadow duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08),0_28px_70px_rgba(0,0,0,0.16)]"
              >
                <img
                  src={PREVIEW_URL}
                  alt="Sample monthly operating report from Echo, for an illustrative cross-border hardware brand"
                  className="w-full h-auto"
                  width="1081"
                  height="1400"
                  loading="lazy"
                />
              </a>
            </div>

            {/* What's inside + CTAs */}
            <div className="order-1 lg:order-2">
              <span className="section-label">WHAT&apos;S INSIDE</span>
              <h2 className="section-heading mb-5">The numbers, in one page you can read.</h2>
              <p className="text-textMedium text-base md:text-lg leading-relaxed mb-7">
                Most founders get a P&amp;L they cannot act on. Echo turns your data into a single report that says what happened, whether you are profitable, and how long your cash lasts, with the cross-border parts handled.
              </p>
              <ul className="space-y-3 mb-9">
                {inside.map((item, i) => (
                  <li key={i} className="flex items-start text-textDark text-[15px] leading-relaxed">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary mt-0.5 mr-3 shrink-0" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center">
                  Download the sample (PDF)
                </a>
                <a href="#request-review" onClick={scrollToForm} className="inline-block text-center border border-textDark text-textDark font-heading font-semibold px-6 py-3 rounded hover:bg-textDark hover:text-white transition-colors">
                  Book a free finance review
                </a>
              </div>
              <p className="text-textLight text-xs mt-4 leading-relaxed">
                Illustrative sample. Figures are fictional. Management information, not an audit or tax opinion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request-review" className="py-16 md:py-24 bg-lightBg">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">GET YOURS</span>
            <h2 className="section-heading">Want a report like this for your business?</h2>
            <p className="mt-4 text-textMedium text-base md:text-lg max-w-2xl mx-auto">
              Tell us a little about your business. We reply within one business day from a real person, not a marketing inbox, and start with a free finance review.
            </p>
          </div>

          <div className="bg-white border border-borderLight rounded-xl shadow-card p-8 md:p-10">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="_honey"
                value={form._honey}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Field id="sb-name" label="Name" required name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                <Field id="sb-email" label="Work email" required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" />
              </div>

              <Field id="sb-company" label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Your company" wrapperClass="mb-4" />

              <div className="mb-6">
                <label htmlFor="sb-notes" className="block text-textMedium text-xs font-heading tracking-wider uppercase mb-2">
                  What do you need help with?
                </label>
                <textarea
                  id="sb-notes"
                  name="notes"
                  rows="3"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full bg-white border border-borderLight rounded px-4 py-3 text-textDark text-sm placeholder:text-textLight focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Monthly reporting, cash flow, fundraising, cross-border finance, or where your numbers stand today."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-secondary text-white font-heading font-semibold px-10 py-3.5 rounded text-sm tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Book a Free Finance Review'}
              </button>

              <p className="text-textLight text-xs mt-4 leading-relaxed">
                By submitting, you agree to receive a one-time email response from Echo. We do not sell or share contact data.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

const Field = ({ id, label, required, type = 'text', name, value, onChange, placeholder, wrapperClass = '' }) => (
  <div className={wrapperClass}>
    <label htmlFor={id} className="block text-textMedium text-xs font-heading tracking-wider uppercase mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-white border border-borderLight rounded px-4 py-3 text-textDark text-sm placeholder:text-textLight focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
    />
  </div>
);

export default SampleBrief;
