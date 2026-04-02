import type { Metadata } from "next";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Contact | 905 INK Tattoo Facility",
  description:
    "Visit us at our Brampton North, Brampton South, or Toronto locations. Open daily 12PM-9PM. Call or email to book your appointment.",
};

const locations = [
  {
    name: "Brampton North",
    address: "470 Chrysler Drive, Unit #24, Brampton, ON L6S 0C1",
    phone: "(905) 789-9993",
    email: "info@905ink.ca",
    mapQuery: "470 Chrysler Drive Unit 24 Brampton ON L6S 0C1",
  },
  {
    name: "Brampton South (Steeles)",
    address: "1 Steeles Ave E, Unit #19, Brampton, ON L6W 4J6",
    phone: "(905) 454-8086",
    email: "steeles@905ink.ca",
    mapQuery: "1 Steeles Ave E Unit 19 Brampton ON L6W 4J6",
  },
  {
    name: "Toronto",
    address: "1386 Gerrard Street East, Unit #1, Toronto, ON M4L 1Z2",
    phone: "(416) 546-3373",
    email: "info@905ink.ca",
    mapQuery: "1386 Gerrard Street East Unit 1 Toronto ON M4L 1Z2",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-6xl md:text-7xl text-white tracking-wider mb-4">
            CONTACT <span className="text-burnt-red">US</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Visit any of our three locations or reach out to schedule your
            appointment. Walk-ins welcome for consultations.
          </p>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-burnt-red py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-white font-semibold mb-1">Email</p>
            <a
              href="mailto:info@905ink.ca"
              className="text-white/80 hover:text-white transition-colors"
            >
              info@905ink.ca
            </a>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">WhatsApp</p>
            <a
              href="https://wa.me/19057832328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              +1 (905) 783-2328
            </a>
          </div>
          <div>
            <p className="text-white font-semibold mb-1">Hours</p>
            <p className="text-white/80">Open Daily: 12PM - 9PM</p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <div className="bg-dark border border-dark-lighter rounded-lg p-8">
                  <h2 className="font-heading text-3xl text-burnt-red tracking-wider mb-4">
                    {loc.name}
                  </h2>
                  <div className="space-y-3 text-gray-400">
                    <p className="flex items-start gap-3">
                      <span className="text-burnt-red mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      {loc.address}
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-burnt-red">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <a
                        href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`}
                        className="hover:text-burnt-red transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-burnt-red">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <a
                        href={`mailto:${loc.email}`}
                        className="hover:text-burnt-red transition-colors"
                      >
                        {loc.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-burnt-red">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Open Daily: 12PM - 9PM
                    </p>
                  </div>
                </div>
                <MapEmbed query={loc.mapQuery} title={`${loc.name} Location`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl text-white tracking-wider mb-6">
            READY TO GET INKED?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Book your appointment online, call us, or walk in for a free
            consultation. We can&apos;t wait to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://905ink.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burnt-red hover:bg-burnt-red-dark text-white px-8 py-3 rounded font-semibold tracking-wide transition-colors uppercase"
            >
              Book Online
            </a>
            <a
              href="https://wa.me/19057832328"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-burnt-red text-burnt-red hover:bg-burnt-red hover:text-white px-8 py-3 rounded font-semibold tracking-wide transition-colors uppercase"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
