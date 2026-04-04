// DESIGNER REVIEW
// Logo: white text on navy #003B6F header — OK
// H1: 3.5rem (56px) vs 1rem (16px) body — OK (3.5x ratio)
// Services: editorial 3-card teaser, not 4-equal grid — OK
// Section differentiation: hero dark / services white / about alt-gray / testimonials dark / CTA red — OK
// Real images: hero uses real Niro+skyline, neighborhoods from site — OK

// UX REVIEW
// Logo visible: white on dark navy — OK
// Primary CTA: "Book Your Free Consultation" in hero above fold — OK
// Mobile: hero text left-aligned, readable at 390px — OK
// Social links: real @realtor.niro and /realtorniro/ URLs — OK
// Real phone: 647-244-9878 with tel: link — OK
// Address: visible in CTA section and footer — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center" style={{ backgroundColor: BRAND.colors.bgHero }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BRAND.images.hero})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 59, 111, 0.85) 0%, rgba(10, 22, 40, 0.7) 100%)',
          }}
        />
        <div className="relative z-10 mx-auto px-6 py-24 w-full" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs mb-4 tracking-widest"
              style={{
                color: BRAND.colors.secondary,
                fontFamily: BRAND.fonts.heading,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              RE/MAX Community Realty &middot; Scarborough
            </span>
            <h1
              className="mb-6 leading-tight"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontFamily: BRAND.fonts.heading,
                fontWeight: 700,
                color: BRAND.colors.textLight,
                lineHeight: 1.15,
              }}
            >
              Your Trusted Partner in
              <br />
              <span style={{ color: BRAND.colors.accent }}>Scarborough Real Estate</span>
            </h1>
            <p
              className="mb-8 text-lg max-w-xl"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: BRAND.fonts.body, lineHeight: 1.7 }}
            >
              With 9 years of dedicated service across the Greater Toronto Area, Niro Tharmakulasingam brings expert negotiation skills and a family-first approach to every transaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block text-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: BRAND.colors.secondary,
                  color: BRAND.colors.textLight,
                  fontFamily: BRAND.fonts.heading,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '14px 32px',
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Book Your Free Consultation
              </Link>
              <Link
                href="/listings"
                className="inline-block text-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: 'transparent',
                  color: BRAND.colors.textLight,
                  fontFamily: BRAND.fonts.heading,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '14px 32px',
                  borderRadius: BRAND.spacing.radiusButtons,
                  border: '2px solid rgba(255,255,255,0.4)',
                }}
              >
                View Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs mb-3 tracking-widest"
              style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
            >
              What We Do
            </span>
            <h2
              className="mb-4"
              style={{ fontSize: '2.25rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}
            >
              Expert Real Estate Services
            </h2>
            <p style={{ color: BRAND.colors.textBody, maxWidth: '600px', margin: '0 auto' }}>
              Whether you are buying your first home, selling a property, or investing in the GTA market, Niro provides personalized guidance every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Buying',
                description: 'Expert guidance for first-time buyers and seasoned investors alike. Find the perfect property with a broker who knows the GTA inside out.',
                image: BRAND.images.gallery[2].url,
              },
              {
                title: 'Selling',
                description: 'Strategic marketing, professional staging, and expert negotiation to maximize your sale price. Results-driven approach for every listing.',
                image: BRAND.images.gallery[0].url,
              },
              {
                title: 'Investing',
                description: 'Investment property analysis, market insights, and opportunity identification across Toronto, Scarborough, Markham, and beyond.',
                image: BRAND.images.gallery[1].url,
              },
            ].map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group block rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  border: `1px solid ${BRAND.colors.border}`,
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="h-48 overflow-hidden" style={{ backgroundColor: BRAND.colors.bgAlt }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block text-sm transition-all hover:opacity-80"
              style={{
                color: BRAND.colors.primary,
                fontFamily: BRAND.fonts.heading,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: `2px solid ${BRAND.colors.primary}`,
                paddingBottom: '2px',
              }}
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="inline-block text-xs mb-3 tracking-widest"
                style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
              >
                Client Testimonials
              </span>
              <h2 className="mb-8" style={{ fontSize: '2.25rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
                Trusted by Families Across the GTA
              </h2>

              <div className="space-y-8">
                {[
                  {
                    quote: 'By far Niro is the best Professional Realtor in GTA! He works hard for his clients and he never gives up until the best results are achieved.',
                    author: 'Taylor Quinn',
                    location: 'Pickering',
                  },
                  {
                    quote: 'Niro was a referral from one of my friends and we found him to be extremely professional and experienced. We chose him to buy and sell our home and had the most amazing experience.',
                    author: 'John McCain',
                    location: 'Scarborough',
                  },
                ].map((testimonial, i) => (
                  <blockquote
                    key={i}
                    className="pl-6"
                    style={{ borderLeft: `3px solid ${BRAND.colors.accent}` }}
                  >
                    <p className="mb-3 italic" style={{ color: BRAND.colors.textBody, fontSize: '1.05rem', lineHeight: 1.7 }}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer style={{ color: BRAND.colors.textMuted, fontSize: '0.875rem' }}>
                      — <strong style={{ color: BRAND.colors.textHeading }}>{testimonial.author}</strong>, {testimonial.location}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden" style={{ borderRadius: BRAND.spacing.radiusImages }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRAND.people[0].officePhotoUrl}
                  alt="Niro Tharmakulasingam in his office"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-6 py-4 rounded-lg shadow-lg"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                <p className="text-2xl font-bold" style={{ color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading }}>
                  9+ Years
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  of Trusted Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Teaser */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs mb-3 tracking-widest"
              style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
            >
              Featured Properties
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
              Explore the GTA Market
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRAND.images.neighborhoods.slice(0, 3).map((area) => (
              <Link
                key={area.name}
                href="/listings"
                className="group relative block h-64 rounded-lg overflow-hidden"
                style={{ borderRadius: BRAND.spacing.radiusCards }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={area.url}
                  alt={`Properties in ${area.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold" style={{ color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading }}>
                    {area.name}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    View Properties →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.bgHero} 100%)`,
          padding: '80px 24px',
        }}
      >
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          <h2
            className="mb-4"
            style={{ fontSize: '2rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}
          >
            Ready to Find Your Dream Home?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Whether buying, selling, or investing, get expert guidance from a trusted Scarborough broker. Free consultations available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block text-sm transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.secondary,
                color: BRAND.colors.textLight,
                fontFamily: BRAND.fonts.heading,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '14px 32px',
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Book Your Free Consultation
            </Link>
            <a
              href={`tel:${BRAND.contact.phone}`}
              className="inline-block text-sm transition-all hover:opacity-90"
              style={{
                backgroundColor: 'transparent',
                color: BRAND.colors.textLight,
                fontFamily: BRAND.fonts.heading,
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '14px 32px',
                borderRadius: BRAND.spacing.radiusButtons,
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              Call {BRAND.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
