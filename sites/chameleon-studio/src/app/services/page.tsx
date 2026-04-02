import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Chameleon Studio",
  description:
    "Full service menu and pricing for tattoos, piercings, barbering, nail artistry, aesthetic injections, body contouring and more at Chameleon Studio Mississauga.",
};

const tattooServices = [
  { name: "Small Tattoo (1-2 in)", price: "$80 - $150", time: "30-60 min" },
  { name: "Medium Tattoo (3-5 in)", price: "$150 - $350", time: "1-2 hrs" },
  { name: "Large Tattoo (sleeve/back)", price: "$350 - $600+", time: "2-4+ hrs" },
  { name: "Cover Ups", price: "$200 - $600+", time: "Consultation" },
  { name: "Custom Design (hourly)", price: "$100 - $150/hr", time: "Varies" },
  { name: "Full Day Session", price: "$850", time: "8 hours" },
  { name: "Touch Ups (within 1 month)", price: "Complimentary", time: "Varies" },
  { name: "Touch Ups (after 1 month)", price: "$50 - $150+", time: "Varies" },
];

const piercingServices = [
  { name: "Lobes (1-2)", price: "$40 - $80" },
  { name: "Helix", price: "$80" },
  { name: "Nose", price: "$120" },
  { name: "Navel", price: "$120" },
  { name: "Eyebrow", price: "$120" },
];

const barberServices = [
  { name: "Haircut", price: "$30 - $50" },
  { name: "Beard Trim", price: "$20 - $30" },
  { name: "Haircut + Beard", price: "$50 - $60" },
  { name: "Kids Cut", price: "$30 - $35" },
];

const beautyServices = [
  { name: "Nail Artistry (Acrylic/Gel/Gel-X)", price: "From $50" },
  { name: "Men's Manicure", price: "From $35" },
  { name: "Botox", price: "Consultation" },
  { name: "Fillers", price: "Consultation" },
  { name: "PRP/PRF Treatments", price: "Consultation" },
  { name: "Fat Dissolving", price: "Consultation" },
  { name: "Body Sculpting", price: "Consultation" },
  { name: "Lymphatic Massage", price: "Consultation" },
  { name: "Post-Op Massage", price: "Consultation" },
  { name: "Semi-Permanent Makeup", price: "Consultation" },
  { name: "Braids & Twists", price: "From $60" },
];

function ServiceTable({
  title,
  items,
  showTime = false,
}: {
  readonly title: string;
  readonly items: ReadonlyArray<{ readonly name: string; readonly price: string; readonly time?: string }>;
  readonly showTime?: boolean;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gold-500 mb-6 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-gold-500" />
        {title}
      </h2>
      <div className="bg-dark-800 border border-dark-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 px-4 text-gray-400 text-sm uppercase tracking-wider">
                Service
              </th>
              <th className="text-right py-3 px-4 text-gray-400 text-sm uppercase tracking-wider">
                Price
              </th>
              {showTime && (
                <th className="text-right py-3 px-4 text-gray-400 text-sm uppercase tracking-wider hidden sm:table-cell">
                  Duration
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={item.name}
                className={i % 2 === 0 ? "bg-dark-800" : "bg-dark-900/50"}
              >
                <td className="py-3 px-4 text-gray-200">{item.name}</td>
                <td className="py-3 px-4 text-gold-500 font-semibold text-right">
                  {item.price}
                </td>
                {showTime && (
                  <td className="py-3 px-4 text-gray-400 text-right hidden sm:table-cell">
                    {item.time ?? "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services & <span className="text-gold-500">Pricing</span>
          </h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            From custom ink to holistic beauty — explore our full menu of
            services. Walk-ins welcome when availability exists.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4">
          <ServiceTable title="Custom Tattoos" items={tattooServices} showTime />

          <div className="bg-dark-800 border border-gold-500/30 rounded-lg p-4 mb-12 text-sm text-gray-300">
            <p className="font-semibold text-gold-500 mb-1">Tattoo Styles Available:</p>
            <p>
              Modern, Script, Traditional, Blackwork, Anime, Chicano, Fineline,
              Oriental — and more. Custom designs welcome.
            </p>
          </div>

          <ServiceTable title="Piercings" items={piercingServices} />

          <div className="bg-dark-800 border border-gold-500/30 rounded-lg p-4 mb-12 text-sm text-gray-300">
            <p>
              All piercings include professional placement and aftercare
              guidance. Baby piercings available (3+ months).
            </p>
          </div>

          <ServiceTable title="Barbering" items={barberServices} />
          <ServiceTable title="Beauty, Aesthetics & Wellness" items={beautyServices} />

          {/* Policies */}
          <div className="bg-dark-800 border border-dark-700 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Policies</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9679;</span>
                $50 non-refundable deposit required for tattoos & PMU
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9679;</span>
                24-hour advance notice requested for cancellations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9679;</span>
                Age requirements: 18+ solo; 14+ with guardian for certain
                services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9679;</span>
                Payment: Cash, debit, credit cards, e-transfers, tap-to-pay
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">&#9679;</span>
                Walk-ins welcome when availability exists
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center py-10">
            <a
              href="https://chameleonstudiosv.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-dark-900 px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-gold-600 transition-colors"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
