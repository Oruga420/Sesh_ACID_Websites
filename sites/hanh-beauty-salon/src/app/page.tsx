/*
 * DESIGN PERSONALITY REVIEW
 * 1. Dominant emotion: Professional calm, wellness authority
 * 2. Product type: TRUST/EXPERTISE — medispa, laser, RMT, multiple locations
 * 3. Establishment: Established — 4 locations, heritage weight
 * 4. Customer feeling: Well-cared-for, comprehensive, professional
 * 5. Never fits: Playful/cutesy, dark/gritty, minimalist indie
 *
 * Layout: AUTHORITY + NEIGHBORHOOD (C+D hybrid)
 * Unique element: Split hero with editorial heading left + green gradient right,
 *   service categories as authority tiles, multi-location emphasis
 */

import Link from "next/link";
import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO — Split Layout ═══════════════ */}
      <section className="relative min-h-[85vh] flex items-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.secondary} 60%, ${BRAND.colors.primary} 100%)` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(201,169,110,0.3) 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <BlurFade delay={0.1}>
              <p className="text-[11px] md:text-[13px] tracking-[0.35em] uppercase mb-6" style={{ color: BRAND.colors.accent, fontWeight: 500, textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
                Brampton&apos;s Complete Wellness Destination
              </p>
            </BlurFade>
            <BlurFade delay={0.25}>
              <h1 className="font-heading text-5xl md:text-[6rem] leading-[0.92] mb-8" style={{ color: BRAND.colors.textLight, textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
                <TextAnimate animation="blurInUp" by="word" delay={0.3}>
                  Where Beauty Meets Wellness
                </TextAnimate>
              </h1>
            </BlurFade>
            <BlurFade delay={0.5}>
              <p className="text-base md:text-lg max-w-lg mb-10 leading-relaxed" style={{ color: "rgba(201,169,110,0.85)", textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}>
                Facials, massage, laser treatments, and full-service hair care. Four locations across Brampton, one commitment to your wellbeing.
              </p>
            </BlurFade>
            <BlurFade delay={0.65}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90" style={{ backgroundColor: BRAND.colors.accent, color: BRAND.colors.bgDark, borderRadius: BRAND.spacing.radiusButtons, fontWeight: 700 }}>
                  Book Your Treatment
                </a>
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:bg-white/10" style={{ color: BRAND.colors.textLight, border: "2px solid rgba(255,255,255,0.3)", borderRadius: BRAND.spacing.radiusButtons, fontWeight: 500, textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
                  Explore Services
                </Link>
              </div>
            </BlurFade>
          </div>
          <div className="hidden lg:block">
            <BlurFade delay={0.4}>
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden" style={{ background: `linear-gradient(180deg, ${BRAND.colors.primary}40 0%, ${BRAND.colors.accent}30 100%)`, border: `1px solid ${BRAND.colors.primary}30` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="font-heading text-5xl mb-4" style={{ color: BRAND.colors.textLight }}>4</p>
                    <p className="text-sm tracking-[0.2em] uppercase" style={{ color: BRAND.colors.accent }}>Locations Across Brampton</p>
                    <div className="w-12 h-px mx-auto my-6" style={{ backgroundColor: BRAND.colors.accent }} />
                    <p className="text-sm tracking-[0.2em] uppercase" style={{ color: BRAND.colors.accent }}>Spa &middot; Medispa &middot; Salon</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 40C360 70 720 10 1080 50C1260 65 1380 40 1440 30V80H0V40Z" fill={BRAND.colors.bgMain} />
          </svg>
        </div>
      </section>

      {/* ═══════════════ SERVICE CATEGORIES — 3 Authority Tiles ═══════════════ */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>What We Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-14" style={{ color: BRAND.colors.textHeading }}>Your Complete Wellness Experience</h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Spa & Relaxation", items: ["Signature Facials", "Body Massage", "Pedicures & Manicures", "Waxing & Threading"], gradient: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})` },
              { title: "Medispa & Laser", items: ["Photo Facials", "Microdermabrasion", "Laser Treatments", "Registered Massage Therapy"], gradient: `linear-gradient(135deg, ${BRAND.colors.secondary}, ${BRAND.colors.bgDark})` },
              { title: "Hair Services", items: ["Hair Coloring & Highlights", "Perms & Straightening", "Hair Updos & Styling", "Bridal Hair & Makeup"], gradient: `linear-gradient(135deg, ${BRAND.colors.accent}, ${BRAND.colors.primary})` },
            ].map((cat, i) => (
              <BlurFade key={cat.title} delay={0.15 + i * 0.1}>
                <div className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ borderRadius: BRAND.spacing.radiusCards, boxShadow: "0 2px 16px rgba(107,142,123,0.12)" }}>
                  <div className="h-40 flex items-end p-6" style={{ background: cat.gradient }}>
                    <h3 className="font-heading text-2xl" style={{ color: BRAND.colors.textLight, textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>{cat.title}</h3>
                  </div>
                  <div className="p-6" style={{ backgroundColor: BRAND.colors.bgCard }}>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm flex items-center gap-2" style={{ color: BRAND.colors.textBody }}>
                          <span style={{ color: BRAND.colors.primary }}>&#10003;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase transition-colors hover:opacity-80" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>
              View Full Service Menu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIAL — Contrast Inversion ═══════════════ */}
      <section className="py-20 md:py-32 px-6" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="max-w-3xl mx-auto text-center">
          <BlurFade delay={0.1}>
            <svg width="48" height="48" viewBox="0 0 24 24" className="mx-auto mb-8" fill={BRAND.colors.primary}><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
            <p className="font-heading text-2xl md:text-3xl leading-relaxed mb-8" style={{ color: BRAND.colors.textLight, fontStyle: "italic" }}>
              Extremely reasonable prices and very professional service. The facility is clean and the staff know what they&apos;re doing. I&apos;ve been coming here for years and always leave feeling refreshed.
            </p>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.accent}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <p className="text-sm tracking-wide" style={{ color: BRAND.colors.textMuted }}>— Satisfied Client, Birdeye Reviews</p>
          </BlurFade>
        </div>
      </section>

      {/* ═══════════════ LOCATIONS SNIPPET ═══════════════ */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>Our Locations</p>
              <h2 className="font-heading text-3xl md:text-5xl" style={{ color: BRAND.colors.textHeading }}>Find Us in Brampton</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRAND.business.locations.map((loc, i) => (
              <BlurFade key={loc.name} delay={0.15 + i * 0.1}>
                <div className="p-8 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: BRAND.colors.bgCard, borderRadius: BRAND.spacing.radiusCards, boxShadow: "0 2px 16px rgba(107,142,123,0.12)" }}>
                  <p className="text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>{loc.name}</p>
                  <p className="text-base mb-2" style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}>{loc.address}</p>
                  <p className="text-sm mb-4" style={{ color: BRAND.colors.textMuted }}>{BRAND.business.hours}</p>
                  <a href={`tel:${BRAND.business.phone}`} className="text-sm hover:underline" style={{ color: BRAND.colors.primary }}>{BRAND.business.phone}</a>
                </div>
              </BlurFade>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90" style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.textLight, borderRadius: BRAND.spacing.radiusButtons, fontWeight: 500 }}>
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA — Full Bleed ═══════════════ */}
      <section className="py-16 md:py-20 px-6 text-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})` }}>
        <BlurFade delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl mb-4" style={{ color: BRAND.colors.textLight, textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>Ready to Rejuvenate?</h2>
          <p className="text-base max-w-md mx-auto mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>Book your spa treatment, facial, or hair appointment today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90" style={{ backgroundColor: BRAND.colors.textLight, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons, fontWeight: 700 }}>
              Book Online
            </a>
            <a href={`tel:${BRAND.business.phone}`} className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:bg-white/10" style={{ color: BRAND.colors.textLight, border: "2px solid rgba(255,255,255,0.5)", borderRadius: BRAND.spacing.radiusButtons, fontWeight: 500 }}>
              Call {BRAND.business.phone}
            </a>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
