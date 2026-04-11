import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import SectionWrapper from '@/components/SectionWrapper';

/* Gallery images from BRAND.images.gallery (real business CDN photos) */
const galleryImages = BRAND.images.gallery;

/* Transformation showcase data — representative of Rachel's portfolio work */
const GALLERY_TEASER = [
  {
    title: 'Brassy to Ash Blonde',
    description: 'Complete color correction and toning',
  },
  {
    title: 'Rosegold Balayage',
    description: 'Hand-painted rose gold dimension',
  },
  {
    title: 'Silver Metallic',
    description: 'Platinum silver with seamless blend',
  },
  {
    title: 'Dark to Caramel Ombre',
    description: 'Warm caramel ends on dark base',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Split layout: heading+CTA left, decorative gradient right */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: BRAND.colors.bgMain }}
      >
        <div
          className="mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          style={{ maxWidth: BRAND.spacing.contentMaxWidth }}
        >
          {/* Left — Text */}
          <div>
            <span
              className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-4"
              style={{ color: BRAND.colors.primary }}
            >
              Kennedy Rd, Scarborough
            </span>
            <h1
              className="font-heading font-semibold leading-[1.1] mb-6"
              style={{
                color: BRAND.colors.textHeading,
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              }}
            >
              Your Hair{' '}
              <span style={{ color: BRAND.colors.primary }}>
                Transformation
              </span>{' '}
              Starts Here
            </h1>
            <p
              className="font-body text-lg mb-8 max-w-lg"
              style={{ color: BRAND.colors.textBody, lineHeight: 1.7 }}
            >
              Expert balayage, color correction, and styling by Rachel Chu.
              Walk-ins welcome, appointments recommended.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BRAND.business.phone}`}
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: '#FFFFFF',
                  borderRadius: BRAND.spacing.radiusButtons,
                  boxShadow: '0 2px 12px rgba(194,24,91,0.25)',
                }}
              >
                Book Your Appointment
              </a>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-lg border-2 transition-all hover:shadow-md"
                style={{
                  borderColor: BRAND.colors.primary,
                  color: BRAND.colors.primary,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                See Our Work
              </Link>
            </div>

            {/* Rating badges */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-body" style={{ color: BRAND.colors.textMuted }}>
                  4.6 on Google ({BRAND.business.ratings.google.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Right — Decorative gradient orb */}
          <div className="relative hidden md:flex items-center justify-center">
            <div
              className="w-[400px] h-[400px] rounded-full"
              style={{
                background: `radial-gradient(circle at 40% 40%, ${BRAND.colors.secondary} 0%, ${BRAND.colors.bgAlt} 50%, transparent 70%)`,
              }}
            />
            <div
              className="absolute w-[250px] h-[250px] rounded-full"
              style={{
                background: `radial-gradient(circle at 60% 60%, ${BRAND.colors.primary}20 0%, transparent 70%)`,
                top: '20%',
                right: '10%',
              }}
            />
            {/* Decorative scissors icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="0.8" opacity="0.3">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <line x1="20" y1="4" x2="8.12" y2="15.88" />
                <line x1="14.47" y1="14.48" x2="20" y2="20" />
                <line x1="8.12" y1="8.12" x2="12" y2="12" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER — 4 transformation previews linking to /gallery */}
      <SectionWrapper
        style={{ backgroundColor: BRAND.colors.footerBg, padding: '5rem 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: BRAND.colors.primary }}
          >
            Portfolio
          </span>
          <div className="flex items-end justify-between mb-10">
            <h2
              className="font-heading font-semibold text-3xl md:text-4xl"
              style={{ color: '#FFFFFF' }}
            >
              Color Transformations
            </h2>
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center gap-2 font-body text-sm font-medium transition-colors"
              style={{ color: BRAND.colors.secondary }}
            >
              View All Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_TEASER.map((item, i) => (
              <Link
                key={i}
                href="/gallery"
                className="group relative overflow-hidden rounded-xl aspect-[3/4] transition-transform duration-300 hover:-translate-y-1"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                {/* Gradient placeholder representing transformation work */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: [
                      `linear-gradient(135deg, ${BRAND.colors.accent}40 0%, ${BRAND.colors.primary}30 50%, ${BRAND.colors.secondary}60 100%)`,
                      `linear-gradient(225deg, ${BRAND.colors.primary}50 0%, ${BRAND.colors.secondary}40 50%, ${BRAND.colors.accent}20 100%)`,
                      `linear-gradient(180deg, ${BRAND.colors.secondary}50 0%, ${BRAND.colors.primary}40 60%, ${BRAND.colors.accent}30 100%)`,
                      `linear-gradient(315deg, ${BRAND.colors.accent}30 0%, ${BRAND.colors.secondary}50 50%, ${BRAND.colors.primary}40 100%)`,
                    ][i],
                  }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-5">
                  <h3 className="font-heading text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/70">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/gallery"
            className="md:hidden inline-flex items-center gap-2 font-body text-sm font-medium mt-6 transition-colors"
            style={{ color: BRAND.colors.secondary }}
          >
            View All Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA STRIP — Full-bleed brand color */}
      <SectionWrapper
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.primary,
          padding: '4rem 1.5rem',
        }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready for Your Transformation?
        </h2>
        <p className="font-body text-white/80 mb-8 max-w-md mx-auto">
          Walk-ins welcome. For guaranteed availability, call ahead to book.
        </p>
        <a
          href={`tel:${BRAND.business.phone}`}
          className="inline-flex items-center gap-2 font-body font-bold px-10 py-4 rounded-lg transition-all hover:shadow-xl"
          style={{
            backgroundColor: '#FFFFFF',
            color: BRAND.colors.primary,
            borderRadius: BRAND.spacing.radiusButtons,
          }}
        >
          Call {BRAND.business.phone}
        </a>
      </SectionWrapper>
    </>
  );
}
