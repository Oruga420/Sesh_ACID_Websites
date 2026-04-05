import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const services = [
  {
    title: 'Residential Property Sales',
    description: 'Whether you are purchasing your first condo or upgrading to a luxury estate, our agents have the market knowledge and negotiation expertise to secure the best outcome. We cover detached homes, townhouses, condos, and semi-detached properties across the GTA.',
    features: ['Free market evaluation', 'Professional photography and staging advice', 'MLS listing management', 'Negotiation and offer strategy'],
  },
  {
    title: 'Commercial Real Estate',
    description: 'From office leases to retail storefronts and multi-unit investment properties, our commercial division handles transactions of every scale. Our brokers understand zoning, ROI analysis, and commercial financing.',
    features: ['Office and retail leasing', 'Investment property analysis', 'Commercial land acquisitions', 'Tenant representation'],
  },
  {
    title: 'Pre-Construction Condos',
    description: 'Get exclusive first access to the latest condo developments in the GTA. We maintain relationships with top developers and can secure units at early-access pricing before public launch.',
    features: ['Early access to new developments', 'Developer relationship network', 'Assignment sales guidance', 'Investment projections and ROI analysis'],
  },
  {
    title: 'Home Evaluation & Market Analysis',
    description: 'Wondering what your property is worth? Our complimentary market evaluation gives you an accurate, data-driven assessment based on recent comparable sales, neighbourhood trends, and current market conditions.',
    features: ['Complimentary home evaluation', 'Comparable market analysis', 'Neighbourhood trend reports', 'Pricing strategy consultation'],
  },
  {
    title: 'Buyer Services',
    description: 'Our buyer-focused services include daily email alerts for new listings matching your criteria, price drop notifications, foreclosure opportunities, and guidance through every step from pre-approval to closing.',
    features: ['Custom listing alerts', 'Price drop notifications', 'Power of sale opportunities', 'Mortgage pre-approval guidance'],
  },
  {
    title: 'Seller Services',
    description: 'Selling your home starts with strategy. From pricing and presentation to marketing and negotiation, we position your property to attract maximum interest and top-dollar offers.',
    features: ['Strategic pricing analysis', 'Professional listing marketing', 'Open house coordination', 'Daily seller market alerts'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-28" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: BRAND.colors.gold }}>
            Our Services
          </p>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6" style={{ color: BRAND.colors.textLight }}>
            Comprehensive Real Estate<br />
            <span style={{ color: BRAND.colors.gold }}>Solutions for the GTA</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            From residential sales to commercial investments and pre-construction opportunities — Upperside Real Estate delivers expert guidance at every stage.
          </p>
        </div>
      </section>

      {/* SERVICES LIST — Editorial Style */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="py-12"
                style={{
                  borderBottom: index < services.length - 1 ? `1px solid ${BRAND.colors.border}` : 'none',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-1">
                    <span
                      className="font-heading font-bold text-4xl"
                      style={{ color: BRAND.colors.gold, opacity: 0.4 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h2
                      className="font-heading font-bold text-2xl mb-4"
                      style={{ color: BRAND.colors.textHeading }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: BRAND.colors.textBody }}>
                          <span className="mt-0.5 flex-shrink-0" style={{ color: BRAND.colors.gold }}>&#10003;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.gold }}>
            Why Upperside
          </p>
          <h2 className="font-heading font-bold text-3xl mb-12" style={{ color: BRAND.colors.textHeading }}>
            The Upperside Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '70+', label: 'Licensed Agents' },
              { number: '20+', label: 'Years Experience' },
              { number: '12+', label: 'Languages Spoken' },
              { number: '5', label: 'GTA Regions Covered' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6"
                style={{
                  backgroundColor: BRAND.colors.bgMain,
                  borderRadius: BRAND.spacing.radiusCards,
                  borderBottom: `3px solid ${BRAND.colors.gold}`,
                }}
              >
                <p className="font-heading font-extrabold text-3xl mb-2" style={{ color: BRAND.colors.gold }}>
                  {stat.number}
                </p>
                <p className="text-sm font-heading font-medium uppercase tracking-wider" style={{ color: BRAND.colors.textMuted }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.dark }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6" style={{ color: BRAND.colors.textLight }}>
            Let Us Help You Make the Right Move
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Reach out today for a complimentary consultation or home evaluation.
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
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
