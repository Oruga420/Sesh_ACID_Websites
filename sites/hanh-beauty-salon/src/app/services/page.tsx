import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";

const SERVICES = [
  { category: "Facials", subtitle: "Skincare Treatments", items: [
    { name: "Express Facial", price: "$60" }, { name: "Hanh's Signature Facial", price: "$65" },
    { name: "Light Teen Facial", price: "$50" }, { name: "Pure Oxygen Facial", price: "$70" },
    { name: "Acne Facial Treatment", price: "From $60" }, { name: "Dermaplaning", price: "From $65" },
  ]},
  { category: "Massage", subtitle: "Body Treatments", items: [
    { name: "Body Massage — 30 min", price: "$45" }, { name: "Body Massage — 45 min", price: "$50" },
    { name: "Body Massage — 60 min", price: "$60" }, { name: "Zen Shiatsu — 45 min", price: "$45" },
    { name: "De-stress Reflexology — 30 min", price: "$45" }, { name: "De-stress Reflexology — 60 min", price: "$65" },
  ]},
  { category: "Pedicures", subtitle: "Foot Treatments", items: [
    { name: "Classic Pedicure", price: "$35" }, { name: "French Pedicure", price: "$45" },
    { name: "Hot Paraffin Pedicure", price: "$45" }, { name: "Spa Pedicure", price: "$55" },
    { name: "Shellac Pedicure", price: "$55" }, { name: "Child's Pedicure", price: "$20" },
  ]},
  { category: "Manicures", subtitle: "Hand Treatments", items: [
    { name: "Classic Manicure", price: "$20" }, { name: "French Manicure", price: "$25" },
    { name: "Spa Manicure", price: "$30" }, { name: "Shellac Manicure", price: "$30" },
    { name: "Child's Manicure", price: "$10" },
  ]},
  { category: "Medispa", subtitle: "Advanced Treatments", items: [
    { name: "Photo Facials", price: "Consult" }, { name: "Microdermabrasion", price: "From $70" },
    { name: "Laser Hair Removal", price: "Consult" }, { name: "Body Sculpting", price: "Consult" },
    { name: "Registered Massage Therapy", price: "From $60" },
  ]},
  { category: "Hair Services", subtitle: "Salon", items: [
    { name: "Hair Coloring", price: "Consult" }, { name: "Highlights & Lowlights", price: "Consult" },
    { name: "Perms", price: "From $60" }, { name: "Hair Straightening", price: "From $80" },
    { name: "Hair Updos", price: "From $50" }, { name: "Bridal Hair & Makeup", price: "Consult" },
  ]},
  { category: "Waxing & Threading", subtitle: "Hair Removal", items: [
    { name: "Eyebrow Threading", price: "From $8" }, { name: "Full Face Threading", price: "From $25" },
    { name: "Lip & Chin Wax", price: "From $10" }, { name: "Full Leg Wax", price: "From $45" },
    { name: "Brazilian Wax", price: "From $50" },
  ]},
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex items-end min-h-[40vh] px-6 pb-12" style={{ background: `linear-gradient(135deg, ${BRAND.colors.bgDark} 0%, ${BRAND.colors.secondary} 100%)`, paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto w-full">
          <BlurFade delay={0.1}>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-3" style={{ color: BRAND.colors.accent, fontWeight: 500 }}>Full Service Menu</p>
            <h1 className="font-heading text-5xl md:text-[5.5rem] leading-[0.92]" style={{ color: BRAND.colors.textLight, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>Services & Pricing</h1>
          </BlurFade>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-4xl mx-auto">
          {SERVICES.map((cat, idx) => (
            <BlurFade key={cat.category} delay={0.1 + idx * 0.05}>
              <div className="mb-16 last:mb-0" style={{ borderBottom: idx < SERVICES.length - 1 ? `1px solid ${BRAND.colors.warmNeutral}` : "none", paddingBottom: idx < SERVICES.length - 1 ? "3rem" : 0 }}>
                <div className="mb-8">
                  <p className="text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: BRAND.colors.primary, fontWeight: 500 }}>{cat.subtitle}</p>
                  <h2 className="font-heading text-3xl md:text-4xl" style={{ color: BRAND.colors.textHeading }}>{cat.category}</h2>
                </div>
                <div className="space-y-0">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between py-4" style={{ borderBottom: `1px solid ${BRAND.colors.warmNeutral}40` }}>
                      <span className="text-base" style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}>{item.name}</span>
                      <span className="text-base font-semibold whitespace-nowrap ml-4" style={{ color: BRAND.colors.accent }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})` }}>
        <BlurFade delay={0.1}>
          <h2 className="font-heading text-3xl md:text-5xl mb-6" style={{ color: BRAND.colors.textLight, textShadow: "0 1px 8px rgba(0,0,0,0.2)" }}>Book Your Treatment</h2>
          <a href={BRAND.business.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-200 hover:opacity-90" style={{ backgroundColor: BRAND.colors.textLight, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons, fontWeight: 700 }}>Book Online</a>
        </BlurFade>
      </section>
    </>
  );
}
