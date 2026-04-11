import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import Link from 'next/link';

const serviceData = [
  {
    category: 'Threading',
    description: 'Gentle, precise hair removal with traditional cotton thread technique. Our specialists shape perfect brows every time.',
    items: BRAND.services.threading,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
        <path d="M12 8v8M8 12h8"/>
      </svg>
    ),
  },
  {
    category: 'Waxing',
    description: 'Smooth, long-lasting results with premium wax formulas gentle on sensitive skin.',
    items: BRAND.services.waxing,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"/>
        <path d="M16 8L2 22M17.5 15H9"/>
      </svg>
    ),
  },
  {
    category: 'Facials',
    description: 'Customized treatments to cleanse, nourish, and brighten your skin. From basic cleanup to premium whitening facials.',
    items: BRAND.services.facials,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="5"/>
        <path d="M20 21a8 8 0 10-16 0"/>
      </svg>
    ),
  },
  {
    category: 'Manicure & Pedicure',
    description: 'Luxurious nail care that leaves your hands and feet feeling renewed and looking beautiful.',
    items: BRAND.services.manicurePedicure,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 11l5-5 5 5M12 6v12"/>
      </svg>
    ),
  },
  {
    category: 'Massage',
    description: 'Melt away tension with our therapeutic massage services. Perfect after a long week.',
    items: BRAND.services.massage,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
      </svg>
    ),
  },
  {
    category: 'Makeup',
    description: 'From casual party looks to stunning bridal makeup that will make you glow on your special day.',
    items: BRAND.services.makeup,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    category: 'Hair',
    description: 'Professional styling for any occasion — updos, blowouts, and traditional looks.',
    items: BRAND.services.hair,
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 3v18M18 3v18M6 12h12"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero banner */}
      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: BRAND.colors.warmCream }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Full Price List
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
            >
              Our Services
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-lg max-w-2xl" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              Affordable beauty services with expert care. Every treatment is tailored to your unique needs.
              Walk-ins welcome, 7 days a week.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Services list — alternating backgrounds */}
      {serviceData.map((category, idx) => (
        <section
          key={category.category}
          className="py-16 md:py-20"
          style={{ backgroundColor: idx % 2 === 0 ? BRAND.colors.bgMain : BRAND.colors.warmCream }}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <BlurFade delay={0.1}>
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${BRAND.colors.primary}12`, color: BRAND.colors.primary }}
                >
                  {category.icon}
                </div>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
                  >
                    {category.category}
                  </h2>
                  <p className="text-sm md:text-base max-w-xl" style={{ color: BRAND.colors.textMuted, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                    {category.description}
                  </p>
                </div>
              </div>
            </BlurFade>

            <div className="divide-y ml-0 md:ml-18" style={{ borderColor: BRAND.colors.border }}>
              {category.items.map((item, i) => (
                <BlurFade key={item.name} delay={0.05 * i}>
                  <div className="flex items-center justify-between py-4 md:py-5">
                    <span
                      className="text-base md:text-lg"
                      style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
                    >
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="h-px flex-1 min-w-8" style={{ backgroundColor: BRAND.colors.border }} />
                      <span
                        className="text-lg font-bold whitespace-nowrap"
                        style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                      >
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 text-center" style={{ backgroundColor: BRAND.colors.secondary }}>
        <div className="max-w-[700px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textLight }}
            >
              Book Your Appointment
            </h2>
            <p className="text-white/70 mb-8" style={{ fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              Walk-ins welcome or call ahead to reserve your time. Open 7 days a week, 10 AM to 9 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BRAND.business.phone.replace(/[^0-9+]/g, '')}`}
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-md transition-all text-white"
                style={{ backgroundColor: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
              >
                Call {BRAND.business.phone}
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-md border-2 border-white/30 text-white hover:bg-white/10 transition-all"
                style={{ fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
              >
                Get Directions
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
