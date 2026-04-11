import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: `About — ${BRAND.business.name}`,
  description: 'Meet Rachel Chu, owner and head stylist at Star Beauty & Hair Salon. Expert in balayage, color correction, and hair transformations on Kennedy Rd, Scarborough.',
};

export default function AboutPage() {
  const rachel = BRAND.people[0];

  return (
    <>
      {/* Hero — Rachel's story */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: BRAND.colors.bgMain }}
      >
        <div
          className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          style={{ maxWidth: BRAND.spacing.contentMaxWidth }}
        >
          {/* Left — Text */}
          <div>
            <span
              className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
              style={{ color: BRAND.colors.primary }}
            >
              Our Story
            </span>
            <h1
              className="font-heading font-semibold leading-tight mb-6"
              style={{
                color: BRAND.colors.textHeading,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Welcome to{' '}
              <span style={{ color: BRAND.colors.primary }}>Star Beauty</span>
            </h1>
            <div className="space-y-4 font-body" style={{ color: BRAND.colors.textBody }}>
              <p>
                Star Beauty & Hair Salon is more than a salon — it&apos;s where Scarborough
                comes to transform. Located on Kennedy Rd, we&apos;ve built our reputation on
                one thing: making people feel incredible when they leave our chair.
              </p>
              <p>
                Rachel Chu, our owner and head stylist, specializes in the color transformations
                that make Star Beauty stand out — balayage, ash blonde conversions, rosegold
                dimension, and silver metallic finishes that our clients love to show off.
              </p>
              <p>
                But we&apos;re not just about color. From precision cuts to keratin treatments,
                braiding to threading, Star Beauty offers full beauty services for every member
                of the community. Walk-ins are always welcome, but we recommend appointments
                for color services.
              </p>
            </div>
          </div>

          {/* Right — Rachel's profile */}
          <div className="flex justify-center">
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                backgroundColor: BRAND.colors.bgCard,
                boxShadow: '0 4px 20px rgba(45,27,48,0.08)',
                borderRadius: BRAND.spacing.radiusCards,
                maxWidth: '360px',
                width: '100%',
              }}
            >
              {/* Initials avatar — no profile photo available */}
              <div
                className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center font-heading text-3xl font-semibold"
                style={{
                  backgroundColor: BRAND.colors.bgAlt,
                  color: BRAND.colors.primary,
                }}
              >
                RC
              </div>
              <h2
                className="font-heading text-2xl font-semibold mb-1"
                style={{ color: BRAND.colors.textHeading }}
              >
                {rachel.name}
              </h2>
              <p
                className="font-body text-sm mb-4"
                style={{ color: BRAND.colors.textMuted }}
              >
                {rachel.role}
              </p>
              <p
                className="font-body text-sm mb-6"
                style={{ color: BRAND.colors.textBody }}
              >
                {rachel.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 justify-center">
                {rachel.specialties.map((s) => (
                  <span
                    key={s}
                    className="font-body text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: BRAND.colors.bgAlt,
                      color: BRAND.colors.primary,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Space / Neighborhood */}
      <SectionWrapper
        style={{ backgroundColor: BRAND.colors.bgAlt, padding: '5rem 0' }}
      >
        <div
          className="mx-auto px-6 text-center"
          style={{ maxWidth: '800px' }}
        >
          <span
            className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: BRAND.colors.primary }}
          >
            Our Neighborhood
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold mb-6"
            style={{ color: BRAND.colors.textHeading }}
          >
            Scarborough&apos;s Kennedy Rd
          </h2>
          <p
            className="font-body text-lg mb-4"
            style={{ color: BRAND.colors.textBody }}
          >
            We&apos;re proud to serve one of Toronto&apos;s most diverse communities.
            Located at 1415 Kennedy Rd, Unit 10, Star Beauty is part of the vibrant
            Kennedy & Lawrence corridor — a neighborhood that&apos;s home to South Asian,
            Caribbean, Chinese, Filipino, and communities from around the world.
          </p>
          <p
            className="font-body text-lg"
            style={{ color: BRAND.colors.textBody }}
          >
            Our services reflect our community. From hair braiding and locs to threading
            and facials, we celebrate every texture and tradition. Everyone is welcome here.
          </p>
        </div>
      </SectionWrapper>

      {/* Reviews / Social Proof */}
      <SectionWrapper
        style={{
          backgroundColor: BRAND.colors.footerBg,
          padding: '5rem 0',
        }}
      >
        <div
          className="mx-auto px-6 text-center"
          style={{ maxWidth: BRAND.spacing.contentMaxWidth }}
        >
          <span
            className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
            style={{ color: BRAND.colors.primary }}
          >
            What People Say
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-semibold mb-12"
            style={{ color: '#FFFFFF' }}
          >
            Our Clients Love Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google rating */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: BRAND.spacing.radiusCards,
              }}
            >
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < 5 ? BRAND.colors.primary : '#555'}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-heading text-3xl font-semibold text-white mb-1">
                {BRAND.business.ratings.google.rating}
              </p>
              <p className="font-body text-sm" style={{ color: BRAND.colors.secondary }}>
                Google ({BRAND.business.ratings.google.reviewCount} reviews)
              </p>
            </div>

            {/* Facebook rating */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: BRAND.spacing.radiusCards,
              }}
            >
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-heading text-3xl font-semibold text-white mb-1">
                {BRAND.business.ratings.facebook.rating}
              </p>
              <p className="font-body text-sm" style={{ color: BRAND.colors.secondary }}>
                Facebook ({BRAND.business.ratings.facebook.reviewCount} reviews)
              </p>
            </div>

            {/* Total reviews */}
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: BRAND.spacing.radiusCards,
              }}
            >
              <p className="font-heading text-4xl font-semibold text-white mb-1">
                223
              </p>
              <p className="font-body text-sm mb-3" style={{ color: BRAND.colors.secondary }}>
                Total Reviews
              </p>
              <p className="font-body text-sm italic" style={{ color: BRAND.colors.footerText }}>
                &ldquo;Good hair color results, welcoming atmosphere, skilled stylist.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.primary,
          padding: '4rem 1.5rem',
        }}
      >
        <h2 className="font-heading text-3xl font-semibold text-white mb-4">
          Come See Us
        </h2>
        <p className="font-body text-white/80 mb-8 max-w-md mx-auto">
          Visit Star Beauty on Kennedy Rd. Walk-ins welcome.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${BRAND.business.phone}`}
            className="inline-flex font-body font-bold px-10 py-4 rounded-lg hover:shadow-xl transition-all"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Call {BRAND.business.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex font-body font-bold px-10 py-4 rounded-lg border-2 border-white/40 text-white hover:border-white transition-all"
            style={{ borderRadius: BRAND.spacing.radiusButtons }}
          >
            Get Directions
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
