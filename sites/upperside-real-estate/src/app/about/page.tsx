import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28 overflow-hidden" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: BRAND.colors.gold }}>
            About Us
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6" style={{ color: BRAND.colors.textLight }}>
            Built on Trust,<br />
            <span style={{ color: BRAND.colors.gold }}>Driven by Results</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Upperside Real Estate Limited is a full-service brokerage headquartered in Vaughan, serving clients across the Greater Toronto Area with integrity, expertise, and dedication.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.gold }}>
                Our Story
              </p>
              <h2 className="font-heading font-bold text-3xl mb-6" style={{ color: BRAND.colors.textHeading }}>
                A Brokerage That Puts People First
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                <p>
                  Founded with a vision to bring world-class real estate services to the GTA, Upperside Real Estate has grown into one of Vaughan&apos;s most dynamic brokerages. With over 70 agents fluent in more than a dozen languages, we serve one of Canada&apos;s most diverse communities.
                </p>
                <p>
                  Our leadership team brings decades of combined experience in residential and commercial real estate. Led by Broker of Record Tirdad Gharachorloo and supported by experienced brokers Art Arinkin, Igor Fishman, and Mike Mayer, every transaction is backed by deep market knowledge.
                </p>
                <p>
                  We believe that buying or selling a home is more than a transaction. It is a milestone that deserves personal attention, honest advice, and unwavering commitment to our clients&apos; best interests.
                </p>
              </div>
            </div>
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage: `url(${BRAND.images.gallery[0].url})`,
                backgroundColor: BRAND.colors.bgAlt,
                borderRadius: BRAND.spacing.radiusImages,
              }}
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] text-center mb-3" style={{ color: BRAND.colors.gold }}>
            Our Values
          </p>
          <h2 className="font-heading font-bold text-3xl text-center mb-12" style={{ color: BRAND.colors.textHeading }}>
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                desc: 'Deep knowledge of Vaughan, Richmond Hill, Thornhill, Toronto, and Mississauga markets. We know every neighbourhood, every school district, every emerging hotspot.',
              },
              {
                title: 'Multilingual Team',
                desc: 'Our 70+ agents collectively speak over a dozen languages — English, Russian, Ukrainian, Spanish, Farsi, Hebrew, Mandarin, and more. Everyone feels at home.',
              },
              {
                title: 'Full-Service Support',
                desc: 'From market evaluation to closing day and beyond — we handle residential, commercial, pre-construction, rentals, and investment properties under one roof.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8"
                style={{
                  backgroundColor: BRAND.colors.bgMain,
                  borderRadius: BRAND.spacing.radiusCards,
                  borderTop: `4px solid ${BRAND.colors.gold}`,
                }}
              >
                <h3 className="font-heading font-semibold text-lg mb-3" style={{ color: BRAND.colors.textHeading }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.gold }}>
            Areas We Serve
          </p>
          <h2 className="font-heading font-bold text-3xl mb-12" style={{ color: BRAND.colors.textHeading }}>
            Across the Greater Toronto Area
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Vaughan', 'Richmond Hill', 'Thornhill', 'Toronto', 'Mississauga', 'Markham', 'Brampton', 'Newmarket'].map((area) => (
              <span
                key={area}
                className="px-6 py-3 text-sm font-heading font-medium"
                style={{
                  border: `2px solid ${BRAND.colors.gold}`,
                  borderRadius: BRAND.spacing.radiusButtons,
                  color: BRAND.colors.textHeading,
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6" style={{ color: BRAND.colors.textLight }}>
            Ready to Work With the Best?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Connect with one of our 70+ agents and experience the Upperside difference.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
            style={{
              backgroundColor: BRAND.colors.gold,
              color: BRAND.colors.textLight,
              borderRadius: BRAND.spacing.radiusButtons,
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
