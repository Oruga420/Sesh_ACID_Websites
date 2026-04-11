// DESIGN PERSONALITY ANSWERS
// 1. Dominant emotion: warmth & trust — 60+ year heritage, community salon
// 2. Product: the WORK (hair transformations) — portfolio-driven trust
// 3. Establishment: deeply established — heritage weight, "since the 1960s"
// 4. Customer feeling: welcomed, comfortable, attitude-free, like visiting friends
// 5. What would NEVER fit: edgy/brutalist, dark/moody, corporate/cold, luxury/pretentious
//
// Layout Personality: B+D GALLERY-FORWARD + NEIGHBORHOOD hybrid
// Bold Aesthetic: Neighborhood/Warm — warm tones, photo-heavy, conversational
// The ONE thing: Split hero with dramatic serif headline + salon tools dark bg, asymmetric gallery teaser
//
// DESIGNER REVIEW
// Logo: gold/dark text on white header — OK
// H1: 4rem (64px) vs 16px body = 4x — OK
// Gallery teaser: asymmetric grid (one large + two small), NOT equal card grid — OK
// Section differentiation: dark hero bg / light bg-main / dark testimonial / green CTA — OK
// Real images used: hero bg, gallery teaser images from brand-bible
//
// UX REVIEW
// Business type clear in <3s: "Hair Salon" + "Since the 1960s" — OK
// Primary CTA visible: "Book Your Appointment" in hero — OK
// Logo visible: dark logo on white header — OK
// Headline meaningful: "Turning Out Serious Hair Since the 1960s" — OK
// Real phone: tel: link — OK
// Social links: real @salonwestendz — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* HERO — Full-bleed dark bg with salon tools image */}
      <section
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '85vh',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)' }} />

        <div
          className="relative z-10 mx-auto w-full"
          style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 1.5rem' }}
        >
          <div className="max-w-2xl" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <p
              className="mb-4"
              style={{
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: BRAND.colors.accent,
              }}
            >
              Alderwood&apos;s Salon &middot; Est. 1960s
            </p>

            <h1
              style={{
                fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              Turning Out Serious Hair<br />
              <span style={{ color: BRAND.colors.accent }}>Since the 1960s</span>
            </h1>

            <p
              className="mb-8"
              style={{
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: '480px',
              }}
            >
              Three master stylists. Over 60 years of trust. The low-key,
              attitude-free salon where you always leave looking your best.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:4162552131"
                className="inline-flex items-center transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: BRAND.spacing.radiusButtons,
                  fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Book Your Appointment
              </a>
              <Link
                href="/team"
                className="inline-flex items-center transition-all duration-300 hover:scale-105"
                style={{
                  border: '2px solid rgba(255,255,255,0.4)',
                  color: '#FFFFFF',
                  padding: '14px 32px',
                  borderRadius: BRAND.spacing.radiusButtons,
                  fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Meet Our Stylists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '5rem 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 1.5rem' }}>
          <ScrollReveal>
            <p
              className="mb-2"
              style={{
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: BRAND.colors.primary,
              }}
            >
              Our Work
            </p>
            <div className="flex items-end justify-between mb-10">
              <h2
                style={{
                  fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                  fontWeight: 500,
                  color: BRAND.colors.textHeading,
                  lineHeight: 1.2,
                }}
              >
                See What We Do Best
              </h2>
              <Link
                href="/gallery"
                className="hidden md:inline-block text-sm font-semibold transition-colors hover:underline"
                style={{
                  color: BRAND.colors.primary,
                  fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                }}
              >
                View Full Gallery &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/gallery"
                className="md:col-span-2 md:row-span-2 relative overflow-hidden group"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div
                  className="w-full h-full min-h-[320px] md:min-h-[480px] transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${BRAND.images.gallery[0].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                />
              </Link>

              <Link
                href="/gallery"
                className="relative overflow-hidden group"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div
                  className="w-full h-full min-h-[220px] transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${BRAND.images.gallery[1].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                />
              </Link>

              <Link
                href="/gallery"
                className="relative overflow-hidden group"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <div
                  className="w-full h-full min-h-[220px] transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${BRAND.images.gallery[3].url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/gallery"
              className="inline-block text-sm font-semibold transition-colors"
              style={{
                color: BRAND.colors.primary,
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              }}
            >
              View Full Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — Dark contrast section */}
      <section style={{ backgroundColor: BRAND.colors.footerBg, padding: '4rem 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <svg width="40" height="40" viewBox="0 0 24 24" fill={BRAND.colors.accent} className="mx-auto mb-6 opacity-60">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <blockquote
              style={{
                fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#FFFFFF',
                fontStyle: 'italic',
              }}
            >
              &ldquo;I have been a customer at West Endz Hair Salon for many years, and I
              continue to be impressed with the professionalism, excellent service,
              and friendliness of all staff.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm" style={{ color: BRAND.colors.footerText }}>
              &mdash; Jolanta M., loyal customer
            </p>
            <div className="mt-2" style={{ color: BRAND.colors.accent, letterSpacing: '4px' }}>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — Full-bleed green */}
      <section style={{ backgroundColor: BRAND.colors.primary, padding: '4rem 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '600px', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 500,
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Ready for Your New Look?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem' }}>
              Call us today or drop by the salon. Walk-ins welcome, appointments preferred.
            </p>
            <a
              href="tel:4162552131"
              className="inline-flex items-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#FFFFFF',
                color: BRAND.colors.secondary,
                padding: '16px 40px',
                borderRadius: BRAND.spacing.radiusButtons,
                fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Call 416-255-2131
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
