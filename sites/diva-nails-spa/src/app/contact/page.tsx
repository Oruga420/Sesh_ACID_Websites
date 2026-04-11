import { BRAND } from '@/lib/brand-tokens';

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function BookingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
    </svg>
  );
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <PhoneIcon />,
      label: 'Call Us',
      value: BRAND.business.phone,
      href: `tel:${BRAND.business.phone.replace(/[^\d+]/g, '')}`,
      description: 'Give us a call to book or ask questions',
    },
    {
      icon: <MapPinIcon />,
      label: 'Visit Us',
      value: BRAND.business.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.business.address)}`,
      description: 'Walk-ins welcome, appointments preferred',
    },
    {
      icon: <ClockIcon />,
      label: 'Hours',
      value: 'Mon-Sat: 9AM-8PM | Sun: 9AM-6PM',
      href: undefined,
      description: 'Open 7 days a week for your convenience',
    },
    {
      icon: <BookingIcon />,
      label: 'Book Online',
      value: 'Dash Booking',
      href: BRAND.business.bookingUrl,
      description: 'Reserve your spot and choose your technician',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgAlt,
          padding: 'clamp(48px, 6vw, 80px) 0 clamp(40px, 4vw, 60px)',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <p className="section-label mb-3" style={{ color: BRAND.colors.primary }}>
            Contact
          </p>
          <h1
            className="font-heading"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: BRAND.colors.textHeading,
              lineHeight: 1.1,
            }}
          >
            Come Say Hello
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: BRAND.colors.textBody }}>
            Find us on Eglinton Ave East in Scarborough. Walk-ins are welcome, but we
            recommend booking ahead for the best experience.
          </p>
        </div>
      </section>

      {/* Map Section — Featured */}
      <section style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto">
          <div className="w-full h-[400px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.1!2d-79.251!3d43.735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce3f!2s2639+Eglinton+Ave+E%2C+Scarborough%2C+ON+M1K+2S2!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Diva Nails & Head Spa Location"
            />
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgMain,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Wrapper = method.href ? 'a' : 'div';
              const linkProps = method.href
                ? {
                    href: method.href,
                    target: method.href.startsWith('http') ? '_blank' : undefined,
                    rel: method.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                  }
                : {};

              return (
                <Wrapper
                  key={method.label}
                  {...linkProps}
                  className="card-hover block p-6"
                  style={{
                    backgroundColor: BRAND.colors.bgCard,
                    borderRadius: BRAND.spacing.radiusCards,
                    boxShadow: '0 4px 20px rgba(61,46,42,0.08)',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${BRAND.colors.primary}15` }}
                  >
                    <span style={{ color: BRAND.colors.primary }}>{method.icon}</span>
                  </div>
                  <p
                    className="section-label text-[11px] mb-2"
                    style={{ color: BRAND.colors.primary }}
                  >
                    {method.label}
                  </p>
                  <p
                    className="font-heading text-lg mb-1"
                    style={{ color: BRAND.colors.textHeading, fontWeight: 600 }}
                  >
                    {method.value}
                  </p>
                  <p className="text-sm" style={{ color: BRAND.colors.textMuted }}>
                    {method.description}
                  </p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Hours & Social */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgAlt,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hours */}
            <div>
              <p className="section-label mb-4" style={{ color: BRAND.colors.primary }}>
                Hours of Operation
              </p>
              <div
                className="p-6"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 20px rgba(61,46,42,0.08)',
                }}
              >
                {[
                  { day: 'Monday', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Tuesday', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Wednesday', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Thursday', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Friday', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Sunday', hours: '9:00 AM – 6:00 PM' },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between py-3"
                    style={{
                      borderBottom: `1px solid ${BRAND.colors.accent}22`,
                    }}
                  >
                    <span style={{ color: BRAND.colors.textHeading, fontWeight: 600, fontSize: '15px' }}>
                      {item.day}
                    </span>
                    <span style={{ color: BRAND.colors.textBody, fontSize: '15px' }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow & Connect */}
            <div>
              <p className="section-label mb-4" style={{ color: BRAND.colors.primary }}>
                Follow Us
              </p>
              <div
                className="p-6"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 20px rgba(61,46,42,0.08)',
                }}
              >
                <p className="mb-6" style={{ color: BRAND.colors.textBody }}>
                  Stay in the loop with our latest nail art, head spa updates, and special offers.
                </p>

                <div className="space-y-4">
                  <a
                    href={BRAND.business.instagram[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: `${BRAND.colors.primary}0A`,
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <div>
                      <p style={{ color: BRAND.colors.textHeading, fontWeight: 600, fontSize: '15px' }}>
                        @divanailltd
                      </p>
                      <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
                        Nail art, beauty updates &amp; more
                      </p>
                    </div>
                  </a>

                  <a
                    href={BRAND.business.instagram[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: `${BRAND.colors.primary}0A`,
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <div>
                      <p style={{ color: BRAND.colors.textHeading, fontWeight: 600, fontSize: '15px' }}>
                        @divanails_headspa
                      </p>
                      <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
                        Head spa videos &amp; relaxation content
                      </p>
                    </div>
                  </a>

                  <a
                    href={BRAND.business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:opacity-80"
                    style={{
                      backgroundColor: `${BRAND.colors.primary}0A`,
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <div>
                      <p style={{ color: BRAND.colors.textHeading, fontWeight: 600, fontSize: '15px' }}>
                        Diva Nail on Facebook
                      </p>
                      <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
                        Reviews, updates &amp; community
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.primary,
          padding: 'clamp(48px, 6vw, 72px) 0',
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2
            className="font-heading mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500, color: '#FFFFFF' }}
          >
            Don&apos;t Wait — Book Today
          </h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Select your service, choose your technician, and pick a time that works for you.
          </p>
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#FFFFFF',
              color: BRAND.colors.primary,
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '14px 36px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
