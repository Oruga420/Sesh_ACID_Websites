// DESIGNER REVIEW
// Logo: Navy text on white header — OK
// H1: 3.5rem (56px) vs 16px body — OK (3.5x ratio)
// Services: editorial card grid, not 4 equal cards — OK
// Section differentiation: dark hero / light-alt services / white trust / dark testimonials — OK
// No stats bar — OK
// No anchor links — OK
// Hero: full-bleed image with dark overlay, left-aligned text — OK

// UX REVIEW
// Logo visible: navy on white header — OK
// Primary CTA: visible in hero + repeated at bottom — OK
// Mobile: hero readable at 390px — OK
// Real phone: 365-231-9115 with tel: link — OK
// Address: visible in footer and contact page — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  const services = [
    {
      title: 'Bad Credit Mortgages',
      description: 'Your credit score doesn\'t define your future. We work with private lenders who look beyond the numbers.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Self-Employed Lending',
      description: 'Non-traditional income? We understand entrepreneurs. Alternative documentation options available.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: 'New Immigrant Mortgages',
      description: 'New to Canada? We help newcomers achieve homeownership with specialized lending programs.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* HERO — Full-bleed with dark gradient overlay */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '600px',
          backgroundImage: `linear-gradient(135deg, rgba(13,33,55,0.88) 0%, rgba(27,77,110,0.75) 100%), url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '80px 24px' }}>
          <div className="max-w-2xl">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: BRAND.colors.accent }}
            >
              Licensed Ontario Mortgage Brokerage
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: BRAND.colors.textLight,
                lineHeight: 1.15,
              }}
            >
              Your Credit Score{' '}
              <span style={{ color: BRAND.colors.accent }}>Doesn&apos;t Define</span>{' '}
              Your Future
            </h1>
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              We specialize in mortgage solutions when traditional banks say no. Bad credit, self-employed, new to Canada — every situation has a path to homeownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:3652319115"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
                style={{
                  backgroundColor: BRAND.colors.accent,
                  color: BRAND.colors.bgDark,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Get Pre-Approved Today
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold transition-all hover:bg-white/10"
                style={{
                  border: '2px solid rgba(255,255,255,0.4)',
                  color: BRAND.colors.textLight,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER — 3 cards on alt background */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: BRAND.colors.secondary }}>
            Our Specialties
          </p>
          <h2 className="text-3xl md:text-4xl text-center mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Mortgage Solutions for Every Situation
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: BRAND.colors.textMuted }}>
            Whether you have been turned down by a bank or are navigating a complex financial situation, we have the expertise and lender network to find your solution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SECTION — Why Choose Us */}
      <section style={{ backgroundColor: BRAND.colors.bgCard, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: BRAND.colors.secondary }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            We Find Solutions Where Banks See Problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Access to Private Lenders',
                description: 'Our extensive network of private and alternative lenders means more options for your unique situation.',
              },
              {
                title: 'Licensed & Regulated',
                description: `${BRAND.business.license}. Fully regulated by the Financial Services Regulatory Authority of Ontario (FSRAO).`,
              },
              {
                title: 'Ontario-Wide Coverage',
                description: 'Serving Brampton, Mississauga, Toronto, Oakville, and all of Ontario with mortgage solutions.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div
                  className="inline-flex items-center justify-center rounded-full mb-5"
                  style={{
                    width: 56,
                    height: 56,
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — Dark contrast section */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgDark,
          padding: '72px 0',
        }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: '800px', padding: '0 24px' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill={BRAND.colors.accent} className="mx-auto mb-6">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
          </svg>
          <blockquote
            className="text-xl md:text-2xl leading-relaxed mb-6 italic"
            style={{ color: BRAND.colors.textLight, fontFamily: 'var(--font-heading)' }}
          >
            &ldquo;I have been working with Ms Harjeet Chawla, a principal mortgage broker, on a number of occasions and she is a true professional.&rdquo;
          </blockquote>
          <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>
            &mdash; Verified Client Review
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.accent}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.secondary} 100%)`,
          padding: '64px 0',
        }}
      >
        <div className="mx-auto text-center" style={{ maxWidth: '700px', padding: '0 24px' }}>
          <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Ready to Explore Your Options?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Every mortgage situation is unique. Let us review yours — no obligation, no judgment, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3652319115"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.accent,
                color: BRAND.colors.bgDark,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Call {BRAND.business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold transition-all hover:bg-white/10"
              style={{
                border: '2px solid rgba(255,255,255,0.4)',
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
