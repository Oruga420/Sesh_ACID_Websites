import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Toston Colombian Cuisine",
  description:
    "Visit The Toston at 35 Karachi Dr. Unit 39, Markham. Open Tuesday-Sunday. Call (647) 666-2400 for takeout or dine-in.",
};

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "12:00 PM - 7:00 PM" },
  { day: "Wednesday", time: "12:00 PM - 7:00 PM" },
  { day: "Thursday", time: "12:00 PM - 7:00 PM" },
  { day: "Friday", time: "12:00 PM - 9:00 PM" },
  { day: "Saturday", time: "12:00 PM - 9:00 PM" },
  { day: "Sunday", time: "12:00 PM - 6:00 PM" },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://cdn.gotoeat.net/thetoston/4300-albums-4.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-[#2C1810]/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-6xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="font-[family-name:var(--font-body)] text-brand-gold text-lg">
            We&apos;d love to see you
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d-79.2283!3d43.8544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d56e9c8d4c7b%3A0x6e2c0e8e6e2c0e8e!2s35%20Karachi%20Dr%20Unit%2039%2C%20Markham%2C%20ON%20L3S%200B5!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Toston Colombian Cuisine location"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-2xl font-bold mb-4">
                Location
              </h2>
              <address className="not-italic font-[family-name:var(--font-body)] text-brand-brown space-y-2">
                <p className="font-semibold text-lg">
                  The Toston Colombian Cuisine
                </p>
                <p>35 Karachi Dr. Unit 39</p>
                <p className="text-brand-muted">Markham, ON L3S 0B5</p>
              </address>
              <a
                href="https://maps.google.com/?q=35+Karachi+Dr+Unit+39+Markham+ON+L3S+0B5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-brand-gold font-[family-name:var(--font-body)] font-semibold hover:text-brand-gold-dark transition-colors duration-300 inline-block"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Phone */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-2xl font-bold mb-4">
                Call Us
              </h2>
              <a
                href="tel:6476662400"
                className="font-[family-name:var(--font-body)] text-brand-gold text-2xl font-bold hover:text-brand-gold-dark transition-colors duration-300"
              >
                (647) 666-2400
              </a>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-2">
                For takeout orders, reservations, and inquiries
              </p>
            </div>

            {/* Hours */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-2xl font-bold mb-4">
                Hours
              </h2>
              <ul className="space-y-2 font-[family-name:var(--font-body)]">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between border-b border-brand-border pb-2 last:border-0"
                  >
                    <span className="text-brand-brown font-medium">
                      {h.day}
                    </span>
                    <span
                      className={
                        h.time === "Closed"
                          ? "text-brand-red font-semibold"
                          : "text-brand-coffee"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-coffee py-16 text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-gold text-3xl font-bold mb-4">
            Come Taste Colombia
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-cream/80 mb-6">
            No reservation needed for our cozy 18-seat dining room. Walk-ins
            welcome, takeout available.
          </p>
          <a
            href="tel:6476662400"
            className="bg-brand-gold text-brand-coffee font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-gold-dark transition-colors duration-300 inline-block text-lg"
          >
            Call to Order
          </a>
        </div>
      </section>
    </>
  );
}
