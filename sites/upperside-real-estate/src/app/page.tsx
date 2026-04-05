// DESIGN PERSONALITY ANSWERS
// 1. Dominant emotion: Trust, authority, confidence
// 2. Trust/expertise is the product — clients buy the brokerage's credibility and agent network
// 3. Established — 20+ years of experience, 70+ agents
// 4. Customers feel: confident, supported, in good hands (from reviews)
// 5. Would NEVER fit: playful fonts, dark moody theme, casual language, rounded pill buttons
//
// Layout Personality: AUTHORITY (C) — trust-driven, clean, professional
// The ONE unique thing: A 70-agent brokerage with gold/charcoal identity and a prominent agent roster grid
//
// DESIGNER REVIEW
// ✓ Logo: gold text on charcoal header — OK
// ✓ H1: 3rem (48px) vs 1rem (16px) body — 3x ratio OK
// ✓ Section differentiation: hero dark / services light-gray / agents white / CTA dark — OK
// ✓ Fonts: Montserrat + Open Sans from brand-bible — OK
// ✓ Colors: all from brand-tokens.ts — OK
// ✓ overallTheme: light-clean — light backgrounds throughout — OK
// ✓ Real property images from Google Storage CDN — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const services = [
  {
    title: 'Residential Sales',
    description: 'From first-time buyers to luxury estates — find your perfect home across Vaughan, Richmond Hill, Toronto, and the GTA.',
    icon: '🏠',
  },
  {
    title: 'Commercial Real Estate',
    description: 'Office spaces, retail locations, and investment properties. Expert guidance for every commercial transaction.',
    icon: '🏢',
  },
  {
    title: 'Pre-Construction Condos',
    description: 'Get first access to the latest pre-construction developments across the Greater Toronto Area.',
    icon: '🏗️',
  },
];

const featuredAgents = BRAND.agents.filter(a => ['Broker', 'Broker of Record'].includes(a.role)).slice(0, 4);

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export default function HomePage() {
  return (
    <>
      {/* HERO — Full-bleed with dark overlay */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BRAND.images.hero})`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(34,34,34,0.8) 0%, rgba(93,91,90,0.7) 100%)' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-6"
            style={{ color: BRAND.colors.gold }}
          >
            Vaughan&apos;s Premier Brokerage
          </p>
          <h1
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            style={{ color: BRAND.colors.textLight }}
          >
            Your Trusted Partner in<br />
            <span style={{ color: BRAND.colors.gold }}>GTA Real Estate</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
            With 70+ experienced agents serving Vaughan, Richmond Hill, Toronto, and beyond — we bring deep local expertise to every transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block px-8 py-4 font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: BRAND.colors.gold,
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Explore Our Services
            </Link>
            <Link
              href="/agents"
              className="inline-block px-8 py-4 font-heading font-semibold text-sm uppercase tracking-wider border-2 transition-all duration-300 hover:bg-white hover:text-gray-900"
              style={{
                borderColor: BRAND.colors.textLight,
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Meet Our Agents
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p
            className="text-xs font-heading font-semibold uppercase tracking-[0.3em] text-center mb-3"
            style={{ color: BRAND.colors.gold }}
          >
            What We Offer
          </p>
          <h2
            className="font-heading font-bold text-3xl md:text-4xl text-center mb-4"
            style={{ color: BRAND.colors.textHeading }}
          >
            Full-Service Real Estate Solutions
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: BRAND.colors.textMuted }}>
            Whether you are buying, selling, or investing — our team of seasoned professionals delivers results across every segment of the GTA market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgMain,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3
                  className="font-heading font-semibold text-xl mb-3"
                  style={{ color: BRAND.colors.textHeading }}
                >
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
              className="inline-block px-6 py-3 text-sm font-heading font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-110"
              style={{
                backgroundColor: BRAND.colors.gold,
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED AGENTS PREVIEW */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <p
            className="text-xs font-heading font-semibold uppercase tracking-[0.3em] text-center mb-3"
            style={{ color: BRAND.colors.gold }}
          >
            Our Leadership
          </p>
          <h2
            className="font-heading font-bold text-3xl md:text-4xl text-center mb-4"
            style={{ color: BRAND.colors.textHeading }}
          >
            Meet the Brokers Behind Upperside
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: BRAND.colors.textMuted }}>
            Decades of combined experience leading a team of 70+ agents across the Greater Toronto Area.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredAgents.map((agent) => {
              const person = BRAND.people.find(p => p.name === agent.name);
              return (
                <div
                  key={agent.name}
                  className="text-center p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.border}`,
                  }}
                >
                  {person?.profilePhotoUrl ? (
                    <div
                      className="w-20 h-20 mx-auto mb-4 rounded-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${person.profilePhotoUrl})`,
                        backgroundColor: BRAND.colors.gold,
                      }}
                    />
                  ) : (
                    <div
                      className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center font-heading font-bold text-xl"
                      style={{
                        backgroundColor: BRAND.colors.gold,
                        color: BRAND.colors.textLight,
                      }}
                    >
                      {getInitials(agent.name)}
                    </div>
                  )}
                  <h3 className="font-heading font-semibold text-sm" style={{ color: BRAND.colors.textHeading }}>
                    {agent.name}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>{agent.role}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/agents"
              className="inline-block px-6 py-3 text-sm font-heading font-semibold uppercase tracking-wider border-2 transition-all duration-300"
              style={{
                borderColor: BRAND.colors.gold,
                color: BRAND.colors.gold,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              View All 70+ Agents
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS PREVIEW */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p
            className="text-xs font-heading font-semibold uppercase tracking-[0.3em] text-center mb-3"
            style={{ color: BRAND.colors.gold }}
          >
            Featured Properties
          </p>
          <h2
            className="font-heading font-bold text-3xl md:text-4xl text-center mb-12"
            style={{ color: BRAND.colors.textHeading }}
          >
            Latest Listings in the GTA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND.images.gallery.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  backgroundColor: BRAND.colors.bgMain,
                }}
              >
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${img.url})`,
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-base" style={{ color: BRAND.colors.textHeading }}>
                    {img.description}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: BRAND.colors.textMuted }}>
                    Vaughan, Ontario
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <p
            className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: BRAND.colors.gold }}
          >
            Ready to Make Your Move?
          </p>
          <h2
            className="font-heading font-bold text-3xl md:text-4xl mb-6"
            style={{ color: BRAND.colors.textLight }}
          >
            Your Dream Home is Waiting
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Whether you are buying your first home, upgrading, or investing in the GTA market, our team is ready to guide you every step of the way.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: BRAND.colors.gold,
              color: BRAND.colors.textLight,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
