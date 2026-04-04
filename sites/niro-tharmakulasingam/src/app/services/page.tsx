import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const services = [
  {
    title: 'Home Buying',
    description: 'Whether you are a first-time buyer or an experienced investor, Niro provides expert guidance through every step of the purchasing process. From property search to closing, get personalized attention and market insights that help you make confident decisions.',
    features: ['First-time buyer support', 'Property search & viewings', 'Negotiation expertise', 'Closing coordination'],
    image: BRAND.images.gallery[2].url,
  },
  {
    title: 'Home Selling',
    description: 'Maximize your property\'s value with strategic marketing, professional staging, and expert negotiation. Niro leverages RE/MAX\'s international network and digital marketing channels to ensure maximum exposure for your listing.',
    features: ['Comparative market analysis', 'Professional home staging', 'MLS & social media marketing', 'Strategic pricing & negotiation'],
    image: BRAND.images.gallery[3].url,
  },
  {
    title: 'Investment Properties',
    description: 'Build wealth through real estate with data-driven investment analysis. Niro helps identify high-potential properties across the GTA, providing market research and financial projections to support your investment decisions.',
    features: ['Investment property analysis', 'Market trend research', 'ROI projections', 'Portfolio strategy'],
    image: BRAND.images.gallery[1].url,
  },
  {
    title: 'Home Staging',
    description: 'Transform your property for maximum appeal without the cost of a full renovation. Niro connects sellers with professional staging services that make homes look their absolute best during the sales period.',
    features: ['Full-range staging services', 'Professional photography', 'Virtual staging options', 'Cost-effective solutions'],
    image: BRAND.images.staging[0].url,
  },
  {
    title: 'Mortgage Assistance',
    description: 'Navigate the mortgage process with confidence. Niro\'s team of mortgage brokers provides free consultations, helping you understand your options for purchasing, refinancing, or second mortgages.',
    features: ['Free mortgage consultation', 'Refinancing guidance', 'Second mortgage support', 'CMHC insurance advice'],
    image: BRAND.images.gallery[4].url,
  },
  {
    title: 'Home Evaluation',
    description: 'Know your property\'s true market value with a comprehensive comparative market analysis. Niro provides detailed reports using current market data to help you make informed decisions about selling or refinancing.',
    features: ['Free home evaluation', 'Comparative market analysis', 'Neighborhood insights', 'Current market data'],
    image: BRAND.images.gallery[0].url,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-24" style={{ backgroundColor: BRAND.colors.bgHero }}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${BRAND.images.gallery[1].url})` }}
        />
        <div className="relative z-10 mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <span
            className="inline-block text-xs mb-3 tracking-widest"
            style={{ color: BRAND.colors.secondary, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
          >
            Our Services
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}>
            Expert Real Estate Services
          </h1>
          <p className="mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Comprehensive real estate solutions for buyers, sellers, and investors across the Greater Toronto Area.
          </p>
        </div>
      </section>

      {/* Services List — Editorial Style */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-lg overflow-hidden shadow-md" style={{ borderRadius: BRAND.spacing.radiusImages }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span
                    className="inline-block text-xs mb-2 tracking-widest"
                    style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }}
                  >
                    0{index + 1}
                  </span>
                  <h2
                    className="mb-4"
                    style={{ fontSize: '1.75rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}
                  >
                    {service.title}
                  </h2>
                  <p className="mb-6" style={{ color: BRAND.colors.textBody, lineHeight: 1.8 }}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm" style={{ color: BRAND.colors.textBody }}>
                        <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: `${BRAND.colors.accent}15`, color: BRAND.colors.accent }}>
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: `${BRAND.spacing.sectionPadding} 0` }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs mb-3 tracking-widest"
              style={{ color: BRAND.colors.accent, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em' }}
            >
              Resources
            </span>
            <h2 style={{ fontSize: '2rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textHeading }}>
              Helpful Tools &amp; Guides
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Mortgage Calculator', desc: 'Estimate your monthly payments based on property price, down payment, and interest rate.' },
              { title: 'Affordability Calculator', desc: 'Find out how much home you can afford based on your income and expenses.' },
              { title: 'CMHC Calculator', desc: 'Calculate your CMHC insurance premium for down payments under 20%.' },
              { title: 'Land Transfer Calculator', desc: 'Estimate your Ontario land transfer tax based on purchase price.' },
              { title: 'Buyer\'s Guide', desc: 'Step-by-step guide for first-time homebuyers navigating the Toronto market.' },
              { title: 'Seller\'s Guide', desc: 'Expert tips and strategies for preparing your home for sale and maximizing value.' },
            ].map((tool) => (
              <div
                key={tool.title}
                className="p-6 rounded-lg"
                style={{ backgroundColor: BRAND.colors.bgCard, border: `1px solid ${BRAND.colors.border}`, borderRadius: BRAND.spacing.radiusCards }}
              >
                <h3 className="text-lg mb-2" style={{ fontFamily: BRAND.fonts.heading, fontWeight: 600, color: BRAND.colors.textHeading }}>
                  {tool.title}
                </h3>
                <p className="text-sm" style={{ color: BRAND.colors.textBody, lineHeight: 1.6 }}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.bgHero} 100%)`, padding: '80px 24px' }}>
        <div className="mx-auto" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4" style={{ fontSize: '2rem', fontFamily: BRAND.fonts.heading, fontWeight: 700, color: BRAND.colors.textLight }}>
            Ready to Get Started?
          </h2>
          <p className="mb-8" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
            Book a free consultation with Niro to discuss your real estate needs.
          </p>
          <Link
            href="/contact"
            className="inline-block text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.secondary, color: BRAND.colors.textLight, fontFamily: BRAND.fonts.heading, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '14px 32px', borderRadius: BRAND.spacing.radiusButtons }}
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
