import { BRAND } from '@/lib/brand-tokens';
import { InstagramIcon, FacebookIcon, YoutubeIcon, PhoneIcon, EmailIcon, MapPinIcon } from '@/components/SocialIcons';

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24" style={{ backgroundColor: BRAND.colors.bgHero }}>
        <div className="relative z-10 mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="inline-block text-xs mb-3 tracking-widest"
            style={{ color: BRAND.colors.secondary, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            Get in Touch
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}>
            Contact Niro
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Ready to take the next step? Reach out for a free consultation — no obligation, just expert advice.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8" style={{ fontSize: '2rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
                Let&apos;s Connect
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.accent}15` }}>
                    <PhoneIcon color={BRAND.colors.accent} size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textHeading }}>Phone</h3>
                    <a href={`tel:${BRAND.contact.phone}`} className="text-lg hover:underline" style={{ color: BRAND.colors.accent }}>
                      {BRAND.contact.phone}
                    </a>
                    <p className="text-sm mt-1" style={{ color: BRAND.colors.textMuted }}>
                      Office: {BRAND.contact.officePhone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.accent}15` }}>
                    <EmailIcon color={BRAND.colors.accent} size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textHeading }}>Email</h3>
                    <a href={`mailto:${BRAND.contact.email}`} className="hover:underline" style={{ color: BRAND.colors.accent }}>
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.accent}15` }}>
                    <MapPinIcon color={BRAND.colors.accent} size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textHeading }}>Office</h3>
                    <p style={{ color: BRAND.colors.textBody }}>
                      RE/MAX Community Realty Inc. Brokerage<br />
                      {BRAND.contact.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.accent}15` }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textHeading }}>Hours</h3>
                    <p style={{ color: BRAND.colors.textBody }}>{BRAND.contact.hours}</p>
                    <p className="text-sm mt-1" style={{ color: BRAND.colors.textMuted }}>Weekend appointments available</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-semibold mb-4" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textHeading }}>Follow Niro</h3>
                <div className="flex gap-4">
                  <a
                    href={BRAND.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                    aria-label="Instagram"
                  >
                    <InstagramIcon color={BRAND.colors.primary} size={22} />
                  </a>
                  <a
                    href={BRAND.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                    aria-label="Facebook"
                  >
                    <FacebookIcon color={BRAND.colors.primary} size={22} />
                  </a>
                  <a
                    href="https://www.youtube.com/embed/kl6K2e_c4vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                    style={{ backgroundColor: BRAND.colors.bgAlt }}
                    aria-label="YouTube"
                  >
                    <YoutubeIcon color={BRAND.colors.primary} size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map + Form */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-72" style={{ borderRadius: BRAND.spacing.radiusCards }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8!2d-79.1878!3d43.7825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cef!2s1265+Morningside+Ave%2C+Scarborough%2C+ON+M1B+3V9!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RE/MAX Community Realty Office Location"
                />
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-lg" style={{ backgroundColor: BRAND.colors.bgAlt, borderRadius: BRAND.spacing.radiusCards }}>
                <h3 className="text-xl mb-6" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1.5 font-medium" style={{ color: BRAND.colors.textHeading }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors"
                        style={{ border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1.5 font-medium" style={{ color: BRAND.colors.textHeading }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors"
                        style={{ border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 font-medium" style={{ color: BRAND.colors.textHeading }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors"
                      style={{ border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 font-medium" style={{ color: BRAND.colors.textHeading }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-md text-sm outline-none transition-colors"
                      style={{ border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 font-medium" style={{ color: BRAND.colors.textHeading }}>
                      I&apos;m Interested In
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-md text-sm outline-none"
                      style={{ border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody, backgroundColor: BRAND.colors.bgCard }}
                    >
                      <option>Buying a Home</option>
                      <option>Selling a Home</option>
                      <option>Investment Properties</option>
                      <option>Home Evaluation</option>
                      <option>Mortgage Assistance</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1.5 font-medium" style={{ color: BRAND.colors.textHeading }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-md text-sm outline-none resize-none"
                      style={{ border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                      placeholder="Tell us about your real estate needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-sm transition-all hover:opacity-90"
                    style={{
                      backgroundColor: BRAND.colors.secondary,
                      color: BRAND.colors.textLight,
                      fontFamily: BRAND.fonts.heading,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '14px 32px',
                      borderRadius: BRAND.spacing.radiusButtons,
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
