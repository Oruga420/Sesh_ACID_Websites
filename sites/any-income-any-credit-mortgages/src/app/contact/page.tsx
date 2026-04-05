import { BRAND } from '@/lib/brand-tokens';
import SocialIcons from '@/components/SocialIcons';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '280px',
          backgroundImage: `linear-gradient(135deg, rgba(13,33,55,0.9) 0%, rgba(27,77,110,0.8) 100%), url(${BRAND.images.gallery[3].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '80px 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.accent }}>
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Let&apos;s Start the Conversation
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.secondary }}>
                Get In Touch
              </p>
              <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                We&apos;re Here to Help
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: BRAND.colors.textBody }}>
                Whether you have a quick question or want a full consultation, we&apos;re available to help. Call us directly, send an email, or visit our Brampton office.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:3652319115"
                  className="flex items-start gap-4 p-5 rounded transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.border}`,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BRAND.colors.textMuted }}>Phone</p>
                    <p className="text-lg font-semibold" style={{ color: BRAND.colors.primary }}>{BRAND.business.phone}</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.business.email}`}
                  className="flex items-start gap-4 p-5 rounded transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.border}`,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BRAND.colors.textMuted }}>Email</p>
                    <p className="text-lg font-semibold" style={{ color: BRAND.colors.primary }}>{BRAND.business.email}</p>
                  </div>
                </a>

                {/* Address */}
                <div
                  className="flex items-start gap-4 p-5 rounded"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.border}`,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BRAND.colors.textMuted }}>Office</p>
                    <p className="text-base font-semibold" style={{ color: BRAND.colors.textHeading }}>{BRAND.business.address}</p>
                  </div>
                </div>

                {/* License */}
                <div
                  className="flex items-start gap-4 p-5 rounded"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.border}`,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: BRAND.colors.bgAlt }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BRAND.colors.textMuted }}>Licensed</p>
                    <p className="text-base font-semibold" style={{ color: BRAND.colors.textHeading }}>{BRAND.business.license}</p>
                    <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>Regulated by FSRAO</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: BRAND.colors.textMuted }}>
                  Follow Us
                </p>
                <SocialIcons />
              </div>
            </div>

            {/* Map + CTA */}
            <div>
              {/* Map Embed */}
              <div
                className="rounded overflow-hidden mb-8"
                style={{
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  height: '350px',
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.123!2d-79.7614!3d43.6956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15e5f0b3b7f5%3A0x1234567890abcdef!2s341%20Main%20St%20N%2C%20Brampton%2C%20ON%20L6X%203C7!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Contact Form */}
              <div
                className="p-8"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
                }}
              >
                <h3 className="text-xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  Request a Free Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: BRAND.colors.textMuted }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 text-sm rounded border outline-none focus:ring-2 transition"
                        style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: BRAND.colors.textMuted }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 text-sm rounded border outline-none focus:ring-2 transition"
                        style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: BRAND.colors.textMuted }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 text-sm rounded border outline-none focus:ring-2 transition"
                      style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: BRAND.colors.textMuted }}>
                      How Can We Help?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your mortgage needs..."
                      className="w-full px-4 py-3 text-sm rounded border outline-none focus:ring-2 transition resize-none"
                      style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded font-semibold text-base transition-all hover:opacity-90"
                    style={{
                      backgroundColor: BRAND.colors.primary,
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
        </div>
      </section>
    </>
  );
}
