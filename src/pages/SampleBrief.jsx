import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const serifStack = "'Charter', 'Georgia', 'Cambria', 'Times New Roman', serif";

const headerRows = [
  ['Asset code', '[REDACTED]-1811'],
  ['Originator', 'Top-5 China oncology biotech, HKEX-listed'],
  ['Target', 'HER3'],
  ['Payload', 'Topoisomerase I inhibitor (DXd-class)'],
  ['DAR', '8'],
  ['Linker', 'Cleavable, tetrapeptide-based'],
  ['Stage (China)', 'Phase II (NSCLC, breast)'],
  ['Stage (Global)', 'Phase I (US, EU)'],
  ['CDE designations', 'Breakthrough Therapy (Mar 2025); Priority Review track'],
];

const dealRows = [
  ['Q3 2025', 'HER3-ADC', '[Redacted] → Top-10 pharma', '$145M', '$1.85B', 'Ex-China'],
  ['Q4 2025', 'HER2-ADC', '[Redacted] → Top-10 pharma', '$90M', '$1.35B', 'Global'],
  ['Q1 2026', 'Bispecific HER2/3 ADC', '[Redacted] → Top-20 pharma', '$175M', '$2.4B', 'Ex-China'],
  ['Q1 2026', 'HER3-ADC (early)', '[Redacted] → Top-15 pharma', '$60M', '$1.1B', 'Global'],
];

const risks = [
  <><strong>Manufacturing transferability.</strong> Originator uses a proprietary linker conjugation process at a CDMO partner under capacity constraints. Tech transfer to a Western CDMO may add 9–14 months and is the most likely deal-delaying factor.</>,
  <><strong>Phase II EGFR-mutant readout dependency.</strong> Headline ORR in osimertinib-resistant subpopulation drives most of the comparable valuation. A readout below 35% ORR collapses the upper end of the deal range materially.</>,
  <><strong>Competing China program.</strong> Top-3 China oncology biotech [REDACTED] has a parallel HER3-ADC at Phase I with similar payload chemistry. If they reach Phase II in H2 2026, asset competition could compress this originator&apos;s negotiating leverage.</>,
];

const SampleBrief = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    notes: '',
    _honey: '',
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const prev = document.title;
    document.title = 'Sample Brief — China ADC Landscape Q2 2026 | Echo Intl Medica';
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
      '[Sample Brief Request — China ADC Landscape Q2 2026]',
      `Role: ${form.role || '—'}`,
      `Therapeutic area interest: ${form.interest || '—'}`,
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
    const el = document.getElementById('request-full-report');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-secondary text-white pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.06] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="font-heading font-semibold text-xs tracking-[0.25em] uppercase mb-4 block text-primary">
            SAMPLE INTELLIGENCE
          </span>
          <h1
            className="font-heading text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.08] mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            Inside an Echo Brief
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Excerpted from China ADC Landscape — Q2 2026
          </p>
        </div>
      </section>

      {/* Excerpt artifact */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <article
            className="mx-auto bg-[#FAFAFA] border border-[#E5E5E5] rounded-md p-6 sm:p-10 md:p-12 shadow-sm"
            style={{ maxWidth: '720px', fontFamily: serifStack, color: '#222' }}
          >
            {/* Header table */}
            <table className="w-full text-[14px] md:text-[15px] leading-relaxed">
              <tbody>
                {headerRows.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}>
                    <th scope="row" className="text-left align-top font-semibold py-2.5 px-3 w-[42%] border-b border-[#EAEAEA]">
                      {label}
                    </th>
                    <td className="py-2.5 px-3 border-b border-[#EAEAEA]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* ECHO'S VIEW */}
            <h2
              className="mt-10 mb-4 text-[12px] font-bold tracking-[0.18em] text-[#3a3a3a]"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              ECHO&apos;S VIEW
            </h2>
            <p className="text-[15px] md:text-[16px] leading-[1.7] mb-4">
              <strong>BD attractiveness: 4 / 5.</strong> The HER3 ADC space remains under-licensed relative to HER2-ADC density, and this asset is one of three China-origin programs with credible Phase II readouts expected before EOY 2026. Comparable to Daiichi&apos;s HER3-DXd (patritumab deruxtecan) on payload chemistry but with materially earlier patient enrollment in EGFR-mutant NSCLC post-osimertinib — the highest-value subpopulation. Originator has signaled BD readiness through CBO hire (Q4 2025) and US entity establishment (Q1 2026).
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] mb-4">
              <strong>Realistic deal range: $80M–$180M upfront, $1.4–2.2B total.</strong> Anchored to three 2025 China-origin HER3 and HER2-ADC comparables (see Comparable Deals below). Upper bound assumes ex-China rights only; global rights would push upfront 30–40% higher.
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.7] mb-3">
              <strong>Three risks BD should diligence:</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[15px] md:text-[16px] leading-[1.7] mb-4">
              {risks.map((r, i) => <li key={i}>{r}</li>)}
            </ol>

            {/* COMPARABLE DEALS */}
            <h2
              className="mt-10 mb-2 text-[12px] font-bold tracking-[0.18em] text-[#3a3a3a]"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              COMPARABLE DEALS
            </h2>
            <p className="text-[13px] italic text-[#555] mb-4">
              2025 China-origin HER3 / HER2-ADC transactions
            </p>
            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <table className="min-w-full text-[13px] md:text-[14px] leading-relaxed">
                <thead>
                  <tr className="bg-[#EFEFEF]">
                    {['Date', 'Asset class', 'Licensor → Licensee', 'Upfront', 'Total', 'Territory'].map((h) => (
                      <th key={h} className="text-left font-semibold py-2.5 px-3 border-b border-[#DADADA] whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dealRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}>
                      {row.map((cell, j) => (
                        <td key={j} className="py-2.5 px-3 border-b border-[#EAEAEA] whitespace-nowrap">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer block */}
            <div className="mt-10 pt-5 border-t border-[#E5E5E5] text-[13px] text-[#666] space-y-1">
              <div>Analyst: [Senior Analyst Name], Echo</div>
              <div>Last updated: April 22, 2026</div>
              <div>Next regulatory checkpoint: Phase II interim readout expected ESMO 2026 (October)</div>
            </div>

            {/* Closing italic */}
            <p className="mt-8 text-center italic text-[13px] md:text-[14px] text-[#555] leading-relaxed">
              This excerpt represents one of 47 asset profiles in the China ADC Landscape — Q2 2026 report. The full report includes complete originator profiles, IP analysis, manufacturing risk scoring, and BD-readiness benchmarking across the universe of clinical-stage China-origin ADCs.
            </p>
          </article>

          {/* CTAs below excerpt */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <a href="#request-full-report" onClick={scrollToForm} className="btn-primary inline-block">
              Request the Full Sample Report
            </a>
            <Link
              to="/#engagement"
              className="text-secondary font-heading font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              See what subscribers get →
            </Link>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request-full-report" className="py-16 md:py-24 bg-lightBg">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <span className="section-label">REQUEST ACCESS</span>
            <h2 className="section-heading">Get the full report</h2>
            <p className="mt-4 text-textMedium text-base md:text-lg max-w-2xl mx-auto">
              Sample requests from buy-side counterparties are reviewed within one business day. We reply from a named analyst, not a marketing inbox.
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

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Field id="sb-company" label="Company" required name="company" value={form.company} onChange={handleChange} placeholder="Your company" />
                <Field id="sb-role" label="Role" name="role" value={form.role} onChange={handleChange} placeholder="BD, S&E, External Innovation…" />
              </div>

              <Field
                id="sb-interest"
                label="Therapeutic area interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                placeholder="ADCs, bispecifics, CAR-T, cell therapy…"
                wrapperClass="mb-4"
              />

              <div className="mb-6">
                <label htmlFor="sb-notes" className="block text-textMedium text-xs font-heading tracking-wider uppercase mb-2">
                  Anything else (optional)
                </label>
                <textarea
                  id="sb-notes"
                  name="notes"
                  rows="3"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full bg-white border border-borderLight rounded px-4 py-3 text-textDark text-sm placeholder:text-textLight focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Specific assets, mandates, or questions you'd like the sample to demonstrate."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary hover:bg-secondary text-white font-heading font-semibold px-10 py-3.5 rounded text-sm tracking-wide transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : 'Request the Sample Report'}
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
