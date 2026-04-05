import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

export const metadata = {
  title: 'About Us — Condos & Castles Realty Inc.',
  description: 'Learn about Toronto\'s original independent boutique brokerage, established in King West Village since 1999. A family tradition of real estate since 1402.',
};

export default function AboutPage() {
  const milestones = [
    { year: '1402', label: 'Family land ownership tradition begins in Europe' },
    { year: '1985', label: 'Broker of Record enters Toronto real estate market' },
    { year: '1999', label: 'Condos and Castles Realty founded — first brokerage in King West' },
    { year: '2004', label: 'Second location opens in Corktown/Distillery District' },
    { year: '2005', label: 'One-stop shop model launched: realtor + lawyer + banker' },
    { year: '2015', label: 'Georgian Bay branch opens in Port McNicoll' },
    { year: '2020', label: 'New head office at High Park / Roncesvalles' },
  ];

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
            About Us
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-white max-w-2xl leading-tight">
            King West&apos;s Original Boutique Brokerage
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6" style={{ color: BRAND.colors.textHeading }}>
                Built on Heritage, Driven by Expertise
              </h2>
              <div className="space-y-4 font-body leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                <p>
                  Condos and Castles Realty was founded in 1999 by Paul Raszewski, who has been active in the Toronto real estate market since 1985. What started as the first brokerage in King West Village has grown into a trusted, family-run boutique that serves downtown Toronto&apos;s most sought-after neighbourhoods.
                </p>
                <p>
                  Unlike franchise operations, we remain proudly independent. Every client gets personal attention from a team that genuinely knows the local market — from the cobblestones of the Distillery District to the tree-lined streets of High Park.
                </p>
                <p>
                  Our one-stop-shop model means you get realtor, lawyer, and mortgage services under one roof. No referral runaround, no coordination headaches — just a seamless experience from offer to closing.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden" style={{ borderRadius: BRAND.spacing.radiusCards }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="http://www.condosandcastles.com/wp-content/uploads/2008/07/raszewski_0207w300h240.jpg"
                  alt="Paul Raszewski — Founder and Broker of Record"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-6" style={{ backgroundColor: BRAND.colors.bgAlt, borderRadius: BRAND.spacing.radiusCards }}>
                <h3 className="font-heading text-xl font-semibold mb-2" style={{ color: BRAND.colors.textHeading }}>
                  Paul Raszewski
                </h3>
                <p className="font-body text-sm mb-1" style={{ color: BRAND.colors.secondary }}>
                  President &amp; Broker of Record
                </p>
                <p className="font-body text-sm" style={{ color: BRAND.colors.textMuted }}>
                  MVA, ABR, CERC Relocation Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
            What Sets Us Apart
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-12" style={{ color: BRAND.colors.textHeading }}>
            The Condos &amp; Castles Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'One-Stop Shop', desc: 'Realtor, lawyer, and mortgage broker all under one roof. Your entire transaction handled seamlessly from start to finish.' },
              { title: 'Independent & Boutique', desc: 'Not a franchise. Every client gets personal attention from our principal broker, not a junior agent you\'ve never met.' },
              { title: 'Multilingual Team', desc: 'Our team speaks over 15 languages including English, French, Polish, Russian, Arabic, Italian, Mandarin, and many more.' },
              { title: 'Green Leadership', desc: 'One of Toronto\'s greenest brokerages — 100% LED lighting, 100% recycling, and the first brokerage to drive and advertise on an electric vehicle.' },
            ].map((val) => (
              <div
                key={val.title}
                className="p-8"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <h3 className="font-heading text-xl font-semibold mb-3" style={{ color: BRAND.colors.textHeading }}>
                  {val.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
            Our Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-12">
            Milestones
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-8 items-start py-6 border-b border-white/10 last:border-b-0">
                <span className="font-heading text-2xl font-bold min-w-[80px]" style={{ color: BRAND.colors.secondary }}>
                  {m.year}
                </span>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Crest */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="http://www.condosandcastles.com/wp-content/uploads/2011/02/herb2.jpg"
              alt="Family heritage crest — tradition since 1402"
              className="w-48 h-auto mx-auto"
            />
          </div>
          <h2 className="font-heading text-2xl font-semibold mb-3" style={{ color: BRAND.colors.textHeading }}>
            Proud Family Tradition Since 1402
          </h2>
          <p className="font-body max-w-lg mx-auto mb-8" style={{ color: BRAND.colors.textMuted }}>
            Continuing a 600-year heritage of land ownership and management that spans from Europe to downtown Toronto.
          </p>
          <Link
            href="/contact"
            className="inline-block font-body text-sm font-semibold px-8 py-4 transition-all hover:opacity-90"
            style={{
              backgroundColor: BRAND.colors.secondary,
              color: BRAND.colors.textHeading,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Work With Us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
