/*
 * DESIGN PERSONALITY REVIEW
 * 1. Dominant emotion: Warmth, pampering, relaxation
 * 2. Product type: WORK is the product — nail art, lash extensions, spa
 * 3. Establishment: Newer salon building reputation — clean/modern
 * 4. Customer feeling: Relaxed, welcomed, pampered — bright & clean
 * 5. Never fits: Dark/grungy, industrial, masculine, aggressive
 *
 * Layout: GALLERY-FORWARD + NEIGHBORHOOD (B+D hybrid)
 * Unique element: Warm blush hero with soft overlay, asymmetric gallery teaser,
 *   neighborhood feel with address/hours prominent
 *
 * sub-skill-design-quality: Bold aesthetic = elegant femininity, "the one thing" = warm
 *   blush tones with editorial serif headings
 * sub-skill-designer: Cormorant Garamond + Nunito Sans, rose/blush palette
 * sub-skill-ui: White logo text on dark overlay hero, pink CTAs on light bg
 * sub-skill-ux: Booking CTA above fold, phone visible, clear value prop
 */

import Link from "next/link";
import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import BrandImage from "@/components/BrandImage";

export default function HomePage() {
  const heroImage = BRAND.images.hero;

  return (
    <>
      {/* ════════════════════ HERO — Full Bleed ════════════════════ */}
      <section
        className="relative flex items-center justify-center text-center min-h-[85vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(61,43,43,0.78) 0%, rgba(61,43,43,0.55) 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase mb-6"
              style={{
                color: BRAND.colors.accent,
                fontWeight: 600,
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              Scarborough&apos;s Premier Nail Salon
            </p>
          </BlurFade>

          <BlurFade delay={0.25}>
            <h1
              className="font-heading text-5xl md:text-[6.5rem] leading-[0.92] mb-8"
              style={{
                color: BRAND.colors.textLight,
                fontWeight: 400,
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              <TextAnimate animation="blurInUp" by="word" delay={0.3}>
                Your Nails Deserve This
              </TextAnimate>
            </h1>
          </BlurFade>

          <BlurFade delay={0.5}>
            <p
              className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
              style={{
                color: "rgba(240,200,200,0.9)",
                textShadow: "0 1px 6px rgba(0,0,0,0.3)",
              }}
            >
              Where relaxation meets artistry. Exquisite nail art, pampering
              pedicures, and lash extensions in a warm, welcoming space.
            </p>
          </BlurFade>

          <BlurFade delay={0.65}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BRAND.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButton
                  className="shadow-lg"
                  shimmerColor="#F0C8C8"
                  background={BRAND.colors.primary}
                >
                  <span className="text-sm tracking-[0.08em] uppercase font-semibold text-white">
                    Book Your Appointment
                  </span>
                </ShimmerButton>
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.08em] uppercase transition-all duration-200 hover:bg-white/10"
                style={{
                  color: BRAND.colors.textLight,
                  border: "2px solid rgba(255,255,255,0.4)",
                  borderRadius: BRAND.spacing.radiusButtons,
                  fontWeight: 600,
                  textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                }}
              >
                View Services
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60C240 20 480 80 720 60C960 40 1200 80 1440 50V100H0V60Z"
              fill={BRAND.colors.bgMain}
            />
          </svg>
        </div>
      </section>

      {/* ════════════════════ GALLERY TEASER — Asymmetric ════════════════════ */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1}>
            <p
              className="text-[11px] tracking-[0.3em] uppercase mb-3"
              style={{ color: BRAND.colors.primary, fontWeight: 600 }}
            >
              Our Work
            </p>
            <h2
              className="font-heading text-4xl md:text-6xl mb-4"
              style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
            >
              Artistry in Every Detail
            </h2>
            <p
              className="max-w-lg mb-12 text-base"
              style={{ color: BRAND.colors.textBody }}
            >
              From classic elegance to bold statement nails, every set is crafted
              with precision and care.
            </p>
          </BlurFade>

          {/* Asymmetric Grid: 1 large + 2 stacked */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <BlurFade delay={0.2} className="md:col-span-3">
              <div
                className="relative w-full overflow-hidden group"
                style={{
                  borderRadius: BRAND.spacing.radiusImages,
                  aspectRatio: "4/3",
                  background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`,
                }}
              >
                <BrandImage
                  src={BRAND.images.hero}
                  alt="Nail art showcase"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </BlurFade>
            <div className="md:col-span-2 flex flex-col gap-4">
              <BlurFade delay={0.3}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    borderRadius: BRAND.spacing.radiusImages,
                    aspectRatio: "3/2",
                    background: `linear-gradient(135deg, ${BRAND.colors.accent}, ${BRAND.colors.gold})`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <p
                      className="font-heading text-2xl text-center px-6"
                      style={{ color: BRAND.colors.bgDark, fontWeight: 500 }}
                    >
                      Gel &amp; Acrylic <br /> Extensions
                    </p>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={0.4}>
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    borderRadius: BRAND.spacing.radiusImages,
                    aspectRatio: "3/2",
                    background: `linear-gradient(135deg, ${BRAND.colors.secondary}, ${BRAND.colors.primary})`,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <p
                      className="font-heading text-2xl text-center px-6"
                      style={{ color: BRAND.colors.textLight, fontWeight: 500 }}
                    >
                      Lash Lift &amp; <br /> Extensions
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase transition-colors hover:opacity-80"
              style={{
                color: BRAND.colors.primary,
                fontWeight: 600,
              }}
            >
              View Full Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ SERVICES TEASER — 3 Featured ════════════════════ */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: BRAND.colors.bgAlt }}
      >
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-14">
              <p
                className="text-[11px] tracking-[0.3em] uppercase mb-3"
                style={{ color: BRAND.colors.primary, fontWeight: 600 }}
              >
                What We Offer
              </p>
              <h2
                className="font-heading text-4xl md:text-5xl"
                style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
              >
                Treat Yourself
              </h2>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Nail Extensions",
                desc: "Bio Gel, UV Gel, and Acrylic — full sets and refills crafted with precision. Shellac polish included.",
                price: "From $45",
                icon: "💅",
              },
              {
                title: "Spa Pedicures",
                desc: "Classic to Volcano — indulge in our signature foot treatments with massage, scrubs, and paraffin wraps.",
                price: "From $35",
                icon: "🦶",
              },
              {
                title: "Lash Extensions",
                desc: "Classic, hybrid, and volume lash sets. Wake up gorgeous every morning with our meticulous lash artistry.",
                price: "From $70",
                icon: "👁️",
              },
            ].map((service, i) => (
              <BlurFade key={service.title} delay={0.15 + i * 0.1}>
                <div
                  className="relative p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    boxShadow: "0 2px 12px rgba(212,160,160,0.15)",
                  }}
                >
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3
                    className="font-heading text-2xl mb-3"
                    style={{ color: BRAND.colors.textHeading, fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: BRAND.colors.textBody }}
                  >
                    {service.desc}
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: BRAND.colors.gold }}
                  >
                    {service.price}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.08em] uppercase transition-all duration-200"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: BRAND.colors.textLight,
                borderRadius: BRAND.spacing.radiusButtons,
                fontWeight: 600,
              }}
            >
              See All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ TESTIMONIAL — Contrast Inversion ════════════════════ */}
      <section
        className="py-20 md:py-32 px-6"
        style={{ backgroundColor: BRAND.colors.bgDark }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <BlurFade delay={0.1}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="mx-auto mb-8"
              fill={BRAND.colors.primary}
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
            <p
              className="font-heading text-2xl md:text-3xl leading-relaxed mb-8"
              style={{
                color: BRAND.colors.textLight,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              The staff are incredibly friendly and take their time to ensure
              quality results. The salon is always clean and bright — it&apos;s
              become my go-to spot for nails in Scarborough.
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={BRAND.colors.gold}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p
              className="text-sm tracking-wide"
              style={{ color: BRAND.colors.textMuted }}
            >
              — Happy Client, Google Reviews
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ════════════════════ CTA — Full Bleed Brand Color ════════════════════ */}
      <section
        className="py-16 md:py-20 px-6 text-center"
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
            Ready to Treat Yourself?
          </h2>
          <p
            className="text-base max-w-md mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Walk-ins welcome or book ahead to secure your spot.
            {BRAND.business.hours}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: BRAND.colors.textLight,
                color: BRAND.colors.primary,
                borderRadius: BRAND.spacing.radiusButtons,
                fontWeight: 700,
              }}
            >
              Book Online Now
            </a>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:bg-white/10"
              style={{
                color: BRAND.colors.textLight,
                border: "2px solid rgba(255,255,255,0.5)",
                borderRadius: BRAND.spacing.radiusButtons,
                fontWeight: 600,
              }}
            >
              Call {BRAND.business.phone}
            </a>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
