import { BRAND } from "@/lib/brand-tokens";
import { BlurFade } from "@/components/ui/blur-fade";

const SERVICE_CATEGORIES = [
  {
    title: "Nail Extensions",
    subtitle: "Bio Gel · UV Gel · Acrylic",
    description:
      "Full sets and refills crafted with precision. All enhancement services include shellac polish for a flawless, long-lasting finish.",
    items: [
      { name: "Bio Gel Full Set", price: "$55 – $65", duration: "60 min" },
      { name: "UV Gel Full Set", price: "$55 – $65", duration: "60 min" },
      { name: "Acrylic Full Set", price: "$55 – $65", duration: "60 min" },
      { name: "Gel / Acrylic Refill", price: "$45 – $50", duration: "50 min" },
      { name: "Toe Nail Extensions", price: "$60 – $90", duration: "" },
    ],
  },
  {
    title: "Manicures",
    subtitle: "Hand Treatments",
    description:
      "From a quick classic polish to our signature Nail Beaute experience with scrubs, masks, and hot towels. Every visit is a treat for your hands.",
    items: [
      { name: "Classic Manicure", price: "$25 – $35", duration: "25-30 min" },
      { name: "The Nail Beaute", price: "$45 – $55", duration: "45 min" },
      { name: "Deluxe Manicure", price: "$55 – $65", duration: "45-60 min" },
    ],
  },
  {
    title: "Pedicures",
    subtitle: "Foot Treatments & Spa",
    description:
      "Indulge your feet in our luxurious spa pedicures. Each treatment includes a soothing soak, detailed grooming, and a choice of finishing polish.",
    items: [
      { name: "Classic Pedicure", price: "$35 – $50", duration: "40-45 min" },
      { name: "Rose Pedicure", price: "$70 – $80", duration: "55-65 min" },
      { name: "Aloe Vera Pedicure", price: "$80 – $100", duration: "65-75 min" },
      { name: "Volcano Pedicure", price: "$100 – $120", duration: "75-85 min" },
    ],
  },
  {
    title: "Combos",
    subtitle: "Manicure + Pedicure",
    description:
      "Save when you pamper both hands and feet. Our combo packages are the most popular choice for a complete refresh.",
    items: [
      { name: "Mani + Pedi Combo", price: "$55 – $80", duration: "60-70 min" },
    ],
  },
  {
    title: "Eyelash Services",
    subtitle: "Extensions & Lift",
    description:
      "Wake up gorgeous every morning. Our meticulous lash technicians create natural-to-dramatic looks with premium materials.",
    items: [
      { name: "Classic Lash Set", price: "$100 – $130", duration: "75-90 min" },
      { name: "Lash Refill", price: "$50 – $100", duration: "35-60 min" },
      { name: "Lash Lift & Tint", price: "$70", duration: "60 min" },
    ],
  },
  {
    title: "Waxing",
    subtitle: "Hair Removal",
    description:
      "Quick, clean, and gentle hair removal for face and body. We use premium wax for a smooth, comfortable experience.",
    items: [
      { name: "Eyebrow Wax", price: "$10 – $15", duration: "" },
      { name: "Upper Lip", price: "$5 – $8", duration: "" },
      { name: "Full Face", price: "$25 – $40", duration: "" },
      { name: "Full Leg", price: "$40 – $60", duration: "" },
      { name: "Brazilian", price: "$50 – $70", duration: "" },
      { name: "Full Body", price: "$150 – $230", duration: "" },
    ],
  },
  {
    title: "Extras & Add-Ons",
    subtitle: "Enhance Any Service",
    description: "Customize your visit with these popular add-ons.",
    items: [
      { name: "French Tips", price: "$10 – $15", duration: "" },
      { name: "Chrome / Ombre Design", price: "$15", duration: "" },
      { name: "Paraffin Treatment", price: "$10", duration: "" },
      { name: "Massage Add-On", price: "$10 – $15", duration: "" },
      { name: "Color Change", price: "$15 – $30", duration: "15-25 min" },
    ],
  },
  {
    title: "Kids Menu",
    subtitle: "Ages 10 & Under",
    description:
      "A special treat for little ones. Safe, fun, and gentle — because everyone deserves a pampering day.",
    items: [
      { name: "Kids Manicure", price: "$10 – $20", duration: "10-20 min" },
      { name: "Kids Pedicure", price: "$20 – $30", duration: "20-30 min" },
      { name: "Kids Mani + Pedi", price: "$30 – $45", duration: "30-40 min" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative flex items-end min-h-[40vh] px-6 pb-12"
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
              What We Offer
            </p>
            <h1
              className="font-heading text-5xl md:text-[5.5rem] leading-[0.92]"
              style={{
                color: BRAND.colors.textLight,
                fontWeight: 400,
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Services & Pricing
            </h1>
          </BlurFade>
        </div>
      </section>

      {/* Services — Editorial List Layout */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-4xl mx-auto">
          {SERVICE_CATEGORIES.map((cat, catIndex) => (
            <BlurFade key={cat.title} delay={0.1 + catIndex * 0.05}>
              <div
                className="mb-16 last:mb-0"
                style={{
                  borderBottom:
                    catIndex < SERVICE_CATEGORIES.length - 1
                      ? `1px solid ${BRAND.colors.accent}`
                      : "none",
                  paddingBottom: catIndex < SERVICE_CATEGORIES.length - 1 ? "3rem" : 0,
                }}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <p
                    className="text-[11px] tracking-[0.3em] uppercase mb-2"
                    style={{ color: BRAND.colors.primary, fontWeight: 600 }}
                  >
                    {cat.subtitle}
                  </p>
                  <h2
                    className="font-heading text-3xl md:text-4xl mb-3"
                    style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
                  >
                    {cat.title}
                  </h2>
                  <p
                    className="text-sm max-w-xl leading-relaxed"
                    style={{ color: BRAND.colors.textBody }}
                  >
                    {cat.description}
                  </p>
                </div>

                {/* Items — editorial line items with dividers */}
                <div className="space-y-0">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between py-4"
                      style={{
                        borderBottom: `1px solid ${BRAND.colors.accent}40`,
                      }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span
                          className="text-base"
                          style={{ color: BRAND.colors.textHeading, fontWeight: 500 }}
                        >
                          {item.name}
                        </span>
                        {item.duration && (
                          <span
                            className="text-xs"
                            style={{ color: BRAND.colors.textMuted }}
                          >
                            {item.duration}
                          </span>
                        )}
                      </div>
                      <span
                        className="text-base font-semibold whitespace-nowrap ml-4"
                        style={{ color: BRAND.colors.gold }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}

          {/* Note */}
          <BlurFade delay={0.3}>
            <div
              className="mt-12 p-6 text-center text-sm"
              style={{
                backgroundColor: BRAND.colors.bgAlt,
                borderRadius: BRAND.spacing.radiusCards,
                color: BRAND.colors.textBody,
              }}
            >
              <p className="mb-2">
                <strong>Note:</strong> Prices may vary based on nail length, design
                complexity, and condition. All enhancement services include shellac
                polish.
              </p>
              <p style={{ color: BRAND.colors.textMuted }}>
                Gift cards available &middot; Walk-ins welcome &middot; Online booking
                recommended
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.secondary})`,
        }}
      >
        <BlurFade delay={0.1}>
          <h2
            className="font-heading text-3xl md:text-5xl mb-6"
            style={{
              color: BRAND.colors.textLight,
              fontWeight: 500,
              textShadow: "0 1px 8px rgba(0,0,0,0.2)",
            }}
          >
            Ready to Book?
          </h2>
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
            Book Your Appointment
          </a>
        </BlurFade>
      </section>
    </>
  );
}
