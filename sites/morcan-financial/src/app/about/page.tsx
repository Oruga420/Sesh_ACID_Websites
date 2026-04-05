import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const milestones = [
  { year: '1991', event: 'Joe Taibi begins his career in the mortgage industry' },
  { year: '1997', event: 'MorCan Financial Inc. is founded in Woodbridge, Ontario' },
  { year: '2003', event: 'Kerryon Nugent and Marcus Tzaferis join as team leaders' },
  { year: '2005', event: 'John Benstead joins the Morcan family' },
  { year: '2025', event: '28 years strong — serving the GTA with access to 50+ lenders' },
];

const values = [
  {
    title: 'Family Atmosphere',
    description: 'Every client and agent is part of the MorCan family. Our team stays because they belong, not because they have to.',
  },
  {
    title: 'Integrity First',
    description: 'We work for you, not the banks. Every recommendation is made with your best financial interest in mind.',
  },
  {
    title: 'Expertise & Education',
    description: 'Joe Taibi brought his teaching background from Seneca College into the brokerage — empowering agents and clients alike with knowledge.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: BRAND.colors.primary }}>
            About MorCan Financial
          </p>
          <h1 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Almost Three Decades of Mortgage Expertise
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: BRAND.colors.textBody }}>
            Founded in 1997 by Joe Taibi, MorCan Financial has grown into one of Vaughan&apos;s most trusted mortgage brokerages.
            With access to over 50 lending institutions, we deliver mortgage solutions that the banks simply can&apos;t match.
          </p>
        </div>
      </section>

      {/* Joe Taibi — Split section */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Joe initials block since no verified photo */}
              <div
                className="w-48 h-48 rounded-lg flex items-center justify-center text-6xl font-bold mb-8"
                style={{
                  backgroundColor: BRAND.colors.bgDark,
                  color: BRAND.colors.textLight,
                  fontFamily: 'var(--font-heading)',
                  borderRadius: BRAND.spacing.radiusImages,
                }}
              >
                JT
              </div>
              <h2 className="text-3xl lg:text-4xl mb-2" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                Joe Taibi
              </h2>
              <p className="text-sm font-semibold mb-6" style={{ color: BRAND.colors.primary }}>
                President &amp; Principal Broker &middot; FSRA #{BRAND.business.fsra}
              </p>
              <p className="mb-4" style={{ color: BRAND.colors.textBody }}>
                Before founding MorCan Financial, Joe Taibi served as a Professor at Seneca College and as a Loans Manager at TD Bank Group.
                This unique combination of education and banking experience gives him an unmatched perspective in the mortgage industry.
              </p>
              <p style={{ color: BRAND.colors.textBody }}>
                Since 1991, Joe has been helping Ontario families navigate one of the most important financial decisions of their lives.
                His philosophy is simple: work for the client, shop the entire market, and find the mortgage that truly fits.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
                alt="Modern residential home — the kind of dream MorCan helps realize"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-center" style={{ color: BRAND.colors.primary }}>
            Our Values
          </p>
          <h2 className="text-3xl lg:text-4xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            What Makes MorCan Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-white text-xl font-bold"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  ✦
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-center" style={{ color: BRAND.colors.primary }}>
            Our History
          </p>
          <h2 className="text-3xl lg:text-4xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            The MorCan Timeline
          </h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <span
                  className="text-2xl font-bold shrink-0 w-20 text-right"
                  style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.primary }}
                >
                  {m.year}
                </span>
                <div className="pt-1 border-l-2 pl-6" style={{ borderColor: BRAND.colors.border }}>
                  <p style={{ color: BRAND.colors.textBody }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Join the MorCan Family
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
            Whether you&apos;re a homebuyer or a mortgage professional, we have a place for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold transition-all hover:shadow-lg"
            style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.textLight, borderRadius: BRAND.spacing.radiusButtons }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
