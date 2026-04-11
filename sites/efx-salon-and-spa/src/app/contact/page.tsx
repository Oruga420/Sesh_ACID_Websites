import { BRAND } from '@/lib/brand-tokens';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, #6b1a6b 100%)`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            Book your appointment, ask about our services, or simply stop by.
            We&apos;d love to welcome you.
          </p>
        </div>
      </section>

      {/* Contact Details + Map */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
                Visit Our Salon
              </p>
              <h2 className="font-heading text-3xl font-semibold text-brand-textHeading mb-8">
                We&apos;re on Wincott Drive
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgWarm }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={BRAND.colors.primary}
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-brand-textHeading mb-1">
                      Address
                    </h3>
                    <p className="font-body text-base text-brand-textBody">
                      265 Wincott Dr.<br />
                      Etobicoke, ON M9R 2R7
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgWarm }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={BRAND.colors.primary}
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-brand-textHeading mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+14162459333"
                      className="font-body text-base text-brand-textBody hover:text-brand-primary transition-colors"
                    >
                      (416) 245-9333
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgWarm }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={BRAND.colors.primary}
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-brand-textHeading mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:Efxsalonandspa@gmail.com"
                      className="font-body text-base text-brand-textBody hover:text-brand-primary transition-colors"
                    >
                      Efxsalonandspa@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/efxsalonandspa.ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/people/Efx-salon-and-spa/100072509013147/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <div
                className="overflow-hidden h-[400px]"
                style={{ borderRadius: BRAND.spacing.radiusCards }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1!2d-79.5556!3d43.6889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37e5e5e5e5e5%3A0x0!2s265+Wincott+Dr%2C+Etobicoke%2C+ON+M9R+2R7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EFX Salon and Spa location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16" style={{ backgroundColor: BRAND.colors.bgWarm }}>
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-md mx-auto">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3 text-center">
              Hours of Operation
            </p>
            <h2 className="font-heading text-2xl font-semibold text-brand-textHeading mb-8 text-center">
              When to Visit
            </h2>

            <div className="space-y-0">
              {[
                { day: 'Monday', hours: '9:30 AM - 6:00 PM' },
                { day: 'Tuesday', hours: '9:00 AM - 7:30 PM' },
                { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
                { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
                { day: 'Friday', hours: '9:00 AM - 7:00 PM' },
                { day: 'Saturday', hours: '8:30 AM - 5:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between py-3 border-b border-brand-textMuted/15"
                >
                  <span className="font-heading text-sm font-semibold text-brand-textHeading">
                    {row.day}
                  </span>
                  <span className="font-body text-sm text-brand-textBody">
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, #6b1a6b 100%)`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="font-body text-base text-white/80 mb-8 max-w-lg mx-auto">
            Call us to schedule your appointment or walk in during our business hours.
            We can&apos;t wait to meet you.
          </p>
          <a
            href="tel:+14162459333"
            className="inline-block font-heading text-sm uppercase tracking-wide px-10 py-4 font-bold transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.accent,
              borderRadius: BRAND.spacing.radiusButtons,
              color: '#2d1f14',
            }}
          >
            Call (416) 245-9333
          </a>
        </div>
      </section>
    </>
  );
}
