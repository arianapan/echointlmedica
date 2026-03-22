const QuoteSection = () => {
  return (
    <section className="bg-secondary py-24 md:py-32 relative overflow-hidden">
      {/* Layered geometric accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/3 to-transparent pointer-events-none" />

      {/* Decorative large quote mark */}
      <div className="absolute top-8 left-8 md:left-16 text-white/[0.03] font-heading text-[12rem] md:text-[18rem] leading-none select-none pointer-events-none" aria-hidden="true">
        &ldquo;
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="w-10 h-0.5 bg-primary mx-auto mb-12" />
        <blockquote className="font-heading text-[1.625rem] md:text-[2.125rem] lg:text-[2.75rem] font-bold text-white leading-[1.15] mb-10" style={{ letterSpacing: '-0.02em' }}>
          &ldquo;The result is not cheaper consulting. It&apos;s fundamentally better advisory: more comprehensive, more responsive, and more closely tied to outcomes.&rdquo;
        </blockquote>
        <div className="w-8 h-0.5 bg-primary/40 mx-auto mb-5" />
        <div className="text-white/40 font-heading text-xs tracking-[0.2em] uppercase">
          Echo International Medica
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
