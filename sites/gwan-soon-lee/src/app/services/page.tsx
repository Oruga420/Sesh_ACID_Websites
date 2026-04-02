import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Gwan Soon Lee Tattoos & Piercings",
  description:
    "Full service menu for Gwan Soon Lee Tattoos & Piercings. Custom tattoos, piercings, fine line, black and grey, colour realism in Mississauga, ON.",
};

interface ServiceItem {
  readonly name: string;
  readonly description: string;
}

interface ServiceCategory {
  readonly title: string;
  readonly description: string;
  readonly services: readonly ServiceItem[];
}

const SERVICE_CATEGORIES: readonly ServiceCategory[] = [
  {
    title: "Custom Tattoos",
    description: "Unique designs created specifically for you",
    services: [
      { name: "Colour Realism", description: "Hyper-realistic tattoos with vivid colour depth and lifelike detail" },
      { name: "Black & Grey", description: "Classic shading techniques for timeless, dramatic pieces" },
      { name: "Fine Line", description: "Delicate, precise linework for elegant, minimalist designs" },
      { name: "Small Tattoos", description: "Subtle pieces perfect for first-timers or meaningful accents" },
      { name: "Custom Lettering", description: "Hand-drawn typography and script tailored to your style" },
      { name: "Cover-Ups", description: "Transform old or unwanted tattoos into fresh new artwork" },
    ],
  },
  {
    title: "Piercings",
    description: "Safe, professional piercings with premium jewelry",
    services: [
      { name: "Ear Piercings", description: "Lobe, helix, tragus, conch, industrial, and more" },
      { name: "Facial Piercings", description: "Nostril, septum, eyebrow, lip, and labret piercings" },
      { name: "Body Piercings", description: "Navel, nipple, and other body piercings" },
    ],
  },
  {
    title: "Consultations & Process",
    description: "How we bring your vision to life",
    services: [
      { name: "Free Consultation", description: "Discuss your ideas, placement, size, and colour preferences at no cost" },
      { name: "Custom Design Mockup", description: "We create a detailed mockup of your tattoo before any ink touches skin" },
      { name: "Aftercare Package", description: "Comprehensive aftercare instructions and pamphlet provided with every service" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-3">
            Our Craft
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            Services
          </h1>
          <div className="green-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            From intricate fine line work to bold colour realism, we specialize in bringing
            your vision to life. Every piece is custom-designed and crafted with 25+ years of expertise.
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
                <div className="w-12 h-0.5 bg-brand-green mt-4" />
              </div>

              <div className="space-y-0">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start justify-between py-5 border-b border-white/10 group hover:border-brand-green/30 transition-colors"
                  >
                    <div>
                      <span className="text-white/80 font-body text-sm font-medium group-hover:text-brand-white transition-colors block">
                        {service.name}
                      </span>
                      <span className="text-white/40 font-body text-xs mt-1 block">
                        {service.description}
                      </span>
                    </div>
                    <span className="text-brand-gold font-body text-xs font-semibold ml-4 flex-shrink-0 mt-0.5">
                      Custom Pricing
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding bg-brand-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            How Pricing Works
          </h2>
          <div className="gold-divider" />
          <div className="space-y-4 text-white/60 text-sm leading-relaxed mt-8">
            <p>
              Every tattoo is unique, so pricing depends on size, placement, detail, and colour.
              We provide a custom quote during your free consultation after reviewing your design ideas.
            </p>
            <p>
              A deposit is required to book your appointment. The deposit goes toward your total cost.
              Please include reference photos, desired size (in inches), placement, and colour preference
              when reaching out.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-green font-body text-sm uppercase tracking-[0.3em] mb-3">
              See Our Work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Recent Pieces
            </h2>
            <div className="green-divider" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1605055706190-QOGFWM7BHEBZA9MHP1W3/DSC08691.JPG",
              "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537398882967-D5MBQWTPZP8Z2OSS9RSI/2018-05-10+20.30.54-1.jpg",
              "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537399176684-A0O2G0YKLZACM5AE7ANX/2017-04-05+19.17.50-2.jpg",
              "https://images.squarespace-cdn.com/content/v1/5b43b4c1697a982c7acc411a/1537408521553-DS75EN0JRX2XE3LKQIZ0/2017-08-30+17.05.44-2.jpg",
            ].map((src) => (
              <div key={src} className="aspect-square overflow-hidden rounded-sm group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Tattoo portfolio piece"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white mb-6">
            Ready to Start?
          </h2>
          <p className="text-white/40 text-sm mb-8">
            Book a free consultation to discuss your tattoo or piercing. Walk-ins are welcome
            but appointments are recommended for custom work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gwansoonleetattoo.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Consultation
            </a>
            <a href="tel:+14169099055" className="btn-outline">
              Call (416) 909-9055
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
