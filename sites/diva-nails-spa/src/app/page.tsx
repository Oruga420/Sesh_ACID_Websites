{/*
  DESIGN PERSONALITY ANSWERS:
  1. Dominant emotion: Warmth + Pampering — customers describe "glorious", "relaxing", "dozing off"
  2. Is the work the product? YES — nail art IS the product (portfolio-driven) + head spa is experiential
  3. How established? Mid-range — active business with 85+ Groupon reviews, 614 IG posts, Vietnamese-owned local staple
  4. What do customers feel? Relaxed, pampered, clean environment, sweet accommodating staff
  5. What would NEVER fit? Dark/gritty aesthetics, corporate language, harsh angles, industrial fonts

  LAYOUT PERSONALITY: GALLERY-FORWARD + NEIGHBORHOOD (B+D hybrid)
  THE ONE THING: Split hero with warm pampering headline left, nail art image right. Head spa is the differentiator.

  SUB-SKILL REVIEWS:
  - design-quality: Warm cream palette, Cormorant Garamond + Nunito Sans, editorial service lists
  - designer: Mauve pink accent, warm taupe grounding, no dark mode, espresso brown dark sections
  - ui: Text logo on white header (good contrast), mauve pink buttons on cream (good contrast)
  - ux: Booking CTA above fold, head spa featured prominently, local "Scarborough" copy
*/}

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4m0 12v4m-6-10H2m20 0h-4m-1.343-5.657l-2.828 2.828m-5.658 5.658l-2.828 2.828m14.142 0l-2.828-2.828M6.343 6.343L3.515 3.515" />
    </svg>
  );
}

export default function HomePage() {
  const serviceCategories = [
    {
      title: 'Head Spa',
      subtitle: 'The viral relaxation experience',
      price: 'From $60',
      icon: '🧖',
    },
    {
      title: 'Nail Artistry',
      subtitle: 'Gel, acrylic, ombre & custom designs',
      price: 'From $25',
      icon: '💅',
    },
    {
      title: 'Lash Extensions',
      subtitle: 'Classic & volume full sets',
      price: 'From $80',
      icon: '👁',
    },
    {
      title: 'Waxing & Facials',
      subtitle: 'Full face, body & skin care',
      price: 'From $7',
      icon: '✨',
    },
  ];

  return (
    <>
      {/* HERO — Split Layout */}
      <section
        className="relative min-h-[85vh] flex items-center"
        style={{ backgroundColor: BRAND.colors.bgMain }}
      >
        <div className="max-w-content mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="animate-fade-up">
            <p className="section-label mb-4" style={{ color: BRAND.colors.primary }}>
              Scarborough&apos;s Feel-Good Destination
            </p>
            <h1
              className="font-heading mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: BRAND.colors.textHeading,
              }}
            >
              Nails, Lashes
              <br />
              <span style={{ color: BRAND.colors.primary }}>&amp; Head Spa</span>
            </h1>
            <p
              className="text-lg mb-8 max-w-lg"
              style={{ color: BRAND.colors.textBody, lineHeight: 1.7 }}
            >
              Expert nail artistry and the viral head spa experience on Eglinton Ave East.
              Walk in stressed, walk out glowing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={BRAND.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: '#FFFFFF',
                  borderRadius: BRAND.spacing.radiusButtons,
                  padding: '14px 32px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(212,160,185,0.3)',
                }}
              >
                <SparkleIcon />
                Book Your Appointment
              </a>
              <Link
                href="/services"
                className="inline-flex items-center transition-all duration-200 hover:opacity-80"
                style={{
                  border: `2px solid ${BRAND.colors.primary}`,
                  color: BRAND.colors.primary,
                  borderRadius: BRAND.spacing.radiusButtons,
                  padding: '12px 28px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                Explore Services
              </Link>
            </div>

            {/* Rating badge */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={BRAND.colors.accent}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>
                4.7 stars &middot; 85+ reviews on Groupon
              </p>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div
            className="relative img-hover-zoom rounded-img overflow-hidden"
            style={{ borderRadius: BRAND.spacing.radiusImages }}
          >
            <div
              className="aspect-[3/4] lg:aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: `url(${BRAND.images.hero.url})`,
                borderRadius: BRAND.spacing.radiusImages,
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(212,160,185,0.08) 0%, transparent 60%)',
                borderRadius: BRAND.spacing.radiusImages,
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgAlt,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Offer</p>
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                fontWeight: 500,
                color: BRAND.colors.textHeading,
              }}
            >
              Your Complete Beauty Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((svc) => (
              <Link
                key={svc.title}
                href="/services"
                className="card-hover block p-6 text-center"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 20px rgba(61,46,42,0.08)',
                  textDecoration: 'none',
                }}
              >
                <span className="text-3xl block mb-3">{svc.icon}</span>
                <h3
                  className="font-heading text-xl mb-1"
                  style={{ color: BRAND.colors.textHeading, fontWeight: 600 }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: BRAND.colors.textMuted }}>
                  {svc.subtitle}
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: BRAND.colors.primary }}
                >
                  {svc.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW — Dark Background */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgDark,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-3" style={{ color: BRAND.colors.accent }}>
                Our Work
              </p>
              <h2
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  fontWeight: 500,
                  color: BRAND.colors.textLight,
                }}
              >
                Nail Art Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: BRAND.colors.primary, textDecoration: 'none' }}
            >
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </Link>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div
              className="col-span-2 row-span-2 img-hover-zoom overflow-hidden"
              style={{ borderRadius: BRAND.spacing.radiusImages }}
            >
              <div
                className="aspect-square bg-cover bg-center w-full h-full"
                style={{ backgroundImage: `url(${BRAND.images.gallery[0].url})` }}
              />
            </div>
            {BRAND.images.gallery.slice(1).map((img, i) => (
              <div
                key={i}
                className="img-hover-zoom overflow-hidden"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url(${img.url})` }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: BRAND.colors.primary, textDecoration: 'none' }}
            >
              View Full Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.primary,
          padding: 'clamp(48px, 6vw, 80px) 0',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2
            className="font-heading mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Ready to Treat Yourself?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Book your appointment today and experience expert nail care and the
            ultimate head spa relaxation on Eglinton Ave East.
          </p>
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '16px 40px',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
