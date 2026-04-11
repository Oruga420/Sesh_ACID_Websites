import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="relative flex items-end min-h-[40vh] px-6 pb-12" style={{ background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.secondary} 100%)`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto w-full">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.colors.accent, fontWeight: 500 }}>Our Story</p>
            <h1 className="font-heading text-5xl md:text-[5.5rem] leading-[0.92]" style={{ color: BRAND.colors.textLight, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>About Hanh</h1>
          </BlurFade>
        </div>
      </section>

      {/* Split Layout — Text Left, Visual Right */}
      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <BlurFade delay={0.1}>
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>Brampton&apos;s Wellness Destination</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6" style={{ color: BRAND.colors.textHeading }}>More Than a Salon. A Wellness Experience.</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: BRAND.colors.textBody }}>
                Hanh Beauty Salon & Spa has grown to become one of Brampton&apos;s most comprehensive beauty and wellness destinations. With four locations across the city, we serve thousands of clients who trust us with their self-care routines.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: BRAND.colors.textBody }}>
                Our services span the full spectrum of beauty and wellness — from classic salon services like hair coloring and styling, to advanced medispa treatments including laser hair removal, photo facials, and microdermabrasion. We also offer registered massage therapy for complete mind-body care.
              </p>
              <p className="text-base leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                Every treatment at Hanh is delivered by trained professionals in a clean, welcoming environment. We believe beauty should be accessible, which is why we offer competitive pricing without compromising on quality.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="relative overflow-hidden" style={{ borderRadius: BRAND.spacing.radiusCards, aspectRatio: "4/5", background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})` }}>
              <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                <div>
                  <p className="font-heading text-6xl mb-4" style={{ color: BRAND.colors.textLight }}>4</p>
                  <p className="text-lg tracking-[0.2em] uppercase mb-6" style={{ color: BRAND.colors.textLight, fontWeight: 500 }}>Locations</p>
                  <div className="w-16 h-px mx-auto mb-6" style={{ backgroundColor: BRAND.colors.textLight + "40" }} />
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: BRAND.colors.textLight + "CC" }}>
                    Serving the Brampton community with Spa, Medispa, Salon, and Wellness services
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* What We Offer — Different Layout */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0.1}>
            <div className="text-center mb-14">
              <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>Why Hanh</p>
              <h2 className="font-heading text-3xl md:text-4xl" style={{ color: BRAND.colors.textHeading }}>What Sets Us Apart</h2>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Comprehensive Care", desc: "From hair to nails to laser treatments — everything under one roof. No need to visit multiple places.", icon: "🏥" },
              { title: "Accessible Pricing", desc: "Extremely reasonable prices without compromising on quality. Professional treatments that don't break the bank.", icon: "💎" },
              { title: "Trained Professionals", desc: "Our team includes licensed estheticians, registered massage therapists, and experienced stylists.", icon: "👩‍⚕️" },
              { title: "Multiple Locations", desc: "Four locations across Brampton means there's always a Hanh Salon nearby for your convenience.", icon: "📍" },
            ].map((item, i) => (
              <BlurFade key={item.title} delay={0.15 + i * 0.08}>
                <div className="p-8 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: BRAND.colors.bgCard, borderRadius: BRAND.spacing.radiusCards, boxShadow: "0 2px 16px rgba(107,142,123,0.12)" }}>
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-heading text-xl mb-3" style={{ color: BRAND.colors.textHeading }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>{item.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})` }}>
        <BlurFade delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl mb-6" style={{ color: BRAND.colors.textLight, textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>Experience the Hanh Difference</h2>
          <Link href="/services" className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90" style={{ backgroundColor: BRAND.colors.textLight, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons, fontWeight: 700 }}>View Our Services</Link>
        </BlurFade>
      </section>
    </>
  );
}
