{/*
  DESIGN PERSONALITY ANSWERS:
  1. Dominant emotion: Warmth + Professional elegance (European salon feel)
  2. Work vs Trust: Work is the product — hair transformations, coloring, extensions
  3. Established: 36+ years (Lisa) — heritage weight, but website is outdated
  4. Customer feel: Clean, elegant, "feels like in Europe", professional staff
  5. Would NEVER fit: Gritty/dark/edgy, ultra-minimalist, loud/neon colors

  LAYOUT PERSONALITY: GALLERY-FORWARD + NEIGHBORHOOD hybrid
  - Gallery-forward: salon work (transformations) drives bookings
  - Neighborhood: community salon, hours/location matter

  UNIQUE ELEMENT: Hero uses purple gradient overlay on real hair transformation image,
  with editorial typography (Poppins 700) and warm off-white section backgrounds
  giving a European boutique salon feel.
*/}

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  return (
    <>
      {/* HERO — Full-bleed with purple gradient overlay */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BRAND.images.hero})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(77,0,77,0.82), rgba(77,0,77,0.45))',
          }}
        />
        <div className="relative z-10 max-w-content mx-auto px-6 py-20">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
            Etobicoke&apos;s Premier Salon &amp; Spa
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 max-w-2xl">
            Where Everyone
            <br />
            Is Welcome
          </h1>
          <p className="font-body text-lg text-white/85 max-w-lg mb-8 leading-relaxed">
            Over 36 years of excellence in hair styling, coloring, extensions,
            and spa services. Clean, sustainable products. Your crown deserves
            the&nbsp;best.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 text-white font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.accent,
                borderRadius: BRAND.spacing.radiusButtons,
                color: '#2d1f14',
              }}
            >
              Book Your Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 text-white font-semibold border border-white/40 hover:bg-white/10 transition-all"
              style={{ borderRadius: BRAND.spacing.radiusButtons }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER — Editorial list, not card grid */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgWarm }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-textHeading mb-12">
            Expert Services, Tailored to You
          </h2>

          <div className="space-y-0">
            {[
              {
                title: 'Hair Styling & Shaping',
                desc: 'Precision cuts, blowouts, updos, and bridal styles crafted by experienced hands.',
              },
              {
                title: 'Color & Highlights',
                desc: 'Artistic coloring, corrective color, and natural highlights that bring your vision to life.',
              },
              {
                title: 'Extensions & Treatments',
                desc: 'Premium Hairdreams and Great Lengths extensions. Kerastase and Eufora treatments for lasting health.',
              },
              {
                title: 'Spa & Esthetics',
                desc: 'Facials, massage, waxing, manicures, pedicures, and body treatments for complete renewal.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-b border-brand-textMuted/20"
              >
                <h3 className="font-heading text-xl font-semibold text-brand-textHeading mb-2 md:mb-0 md:w-1/3">
                  {service.title}
                </h3>
                <p className="font-body text-base text-brand-textBody md:w-2/3 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 font-semibold text-white transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER — Dark bg to make images pop */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-10">
            Transformations That Speak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND.images.gallery.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden group"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              >
                <img
                  src={img.url}
                  alt={img.description}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/gallery"
              className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 font-semibold transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.accent,
                borderRadius: BRAND.spacing.radiusButtons,
                color: '#2d1f14',
              }}
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgWarm }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
            Meet the Artists
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-textHeading mb-10">
            The Team Behind Your&nbsp;Look
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND.people
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((person, i) => (
                <div
                  key={i}
                  className="bg-white p-6 transition-all duration-300 hover:shadow-lg"
                  style={{
                    borderRadius: BRAND.spacing.radiusCards,
                    boxShadow: '0 4px 20px rgba(77, 0, 77, 0.08)',
                  }}
                >
                  {/* Initials on brand purple */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: BRAND.colors.primary }}
                  >
                    <span className="font-heading text-2xl font-bold text-white">
                      {person.name[0]}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-brand-textHeading text-center">
                    {person.name}
                  </h3>
                  <p className="font-heading text-xs uppercase tracking-[0.12em] text-brand-secondary text-center mt-1 mb-3">
                    {person.role}
                  </p>
                  <p className="font-body text-sm text-brand-textBody text-center leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 font-semibold text-white transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Meet Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING CTA — Full-width brand accent */}
      <section
        className="py-20 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, #6b1a6b 100%)`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Your Crown Deserves the Best
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-lg mx-auto">
            Book your appointment today and experience the EFX difference.
            Over 36 years of expertise, clean products, and a team that
            truly&nbsp;listens.
          </p>
          <Link
            href="/contact"
            className="inline-block font-heading text-sm uppercase tracking-wide px-10 py-4 font-bold transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.accent,
              borderRadius: BRAND.spacing.radiusButtons,
              color: '#2d1f14',
            }}
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
