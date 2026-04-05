import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'Contact Us — Condos & Castles Realty Inc.',
  description: 'Get in touch with Condos and Castles Realty. Visit us at 203 Fern Ave, Toronto or call 416-703-0600. Free consultations available.',
};

export default function ContactPage() {
  const team = BRAND.people.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.hero})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(27,58,92,0.8) 0%, rgba(13,37,63,0.65) 100%)' }} />
        <div className="relative z-10 max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-4" style={{ color: BRAND.colors.secondary }}>
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-white max-w-2xl leading-tight">
            Let&apos;s Talk Real Estate
          </h1>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
                Contact Information
              </p>
              <h2 className="font-heading text-3xl font-semibold mb-8" style={{ color: BRAND.colors.textHeading }}>
                Visit Us or Give Us a Call
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.colors.bgAlt }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold mb-1" style={{ color: BRAND.colors.textHeading }}>
                      Office Address
                    </h3>
                    <p className="font-body text-sm" style={{ color: BRAND.colors.textBody }}>
                      {BRAND.business.address}
                    </p>
                    <p className="font-body text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>
                      High Park / Swansea / Roncesvalles Branch
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.colors.bgAlt }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold mb-1" style={{ color: BRAND.colors.textHeading }}>
                      Phone
                    </h3>
                    <a
                      href={`tel:${BRAND.business.phone}`}
                      className="font-body text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BRAND.colors.bgAlt }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={BRAND.colors.primary}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-semibold mb-1" style={{ color: BRAND.colors.textHeading }}>
                      Email
                    </h3>
                    <a
                      href={`mailto:${BRAND.business.email}`}
                      className="font-body text-sm hover:underline"
                      style={{ color: BRAND.colors.primary }}
                    >
                      {BRAND.business.email}
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={BRAND.business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: BRAND.colors.primary, color: '#FFFFFF' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={BRAND.business.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: BRAND.colors.primary, color: '#FFFFFF' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="p-8"
              style={{
                backgroundColor: BRAND.colors.bgCard,
                borderRadius: BRAND.spacing.radiusCards,
                border: `1px solid ${BRAND.colors.border}`,
              }}
            >
              <h3 className="font-heading text-2xl font-semibold mb-6" style={{ color: BRAND.colors.textHeading }}>
                Send Us a Message
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border outline-none font-body text-sm focus:ring-1"
                      style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border outline-none font-body text-sm focus:ring-1"
                      style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border outline-none font-body text-sm focus:ring-1"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border outline-none font-body text-sm focus:ring-1"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                    I&apos;m Interested In
                  </label>
                  <select
                    className="w-full px-4 py-3 border outline-none font-body text-sm"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                  >
                    <option>Buying a Property</option>
                    <option>Selling a Property</option>
                    <option>Renting</option>
                    <option>Investment Consultation</option>
                    <option>Property Valuation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold mb-1 uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border outline-none font-body text-sm resize-none focus:ring-1"
                    style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusButtons, color: BRAND.colors.textBody }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-body text-sm font-semibold py-4 transition-all hover:opacity-90"
                  style={{
                    backgroundColor: BRAND.colors.secondary,
                    color: BRAND.colors.textHeading,
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

      {/* Team */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
            Our Team
          </p>
          <h2 className="font-heading text-3xl font-semibold mb-12" style={{ color: BRAND.colors.textHeading }}>
            The People Behind Condos &amp; Castles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <div
                key={i}
                className="overflow-hidden text-center"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <div className="aspect-square overflow-hidden" style={{ backgroundColor: BRAND.colors.bgAlt }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.profilePhotoUrl}
                    alt={`${person.name} — ${person.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold" style={{ color: BRAND.colors.textHeading }}>
                    {person.name}
                  </h3>
                  <p className="font-body text-xs mt-1" style={{ color: BRAND.colors.secondary }}>
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3!2d-79.458!3d43.643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35a0f0000001%3A0x0!2s203+Fern+Ave+Toronto+ON+M6R+1K5!5e0!3m2!1sen!2sca!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Condos and Castles Realty Office Location"
        />
      </section>
    </>
  );
}
