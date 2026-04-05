import { BRAND } from '@/lib/brand-tokens';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: BRAND.colors.gold }}>
            Contact Us
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6" style={{ color: BRAND.colors.textLight }}>
            Let&apos;s Start the<br />
            <span style={{ color: BRAND.colors.gold }}>Conversation</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Whether you are ready to buy, sell, or just have questions about the GTA market — our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Info */}
            <div>
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.gold }}>
                Get In Touch
              </p>
              <h2 className="font-heading font-bold text-3xl mb-8" style={{ color: BRAND.colors.textHeading }}>
                Visit Our Office
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.colors.gold }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1" style={{ color: BRAND.colors.textHeading }}>
                      Office Address
                    </h3>
                    <p className="text-sm" style={{ color: BRAND.colors.textBody }}>
                      {BRAND.business.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.colors.gold }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1" style={{ color: BRAND.colors.textHeading }}>
                      Phone
                    </h3>
                    <a href={`tel:${BRAND.business.phone}`} className="text-sm hover:underline" style={{ color: BRAND.colors.gold }}>
                      {BRAND.business.phone}
                    </a>
                    <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>
                      Fax: {BRAND.business.fax}
                    </p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.colors.gold }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-2" style={{ color: BRAND.colors.textHeading }}>
                      Follow Us
                    </h3>
                    <div className="flex items-center gap-4">
                      <a href={BRAND.business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={BRAND.colors.gold}>
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a href={BRAND.business.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={BRAND.colors.gold}>
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                      <a href={BRAND.business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={BRAND.colors.gold}>
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href={BRAND.business.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={BRAND.colors.gold}>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div
              className="p-8"
              style={{
                backgroundColor: BRAND.colors.bgAlt,
                borderRadius: BRAND.spacing.radiusCards,
                border: `1px solid ${BRAND.colors.border}`,
              }}
            >
              <h3 className="font-heading font-bold text-xl mb-6" style={{ color: BRAND.colors.textHeading }}>
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.textMuted }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2"
                      style={{ borderColor: BRAND.colors.border }}
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.textMuted }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2"
                      style={{ borderColor: BRAND.colors.border }}
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.textMuted }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2"
                    style={{ borderColor: BRAND.colors.border }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.textMuted }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2"
                    style={{ borderColor: BRAND.colors.border }}
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.textMuted }}>
                    I am a...
                  </label>
                  <select
                    className="w-full px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2"
                    style={{ borderColor: BRAND.colors.border, color: BRAND.colors.textBody }}
                  >
                    <option>Buyer</option>
                    <option>Seller</option>
                    <option>Both</option>
                    <option>Just browsing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: BRAND.colors.textMuted }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 text-sm border rounded-lg outline-none focus:ring-2 resize-none"
                    style={{ borderColor: BRAND.colors.border }}
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-4 font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
                  style={{
                    backgroundColor: BRAND.colors.gold,
                    color: BRAND.colors.textLight,
                    borderRadius: BRAND.spacing.radiusButtons,
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-0">
        <div className="w-full h-[400px]" style={{ backgroundColor: BRAND.colors.bgAlt }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8!2d-79.4577!3d43.7814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e28c9e5d7d9%3A0x8a3b9a4e5a5e5a5a!2s7900%20Bathurst%20St%2C%20Vaughan%2C%20ON%20L4J%200B8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Upperside Real Estate Office Location"
          />
        </div>
      </section>
    </>
  );
}
