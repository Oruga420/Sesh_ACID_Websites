// DESIGN PERSONALITY
// 1. Dominant emotion: Warmth + care + feminine elegance
// 2. Work is the product: Threading, facials, bridal makeup — results-driven
// 3. Establishment: Newer business but deeply rooted in South Asian beauty tradition
// 4. Customer feeling: Pampered, cared for, like family — they serve tea and snacks
// 5. Would NEVER fit: Brutalist/industrial, dark moody, angular/harsh

// DESIGNER REVIEW
// Logo: red/black on white — white header bg OK
// H1: ~7rem vs 1rem body — dramatic scale OK
// Services: editorial list with dividers, NOT card grid
// Section differentiation: white / warm cream / dark / cream / red — OK
// Gallery: 3 images in asymmetric layout on dark bg — OK
// One unique thing: warm cream + gold accents evoke South Asian hospitality warmth

// UX REVIEW
// Logo visible: red/black logo on white header — OK
// Primary CTA: "Book Now" in hero + header + bottom CTA — OK
// Mobile: responsive, hamburger menu — OK
// Real phone: (647) 674-8191 with tel: link — OK
// Address: visible in footer and contact page — OK
// Social: real @neelkanthbeautyparlour link — OK

import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';
import { Marquee } from '@/components/ui/marquee';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const serviceCategories = [
  { name: 'Threading', description: 'Precision eyebrow & facial threading with a gentle touch', starting: 3, href: '/services' },
  { name: 'Facials', description: 'Fruit, herbal & whitening facials for a radiant glow', starting: 20, href: '/services' },
  { name: 'Bridal Makeup', description: 'Stunning looks for your most beautiful day', starting: 50, href: '/services' },
  { name: 'Waxing', description: 'Full body waxing services for silky smooth skin', starting: 20, href: '/services' },
  { name: 'Massage', description: 'Relaxing shoulder, back & full body massages', starting: 35, href: '/services' },
  { name: 'Mani & Pedi', description: 'Luxurious nail care for hands and feet', starting: 50, href: '/services' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — Full-bleed with dark overlay, left-aligned ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BRAND.images.hero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 w-full">
          <BlurFade delay={0.1}>
            <span
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] mb-6"
              style={{ color: BRAND.colors.gold, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Markham&apos;s Trusted Beauty Parlour
            </span>
          </BlurFade>
          <BlurFade delay={0.3}>
            <h1
              className="text-5xl md:text-[6rem] lg:text-[7rem] font-bold leading-[0.95] mb-6 max-w-4xl"
              style={{
                fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                color: BRAND.colors.textLight,
                textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              Your Beauty,<br />
              <span style={{ color: BRAND.colors.gold }}>Our Passion</span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.5}>
            <p
              className="text-lg md:text-xl text-white/80 max-w-lg mb-10 leading-relaxed"
              style={{ fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
            >
              Expert threading, facials & bridal makeup with the warm hospitality of home.
              Walk-ins welcome — complimentary chai while you wait.
            </p>
          </BlurFade>
          <BlurFade delay={0.7}>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BRAND.business.phone.replace(/[^0-9+]/g, '')}`}
              >
                <ShimmerButton
                  className="px-8 py-4 text-base font-bold uppercase tracking-wider"
                  shimmerColor="#C9A84C"
                  background={BRAND.colors.primary}
                >
                  Book Now — {BRAND.business.phone}
                </ShimmerButton>
              </a>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-white/40 text-white text-sm font-bold uppercase tracking-wider rounded-md hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
              >
                View Services & Prices
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ===== SERVICES TEASER — warm cream background, editorial list ===== */}
      <section style={{ backgroundColor: BRAND.colors.warmCream }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              What We Offer
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
            >
              Services & Pricing
            </h2>
            <p className="text-base md:text-lg max-w-2xl mb-12" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              From precision threading to stunning bridal looks, we bring expert South Asian beauty
              services to Markham at prices that respect your wallet.
            </p>
          </BlurFade>

          <div className="divide-y" style={{ borderColor: BRAND.colors.border }}>
            {serviceCategories.map((service, i) => (
              <BlurFade key={service.name} delay={0.1 + i * 0.08}>
                <Link
                  href={service.href}
                  className="group flex items-center justify-between py-6 md:py-8 transition-colors hover:bg-white/50 -mx-4 px-4 rounded-lg"
                >
                  <div className="flex-1">
                    <h3
                      className="text-xl md:text-2xl font-bold mb-1 group-hover:text-brand-primary transition-colors"
                      style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-sm md:text-base" style={{ color: BRAND.colors.textMuted, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-sm font-semibold whitespace-nowrap"
                      style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                    >
                      From ${service.starting}
                    </span>
                    <svg
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className="text-brand-text-muted group-hover:text-brand-primary group-hover:translate-x-1 transition-all"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.6}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 border-2 hover:shadow-md"
                style={{
                  color: BRAND.colors.primary,
                  borderColor: BRAND.colors.primary,
                  fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}`,
                }}
              >
                View Full Price List
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ===== GALLERY TEASER — dark background, images pop ===== */}
      <section style={{ backgroundColor: BRAND.colors.secondary }} className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.gold, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Our Work
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-12"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textLight }}
            >
              Beauty in Every Detail
            </h2>
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <BlurFade delay={0.2}>
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-lg group aspect-[4/3] md:aspect-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${BRAND.images.hero})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-semibold">Bridal & Special Occasion</span>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="relative overflow-hidden rounded-lg group aspect-square">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.colors.primary}22, ${BRAND.colors.gold}44)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-bold" style={{ color: BRAND.colors.gold, fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}` }}>570+</span>
                    <span className="block text-xs uppercase tracking-widest mt-1" style={{ color: BRAND.colors.textLight, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}>Posts on Instagram</span>
                  </div>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="relative overflow-hidden rounded-lg group aspect-square">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${BRAND.images.gallery[0]?.url})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.5}>
            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-300 border-2 hover:bg-white/10"
                style={{
                  color: BRAND.colors.gold,
                  borderColor: BRAND.colors.gold,
                  fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}`,
                }}
              >
                View Full Gallery
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ===== TESTIMONIALS — Marquee on warm cream ===== */}
      <section style={{ backgroundColor: BRAND.colors.warmCream }} className="py-16 md:py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-8">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              What Our Clients Say
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
            >
              Loved by Markham
            </h2>
          </BlurFade>
        </div>

        <Marquee pauseOnHover className="[--duration:40s]">
          {BRAND.testimonials.map((t, i) => (
            <div
              key={i}
              className="mx-3 w-[320px] rounded-lg p-6 shadow-sm border"
              style={{ backgroundColor: BRAND.colors.bgCard, borderColor: BRAND.colors.border }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill={BRAND.colors.gold}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs font-semibold" style={{ color: BRAND.colors.textMuted }}>
                — {t.author}
              </p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ===== CTA — Full-bleed brand red ===== */}
      <section
        className="py-20 md:py-28 text-center"
        style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.primaryDark} 100%)` }}
      >
        <div className="max-w-[800px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textLight }}
            >
              Ready for Your Glow-Up?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-lg mx-auto" style={{ fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              Walk in or call ahead — our doors are open 7 days a week. Complimentary chai awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BRAND.business.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-sm font-bold uppercase tracking-wider rounded-md hover:shadow-xl transition-all duration-300"
                style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call {BRAND.business.phone}
              </a>
              <a
                href={`https://wa.me/${BRAND.business.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white text-sm font-bold uppercase tracking-wider rounded-md hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
