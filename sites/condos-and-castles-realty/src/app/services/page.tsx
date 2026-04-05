import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services — Condos & Castles Realty Inc.',
  description: 'Comprehensive real estate services: buying, selling, renting, investment, cottage sales, and more. In-house legal and mortgage support included.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Buying Your Home',
      desc: 'Looking for the perfect downtown condo or family home? Our team provides expert guidance from the first viewing to closing day. With access to thousands of properties through the MLS and deep knowledge of every downtown neighbourhood, we help you find a home that fits your lifestyle and budget.',
      features: ['Personalized property matching', 'MLS access to thousands of listings', 'Neighbourhood expertise', 'Negotiation strategy', 'In-house lawyer for closing'],
    },
    {
      title: 'Selling Your Property',
      desc: 'Maximize your property\'s value with our strategic approach to selling. We combine professional staging advice, targeted marketing, and our extensive network of qualified buyers to achieve the best possible outcome in Toronto\'s competitive market.',
      features: ['Market valuation analysis', 'Professional photography & virtual tours', 'Strategic pricing', 'Open house management', 'Negotiation to maximize value'],
    },
    {
      title: 'Renting & Leasing',
      desc: 'Whether you\'re a landlord seeking reliable tenants or a renter searching for the right space, our team handles every detail. From lease agreements to tenant screening, we make the rental process smooth and stress-free.',
      features: ['Tenant screening & background checks', 'Lease preparation', 'Property showings', 'Rent collection support', 'Landlord-tenant mediation'],
    },
    {
      title: 'Investment Services',
      desc: 'Toronto real estate is one of Canada\'s strongest investment vehicles. Our team helps investors identify high-potential properties, analyze market trends, and build portfolios that generate consistent returns.',
      features: ['Market analysis & trending areas', 'ROI projections', 'Portfolio strategy', 'Property management referrals', 'International investor support'],
    },
    {
      title: 'Cottage & Waterfront',
      desc: 'Through our Georgian Bay branch in Port McNicoll, we specialize in waterfront properties perfect for weekend retreats or retirement living. Escape the city without leaving the expertise you trust.',
      features: ['Georgian Bay waterfront listings', 'Seasonal property expertise', 'Waterfront property inspection guidance', 'Cottage country market knowledge'],
    },
    {
      title: 'In-House Legal & Mortgage',
      desc: 'Our one-stop-shop model means you never have to coordinate between your agent, lawyer, and bank. With an in-house barrister and mortgage broker, your entire transaction is managed seamlessly under one roof.',
      features: ['In-house lawyer (J.D. Barrister & Solicitor)', 'In-house mortgage broker', 'Streamlined closing process', 'No referral coordination needed'],
    },
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
            Our Services
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-white max-w-2xl leading-tight">
            Everything You Need, Under One Roof
          </h1>
        </div>
      </section>

      {/* Services — editorial list */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-0">
            {services.map((service, i) => (
              <div
                key={i}
                className="py-12 border-b last:border-b-0"
                style={{ borderColor: BRAND.colors.border }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <span
                      className="font-body text-xs uppercase tracking-[0.3em]"
                      style={{ color: BRAND.colors.secondary }}
                    >
                      0{i + 1}
                    </span>
                    <h2
                      className="font-heading text-2xl md:text-3xl font-semibold mt-2 mb-4"
                      style={{ color: BRAND.colors.textHeading }}
                    >
                      {service.title}
                    </h2>
                    <p className="font-body leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                      {service.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span style={{ color: BRAND.colors.accent }} className="mt-0.5 font-bold">&#10003;</span>
                          <span className="font-body text-sm" style={{ color: BRAND.colors.textBody }}>
                            {f}
                          </span>
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

      {/* Areas Served */}
      <section className="py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <p className="font-body text-xs uppercase tracking-[0.3em] mb-3" style={{ color: BRAND.colors.secondary }}>
            Our Territory
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-8" style={{ color: BRAND.colors.textHeading }}>
            Neighbourhoods We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'King West Village',
              'Liberty Village',
              'Queen West',
              'Entertainment District',
              'Corktown',
              'Distillery District',
              'High Park',
              'Roncesvalles',
              'Parkdale',
              'The Annex',
              'The Beaches',
              'Leslieville',
              'Bloor West Village',
              'Mimico',
              'The Kingsway',
              'Georgian Bay',
            ].map((area) => (
              <div
                key={area}
                className="p-4 text-center font-body text-sm"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                  color: BRAND.colors.textBody,
                }}
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Let&apos;s Get Started
          </h2>
          <p className="font-body text-white/70 max-w-lg mx-auto mb-8">
            Ready to buy, sell, or invest? Schedule a free consultation with our team.
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
            Schedule a Consultation &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
