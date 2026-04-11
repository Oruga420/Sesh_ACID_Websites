import { BRAND } from '@/lib/brand-tokens';
import { BlurFade } from '@/components/ui/blur-fade';

export default function ContactPage() {
  const days = Object.entries(BRAND.business.hours);

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28"
        style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.primaryDark} 100%)` }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade delay={0.1}>
            <span
              className="block text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: BRAND.colors.gold, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
            >
              Get In Touch
            </span>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textLight }}
            >
              Contact Us
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-lg max-w-2xl text-white/80" style={{ fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
              Walk in anytime or reach out to book your appointment. We&apos;re open 7 days a week with
              complimentary chai waiting for you.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Contact info */}
            <div>
              <BlurFade delay={0.1}>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-8"
                  style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
                >
                  Reach Out
                </h2>
              </BlurFade>

              <div className="space-y-6">
                <BlurFade delay={0.15}>
                  <a
                    href={`tel:${BRAND.business.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-start gap-4 group p-4 rounded-lg transition-colors hover:bg-brand-warm-cream"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND.colors.primary}12`, color: BRAND.colors.primary }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: BRAND.colors.textMuted, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                      >
                        Phone
                      </span>
                      <span
                        className="text-lg font-bold group-hover:text-brand-primary transition-colors"
                        style={{ color: BRAND.colors.textHeading, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
                      >
                        {BRAND.business.phone}
                      </span>
                    </div>
                  </a>
                </BlurFade>

                <BlurFade delay={0.2}>
                  <a
                    href={`https://wa.me/${BRAND.business.whatsapp.replace(/\+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group p-4 rounded-lg transition-colors hover:bg-brand-warm-cream"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-green-50 text-green-600">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: BRAND.colors.textMuted, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                      >
                        WhatsApp
                      </span>
                      <span
                        className="text-lg font-bold group-hover:text-green-600 transition-colors"
                        style={{ color: BRAND.colors.textHeading, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
                      >
                        Message Us
                      </span>
                    </div>
                  </a>
                </BlurFade>

                <BlurFade delay={0.25}>
                  <a
                    href={`mailto:${BRAND.business.email}`}
                    className="flex items-start gap-4 group p-4 rounded-lg transition-colors hover:bg-brand-warm-cream"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND.colors.gold}22`, color: BRAND.colors.gold }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: BRAND.colors.textMuted, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                      >
                        Email
                      </span>
                      <span
                        className="text-base font-bold group-hover:text-brand-primary transition-colors break-all"
                        style={{ color: BRAND.colors.textHeading, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
                      >
                        {BRAND.business.email}
                      </span>
                    </div>
                  </a>
                </BlurFade>

                <BlurFade delay={0.3}>
                  <div className="flex items-start gap-4 p-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND.colors.primary}12`, color: BRAND.colors.primary }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C7.802 0 4 3.403 4 7.602 4 11.8 7.469 16.812 12 24c4.531-7.188 8-12.2 8-16.398C20 3.403 16.199 0 12 0zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
                      </svg>
                    </div>
                    <div>
                      <span
                        className="block text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: BRAND.colors.textMuted, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                      >
                        Address
                      </span>
                      <span className="text-base font-bold block" style={{ color: BRAND.colors.textHeading, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}>
                        {BRAND.business.address}
                      </span>
                      <span className="text-xs" style={{ color: BRAND.colors.textMuted }}>
                        Near Hakka Legend & A1 Bakery
                      </span>
                    </div>
                  </div>
                </BlurFade>

                {/* Social links */}
                <BlurFade delay={0.35}>
                  <div className="flex items-center gap-4 p-4">
                    <a
                      href={BRAND.business.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors hover:bg-pink-50"
                      style={{ backgroundColor: `${BRAND.colors.primary}08`, color: BRAND.colors.primary }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <span className="text-sm" style={{ color: BRAND.colors.textMuted }}>@neelkanthbeautyparlour</span>
                  </div>
                </BlurFade>
              </div>
            </div>

            {/* Right: Hours + Map */}
            <div>
              <BlurFade delay={0.2}>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-8"
                  style={{ fontFamily: `${BRAND.fonts.heading}, ${BRAND.fonts.headingFallback}`, color: BRAND.colors.textHeading }}
                >
                  Hours & Location
                </h2>
              </BlurFade>

              <BlurFade delay={0.25}>
                <div
                  className="rounded-xl p-6 mb-8 shadow-sm"
                  style={{ backgroundColor: BRAND.colors.warmCream, border: `1px solid ${BRAND.colors.border}` }}
                >
                  <h3
                    className="text-sm font-bold uppercase tracking-widest mb-4"
                    style={{ color: BRAND.colors.primary, fontFamily: `${BRAND.fonts.nav}, ${BRAND.fonts.navFallback}` }}
                  >
                    Open 7 Days a Week
                  </h3>
                  <ul className="space-y-3">
                    {days.map(([day, hours]) => (
                      <li
                        key={day}
                        className="flex justify-between text-sm pb-3 border-b last:border-b-0"
                        style={{ borderColor: `${BRAND.colors.border}80`, fontFamily: `${BRAND.fonts.body}, ${BRAND.fonts.bodyFallback}` }}
                      >
                        <span className="capitalize font-semibold" style={{ color: BRAND.colors.textHeading }}>{day}</span>
                        <span style={{ color: BRAND.colors.textBody }}>{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>

              {/* Map embed */}
              <BlurFade delay={0.3}>
                <div className="rounded-xl overflow-hidden shadow-sm" style={{ border: `1px solid ${BRAND.colors.border}` }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5!2d-79.253!3d43.848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNeelkanth+Beauty+Parlour!5e0!3m2!1sen!2sca!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Neelkanth Beauty Parlour location map"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
