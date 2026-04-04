import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24" style={{ backgroundColor: BRAND.colors.bgHero }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${BRAND.images.gallery[5].url})` }}
        />
        <div className="relative z-10 mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="inline-block text-xs mb-3 tracking-widest"
            style={{ color: BRAND.colors.secondary, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            About
          </span>
          <h1
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}
          >
            Meet Niro Tharmakulasingam
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            A dedicated RE/MAX broker serving Scarborough and the Greater Toronto Area with expertise, integrity, and a client-first philosophy.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg" style={{ borderRadius: BRAND.spacing.radiusImages }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={BRAND.people[0].profilePhotoUrl}
                  alt="Niro Tharmakulasingam - RE/MAX Broker"
                  className="w-full h-auto"
                  style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: BRAND.colors.bgAlt, borderRadius: BRAND.spacing.radiusCards }}>
                  <p className="text-2xl font-bold" style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.heading }}>9+</p>
                  <p className="text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>Years Experience</p>
                </div>
                <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: BRAND.colors.bgAlt, borderRadius: BRAND.spacing.radiusCards }}>
                  <p className="text-2xl font-bold" style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.heading }}>13+</p>
                  <p className="text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>Areas Served</p>
                </div>
                <div className="flex-1 p-4 rounded-lg text-center" style={{ backgroundColor: BRAND.colors.bgAlt, borderRadius: BRAND.spacing.radiusCards }}>
                  <p className="text-2xl font-bold" style={{ color: BRAND.colors.primary, fontFamily: BRAND.fonts.heading }}>5.0</p>
                  <p className="text-xs mt-1" style={{ color: BRAND.colors.textMuted }}>Rating</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span
                className="inline-block text-xs mb-3 tracking-widest"
                style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
              >
                The Story
              </span>
              <h2 className="mb-6" style={{ fontSize: '2rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
                Client Focused. Results Driven.
              </h2>
              <div className="space-y-4" style={{ color: BRAND.colors.textBody, lineHeight: 1.8 }}>
                <p>
                  Niro Tharmakulasingam is a respected and award-winning realtor with RE/MAX Community Realty Inc. Brokerage, bringing over 9 years of dedicated experience to the Greater Toronto Area real estate market.
                </p>
                <p>
                  As a full-time broker with specialized training in negotiation, Niro combines deep local market knowledge with a passion for helping clients achieve their real estate goals. Whether guiding first-time homebuyers through their inaugural purchase or helping families find their forever home, his approach is rooted in genuine care.
                </p>
                <p>
                  &ldquo;Treating customers like family is both a guiding principle and a way of life,&rdquo; says Niro. This philosophy drives every interaction — from the initial consultation to handing over the keys. Known for quick response times and efficient transactions, Niro has built a reputation for never giving up until the best results are achieved.
                </p>
                <p>
                  Serving communities across Toronto, Scarborough, Markham, Vaughan, Ajax, Pickering, and beyond, Niro leverages RE/MAX&apos;s 14 offices across the Greater Toronto Area and international marketing network to deliver maximum exposure for every property.
                </p>
              </div>

              {/* Languages */}
              <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: BRAND.colors.bgAlt, borderRadius: BRAND.spacing.radiusCards }}>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: BRAND.fonts.heading, color: BRAND.colors.textHeading }}>
                  Credentials
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: BRAND.colors.textBody }}>
                  <li className="flex items-center gap-2">
                    <span style={{ color: BRAND.colors.accent }}>&#10003;</span>
                    Licensed Real Estate Broker — License #4797081
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: BRAND.colors.accent }}>&#10003;</span>
                    RE/MAX Community Realty Inc. Brokerage
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: BRAND.colors.accent }}>&#10003;</span>
                    Specialized Training in Negotiation
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: BRAND.colors.accent }}>&#10003;</span>
                    Languages: English &amp; Tamil
                  </li>
                  <li className="flex items-center gap-2">
                    <span style={{ color: BRAND.colors.accent }}>&#10003;</span>
                    RE/MAX — Voted Most Trusted in Real Estate (BrandSpark 2017-2025)
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: BRAND.colors.secondary,
                    color: BRAND.colors.textLight,
                    fontFamily: BRAND.fonts.heading,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '14px 32px',
                    borderRadius: BRAND.spacing.radiusButtons,
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs mb-3 tracking-widest"
              style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
            >
              What Clients Say
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
              Client Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: 'By far Niro is the best Professional Realtor in GTA! He works hard for his clients and he never gives up until the best results are achieved.', author: 'Taylor Quinn', location: 'Pickering' },
              { quote: 'Niro was a referral from one of my friends and we found him to be extremely professional and experienced. We chose him to buy and sell our home and had the most amazing experience.', author: 'John McCain', location: 'Scarborough' },
              { quote: 'It was such a pleasure working with Niro, who seems to have all the answers for first time homebuyers. Very helpful and knowledgeable person. Good at negotiating.', author: 'Verified Client', location: 'GTA' },
              { quote: 'Niro truly lives up to his reputation and words. He is very much knowledgeable and experienced.', author: 'Ushananthy A.', location: 'Toronto' },
              { quote: 'Niro provides exceptional professional real estate service to sell our house even in a buyer\'s market.', author: 'Tahir Hussain', location: 'Toronto' },
              { quote: 'Niro is one of the best realtors in the business. He is a very professional and knowledgeable realtor.', author: 'Verified Client', location: 'GTA' },
            ].map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{ backgroundColor: BRAND.colors.bgCard, border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusCards }}
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill={BRAND.colors.secondary}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="mb-4 italic text-sm" style={{ color: BRAND.colors.textBody, lineHeight: 1.7 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold" style={{ color: BRAND.colors.textHeading }}>
                  {t.author}
                </p>
                <p className="text-xs" style={{ color: BRAND.colors.textMuted }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
