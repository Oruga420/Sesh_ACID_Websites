{/*
  TAYA Hair Salon — Homepage

  Brand Personality Answers:
  1. Dominant emotion: Warmth + sophistication — Korean luxury meets welcoming Toronto neighborhood salon
  2. Work = product: Yes, hair transformations ARE the product (portfolio-first)
  3. Established: 2 locations, 1,300+ reviews — mature, trusted salon
  4. Customer feel: "Warm and welcoming", "K-pop transformation", "professional yet friendly", "relaxing"
  5. Would NEVER fit: Gritty/industrial aesthetic, cold minimalism, playful/quirky fonts, dark moody palette

  Layout Personality: B (GALLERY-FORWARD) + D (NEIGHBORHOOD) hybrid
  The ONE unique thing: Split hero with dramatic serif typography and warm gold accent — feels like a Seoul salon editorial

  Sub-skill reviews:
  - Design Quality: Warm gold accent (#C8A87C) is the signature. Cormorant Garamond provides editorial elegance.
  - Designer: Gold + espresso palette. Asymmetric gallery. Warm backgrounds only.
  - UI: Text logo TAYA in Cormorant on warm cream bg. Gold CTAs. Fresha images.
  - UX: Booking CTA above fold. Two locations visible. Korean/English bilingual.
*/}

import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — Full-bleed image with dark overlay, left-aligned ===== */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay — min 75% */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(42,33,24,0.88) 0%, rgba(42,33,24,0.7) 100%)' }} />

        {/* SVG Divider — wave specific to salon */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
              fill={BRAND.colors.bgMain}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{
                color: BRAND.colors.primary,
                fontFamily: BRAND.fonts.body,
                fontWeight: 500,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              K-Beauty Hair Salon &middot; North York, Toronto
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1
              className="text-6xl md:text-[7rem] leading-[0.9] mb-8 max-w-[800px]"
              style={{
                fontFamily: BRAND.fonts.heading,
                fontWeight: 400,
                color: BRAND.colors.textLight,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              Your Hair,
              <br />
              <span style={{ color: BRAND.colors.primary }}>Perfected</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.35}>
            <p
              className="text-lg md:text-xl max-w-[500px] mb-10 leading-relaxed"
              style={{
                color: BRAND.colors.accentSoft,
                fontFamily: BRAND.fonts.body,
                fontWeight: 300,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              Expert stylists delivering trendy Korean perms, seamless balayage,
              and personalized cuts. Two North York locations near Yonge &amp; Sheppard.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  className="px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold"
                  background={BRAND.colors.primary}
                  shimmerColor="rgba(255,255,255,0.3)"
                >
                  <span style={{ color: BRAND.colors.bgDark }}>Book Your Transformation</span>
                </ShimmerButton>
              </a>
              <Link
                href="/services"
                className="px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold border transition-all hover:bg-white/10"
                style={{
                  borderColor: BRAND.colors.primary,
                  color: BRAND.colors.primary,
                  borderRadius: BRAND.spacing.radiusButtons,
                }}
              >
                Explore Services
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ===== GALLERY TEASER — Asymmetric, links to /gallery ===== */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-3 text-center"
              style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.body, fontWeight: 500 }}
            >
              Our Work / 작품
            </p>
            <h2
              className="text-4xl md:text-5xl text-center mb-12"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textHeading }}
            >
              Transformations
            </h2>
          </BlurFade>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {BRAND.images.gallery.map((img, i) => (
              <BlurFade key={i} delay={0.15 + i * 0.1}>
                <Link href="/gallery" className="block group overflow-hidden" style={{ borderRadius: BRAND.spacing.radiusImages }}>
                  <div
                    className={`relative ${i === 0 ? 'aspect-[3/4] md:row-span-2' : 'aspect-square'} overflow-hidden`}
                    style={{ borderRadius: BRAND.spacing.radiusImages }}
                  >
                    <img
                      src={img.url}
                      alt={img.description}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        borderRadius: BRAND.spacing.radiusImages,
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
                      style={{ borderRadius: BRAND.spacing.radiusImages }}
                    >
                      <span className="text-white text-sm font-medium">{img.description}</span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.5}>
            <div className="text-center mt-10">
              <Link
                href="/gallery"
                className="inline-block text-sm tracking-[0.1em] uppercase font-medium border-b-2 pb-1 transition-opacity hover:opacity-70"
                style={{ color: BRAND.colors.primary, borderColor: BRAND.colors.primary }}
              >
                View Full Gallery &rarr;
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ===== FULL-BLEED CTA — Gold gradient section ===== */}
      <section
        className="py-28 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, #3B2F2F 100%)` }}
      >
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.body }}
            >
              Two Locations in North York
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2
              className="text-4xl md:text-6xl mb-6"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textLight }}
            >
              Where K-Beauty
              <br />
              Meets <span style={{ color: BRAND.colors.primary }}>Toronto</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-base mb-10 max-w-[600px] mx-auto" style={{ color: BRAND.colors.accentSoft, fontWeight: 300 }}>
              From Korean digital perms to seamless balayage, our senior and master stylists
              bring Seoul&apos;s hottest trends to your neighbourhood. Walk in or book online.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer">
              <ShimmerButton
                className="px-10 py-4 text-sm tracking-[0.1em] uppercase font-bold mx-auto"
                background={BRAND.colors.primary}
                shimmerColor="rgba(255,255,255,0.3)"
              >
                <span style={{ color: BRAND.colors.bgDark }}>Reserve Your Chair</span>
              </ShimmerButton>
            </a>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
