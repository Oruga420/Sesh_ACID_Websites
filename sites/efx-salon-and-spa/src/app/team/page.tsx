import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-20 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, #6b1a6b 100%)`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
            The Faces Behind Your Look
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Our Team
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            A team united by passion, powered by decades of combined experience,
            and dedicated to making you feel your absolute best.
          </p>
        </div>
      </section>

      {/* Owner Feature — Full-width editorial */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgWarm }}>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Owner initials on brand purple — large editorial */}
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center mx-auto md:mx-0"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                <span className="font-heading text-7xl font-bold text-white">L</span>
              </div>
            </div>
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
                Owner &amp; Founder
              </p>
              <h2 className="font-heading text-4xl font-bold text-brand-textHeading mb-4">
                Lisa
              </h2>
              <p className="font-body text-lg text-brand-textBody leading-relaxed mb-4">
                With 36 years in the beauty industry, Lisa built EFX Salon and Spa on
                a foundation of excellence, community, and care. She believes that
                strong leadership and a united team create the best client experiences.
              </p>
              <p className="font-body text-base text-brand-textBody leading-relaxed mb-6">
                A champion of clean beauty, Lisa hand-selects every product in the salon.
                From Eufora and Flow&apos;s sustainable formulations to Kerastase&apos;s
                professional treatments, every bottle on the shelf meets her standard
                of being safe for both stylists and clients.
              </p>
              <blockquote
                className="border-l-4 pl-5 italic font-body text-brand-textMuted"
                style={{ borderColor: BRAND.colors.secondary }}
              >
                &ldquo;I believe as a business leader, and it takes a strong team to
                achieve success.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Stylists */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
            Senior Stylists
          </p>
          <h2 className="font-heading text-3xl font-semibold text-brand-textHeading mb-12">
            Decades of Artistry
          </h2>

          <div className="space-y-0">
            {BRAND.people
              .filter((p) => p.role.includes('Senior'))
              .map((person, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-6 py-10 border-b border-brand-textMuted/15"
                >
                  {/* Initials */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: BRAND.colors.primary }}
                    >
                      <span className="font-heading text-2xl font-bold text-white">
                        {person.name[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-3">
                      <h3 className="font-heading text-2xl font-semibold text-brand-textHeading">
                        {person.name}
                      </h3>
                      {person.experience && (
                        <span className="font-heading text-xs uppercase tracking-[0.12em] text-brand-secondary">
                          {person.experience}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-base text-brand-textBody leading-relaxed mb-3">
                      {person.bio}
                    </p>
                    {person.specialties && (
                      <div className="flex flex-wrap gap-2">
                        {person.specialties.map((s, j) => (
                          <span
                            key={j}
                            className="font-body text-xs px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: BRAND.colors.bgAlt,
                              color: BRAND.colors.textBody,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                    {person.quote && (
                      <blockquote
                        className="mt-4 border-l-4 pl-4 italic font-body text-sm text-brand-textMuted"
                        style={{ borderColor: BRAND.colors.secondary }}
                      >
                        &ldquo;{person.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Junior Stylists */}
      <section className="py-16" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-heading text-xs uppercase tracking-[0.2em] text-brand-secondary mb-3">
            Rising Talent
          </p>
          <h2 className="font-heading text-2xl font-semibold text-brand-textHeading mb-8">
            The Next Generation
          </h2>

          {BRAND.people
            .filter((p) => !p.role.includes('Senior') && !p.role.includes('Owner'))
            .map((person, i) => (
              <div
                key={i}
                className="flex gap-5 items-start bg-white p-6"
                style={{
                  borderRadius: BRAND.spacing.radiusCards,
                  boxShadow: '0 4px 20px rgba(77, 0, 77, 0.06)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.colors.secondary }}
                >
                  <span className="font-heading text-lg font-bold text-white">
                    {person.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-brand-textHeading">
                    {person.name}
                  </h3>
                  <p className="font-heading text-xs uppercase tracking-[0.1em] text-brand-textMuted mb-2">
                    {person.role} {person.experience ? `\u2022 ${person.experience}` : ''}
                  </p>
                  <p className="font-body text-sm text-brand-textBody leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{
          background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, #6b1a6b 100%)`,
        }}
      >
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Let Our Team Transform Your Look
          </h2>
          <p className="font-body text-base text-white/80 mb-8 max-w-lg mx-auto">
            Each of our stylists brings unique strengths and specialties.
            Find your perfect match.
          </p>
          <Link
            href="/contact"
            className="inline-block font-heading text-sm uppercase tracking-wide px-8 py-4 font-semibold transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.accent,
              borderRadius: BRAND.spacing.radiusButtons,
              color: '#2d1f14',
            }}
          >
            Book With Us
          </Link>
        </div>
      </section>
    </>
  );
}
