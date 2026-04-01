import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Scarborough Fades",
  description: "Full list of services and pricing at Scarborough Fades barbershop.",
};

const services = [
  { name: "Fade", price: "$40", duration: "35 min", description: "Precision skin fade or taper fade tailored to your style." },
  { name: "Fade + Beard", price: "$50", duration: "50 min", description: "Full fade with a clean beard shape-up and trim." },
  { name: "Haircut (No Fade)", price: "$30", duration: "25 min", description: "Classic scissor or clipper cut without a fade." },
  { name: "Haircut (No Fade) + Beard", price: "$45", duration: "40 min", description: "Classic cut paired with a full beard grooming session." },
  { name: "Kid's Fade (9 and under)", price: "$35", duration: "35 min", description: "Fresh fades for the young kings. Patient and precise." },
  { name: "Beard Trim", price: "$25", duration: "20 min", description: "Shape, line, and trim your beard to perfection." },
  { name: "Line Up", price: "$15", duration: "20 min", description: "Clean up your hairline, edges, and shape between cuts." },
  { name: "Charcoal / Gold Face Mask", price: "$10", duration: "20 min", description: "Deep cleansing mask to refresh your skin after a cut." },
  { name: "Men's Color", price: "From $40", duration: "45 min", description: "Full color, highlights, or touch-ups. Consultation included." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase mb-4">
            Services &amp; Pricing
          </h1>
          <p className="text-brand-silver max-w-lg mx-auto">
            Walk-ins welcome. Book ahead to guarantee your spot.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-brand-dark border border-white/5 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-white/10 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-1">{service.name}</h3>
                  <p className="text-brand-silver text-sm">{service.description}</p>
                </div>
                <div className="flex items-baseline gap-3 shrink-0">
                  <span className="text-brand-silver text-xs">{service.duration}</span>
                  <span className="text-xl font-display font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://getsquire.com/discover/barbershop/scarborough-fades-scarborough"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-brand-white text-black font-bold px-10 py-4 rounded transition-colors uppercase tracking-wider text-sm"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
