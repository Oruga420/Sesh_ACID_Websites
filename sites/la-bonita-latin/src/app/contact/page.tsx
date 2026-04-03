import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://itin-dev.wanderlogstatic.com/freeImage/YUVcC6oRCWhxbgBKvFYmoBKvmza7VWeR"
          alt="La Bonita Latin American Restaurant storefront"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/70 to-[#2B1810]/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-6xl font-bold mb-2">
            Contact Us
          </h1>
          <p className="font-[family-name:var(--font-body)] text-brand-gold text-lg">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-3xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="font-[family-name:var(--font-body)] text-brand-brown leading-relaxed mb-6">
                Whether you want to place a pickup order, ask about our menu, or
                inquire about pupusas (available by advance order), give us a
                call or stop by!
              </p>
            </div>

            {/* Phone */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Phone
              </h3>
              <a
                href="tel:9052320915"
                className="font-[family-name:var(--font-body)] text-brand-red text-2xl font-bold hover:text-brand-red-dark transition-colors duration-300"
              >
                (905) 232-0915
              </a>
            </div>

            {/* Address */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Address
              </h3>
              <address className="not-italic font-[family-name:var(--font-body)] text-brand-brown">
                <p className="font-semibold">1065 Canadian Place, Unit 109</p>
                <p className="text-brand-muted">Mississauga, ON L4W 0B8</p>
              </address>
              <a
                href="https://maps.google.com/?q=1065+Canadian+Place+Unit+109+Mississauga+ON+L4W+0B8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-[family-name:var(--font-body)] text-brand-red font-semibold hover:text-brand-red-dark transition-colors duration-300"
              >
                Get Directions &rarr;
              </a>
            </div>

            {/* Hours */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Hours
              </h3>
              <p className="font-[family-name:var(--font-body)] text-brand-brown">
                <span className="font-semibold">Monday - Sunday:</span>{" "}
                11:30 AM - 7:30 PM
              </p>
            </div>

            {/* Payment */}
            <div className="bg-brand-cream rounded-xl border border-brand-border p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Payment Methods
              </h3>
              <p className="font-[family-name:var(--font-body)] text-brand-brown font-semibold">
                Cash &amp; E-Transfer Only
              </p>
              <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-2">
                Please note we do not accept credit or debit cards at this time.
              </p>
            </div>

            {/* Social */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold mb-3">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/labonita.latin.restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-body)] text-brand-red font-semibold hover:text-brand-red-dark transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/labonitalatina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-body)] text-brand-red font-semibold hover:text-brand-red-dark transition-colors duration-300"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-[600px] md:h-auto md:min-h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d-79.6173!3d43.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3886cfe7a3b1%3A0x4f5c1d7e8e2c1234!2s1065%20Canadian%20Pl%20%23109%2C%20Mississauga%2C%20ON%20L4W%200B8!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Bonita Latin American Restaurant location"
              className="min-h-[600px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
