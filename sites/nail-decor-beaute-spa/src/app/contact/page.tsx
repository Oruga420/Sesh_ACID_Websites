import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end min-h-[35vh] px-6 pb-12"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.secondary} 100%)`,
          paddingTop: "140px",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-3"
              style={{ color: BRAND.colors.primary, fontWeight: 600 }}
            >
              Get In Touch
            </p>
            <h1
              className="font-heading text-5xl md:text-[5.5rem] leading-[0.92]"
              style={{
                color: BRAND.colors.textLight,
                fontWeight: 400,
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Contact Us
            </h1>
          </BlurFade>
        </div>
      </section>

      {/* Contact Content — Asymmetric: Info left, Map right */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info — 2 cols */}
          <div className="lg:col-span-2 space-y-10">
            <BlurFade delay={0.1}>
              <div>
                <p
                  className="text-[11px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: BRAND.colors.primary, fontWeight: 600 }}
                >
                  Visit Us
                </p>
                <h2
                  className="font-heading text-3xl mb-6"
                  style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
                >
                  We&apos;d Love to See You
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: BRAND.colors.textBody }}
                >
                  Walk-ins are always welcome, but booking ahead guarantees your
                  preferred time — especially on weekends. We&apos;re located on
                  Morningside Ave in the heart of Scarborough.
                </p>
              </div>
            </BlurFade>

            {/* Details */}
            <BlurFade delay={0.2}>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                      Address
                    </p>
                    <p className="text-sm" style={{ color: BRAND.colors.textBody }}>
                      {BRAND.business.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                      Phone
                    </p>
                    <a
                      href={`tel:${BRAND.business.phone}`}
                      className="text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.business.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${BRAND.business.email}`}
                      className="text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.business.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                      Hours
                    </p>
                    <p className="text-sm" style={{ color: BRAND.colors.textBody }}>
                      {BRAND.business.hours}
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                      Instagram
                    </p>
                    <a
                      href={BRAND.business.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      @naildecorbeaute_spa
                    </a>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Booking CTA */}
            <BlurFade delay={0.3}>
              <a
                href={BRAND.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: BRAND.colors.primary,
                  color: BRAND.colors.textLight,
                  borderRadius: BRAND.spacing.radiusButtons,
                  fontWeight: 700,
                }}
              >
                Book Your Appointment Online
              </a>
            </BlurFade>
          </div>

          {/* Map — 3 cols, featured */}
          <div className="lg:col-span-3">
            <BlurFade delay={0.2}>
              <div
                className="overflow-hidden w-full h-full min-h-[400px] lg:min-h-[600px]"
                style={{ borderRadius: BRAND.spacing.radiusCards }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5!2d-79.19!3d43.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0!2sNail+Decor+Beaute+%26+Spa!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nail Decor Beaute & Spa Location"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Full Bleed CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})`,
        }}
      >
        <BlurFade delay={0.1}>
          <h2
            className="font-heading text-3xl md:text-5xl mb-4"
            style={{
              color: BRAND.colors.textLight,
              fontWeight: 500,
              textShadow: "0 1px 8px rgba(0,0,0,0.2)",
            }}
          >
            See You Soon
          </h2>
          <p
            className="text-base max-w-md mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Walk-ins welcome. {BRAND.business.hours}.
          </p>
          <a
            href={`tel:${BRAND.business.phone}`}
            className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.textLight,
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              fontWeight: 700,
            }}
          >
            Call {BRAND.business.phone}
          </a>
        </BlurFade>
      </section>
    </>
  );
}
