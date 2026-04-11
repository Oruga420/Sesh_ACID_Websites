import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'Contact — P & A Nails Hamilton Mountain',
  description: 'Visit us at 598 Upper Sherman Ave, Hamilton. Call (905) 387-8246 to book. Open 7 days a week.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-bg-warm py-14">
        <div className="mx-auto max-w-[1240px] px-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Get in Touch
          </p>
          <h1
            className="text-4xl font-bold text-brand-text-heading md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Visit Us
          </h1>
          <p className="mt-3 max-w-xl text-brand-text-muted">
            Walk-ins are always welcome. Prefer to call ahead? We&apos;re happy to
            book your appointment by phone or text.
          </p>
        </div>
      </section>

      {/* Map + Contact info */}
      <section className="py-14">
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Map — featured half-page */}
            <div className="overflow-hidden rounded-[3px]" style={{ boxShadow: BRAND.shadows.card }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.3!2d-79.8667!3d43.2333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b0000000001%3A0x1234567890abcdef!2s598%20Upper%20Sherman%20Ave%2C%20Hamilton%2C%20ON%20L8V%203M2!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="P & A Nails location map"
              />
            </div>

            {/* Contact details */}
            <div>
              <div className="mb-8">
                <h2
                  className="mb-4 text-2xl font-bold text-brand-text-heading"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Location &amp; Hours
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary} className="mt-1 flex-shrink-0">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div>
                      <p className="font-bold text-brand-text-heading">Address</p>
                      <p className="text-brand-text-body">{BRAND.businessData.address}</p>
                      <a
                        href="https://www.google.com/maps/dir//598+Upper+Sherman+Ave,+Hamilton,+ON+L8V+3M2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-brand-primary hover:underline"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary} className="mt-1 flex-shrink-0">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <div>
                      <p className="font-bold text-brand-text-heading">Hours</p>
                      <p className="text-brand-text-body">
                        Monday &ndash; Saturday: {BRAND.businessData.hours.mondayToSaturday}
                      </p>
                      <p className="text-brand-text-body">
                        Sunday: {BRAND.businessData.hours.sunday}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary} className="mt-1 flex-shrink-0">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <div>
                      <p className="font-bold text-brand-text-heading">Phone</p>
                      <p className="text-brand-text-body">
                        <a href={`tel:${BRAND.businessData.phone}`} className="hover:text-brand-primary">
                          {BRAND.businessData.phone}
                        </a>
                      </p>
                      <p className="text-sm text-brand-text-muted">
                        Text: {BRAND.businessData.textPhone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary} className="mt-1 flex-shrink-0">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <p className="font-bold text-brand-text-heading">Email</p>
                      <p className="text-brand-text-body">
                        <a href={`mailto:${BRAND.businessData.email}`} className="hover:text-brand-primary">
                          {BRAND.businessData.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary} className="mt-1 flex-shrink-0">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <div>
                      <p className="font-bold text-brand-text-heading">Instagram</p>
                      <a
                        href={BRAND.businessData.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-primary hover:underline"
                      >
                        {BRAND.businessData.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick booking card */}
              <div
                className="rounded-[3px] p-6"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                <h3 className="mb-2 text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                  Book Your Appointment
                </h3>
                <p className="mb-4 text-sm text-white/90">
                  Call or text us to book. Walk-ins are always welcome, but calling
                  ahead guarantees your spot.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${BRAND.businessData.phone}`}
                    className="inline-block rounded-[3px] bg-white px-6 py-3 text-center font-bold transition-colors hover:bg-white/90"
                    style={{ color: BRAND.colors.primary }}
                  >
                    Call Now
                  </a>
                  <a
                    href={`sms:${BRAND.businessData.textPhone}`}
                    className="inline-block rounded-[3px] border-2 border-white px-6 py-3 text-center font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Text Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving areas */}
      <section className="bg-brand-bg-warm py-14">
        <div className="mx-auto max-w-[1240px] px-5 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary">
            Proudly Serving
          </p>
          <h2
            className="mb-6 text-2xl font-bold text-brand-text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Hamilton Mountain &amp; Beyond
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Hamilton', 'Ancaster', 'Dundas', 'Stoney Creek', 'Burlington', 'Grimsby'].map(
              (area) => (
                <span
                  key={area}
                  className="rounded-full border border-brand-primary/30 bg-white px-4 py-2 text-sm text-brand-text-body"
                >
                  {area}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
