import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand-tokens';
import SectionWrapper from '@/components/SectionWrapper';

export const metadata: Metadata = {
  title: `Contact — ${BRAND.business.name}`,
  description: `Visit Star Beauty & Hair Salon at ${BRAND.business.address}. Call ${BRAND.business.phone} to book your appointment. Walk-ins welcome.`,
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(BRAND.business.address)}&zoom=15`;

  return (
    <>
      {/* Map — Featured element, half-page */}
      <section className="relative w-full" style={{ height: '400px' }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Star Beauty & Hair Salon location"
        />
      </section>

      {/* Contact info */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: BRAND.colors.bgMain }}
      >
        <div
          className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
          style={{ maxWidth: BRAND.spacing.contentMaxWidth }}
        >
          {/* Left — Info */}
          <SectionWrapper>
            <span
              className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
              style={{ color: BRAND.colors.primary }}
            >
              Get In Touch
            </span>
            <h1
              className="font-heading font-semibold leading-tight mb-8"
              style={{
                color: BRAND.colors.textHeading,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
              }}
            >
              Visit Star Beauty
            </h1>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: BRAND.colors.bgAlt }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-body font-semibold text-sm mb-1"
                    style={{ color: BRAND.colors.textHeading }}
                  >
                    Address
                  </h3>
                  <p className="font-body" style={{ color: BRAND.colors.textBody }}>
                    {BRAND.business.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.business.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium mt-1 inline-block"
                    style={{ color: BRAND.colors.primary }}
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: BRAND.colors.bgAlt }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-body font-semibold text-sm mb-1"
                    style={{ color: BRAND.colors.textHeading }}
                  >
                    Phone
                  </h3>
                  <a
                    href={`tel:${BRAND.business.phone}`}
                    className="font-body text-lg font-medium"
                    style={{ color: BRAND.colors.primary }}
                  >
                    {BRAND.business.phone}
                  </a>
                  <p
                    className="font-body text-sm mt-1"
                    style={{ color: BRAND.colors.textMuted }}
                  >
                    Tap to call. Walk-ins welcome.
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: BRAND.colors.bgAlt }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-body font-semibold text-sm mb-1"
                    style={{ color: BRAND.colors.textHeading }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={BRAND.business.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: BRAND.colors.primary }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href={BRAND.business.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: BRAND.colors.primary }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-flex items-center gap-2 font-body font-semibold px-8 py-4 rounded-lg mt-10 transition-all hover:shadow-lg"
              style={{
                backgroundColor: BRAND.colors.primary,
                color: '#FFFFFF',
                borderRadius: BRAND.spacing.radiusButtons,
                boxShadow: '0 2px 12px rgba(194,24,91,0.25)',
              }}
            >
              Book Your Appointment
            </a>
          </SectionWrapper>

          {/* Right — Hours */}
          <SectionWrapper delay={100}>
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: BRAND.colors.bgCard,
                boxShadow: '0 4px 20px rgba(45,27,48,0.08)',
                borderRadius: BRAND.spacing.radiusCards,
              }}
            >
              <span
                className="font-body text-xs font-medium tracking-[0.2em] uppercase block mb-3"
                style={{ color: BRAND.colors.primary }}
              >
                Business Hours
              </span>
              <h2
                className="font-heading text-2xl font-semibold mb-6"
                style={{ color: BRAND.colors.textHeading }}
              >
                When to Visit
              </h2>

              <div className="space-y-3">
                {Object.entries(BRAND.business.hours).map(([day, time]) => {
                  const isClosed = time === 'Closed';
                  const isToday =
                    new Date()
                      .toLocaleDateString('en-US', { weekday: 'long' })
                      .toLowerCase() === day;

                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between py-3 border-b"
                      style={{
                        borderBottomColor: BRAND.colors.bgAlt,
                        backgroundColor: isToday ? BRAND.colors.bgAlt : 'transparent',
                        padding: isToday ? '0.75rem 1rem' : '0.75rem 0',
                        borderRadius: isToday ? BRAND.spacing.radiusButtons : '0',
                      }}
                    >
                      <span
                        className="font-body font-medium capitalize"
                        style={{
                          color: isToday ? BRAND.colors.primary : BRAND.colors.textBody,
                        }}
                      >
                        {day}
                        {isToday && (
                          <span className="text-xs ml-2 opacity-60">(Today)</span>
                        )}
                      </span>
                      <span
                        className="font-body text-sm"
                        style={{
                          color: isClosed ? BRAND.colors.textMuted : BRAND.colors.textBody,
                        }}
                      >
                        {time}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p
                className="font-body text-sm mt-6"
                style={{ color: BRAND.colors.textMuted }}
              >
                Walk-ins welcome. Appointments recommended for color services.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}
