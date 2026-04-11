import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero — Split layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        {/* Left: Image */}
        <div className="relative min-h-[300px] md:min-h-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BRAND.images.hero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>

        {/* Right: Text */}
        <div
          className="flex items-center py-16 md:py-20 px-8 md:px-16"
          style={{ backgroundColor: BRAND.colors.warmCream }}
        >
          <div className="max-w-lg">
            <BlurFade delay={0.1}>
              <span
                className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
                style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
              >
                Our Story
              </span>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
              >
                Where Beauty Meets <span style={{ color: BRAND.colors.primary }}>Warmth</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                Nestled in the heart of Markham&apos;s vibrant South Asian corridor on New Delhi Drive,
                Neelkanth Beauty Parlour brings the warmth of traditional Indian beauty culture to the GTA.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                We believe beauty is a form of self-care, not just an appointment. That&apos;s why we welcome
                every client with a cup of chai, a warm smile, and the attention they deserve. From precision
                eyebrow threading to stunning bridal looks, our skilled team delivers results that make you
                feel beautiful inside and out.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3 text-center"
              style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Why Choose Us
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-16 text-center"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
            >
              The Neelkanth Difference
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Warm Hospitality',
                text: 'We treat you like family. Complimentary chai, coffee, and snacks while you wait. Our clients come for the service and stay for the warmth.',
                accent: BRAND.colors.primary,
              },
              {
                title: 'Expert Artistry',
                text: 'Specialized in South Asian beauty traditions — from precise eyebrow threading to intricate bridal makeup. Skills honed over years of dedicated practice.',
                accent: BRAND.colors.gold,
              },
              {
                title: 'Honest Pricing',
                text: 'Quality beauty services without the boutique markup. Eyebrow threading from $5, full body waxing from $75, bridal makeup from $50. No hidden fees.',
                accent: BRAND.colors.primary,
              },
            ].map((value, i) => (
              <BlurFade key={value.title} delay={0.15 + i * 0.1}>
                <div className="text-center md:text-left">
                  <div
                    className="w-12 h-1 mb-6 mx-auto md:mx-0 rounded-full"
                    style={{ backgroundColor: value.accent }}
                  />
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3"
                    style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                    {value.text}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: BRAND.colors.warmCream }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <BlurFade delay={0.1}>
                <span
                  className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
                  style={{ color: BRAND.colors.gold, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                >
                  Our Neighborhood
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
                >
                  Part of Markham&apos;s <span style={{ color: BRAND.colors.primary }}>South Asian</span> Heart
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                  Located on New Delhi Drive near Hakka Legend and A1 Bakery, we&apos;re proud to serve
                  Markham&apos;s thriving South Asian community. Whether you&apos;re preparing for a wedding,
                  a festival celebration, or just treating yourself — we&apos;re your neighborhood beauty destination.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                  Open 7 days a week from 10 AM to 9 PM. Walk-ins always welcome.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-md text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                >
                  Visit Us
                </Link>
              </BlurFade>
            </div>
            <div className="md:col-span-2">
              <BlurFade delay={0.3}>
                <div
                  className="rounded-xl overflow-hidden shadow-lg p-8 text-center"
                  style={{ backgroundColor: BRAND.colors.bgCard, border: `1px solid ${BRAND.colors.border}` }}
                >
                  <div className="text-5xl mb-4" style={{ color: BRAND.colors.gold }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
                      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}>
                    Find Us
                  </h3>
                  <p className="text-sm mb-1" style={{ color: BRAND.colors.textBody, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                    {BRAND.business.address}
                  </p>
                  <p className="text-xs mb-4" style={{ color: BRAND.colors.textMuted }}>
                    Near Hakka Legend & A1 Bakery
                  </p>
                  <a
                    href={BRAND.business.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-md text-white transition-all"
                    style={{ backgroundColor: BRAND.colors.primary }}
                  >
                    Get Directions
                  </a>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
