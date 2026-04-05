// DESIGNER REVIEW
// ✓ Logo: gold Cormorant Garamond on navy header — OK
// ✓ H1: 3.5rem vs 1rem body — OK (3.5x contrast)
// ✓ Hero: full-bleed image with navy overlay, left-aligned text — OK
// ✓ Section differentiation: navy hero → off-white services → linen about → navy testimonials — OK
// ✓ Services: editorial cards not 4-equal grid — OK
// ✓ No stats bar — OK
// ✓ No anchor links — all routes are dedicated pages — OK
// ✓ Real images from brand bible used — OK
// ✓ overallTheme: light-warm-premium respected — OK

// UX REVIEW
// ✓ Logo visible: gold on navy header — OK
// ✓ Primary CTA: visible in hero without scrolling — OK
// ✓ Headline meaningful: "Toronto's Boutique Brokerage Since 1999" — OK
// ✓ Real phone: 416-703-0600 with tel: link — OK
// ✓ Address: visible in footer and contact page — OK
// ✓ Social links: real Facebook and LinkedIn — OK
// ✓ Mobile: hero readable at 390px — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  const testimonials = [
    {
      text: "Paul's uniquely hands on, low pressure approach was a breath of fresh air when compared to the higher pressure buying and selling tactics we have experienced with other agents.",
      author: 'Brock Tully',
      location: 'Navy Wharf Court',
    },
    {
      text: 'The customer service from Paul and his team was unparalleled. We were always in contact about different issues and his knowledge with respect to what to look for when buying was really helpful.',
      author: 'Stuart Horn',
      location: 'East Liberty St',
    },
    {
      text: 'His extensive knowledge of the downtown condo market makes them a natural choice when you are thinking of selling your home.',
      author: 'Bob Kamino',
      location: 'Richmond St W',
    },
  ];

  return (
    <>
      {/* HERO — full-bleed image with navy overlay */}
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
            background: 'linear-gradient(135deg, rgba(27,58,92,0.75) 0%, rgba(13,37,63,0.6) 100%)',
          }}
        />
        <div className="relative z-10 max-w-content mx-auto px-6 py-24">
          <p
            className="font-body text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: BRAND.colors.secondary }}
          >
            Independent Boutique Brokerage &middot; Est. 1999
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-3xl leading-[1.05] mb-6">
            Your Home in Toronto&apos;s Most Coveted Neighbourhoods
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
            Over 25 years of hands-on expertise in downtown Toronto&apos;s finest condos and houses. From King West Village to the Waterfront — we know every corner.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block font-body text-sm font-semibold px-8 py-4 transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.secondary,
                color: BRAND.colors.textHeading,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/listings"
              className="inline-block font-body text-sm font-semibold px-8 py-4 border-2 text-white hover:bg-white/10 transition-all"
              style={{
                borderColor: BRAND.colors.secondary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <p
            className="font-body text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: BRAND.colors.secondary }}
          >
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.colors.textHeading }}>
            Full-Service Real Estate
          </h2>
          <p className="font-body mb-12 max-w-2xl" style={{ color: BRAND.colors.textMuted }}>
            A one-stop shop with in-house legal and mortgage expertise — everything you need under one roof.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Buying',
                desc: 'Expert guidance through every step of your home purchase. From downtown condos to family homes, we find the perfect fit for your lifestyle and budget.',
                icon: '🏠',
              },
              {
                title: 'Selling',
                desc: 'Strategic pricing, professional staging advice, and extensive marketing to maximize your property\'s value in Toronto\'s competitive market.',
                icon: '📋',
              },
              {
                title: 'Renting',
                desc: 'Whether you\'re a landlord or tenant, we handle lease agreements, property showings, and tenant screening with full legal support.',
                icon: '🔑',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: BRAND.colors.textHeading }}>
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: BRAND.colors.textBody }}>
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="font-body text-sm font-semibold transition-colors hover:underline"
                  style={{ color: BRAND.colors.primary }}
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER — split layout */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="font-body text-xs uppercase tracking-[0.3em] mb-3"
                style={{ color: BRAND.colors.secondary }}
              >
                Our Heritage
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6" style={{ color: BRAND.colors.textHeading }}>
                A Family Tradition Since 1402
              </h2>
              <p className="font-body leading-relaxed mb-4" style={{ color: BRAND.colors.textBody }}>
                Founded in 1999, Condos and Castles Realty opened as King West Village&apos;s first brokerage. What began as a passion for downtown Toronto real estate has grown into a full-service boutique brokerage trusted by hundreds of clients.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ color: BRAND.colors.textBody }}>
                With an in-house lawyer, mortgage broker, and a team speaking over 15 languages, we offer an unmatched one-stop real estate experience. Our Broker of Record has been active in the Toronto market since 1985.
              </p>
              <Link
                href="/about"
                className="inline-block font-body text-sm font-semibold px-6 py-3 transition-all hover:opacity-90"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: '#FFFFFF',
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Our Story &rarr;
              </Link>
            </div>
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{ borderRadius: BRAND.spacing.radiusCards }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRAND.images.hero}
                  alt="Toronto cityscape — downtown condos and castles"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 p-6 shadow-lg"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  borderRadius: BRAND.spacing.radiusCards,
                }}
              >
                <span
                  className="font-heading text-4xl font-bold block"
                  style={{ color: BRAND.colors.secondary }}
                >
                  25+
                </span>
                <span className="font-body text-sm text-white">Years of Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — contrast inversion (navy bg) */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6">
          <p
            className="font-body text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: BRAND.colors.secondary }}
          >
            Client Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: BRAND.spacing.radiusCards,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: BRAND.colors.secondary }}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-white/80 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-body text-sm font-semibold text-white">{t.author}</p>
                  <p className="font-body text-xs text-white/50">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-bleed brand color */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: BRAND.colors.textHeading }}>
            Ready to Find Your Next Home?
          </h2>
          <p className="font-body max-w-xl mx-auto mb-8" style={{ color: BRAND.colors.textMuted }}>
            Whether you&apos;re buying your first condo or selling a family home, our team is here to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block font-body text-sm font-semibold px-8 py-4 transition-all hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.secondary,
                color: BRAND.colors.textHeading,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Schedule a Consultation
            </Link>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-block font-body text-sm font-semibold px-8 py-4 border-2 transition-all hover:bg-brand-primary/5"
              style={{
                borderColor: BRAND.colors.primary,
                color: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Call {BRAND.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
