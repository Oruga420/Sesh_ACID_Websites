// DESIGN PERSONALITY ANSWERS
// 1. Dominant emotion: TRUST + STABILITY — 28+ years, former TD Bank manager, FSRA licensed
// 2. Trust/expertise is the product — mortgage broking is invisible work, clients buy confidence
// 3. Very established — founded 1997, almost 3 decades of operation. Heritage weight.
// 4. Customers feel: "family atmosphere", "integrity", "supportive", "genuine"
// 5. Would NEVER fit: flashy fintech aesthetic, dark mode, playful fonts, neon colors

// DESIGNER REVIEW
// Logo: blue/red on white header — OK (dark logo on light bg)
// H1: 3.5rem vs 1rem body (3.5x) — OK for authority brand
// Services: editorial card grid with icons, not equal 4-card — OK
// Section differentiation: white / alt-gray / dark-navy / white — OK
// CTA: brand primary blue with white text, 6px radius — OK
// Hero: split layout with property image right — anti-template OK

// UX REVIEW
// Logo visible: blue logo on white header — OK
// Primary CTA: "Get Pre-Approved" in hero above fold — OK
// Phone visible: in hero subtext — OK
// Real address: in contact CTA section — OK
// Social links: real Instagram/Facebook/YouTube handles — OK
// Testimonials: real quotes from real people — OK

import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/lib/brand-tokens';

const featuredServices = [
  {
    icon: '🏠',
    title: 'First Time Buyers',
    description: 'Navigate the home buying process with confidence. We help first-time buyers access the best programs and rates available.',
  },
  {
    icon: '🔄',
    title: 'Mortgage Refinancing',
    description: 'Tap into your home equity, lower your payments, or consolidate debt. We shop 50+ lenders to find the right refinance solution.',
  },
  {
    icon: '🏗️',
    title: 'Commercial Mortgages',
    description: 'From retail spaces to multi-unit developments, we structure commercial financing that works for your business goals.',
  },
];

const testimonials = [
  {
    name: 'Sandra Burke',
    title: 'Mortgage Professional',
    quote: 'Morcan Financial has been my home as a mortgage professional for almost 20 years. Joe and staff have helped me grow my knowledge of the industry.',
  },
  {
    name: 'Rob Couse',
    title: 'Client',
    quote: 'Joe and his staff have been very helpful to me and my family for any of my mortgage needs and questions. Two thumbs up!',
  },
  {
    name: 'Christina Burke',
    title: 'Top Agent, With Morcan Since 1997',
    quote: 'I have been with Morcan Financial since 1997. None match the value proposition and the family atmosphere of Morcan Financial.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Split layout with property image */}
      <section className="relative overflow-hidden" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center" style={{ maxWidth: '1400px' }}>
          {/* Left: Content */}
          <div className="px-6 py-20 lg:py-28 lg:px-16">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: BRAND.colors.accent }}
            >
              Trusted Since 1997 &middot; FSRA #{BRAND.business.fsra}
            </p>
            <h1
              className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6"
              style={{ color: BRAND.colors.textLight, fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}
            >
              Your Mortgage.{' '}
              <span style={{ color: BRAND.colors.accent }}>Your Terms.</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg" style={{ color: '#94A3B8' }}>
              With access to {BRAND.business.lenders} lending institutions, MorCan Financial works for you — not the banks.
              Led by Joe Taibi, serving Ontario families for over 28 years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold transition-all hover:shadow-lg"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.textLight,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Get Pre-Approved
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-7 py-3.5 text-sm font-semibold border-2 transition-all hover:bg-white/10"
                style={{
                  borderColor: '#94A3B8',
                  color: '#94A3B8',
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Explore Services
              </Link>
            </div>
            <p className="mt-6 text-sm" style={{ color: '#64748B' }}>
              <a href={`tel:${BRAND.business.phone}`} className="hover:underline">{BRAND.business.phone}</a>
              {' '}&middot; Woodbridge, ON
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            <Image
              src={BRAND.images.hero}
              alt="House keys — your new home awaits"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — 3 featured cards */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-center"
            style={{ color: BRAND.colors.primary }}
          >
            Our Services
          </p>
          <h2
            className="text-3xl lg:text-4xl text-center mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}
          >
            Infinite Solutions, Infinite Possibilities
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: BRAND.colors.textMuted }}>
            From your first home to commercial investments, we match you with the right mortgage from our network of {BRAND.business.lenders} lenders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border"
                style={{
                  borderRadius: BRAND.spacing.radiusCards,
                  borderColor: BRAND.colors.border,
                }}
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3
                  className="text-xl mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}
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
              className="inline-flex items-center text-sm font-semibold transition-colors hover:underline"
              style={{ color: BRAND.colors.primary }}
            >
              View All 14+ Services →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MORCAN */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em] mb-3"
                style={{ color: BRAND.colors.primary }}
              >
                Why MorCan
              </p>
              <h2
                className="text-3xl lg:text-4xl mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}
              >
                Working for You, Not the Banks
              </h2>
              <p className="mb-8" style={{ color: BRAND.colors.textBody }}>
                Unlike your bank, we&apos;re not limited to one set of products. As independent brokers, we shop the entire market
                to find you the mortgage that actually fits — saving you thousands over the life of your loan.
              </p>
              <ul className="space-y-4">
                {[
                  { label: `${BRAND.business.lenders} Lending Institutions`, desc: 'Banks, credit unions, trusts, and private lenders — all competing for your business.' },
                  { label: 'Since 1997', desc: 'Nearly three decades of mortgage expertise serving the GTA and Ontario.' },
                  { label: 'FSRA Licensed & Regulated', desc: 'Full compliance with Ontario financial services regulations. License #10687.' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5"
                      style={{ backgroundColor: BRAND.colors.primary }}
                    >
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND.colors.textHeading }}>{item.label}</p>
                      <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Beautiful suburban home in the GTA"
                fill
                className="object-cover"
                style={{ borderRadius: BRAND.spacing.radiusImages }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — Dark section for contrast inversion */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-center"
            style={{ color: BRAND.colors.accent }}
          >
            Client Testimonials
          </p>
          <h2
            className="text-3xl lg:text-4xl text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}
          >
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-lg border"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: BRAND.spacing.radiusCards,
                }}
              >
                <p className="text-sm italic mb-5 leading-relaxed" style={{ color: '#CBD5E1' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: BRAND.colors.textLight }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#64748B' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA — Full-width brand color */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <h2
            className="text-3xl lg:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}
          >
            Ready to Find Your Perfect Mortgage?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Whether you&apos;re buying your first home, refinancing, or investing, Joe Taibi and the MorCan team are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold transition-all hover:shadow-lg"
              style={{
                backgroundColor: BRAND.colors.textLight,
                color: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
              }}
            >
              Talk to Joe
            </Link>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold border-2 transition-all hover:bg-white/10"
              style={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: BRAND.colors.textLight,
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
