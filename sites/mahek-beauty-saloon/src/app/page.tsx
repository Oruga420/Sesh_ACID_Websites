/*
  DESIGN PERSONALITY ANALYSIS — Mahek Beauty Saloon
  ═══════════════════════════════════════════════════
  1. Dominant emotion: WARMTH + ELEGANCE — a family-run salon where 17-year client relationships exist
  2. Work is the product: BRIDAL GALLERY drives bookings — showcase the transformations
  3. Establishment: 19 YEARS — heritage weight, trust through longevity
  4. Customer feeling: "Welcoming", "calm ambiance", "like family" — reviews emphasize COMFORT
  5. Would NEVER fit: Trendy/neon, dark moody, minimalist clinical, startup tech feel

  LAYOUT PERSONALITY: EDITORIAL (A) + GALLERY-FORWARD (B) hybrid
  - Split hero with editorial type treatment
  - Gallery teaser with asymmetric grid immediately visible
  - Heritage/longevity woven into the narrative
  - Warm cream backgrounds for the spa feel
*/

import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  const featuredGallery = BRAND.images.gallery.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
          <p
            className="mb-4 tracking-[0.3em] text-brand-text-muted"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            Est. 2006 &middot; Etobicoke &amp; Brampton
          </p>
          <h1
            className="mb-6 text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 7vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
            }}
          >
            Your Hair Is
            <br />
            Our Canvas
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-lg text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            19 years of transforming beauty across the Greater Toronto Area.
            Expert stylists. Bridal artistry. Unisex salon &amp; spa.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${BRAND.business.locations[0].phone}`}
              className="bg-brand-secondary px-10 py-4 text-white transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Book Your Appointment
            </a>
            <Link
              href="/gallery"
              className="border border-white/30 px-10 py-4 text-white transition-colors hover:border-white hover:bg-white/10"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE TEASER */}
      <section className="bg-brand-bg-alt" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1140px] px-6">
          <p
            className="mb-3 text-center tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            What We Offer
          </p>
          <h2
            className="mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 400 }}
          >
            Full-Service Beauty
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Hair Styling',
                desc: 'Precision cuts, vibrant color, balayage, keratin, nanoplastia, and more for women, men, and kids.',
                img: BRAND.images.atmosphere[0].url,
              },
              {
                title: 'Bridal & Makeup',
                desc: 'Your special day, perfected. Traditional and contemporary bridal looks, airbrush makeup, and at-home services.',
                img: BRAND.images.gallery[0].url,
              },
              {
                title: 'Skin Care & Spa',
                desc: 'Luxury facials from Casmara and Shahnaz, body polishing, hot stone massages, and total relaxation.',
                img: BRAND.images.atmosphere[1].url,
              },
            ].map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group overflow-hidden bg-brand-bg-card shadow-[0_2px_15px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text-body">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block bg-brand-primary px-8 py-3.5 text-brand-text-on-dark transition-colors hover:bg-brand-secondary"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="bg-brand-primary" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[1140px] px-6">
          <p
            className="mb-3 text-center tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            Our Portfolio
          </p>
          <h2
            className="mb-12 text-center text-brand-text-on-dark"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 400 }}
          >
            Beauty Transformed
          </h2>

          <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
            <div className="relative md:col-span-2 md:row-span-2" style={{ minHeight: '400px' }}>
              <Image
                src={featuredGallery[0].url}
                alt={featuredGallery[0].description}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {featuredGallery.slice(1).map((img, i) => (
              <div key={i} className="relative" style={{ minHeight: '195px' }}>
                <Image
                  src={img.url}
                  alt={img.description}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-block border border-brand-text-on-dark/30 px-8 py-3.5 text-brand-text-on-dark transition-colors hover:border-brand-text-on-dark hover:bg-brand-text-on-dark/10"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative" style={{ padding: '80px 0' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.backgrounds.testimonials})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-[700px] px-6 text-center">
          <p
            className="mb-6 tracking-[0.3em] text-brand-secondary"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', textTransform: 'uppercase' }}
          >
            What Our Clients Say
          </p>
          <p className="text-xl leading-relaxed italic text-white/90" style={{ fontFamily: 'var(--font-body)' }}>
            &ldquo;I have been going to Mona for 10 years now and she is hands down the best hair stylist
            I have ever met. She is so sweet and gives the best advice on hairstyles. Her haircuts and
            styling are just brilliant.&rdquo;
          </p>
          <p
            className="mt-6 tracking-[0.2em] text-brand-text-muted"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', textTransform: 'uppercase' }}
          >
            Grishma Shah
          </p>
          <div className="mt-4 flex items-center justify-center gap-1 text-brand-secondary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">&#9733;</span>
            ))}
          </div>
          <p className="mt-2 text-sm text-brand-text-muted">
            4.7 stars &middot; 1,900+ Google Reviews
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-bg-alt" style={{ padding: '80px 0' }}>
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '36px', fontWeight: 400 }}>
            Ready for Your Transformation?
          </h2>
          <p className="mt-4 text-brand-text-body">
            Visit us at our Etobicoke or Brampton location, or call to book your appointment today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${BRAND.business.locations[0].phone}`}
              className="bg-brand-secondary px-8 py-3.5 text-white transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Etobicoke: {BRAND.business.locations[0].phone}
            </a>
            <a
              href={`tel:${BRAND.business.locations[1].phone}`}
              className="bg-brand-primary px-8 py-3.5 text-white transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Brampton: {BRAND.business.locations[1].phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
