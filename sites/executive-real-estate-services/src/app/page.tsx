// DESIGN PERSONALITY
// 1. Dominant emotion: Trust + warmth. Harmahinder is the anchor — 15+ years, family values, heart-driven.
// 2. Trust/expertise is the product. Clients buy the agent's reputation, not a portfolio.
// 3. Very established: 15+ years, 107 reviews, 4.9 stars. Heritage weight matters.
// 4. Customers feel: safe, cared for, "treated like family", confident.
// 5. What would NEVER fit: edgy/dark aesthetics, playful fonts, casual tone, loud colors.
//
// Layout Personality: AUTHORITY (service-first archetype)
// - Hero answers "Why trust us?" directly
// - Social proof is structural, not decorative
// - Services as clean grid, not cramped cards
// - Professional photography (Harmahinder's real headshot)
// - Blue + red accent, rest is white/gray
//
// DESIGNER REVIEW
// ✓ Logo: blue/red on white header — OK
// ✓ H1: 3rem+ vs 1rem body — OK (4x+)
// ✓ Services: 3-col editorial grid — OK (not 4 equal cards)
// ✓ Section differentiation: white / blue-gradient hero / white / cool-gray / navy — OK
// ✓ Real photo: Harmahinder headshot used in hero — OK
// ✓ No stats bar — OK (using real metrics inline)
//
// UX REVIEW
// ✓ Logo visible: blue/red logo on white header — OK
// ✓ Primary CTA: "Find Your Dream Home" visible in hero — OK
// ✓ Mobile: hero stacks vertically — OK
// ✓ Real phone: 905-514-5555 with tel: link — OK
// ✓ Address: visible in footer — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — Split Layout ===== */}
      <section className="relative bg-gradient-to-br from-brand-heroBg to-brand-primary overflow-hidden">
        <div className="max-w-content mx-auto px-6 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
          {/* Left — Text */}
          <div className="flex-1 text-white">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
              Trusted Brampton Brokerage — 15+ Years
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
              Your Home Journey{' '}
              <span className="text-brand-secondary">Starts Here</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg mb-8 font-body leading-relaxed">
              Exceptional services from exceptional people. Harmahinder Gaind and Team Executive bring over 15 years of experience, 4.9-star reviews, and a commitment to treating every client like family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-secondary text-white font-heading font-bold text-sm rounded-btn hover:bg-brand-accent transition-all duration-300 hover:shadow-xl"
              >
                Find Your Dream Home
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white/30 text-white font-heading font-semibold text-sm rounded-btn hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-8 text-white/70 text-sm font-body">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-base">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>{BRAND.business.googleRating} / 5</span>
              </div>
              <div>{BRAND.business.reviewCount}+ Reviews</div>
              <div>{BRAND.business.yearsExperience}+ Years</div>
            </div>
          </div>

          {/* Right — Harmahinder Photo */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 h-80 lg:w-96 lg:h-[28rem]">
              <img
                src={BRAND.images.hero}
                alt="Harmahinder Gaind — Broker of Record"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3 text-center">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-textHeading text-center mb-4">
            Full-Service Real Estate Solutions
          </h2>
          <p className="text-brand-textMuted text-center max-w-2xl mx-auto mb-14 font-body">
            From finding your dream home to closing with confidence — we handle every aspect of your real estate journey across the Greater Toronto Area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.services.map((service, i) => (
              <Link
                key={service.name}
                href="/services"
                className="group p-8 rounded-card border border-brand-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-5 group-hover:bg-brand-primary/20 transition-colors">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-textHeading mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-brand-textBody leading-relaxed font-body">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-brand-primary text-white font-heading font-semibold text-sm rounded-btn hover:bg-brand-heroBg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS STRIP ===== */}
      <section className="py-20 bg-brand-bgAlt">
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3 text-center">Client Stories</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-textHeading text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND.reviews.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-card shadow-sm border border-brand-border">
                <div className="text-yellow-400 text-lg mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-brand-textBody font-body italic leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-xs text-brand-textMuted font-heading font-semibold uppercase tracking-wider">
                  &mdash; {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make Your Move?
          </h2>
          <p className="text-white/80 font-body max-w-xl mx-auto mb-8">
            Whether you are buying, selling, or investing — Team Executive is here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-brand-primary font-heading font-bold text-sm rounded-btn hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="px-8 py-4 border-2 border-white/30 text-white font-heading font-semibold text-sm rounded-btn hover:bg-white/10 transition-all duration-300"
            >
              Call {BRAND.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const cls = 'w-6 h-6 text-brand-primary';
  switch (type) {
    case 'home':
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>;
    case 'building':
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/></svg>;
    case 'commercial':
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm-2 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>;
    case 'mortgage':
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4z"/><path fillRule="evenodd" d="M8 8a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2h-6a2 2 0 01-2-2V8zm5 2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"/></svg>;
    case 'legal':
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0114 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L7.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 016 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L10 4.323V3a1 1 0 011-1z" clipRule="evenodd"/></svg>;
    case 'evaluation':
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd"/></svg>;
    default:
      return <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/></svg>;
  }
}
