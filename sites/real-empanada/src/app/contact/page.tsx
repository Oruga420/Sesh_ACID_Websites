import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Real Empanada",
  description:
    "Get in touch with Real Empanada — visit our Beaches location, order curbside, or reach us for wholesale and catering.",
};

const ORDER_OPTIONS = [
  {
    name: "UberEats",
    url: "https://www.ubereats.com/store/real-empanada-company/-WODgvr7Wa6qSJErIfRq3A",
    description: "Delivery within 10km",
  },
  {
    name: "DoorDash",
    url: "https://www.doordash.com/store/real-empanada-toronto-795028/",
    description: "Fast local delivery",
  },
  {
    name: "Curbside Pickup",
    url: "tel:+14165754421",
    description: "Call or text to order",
  },
  {
    name: "Wholesale / Catering",
    url: "mailto:richard.porras@realempanada.com",
    description: "Events, markets, bulk orders",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://realempanada.com/wp-content/uploads/2025/07/Beaches-store-front.jpg"
          alt="Real Empanada Beaches storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-white/80 font-body text-lg mt-2">
            Visit, call, or order online — we&apos;d love to serve you
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-heading mb-8">
                Beaches Location
              </h2>
              <div className="space-y-6 font-body text-body text-lg">
                <div>
                  <h3 className="font-heading font-bold text-heading text-xl mb-1">Address</h3>
                  <p>281 Scarborough Road</p>
                  <p>Toronto, Ontario M4E 3M9</p>
                  <a
                    href="https://maps.google.com/?q=281+Scarborough+Road+Toronto+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark font-semibold inline-block mt-2 transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-heading text-xl mb-1">Hours</h3>
                  <p>Thursday &ndash; Sunday</p>
                  <p>11:00 AM &ndash; 7:00 PM</p>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-heading text-xl mb-1">Phone</h3>
                  <a
                    href="tel:+14165754421"
                    className="text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    (416) 575-4421
                  </a>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-heading text-xl mb-1">Email</h3>
                  <a
                    href="mailto:richard.porras@realempanada.com"
                    className="text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    richard.porras@realempanada.com
                  </a>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-heading text-xl mb-1">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/realempanadaco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-semibold transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/realempanadaco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-semibold transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-md h-80 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7!2d-79.2946!3d43.6715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc0e1b7b0001%3A0x123456!2s281+Scarborough+Rd%2C+Toronto%2C+ON+M4E+3M9!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Real Empanada location map"
                />
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://realempanada.com/wp-content/uploads/2022/03/realempanada-east-end-1.jpeg"
                  alt="Real Empanada east end location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-heading text-center mb-10">
            Ways to Order
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ORDER_OPTIONS.map((option) => (
              <a
                key={option.name}
                href={option.url}
                target={option.url.startsWith("http") ? "_blank" : undefined}
                rel={option.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-cream rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300 group"
              >
                <h3 className="font-heading text-xl font-bold text-heading group-hover:text-primary transition-colors">
                  {option.name}
                </h3>
                <p className="text-body/70 font-body text-sm mt-2">{option.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Wholesale &amp; Catering
          </h2>
          <p className="text-white/80 font-body text-lg mb-8 leading-relaxed">
            Planning an event or stocking your store? Real Empanada supplies frozen empanadas
            and salsa in bulk. Contact Richard directly for wholesale pricing.
          </p>
          <a
            href="mailto:richard.porras@realempanada.com"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
          >
            Email for Wholesale
          </a>
        </div>
      </section>
    </>
  );
}
