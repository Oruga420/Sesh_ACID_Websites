import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '320px',
          backgroundImage: `linear-gradient(135deg, rgba(13,33,55,0.9) 0%, rgba(27,77,110,0.8) 100%), url(${BRAND.images.atmosphere[0].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '80px 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.accent }}>
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Your Partners in Alternative Lending
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.secondary }}>
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                Everyone Deserves a Path to Homeownership
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                <p>
                  Any Income Any Credit Mortgages was founded on a simple principle: your financial past shouldn&apos;t lock you out of your future. We believe that everyone, regardless of their credit history or income situation, deserves access to professional mortgage guidance.
                </p>
                <p>
                  Based in Brampton and serving all of Ontario, we specialize in the mortgage solutions that traditional banks overlook. Our team works with an extensive network of private lenders, alternative financial institutions, and specialized programs designed for people in challenging financial situations.
                </p>
                <p>
                  Whether you are self-employed with non-traditional income documentation, new to Canada building your credit profile, or recovering from a consumer proposal or bankruptcy — we have seen it all and helped people just like you achieve their homeownership goals.
                </p>
              </div>
            </div>
            <div
              className="relative rounded overflow-hidden"
              style={{
                borderRadius: BRAND.spacing.radiusImages,
                aspectRatio: '4/3',
                backgroundImage: `url(${BRAND.images.gallery[0].url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: BRAND.colors.bgAlt,
              }}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: BRAND.colors.secondary }}>
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Meet the People Behind Your Approval
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {BRAND.people.map((person) => (
              <div
                key={person.name}
                className="p-8 text-center transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}
              >
                {/* Initials Avatar — no public photos available */}
                <div
                  className="inline-flex items-center justify-center rounded-full mb-5"
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: BRAND.colors.primary,
                  }}
                >
                  <span className="text-2xl font-bold" style={{ color: BRAND.colors.textLight, fontFamily: 'var(--font-heading)' }}>
                    {person.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {person.name}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: BRAND.colors.primary }}>
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: BRAND.colors.bgCard, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: BRAND.colors.secondary }}>
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'No Judgment', description: 'We never judge your financial situation. We only look for solutions. Your past doesn\'t define what\'s possible.' },
              { title: 'Full Transparency', description: 'Every fee, rate, and term is explained upfront. No hidden costs, no surprises at closing. You\'ll always know where you stand.' },
              { title: 'Client First', description: 'We don\'t push products — we find the right fit. Our success is measured by your satisfaction and long-term financial health.' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6">
                <div
                  className="inline-flex items-center justify-center rounded-full mb-4"
                  style={{ width: 48, height: 48, backgroundColor: BRAND.colors.bgAlt }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.secondary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.secondary} 100%)`, padding: '64px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '700px', padding: '0 24px' }}>
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Let&apos;s Talk About Your Situation
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            No obligation, no pressure. Just a conversation about what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.accent, color: BRAND.colors.bgDark, borderRadius: BRAND.spacing.radiusButtons }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
