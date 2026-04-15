import { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://echointlmedica.com';

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

const ArticleLayout = ({
  category,
  title,
  subtitle,
  readTime,
  publishDate,
  isoDate,
  slug,
  pathPrefix = 'insights',
  backHref = '/#insights',
  backLabel = 'Back to Our Thinking',
  heroGradient,
  heroVisual,
  ogImage,
  children,
}) => {
  useLayoutEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = prev;
  }, [slug]);

  useEffect(() => {
    const canonical = `${SITE_URL}/${pathPrefix}/${slug}`;
    const description = subtitle || title;
    const pageTitle = `${title} | Echo International Medica`;

    document.title = pageTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'author', 'Echo International Medica');
    setMeta('name', 'keywords', `${category}, cross-border biotech, China biotech, US China life sciences, ${title}`);
    setLink('canonical', canonical);

    const ogImageUrl = ogImage
      ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
      : `${SITE_URL}/og-preview.jpg`;

    setMeta('property', 'og:type', 'article');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', 'Echo International Medica');
    setMeta('property', 'og:image', ogImageUrl);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'article:published_time', isoDate);
    setMeta('property', 'article:author', 'Echo International Medica');
    setMeta('property', 'article:section', category);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImageUrl);

    const ldId = 'article-jsonld';
    const prev = document.getElementById(ldId);
    if (prev) prev.remove();
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = ldId;
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      image: ogImageUrl,
      articleSection: category,
      datePublished: isoDate,
      dateModified: isoDate,
      author: {
        '@type': 'Organization',
        name: 'Echo International Medica',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Echo International Medica',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/companylogo.jpg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
      inLanguage: 'en',
    });
    document.head.appendChild(ld);

    return () => {
      const cleanup = document.getElementById(ldId);
      if (cleanup) cleanup.remove();
    };
  }, [category, title, subtitle, slug, pathPrefix, isoDate, ogImage]);

  return (
    <article className="bg-white overflow-x-hidden">
      <header className={`relative overflow-hidden bg-gradient-to-br ${heroGradient || 'from-secondary via-secondary/90 to-primary/70'} text-white`}>
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 30.5%, rgba(255,255,255,0.5) 31%, transparent 31.5%), linear-gradient(-45deg, transparent 70%, rgba(255,255,255,0.3) 70.5%, rgba(255,255,255,0.3) 71%, transparent 71.5%)',
        }} />
        <div className={`relative mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 ${heroVisual ? 'max-w-6xl' : 'max-w-4xl'}`}>
          <Link to={backHref} className="inline-flex items-center text-white/70 hover:text-white text-sm font-heading mb-10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {backLabel}
          </Link>
          <div className={heroVisual ? 'grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center' : ''}>
            <div>
              <span className="inline-block text-[11px] font-heading font-semibold text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full tracking-[0.16em] uppercase mb-6">
                {category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light max-w-3xl">
                  {subtitle}
                </p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70 font-heading">
                <span>{publishDate}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>{readTime}</span>
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span>Echo International Medica Research</span>
              </div>
            </div>
            {heroVisual && (
              <div className="flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
                {heroVisual}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20 article-body">
        {children}
      </div>

      <div className="bg-lightBg border-t border-borderLight">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 text-center">
          <span className="section-label">CONTINUE THE CONVERSATION</span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-textDark mb-4">
            Need advisory on cross-border biotech strategy?
          </h3>
          <p className="text-textMedium mb-8 max-w-xl mx-auto">
            Our team works with US and Chinese biotechs, hospitals, and investors on the decisions in this report. Get in touch to discuss your specific situation.
          </p>
          <Link to="/#contact" className="btn-primary inline-block">Contact Our Team</Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleLayout;
