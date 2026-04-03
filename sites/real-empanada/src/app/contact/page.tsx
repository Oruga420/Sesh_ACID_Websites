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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Contact / Contacto</h1>
          <p className="text-white/80 font-body text-lg mt-2">
            Visit, call, or order online &mdash; we&apos;d love to serve you
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
                  <h3 className="font-heading font-bold text-heading text-xl mb-1">Follow Us / S&iacute;guenos</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/realempanadaco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label="Instagram"
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/realempanadaco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                      aria-label="Facebook"
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
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
