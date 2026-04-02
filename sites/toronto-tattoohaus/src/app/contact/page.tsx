import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Toronto Tattoohaus",
  description:
    "Contact Toronto Tattoohaus at 873 St. Clair Ave W, Toronto. Book your tattoo consultation, call 647-345-3549, or email torontotattoohaus@gmail.com.",
};

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "12:00 PM - 7:00 PM" },
  { day: "Wednesday", time: "12:00 PM - 7:00 PM" },
  { day: "Thursday", time: "12:00 PM - 7:00 PM" },
  { day: "Friday", time: "12:00 PM - 7:00 PM" },
  { day: "Saturday", time: "12:00 PM - 7:00 PM" },
  { day: "Sunday", time: "12:00 PM - 5:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="section-padding bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light text-brand-white">
            Contact Us
          </h1>
          <div className="gold-divider" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto">
            Ready to start your tattoo journey? Book a consultation, drop us a line, or just come say hi.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="section-padding bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-10">
              {/* Book Online */}
              <div>
                <h2 className="font-heading text-2xl text-brand-gold mb-4">Book a Consultation</h2>
                <p className="text-white/60 text-sm mb-4">
                  Fill out our booking form with your tattoo idea, preferred artist, size, and placement.
                  We&apos;ll get back to you within 48 hours.
                </p>
                <a
                  href="https://form.jotform.com/200156118945251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  Book on Jotform
                </a>
              </div>

              {/* Phone & Email */}
              <div>
                <h2 className="font-heading text-2xl text-brand-gold mb-4">Phone &amp; Email</h2>
                <div className="space-y-3">
                  <p>
                    <a
                      href="tel:+16473453549"
                      className="text-white/80 hover:text-brand-gold text-sm transition-colors"
                    >
                      647-345-3549
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:torontotattoohaus@gmail.com"
                      className="text-white/80 hover:text-brand-gold text-sm transition-colors"
                    >
                      torontotattoohaus@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="font-heading text-2xl text-brand-gold mb-4">Location</h2>
                <address className="not-italic text-white/60 text-sm leading-relaxed">
                  Toronto Tattoohaus
                  <br />
                  873 St. Clair Ave W (Main Floor)
                  <br />
                  Toronto, ON M6C 1C4
                  <br />
                  Canada
                </address>
                <p className="text-brand-green-light text-sm mt-2">
                  Fully wheelchair accessible
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=873+St+Clair+Ave+W+Toronto+ON+M6C+1C4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-brand-gold text-sm hover:text-brand-gold-light transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>

              {/* Social */}
              <div>
                <h2 className="font-heading text-2xl text-brand-gold mb-4">Follow Us</h2>
                <a
                  href="https://www.instagram.com/torontotattoohaus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @torontotattoohaus
                </a>
              </div>
            </div>

            {/* Right: Hours */}
            <div>
              <div className="bg-brand-charcoal border border-white/10 rounded-sm p-8 mb-8">
                <h2 className="font-heading text-2xl text-brand-gold mb-6">Studio Hours</h2>
                <div className="space-y-0">
                  {HOURS.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-white/80 text-sm">{item.day}</span>
                      <span className={`text-sm ${item.time === "Closed" ? "text-red-400/70" : "text-white/50"}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-xs mt-4">
                  Flash Days: Tue &amp; Wed from $80
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="space-y-4">
                <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-sm p-6">
                  <p className="text-brand-gold font-heading text-lg mb-2">First Tattoo?</p>
                  <p className="text-white/50 text-sm">
                    We specialize in making first-timers feel at home. Our artists will walk you through
                    every step of the process.
                  </p>
                </div>
                <div className="bg-brand-green/10 border border-brand-green/30 rounded-sm p-6">
                  <p className="text-brand-green-light font-heading text-lg mb-2">Walk-Ins Welcome</p>
                  <p className="text-white/50 text-sm">
                    Walk-ins are accepted when availability allows. Call ahead or check our Instagram
                    for same-day availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-brand-white">
              Find Us
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="aspect-video rounded-sm overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5!2d-79.43!3d43.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b345c1c1c1c1c%3A0x0!2s873+St+Clair+Ave+W+Toronto+ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Toronto Tattoohaus Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
