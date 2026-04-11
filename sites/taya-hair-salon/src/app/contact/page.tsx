import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';
import { NumberTicker } from '@/components/ui/number-ticker';
import { ShimmerButton } from '@/components/ui/shimmer-button';

export default function ContactPage() {
  return (
    <>
      {/* Hero — Map-forward, different from other pages */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
        {/* Map */}
        <div className="relative min-h-[40vh] lg:min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5!2d-79.41!3d43.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s21+Spring+Garden+Ave%2C+North+York%2C+ON!5e0!3m2!1sen!2sca!4v1"
            className="w-full h-full absolute inset-0"
            style={{ border: 0, filter: 'saturate(0.8) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TAYA Hair Salon Location"
          />
        </div>

        {/* Contact Info */}
        <div className="p-12 lg:p-20 flex flex-col justify-center" style={{ backgroundColor: BRAND.colors.bgAlt }}>
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ color: BRAND.colors.primary, fontWeight: 500 }}
            >
              Contact / 연락처
            </p>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1
              className="text-4xl md:text-5xl mb-8"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textHeading }}
            >
              Visit Us
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <div className="space-y-8">
              {/* Location 1 */}
              <div className="pb-6 border-b" style={{ borderColor: BRAND.colors.accentSoft }}>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ color: BRAND.colors.textHeading, fontFamily: BRAND.fonts.heading }}
                >
                  Sheppard Location
                </h3>
                <p className="text-sm mb-1" style={{ color: BRAND.colors.textBody }}>
                  21 Spring Garden Ave, North York, ON M2N 7M2
                </p>
                <a
                  href="tel:4162218788"
                  className="text-sm font-medium hover:underline"
                  style={{ color: BRAND.colors.primary }}
                >
                  {BRAND.business.phone}
                </a>
                <div className="mt-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
                  <p>Mon–Sat: 10 AM – 7 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Location 2 */}
              <div className="pb-6 border-b" style={{ borderColor: BRAND.colors.accentSoft }}>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ color: BRAND.colors.textHeading, fontFamily: BRAND.fonts.heading }}
                >
                  Park Home Location (TAYA 2)
                </h3>
                <p className="text-sm mb-1" style={{ color: BRAND.colors.textBody }}>
                  6 Park Home Ave, North York, ON M2N 0J4
                </p>
                <a
                  href="tel:6472488790"
                  className="text-sm font-medium hover:underline"
                  style={{ color: BRAND.colors.primary }}
                >
                  {BRAND.business.phone2}
                </a>
                <div className="mt-2 text-sm" style={{ color: BRAND.colors.textMuted }}>
                  <p>Mon–Sat: 10 AM – 7 PM</p>
                  <p>Sunday: 10 AM – 4 PM</p>
                </div>
              </div>

              {/* Booking CTA */}
              <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer">
                <ShimmerButton
                  className="px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold w-full justify-center mt-4"
                  background={BRAND.colors.primary}
                  shimmerColor="rgba(255,255,255,0.3)"
                >
                  <span style={{ color: BRAND.colors.bgDark }}>Book Online via Fresha</span>
                </ShimmerButton>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Social Connect — Full bleed dark section */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ color: BRAND.colors.primary }}
            >
              Follow Our Work
            </p>
            <h2
              className="text-3xl md:text-4xl mb-8"
              style={{ fontFamily: BRAND.fonts.heading, fontWeight: 400, color: BRAND.colors.textLight }}
            >
              Connect With Us
            </h2>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="flex justify-center gap-8 flex-wrap">
              <a
                href={BRAND.business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ color: BRAND.colors.primary }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <div className="text-left">
                  <p className="text-sm font-medium" style={{ color: BRAND.colors.textLight }}>@tayasalon</p>
                  <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
                    <NumberTicker value={6116} /> followers
                  </p>
                </div>
              </a>

              <a
                href={BRAND.business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ color: BRAND.colors.primary }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div className="text-left">
                  <p className="text-sm font-medium" style={{ color: BRAND.colors.textLight }}>Taya Salon & Spa</p>
                  <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>Facebook</p>
                </div>
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-xs mt-10" style={{ color: BRAND.colors.textMuted }}>
              Near Yonge & Sheppard Station &middot; Free parking available &middot; Walk-ins welcome
            </p>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
