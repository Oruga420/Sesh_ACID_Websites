import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pupuseria Salvadorena & Authentic Mexican Foods",
  description:
    "Get in touch with Pupuseria Salvadorena at 2459 Finch Ave W, North York. Call (416) 743-4001 or visit us 7 days a week.",
};

const HOURS = [
  { day: "Sunday", time: "10:30 am \u2013 10:00 pm" },
  { day: "Monday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Tuesday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Wednesday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Thursday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Friday", time: "11:30 am \u2013 10:00 pm" },
  { day: "Saturday", time: "10:30 am \u2013 10:00 pm" },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-maroon text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <p className="font-body text-lg text-gray-200">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-1">
                    Address
                  </h3>
                  <p className="font-body text-brand-body">
                    2459 Finch Ave W
                    <br />
                    North York, ON M9M 2G1
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=2459+Finch+Ave+W+North+York+ON+M9M+2G1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-brand-maroon font-semibold hover:text-brand-maroon-dark transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:4167434001"
                    className="font-body text-brand-maroon font-semibold text-lg hover:text-brand-maroon-dark transition-colors"
                  >
                    (416) 743-4001
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-1">
                    Follow Us
                  </h3>
                  <a
                    href="https://www.instagram.com/pupuseria_salvadorena07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-brand-maroon font-semibold hover:text-brand-maroon-dark transition-colors"
                  >
                    @pupuseria_salvadorena07
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-1">
                    Order Online
                  </h3>
                  <a
                    href="https://pupuseriasalvadorenamexicanfoodson.com/pupuseria-salvadorena--mexican-foods/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-brand-maroon text-white font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-maroon-dark transition-colors"
                  >
                    Order Now
                  </a>
                  <p className="font-body text-brand-muted text-sm mt-2">
                    Use promo code <strong>FRSTWB</strong> for 10% off your
                    first order
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-sm h-[350px] mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5!2d-79.5256!3d43.7564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b30739b1fcc9b%3A0x982acc5ada7bed61!2sPupuseria%20Salvadorena%20%26%20Authentic%20Mexican%20Foods!5e0!3m2!1sen!2sca!4v1700000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pupuseria Salvadorena location"
                />
              </div>

              <h3 className="font-heading text-xl font-bold text-brand-dark mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between font-body text-brand-body text-sm py-1 border-b border-brand-border"
                  >
                    <span className="font-semibold">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
