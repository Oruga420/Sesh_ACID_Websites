import { BRAND } from '@/lib/brand-tokens';
import ScrollReveal from '@/components/ScrollReveal';

const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM - 7:00 PM' },
  { day: 'Friday', time: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${BRAND.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '30vh',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative z-10 py-14 px-6">
          <p
            className="mb-3"
            style={{
              fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: BRAND.colors.accent,
            }}
          >
            Visit Us
          </p>
          <h1
            style={{
              fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: '#FFFFFF',
            }}
          >
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Map — Featured (half-page) */}
      <section style={{ backgroundColor: BRAND.colors.bgMain }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.4!2d-79.5437!3d43.5948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47a5e66e5a6d%3A0x4e0e0e0e0e0e0e0e!2s825%20Brown&#39;s%20Line%2C%20Etobicoke%2C%20ON%20M8W%203V7!5e0!3m2!1sen!2sca!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="West Endz Hair Salon location map"
        />
      </section>

      {/* Contact Info + Hours */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '5rem 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 1.5rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Details */}
            <ScrollReveal>
              <div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: BRAND.colors.primary,
                  }}
                >
                  Contact Info
                </p>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: BRAND.colors.textHeading,
                  }}
                >
                  Come Say Hello
                </h2>

                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: BRAND.colors.bgAlt,
                        color: BRAND.colors.primary,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND.colors.textHeading, fontSize: '0.95rem' }}>
                        Address
                      </p>
                      <p style={{ color: BRAND.colors.textBody, fontSize: '0.95rem' }}>
                        825 Brown&apos;s Line, Alderwood Plaza<br />
                        Etobicoke, ON M8W 3V7
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: BRAND.colors.bgAlt,
                        color: BRAND.colors.primary,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND.colors.textHeading, fontSize: '0.95rem' }}>
                        Phone
                      </p>
                      <a
                        href="tel:4162552131"
                        className="hover:underline"
                        style={{ color: BRAND.colors.primary, fontSize: '0.95rem' }}
                      >
                        416-255-2131
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: BRAND.colors.bgAlt,
                        color: BRAND.colors.primary,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND.colors.textHeading, fontSize: '0.95rem' }}>
                        Email
                      </p>
                      <a
                        href="mailto:westendz@rogers.com"
                        className="hover:underline"
                        style={{ color: BRAND.colors.primary, fontSize: '0.95rem' }}
                      >
                        westendz@rogers.com
                      </a>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: BRAND.colors.bgAlt,
                        color: BRAND.colors.primary,
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: BRAND.colors.textHeading, fontSize: '0.95rem' }}>
                        Follow Us
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.instagram.com/salonwestendz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: BRAND.colors.primary, fontSize: '0.95rem' }}
                        >
                          Instagram
                        </a>
                        <span style={{ color: BRAND.colors.textMuted }}>|</span>
                        <a
                          href="https://www.facebook.com/WestEndzHairSalon/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: BRAND.colors.primary, fontSize: '0.95rem' }}
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Hours */}
            <ScrollReveal delay={150}>
              <div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: BRAND.colors.primary,
                  }}
                >
                  Hours
                </p>
                <h2
                  className="mb-8"
                  style={{
                    fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: BRAND.colors.textHeading,
                  }}
                >
                  When We&apos;re Open
                </h2>

                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: BRAND.spacing.radiusCards,
                    border: `1px solid ${BRAND.colors.bgAlt}`,
                  }}
                >
                  {hours.map((h, i) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between px-6 py-4"
                      style={{
                        backgroundColor: i % 2 === 0 ? BRAND.colors.bgCard : BRAND.colors.bgAlt,
                        borderBottom: i < hours.length - 1 ? `1px solid ${BRAND.colors.bgAlt}` : 'none',
                      }}
                    >
                      <span
                        className="font-semibold text-sm"
                        style={{ color: BRAND.colors.textHeading }}
                      >
                        {h.day}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          color: h.time === 'Closed' ? BRAND.colors.textMuted : BRAND.colors.textBody,
                          fontStyle: h.time === 'Closed' ? 'italic' : 'normal',
                        }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Booking note */}
                <div
                  className="mt-8 p-6 text-center"
                  style={{
                    backgroundColor: BRAND.colors.bgAlt,
                    borderRadius: BRAND.spacing.radiusCards,
                  }}
                >
                  <p
                    style={{
                      fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`,
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      color: BRAND.colors.textHeading,
                      marginBottom: '0.5rem',
                    }}
                  >
                    Walk-ins Welcome
                  </p>
                  <p className="text-sm" style={{ color: BRAND.colors.textBody }}>
                    Appointments preferred. Call ahead for the best availability.
                  </p>
                  <a
                    href="tel:4162552131"
                    className="inline-block mt-4 transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: BRAND.colors.primary,
                      color: '#FFFFFF',
                      padding: '12px 28px',
                      borderRadius: BRAND.spacing.radiusButtons,
                      fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}`,
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
