import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: BRAND.colors.primary }}>
            Contact Us
          </p>
          <h1 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Let&apos;s Talk About Your Mortgage
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: BRAND.colors.textBody }}>
            Ready to get started? Have a question? Reach out to Joe Taibi and the MorCan Financial team.
            We&apos;re here to help — no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Details */}
            <div>
              <h2 className="text-2xl mb-8" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>Phone</p>
                    <a href={`tel:${BRAND.business.phone}`} className="text-lg hover:underline" style={{ color: BRAND.colors.primary }}>
                      {BRAND.business.phone}
                    </a>
                    <p className="text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>Fax: {BRAND.business.fax}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>Email</p>
                    <a href={`mailto:${BRAND.business.email}`} className="hover:underline" style={{ color: BRAND.colors.primary }}>
                      {BRAND.business.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>Office</p>
                    <p style={{ color: BRAND.colors.textBody }}>{BRAND.business.address}</p>
                  </div>
                </div>

                {/* FSRA */}
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>Licensed &amp; Regulated</p>
                    <p style={{ color: BRAND.colors.textBody }}>FSRA License #{BRAND.business.fsra}</p>
                    <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>Joe Taibi — President &amp; Principal Broker</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-sm font-semibold mb-3" style={{ color: BRAND.colors.textHeading }}>Follow Us</p>
                <div className="flex gap-4">
                  <a href={BRAND.business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href={BRAND.business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href={BRAND.business.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div
              className="p-8 border"
              style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusCards, backgroundColor: BRAND.colors.bgAlt }}
            >
              <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: BRAND.colors.textHeading }}>Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: BRAND.colors.textHeading }}>Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: BRAND.colors.textHeading }}>Phone</label>
                  <input
                    type="tel"
                    placeholder="(905) 555-0123"
                    className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: BRAND.colors.textHeading }}>I&apos;m Interested In</label>
                  <select
                    className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:ring-2 bg-white"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons }}
                  >
                    <option>New Mortgage / Pre-Approval</option>
                    <option>Mortgage Renewal</option>
                    <option>Refinancing</option>
                    <option>Debt Consolidation</option>
                    <option>Commercial Mortgage</option>
                    <option>Credit Improvement</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: BRAND.colors.textHeading }}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your situation..."
                    className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:ring-2 bg-white resize-none"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold transition-all hover:shadow-lg"
                  style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.textLight, borderRadius: BRAND.spacing.radiusButtons }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="rounded-lg overflow-hidden" style={{ borderRadius: BRAND.spacing.radiusCards }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d-79.53!3d43.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3650+Langstaff+Rd+Woodbridge+ON!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MorCan Financial Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
