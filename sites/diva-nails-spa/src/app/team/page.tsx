import { BRAND } from '@/lib/brand-tokens';

export default function TeamPage() {
  const team = BRAND.people;

  const testimonials = [
    {
      text: 'This was a glorious experience! The place is super clean! The staff is so sweet and accommodating! What a relaxing time.',
      source: 'Dash Booking Review',
    },
    {
      text: 'Came in for the 60 Minute Headspa with Candi. I caught myself dozing off because it was that relaxing. A mini mask and shoulder massage was an added bonus.',
      source: 'Dash Booking Review',
    },
    {
      text: 'Nice and clean, service was good. Overall a good experience — the staff were friendly and professional.',
      source: 'Dash Booking Review',
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
            Our Team
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
            The Artists Behind Your Look
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: BRAND.colors.textBody }}>
            Our team of skilled technicians brings years of experience and genuine care to
            every service. Each appointment is personal — because your beauty should be too.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgMain,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person) => (
              <div
                key={person.name}
                className="card-hover text-center p-8"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 20px rgba(61,46,42,0.08)',
                }}
              >
                {/* Initials Avatar — no photos available, brand-color background */}
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.colors.primary}, ${BRAND.colors.accent})`,
                  }}
                >
                  <span
                    className="font-heading text-3xl"
                    style={{ color: '#FFFFFF', fontWeight: 600 }}
                  >
                    {person.name.charAt(0)}
                  </span>
                </div>

                <h3
                  className="font-heading text-xl mb-1"
                  style={{ color: BRAND.colors.textHeading, fontWeight: 600 }}
                >
                  {person.name}
                </h3>
                <p
                  className="section-label text-[11px] mb-4"
                  style={{ color: BRAND.colors.primary }}
                >
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textMuted }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials — Contrast Section */}
      <section
        style={{
          backgroundColor: BRAND.colors.bgDark,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3" style={{ color: BRAND.colors.accent }}>
              What Clients Say
            </p>
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 500,
                color: BRAND.colors.textLight,
              }}
            >
              Real Reviews, Real Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6"
                style={{
                  backgroundColor: 'rgba(212,160,185,0.08)',
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid rgba(212,160,185,0.15)`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill={BRAND.colors.accent}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-4 italic"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>
                  — {t.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team / Booking CTA */}
      <section
        className="text-center"
        style={{
          backgroundColor: BRAND.colors.bgMain,
          padding: `${BRAND.spacing.sectionPadding} 0`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2
            className="font-heading mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 500,
              color: BRAND.colors.textHeading,
            }}
          >
            Book With Your Favourite Technician
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: BRAND.colors.textMuted }}>
            Choose your preferred artist when you book online. First time? Any of our team
            will make you feel right at home.
          </p>
          <a
            href={BRAND.business.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.primary,
              color: '#FFFFFF',
              borderRadius: BRAND.spacing.radiusButtons,
              padding: '14px 36px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(212,160,185,0.3)',
            }}
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  );
}
