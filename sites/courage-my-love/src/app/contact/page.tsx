import { BRAND } from "@/lib/brand-tokens";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg-alt py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Get in Touch
          </p>
          <h1
            className="text-4xl md:text-6xl text-brand-text-heading max-w-2xl mb-6"
            style={{ fontFamily: BRAND.fonts.heading, lineHeight: 1.05 }}
          >
            Come Visit the Blue Shop
          </h1>
          <p className="text-lg text-brand-text-muted max-w-lg">
            We&apos;re in the heart of Kensington Market. Look for the bright
            blue storefront with boots on the sidewalk — you can&apos;t miss it.
          </p>
        </div>
      </section>

      {/* Map + Contact Info */}
      <section className="bg-brand-bg-main py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden border border-brand-border h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7!2d-79.4008!3d43.6545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c5e2e3fe4d%3A0x6c5aa4e1ad9e5be2!2sCourage%20My%20Love!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Courage My Love location"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-10">
            <div>
              <h2
                className="text-2xl text-brand-text-heading mb-4"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Location
              </h2>
              <address className="not-italic space-y-1 text-brand-text-body">
                <p className="font-semibold">Courage My Love</p>
                <p>14 Kensington Ave</p>
                <p>Toronto, ON M5T 2J7</p>
                <p className="text-sm text-brand-text-muted mt-2">
                  Kensington Market — look for the bright blue storefront
                </p>
              </address>
            </div>

            <div>
              <h2
                className="text-2xl text-brand-text-heading mb-4"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Hours
              </h2>
              <div className="space-y-2 text-brand-text-body">
                <div className="flex justify-between max-w-sm">
                  <span>Monday – Friday</span>
                  <span className="font-semibold">11:30 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-sm">
                  <span>Saturday</span>
                  <span className="font-semibold">11:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between max-w-sm">
                  <span>Sunday</span>
                  <span className="font-semibold">1:00 PM – 5:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl text-brand-text-heading mb-4"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Contact
              </h2>
              <div className="space-y-3">
                <p>
                  <a
                    href="tel:416-979-1992"
                    className="text-brand-primary hover:underline font-semibold text-lg"
                  >
                    416-979-1992
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:ceceandstewart@yahoo.ca"
                    className="text-brand-primary hover:underline"
                  >
                    ceceandstewart@yahoo.ca
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl text-brand-text-heading mb-4"
                style={{ fontFamily: BRAND.fonts.heading }}
              >
                Follow Us
              </h2>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/couragemylove/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-primary hover:underline"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @couragemylove
                </a>
                <a
                  href="https://www.instagram.com/cececourage/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-primary hover:underline"
                  aria-label="Cece on Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @cececourage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
