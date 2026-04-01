import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Prices | Pure Self Salon N Spa",
  description:
    "Full service menu and pricing for Pure Self Salon N Spa. Hair, colour, laser, spa, lash, brow, nails, and waxing services in Markham, ON.",
};

interface ServiceItem {
  readonly name: string;
  readonly price: string;
}

interface ServiceCategory {
  readonly title: string;
  readonly description: string;
  readonly services: readonly ServiceItem[];
}

const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    title: "Hair",
    description: "Expert cuts and styling for every occasion",
    services: [
      { name: "Women's Haircut (Short)", price: "$65" },
      { name: "Women's Haircut (Long)", price: "$85" },
      { name: "Men's Haircut", price: "$40" },
      { name: "Blowout", price: "$45" },
      { name: "Updo (Simple)", price: "$125" },
      { name: "Updo (Elaborate)", price: "$150+" },
    ],
  },
  {
    title: "Colour",
    description: "From subtle enhancements to bold transformations",
    services: [
      { name: "Root Touch-Up", price: "$95" },
      { name: "Partial Highlights", price: "$130" },
      { name: "Full Highlights", price: "$200" },
      { name: "Balayage", price: "$300" },
      { name: "Fashion Colour", price: "$200" },
      { name: "Colour Correction", price: "Consultation" },
    ],
  },
  {
    title: "Treatments",
    description: "Repair, restore, and revitalize your hair",
    services: [
      { name: "Keratin Treatment (Short)", price: "$350" },
      { name: "Keratin Treatment (Long)", price: "$600" },
      { name: "Scalp Treatment", price: "$75" },
      { name: "Gloss Treatment", price: "$75" },
    ],
  },
  {
    title: "Laser Hair Removal",
    description: "Long-lasting results with advanced laser technology",
    services: [
      { name: "Full Body", price: "$999" },
      { name: "Brazilian", price: "$200" },
      { name: "Full Face", price: "$200" },
      { name: "Underarms", price: "$100" },
      { name: "Half Legs", price: "$250" },
      { name: "Full Legs", price: "$400" },
    ],
  },
  {
    title: "Spa & Wellness",
    description: "Indulge in relaxation and rejuvenation",
    services: [
      { name: "Relaxation Massage (60 min)", price: "$85" },
      { name: "Deep Tissue Massage (60 min)", price: "$95" },
      { name: "AVEDA Facial", price: "$100" },
      { name: "Anti-Aging Facial", price: "$120" },
      { name: "Back Facial", price: "$85" },
    ],
  },
  {
    title: "Lash & Brow",
    description: "Define and enhance your natural features",
    services: [
      { name: "Lash Lift", price: "$100" },
      { name: "Lash Lift & Tint", price: "$120" },
      { name: "Lash Tint", price: "$35" },
      { name: "Brow Threading", price: "$12" },
      { name: "Brow Tint", price: "$25" },
      { name: "Brow Lamination", price: "$75" },
    ],
  },
  {
    title: "Nails",
    description: "Polished perfection for hands and feet",
    services: [
      { name: "Classic Manicure", price: "$35" },
      { name: "Shellac Manicure", price: "$45" },
      { name: "Classic Pedicure", price: "$55" },
      { name: "Shellac Pedicure", price: "$65" },
      { name: "Gel Extensions", price: "$75" },
    ],
  },
  {
    title: "Waxing",
    description: "Smooth, hair-free skin with professional waxing",
    services: [
      { name: "Eyebrow Wax", price: "$12" },
      { name: "Upper Lip", price: "$10" },
      { name: "Full Face Wax", price: "$35" },
      { name: "Brazilian Wax", price: "$55" },
      { name: "Full Legs", price: "$50" },
      { name: "Half Legs", price: "$30" },
      { name: "Underarms", price: "$15" },
      { name: "Full Arms", price: "$35" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Our Menu
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            Services &amp; Prices
          </h1>
          <div className="gold-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            From expert hair styling and colour to laser treatments and luxurious spa services,
            discover the full range of what Pure Self Salon N Spa has to offer.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto space-y-16">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.title}>
              <div className="mb-8">
                <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
                  {category.title}
                </h2>
                <p className="text-white/40 text-sm mt-2">{category.description}</p>
                <div className="w-12 h-0.5 bg-brand-gold mt-4" />
              </div>

              <div className="space-y-0">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between py-4 border-b border-white/10 group hover:border-brand-gold/30 transition-colors"
                  >
                    <span className="text-white/80 font-body text-sm group-hover:text-brand-white transition-colors">
                      {service.name}
                    </span>
                    <span className="text-brand-gold font-body text-sm font-semibold ml-4 flex-shrink-0">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note & CTA */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/40 text-sm mb-8">
            Prices may vary based on hair length, thickness, and complexity. Consultation recommended
            for colour corrections and specialized treatments. All prices are subject to change.
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            Ready to Book?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pureselfsalon.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Online
            </a>
            <a href="tel:+19056047873" className="btn-outline">
              Call (905) 604-7873
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
