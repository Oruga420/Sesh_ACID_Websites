import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'About Randy Selzer — 30+ Years in Mississauga Real Estate',
  description: 'Learn about Randy Selzer, a Platinum award-winning REALTOR with over 30 years serving Mississauga, Oakville, and the GTA. Podcast host, market expert, trusted advisor.',
};

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">About</span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brand-textHeading mt-3 mb-6">
            Three Decades of Helping<br />Families Find Home
          </h1>
          <p className="font-body text-lg text-brand-textBody leading-relaxed max-w-2xl">
            Randy Selzer has been a trusted name in Mississauga real estate since 1993. Originally from Regina, Saskatchewan, he relocated to the Toronto area in 1976 and has called Mississauga home ever since.
          </p>
        </div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-10"
                style={{ backgroundColor: BRAND.colors.primary }}
              />
              <Image
                src={BRAND.people[0].profilePhotoUrl}
                alt="Randy Selzer — Platinum Award-Winning REALTOR"
                width={500}
                height={600}
                className="relative z-10 rounded-2xl object-cover w-full shadow-lg"
              />
              <div
                className="relative z-10 -mt-6 mx-6 p-4 rounded-card shadow-lg text-center"
                style={{ backgroundColor: BRAND.colors.bgCard }}
              >
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill={BRAND.colors.secondary} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-sm font-semibold text-brand-textHeading">Platinum Award Winner</p>
                <p className="font-body text-xs text-brand-textMuted">5.0 on Google &middot; Since 1993</p>
              </div>
            </div>

            {/* Story */}
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">My Story</span>
              <h2 className="font-heading text-3xl font-semibold text-brand-textHeading mt-3 mb-6">
                From the Prairies to Mississauga&apos;s Leading REALTOR
              </h2>
              <div className="space-y-5 font-body text-brand-textBody leading-relaxed">
                <p>
                  Born and raised in Regina, Saskatchewan, Randy Selzer moved to the Toronto area in 1976. Having lived in Toronto, Mississauga, and Oakville, he developed an intimate understanding of what makes each community unique — and what homebuyers are truly looking for.
                </p>
                <p>
                  Since launching his real estate career in 1993, Randy has built a reputation for world-class service that is both friendly and efficient. His approach is simple: listen carefully, provide honest market analysis, and work tirelessly to achieve the best outcome for every client — whether buying a first home, selling a family property, or building an investment portfolio.
                </p>
                <p>
                  In 2019, Randy launched the <strong>Randy Selzer Real Estate Podcast</strong>, drawing on his decades of market experience to offer insider knowledge to homebuyers and sellers across the GTA. With 73 episodes and over 33,900 downloads, the podcast has been ranked in the <strong>top 25 real estate podcasts in Toronto</strong> and the <strong>top 70 in Canada</strong>.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: 'Years in Real Estate', value: '30+' },
                  { label: 'Podcast Episodes', value: '73' },
                  { label: 'Google Rating', value: '5.0' },
                  { label: 'Podcast Downloads', value: '33,900+' },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-card border border-brand-border text-center">
                    <p className="font-heading text-2xl font-bold" style={{ color: BRAND.colors.primary }}>{stat.value}</p>
                    <p className="font-body text-xs text-brand-textMuted uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Memberships */}
              <div className="mt-8 flex flex-wrap gap-3">
                {BRAND.business.memberships.map((m) => (
                  <span
                    key={m}
                    className="px-4 py-2 rounded-full font-body text-xs font-semibold border"
                    style={{ borderColor: BRAND.colors.border, color: BRAND.colors.textBody }}
                  >
                    {m}
                  </span>
                ))}
                <span
                  className="px-4 py-2 rounded-full font-body text-xs font-semibold"
                  style={{ backgroundColor: `${BRAND.colors.secondary}15`, color: BRAND.colors.secondary, border: `1px solid ${BRAND.colors.secondary}30` }}
                >
                  Platinum Award Winner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="font-body text-white/80 mb-8 max-w-lg mx-auto">
            Ready to experience the difference that 30 years of market expertise can make? Reach out today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn font-body font-bold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.secondary, color: BRAND.colors.bgDark }}
          >
            Contact Randy
          </Link>
        </div>
      </section>
    </>
  );
}
