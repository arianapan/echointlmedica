import { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import PricingTiers from '../components/PricingTiers';
import PricingDetails, { FAQS } from '../components/PricingDetails';

const SITE_URL = 'https://echointlmedica.com';
const PAGE_PATH = '/services/fractional-ai-cfo';
const PAGE_TITLE = 'Fractional AI CFO for Biotech | Monthly Retainer for Cross-Border Life Sciences';
const PAGE_DESCRIPTION =
  'Fractional AI CFO for biotech. Live runway, AI-driven investor pipeline, board-ready reporting, cross-border strategy. From $1,650/mo. Annual saves 10%. Month-to-month, no equity. Free 30-min diagnostic.';
const OG_IMAGE = '/articles/ai-advisory.jpg';

const setMeta = (attr, key, value) => {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const setLink = (rel, href) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const FractionalAiCfo = () => {
  useLayoutEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = prev;
  }, []);

  useEffect(() => {
    const canonical = `${SITE_URL}${PAGE_PATH}`;
    const ogImageUrl = OG_IMAGE.startsWith('http') ? OG_IMAGE : `${SITE_URL}${OG_IMAGE}`;

    document.title = PAGE_TITLE;
    setMeta('name', 'description', PAGE_DESCRIPTION);
    setMeta('name', 'keywords', 'fractional AI CFO biotech, fractional CFO biotech, biotech fractional CFO, cross-border biotech CFO, US China biotech CFO, AI-powered CFO biotech, biotech finance retainer, NMPA fundraising, biotech runway advisor');
    setLink('canonical', canonical);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', PAGE_TITLE);
    setMeta('property', 'og:description', PAGE_DESCRIPTION);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImageUrl);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', PAGE_TITLE);
    setMeta('name', 'twitter:description', PAGE_DESCRIPTION);
    setMeta('name', 'twitter:image', ogImageUrl);

    const serviceLdId = 'service-jsonld';
    const faqLdId = 'faq-jsonld';
    document.getElementById(serviceLdId)?.remove();
    document.getElementById(faqLdId)?.remove();

    const serviceLd = document.createElement('script');
    serviceLd.type = 'application/ld+json';
    serviceLd.id = serviceLdId;
    serviceLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Fractional AI CFO for Biotech',
      serviceType: 'Fractional CFO Services',
      provider: {
        '@type': 'Organization',
        name: 'Echo International Medica',
        url: SITE_URL,
      },
      areaServed: ['United States', 'China', 'Hong Kong', 'Singapore'],
      description: PAGE_DESCRIPTION,
      url: canonical,
      offers: TIERS.map(t => ({
        '@type': 'Offer',
        name: `${t.name} Retainer`,
        price: t.monthly,
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: t.monthly,
          priceCurrency: 'USD',
          unitText: 'MONTH',
        },
      })),
    });
    document.head.appendChild(serviceLd);

    const faqLd = document.createElement('script');
    faqLd.type = 'application/ld+json';
    faqLd.id = faqLdId;
    faqLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
    document.head.appendChild(faqLd);

    return () => {
      document.getElementById(serviceLdId)?.remove();
      document.getElementById(faqLdId)?.remove();
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30.5%, rgba(255,255,255,0.5) 31%, transparent 31.5%), linear-gradient(-45deg, transparent 70%, rgba(255,255,255,0.3) 70.5%, rgba(255,255,255,0.3) 71%, transparent 71.5%)',
        }} />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24 text-center">
          <span className="inline-block text-[11px] font-heading font-semibold text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.16em] uppercase mb-6">
            Monthly Retainer · Biotech · Cross-Border
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 max-w-3xl mx-auto">
            <span className="relative inline-block">
              <span className="relative z-10">Flat-Rate</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.3em] bg-primary/60 -z-0 rounded-sm"></span>
            </span>{' '}
            Fractional CFO.<br className="hidden sm:block" /> Built For{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Biotech</span>
              <span className="absolute inset-x-0 bottom-1 h-[0.3em] bg-primary/60 -z-0 rounded-sm"></span>
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-2xl mx-auto mb-8">
            Senior finance leadership on a flat monthly retainer. AI-augmented delivery at one-third the cost of an FTE CFO.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a href="#pricing" className="btn-primary inline-block bg-white !text-secondary hover:!bg-white/90">
              See pricing
            </a>
            <Link to="/#contact" className="text-white/90 hover:text-white text-sm font-heading font-semibold border-b border-white/40 hover:border-white pb-1 transition-colors">
              Book free 30-min diagnostic &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingTiers>
        <PricingDetails />
      </PricingTiers>

      {/* Comparison teaser */}
      <section className="py-16 bg-lightBg">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-textDark mb-3">Comparing options?</h2>
          <p className="text-textMedium text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Honest 2026 comparison vs. Pilot, Toptal, Brightbal, Burkland, and Kruze. See how Echo compares on price, biotech depth, and cross-border.
          </p>
          <Link to="/compare/fractional-cfo-biotech" className="btn-primary inline-block">
            Read the comparison
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary/80 text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">Book your free 30-min diagnostic.</h2>
          <p className="text-white/85 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Senior advisor walks your runway, flags 2–3 highest-leverage decisions, identifies cross-border optionality. No pitch. One-page summary within 48 hours.
          </p>
          <Link to="/#contact" className="btn-primary inline-block bg-white !text-secondary hover:!bg-white/90">
            Contact Echo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FractionalAiCfo;
