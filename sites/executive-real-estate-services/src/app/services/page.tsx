import { BRAND } from '@/lib/brand-tokens';
import Link from 'next/link';

const detailedServices = [
  {
    name: 'Residential Sales',
    description: 'Whether you are a first-time buyer or looking to upgrade, our team brings deep local knowledge of the GTA market to find you the perfect home. From suburban family houses in Brampton to townhomes in Mississauga, we handle every detail from search to closing.',
    features: ['Personalized home search', 'Market analysis & pricing guidance', 'Negotiation expertise', 'Full closing coordination'],
  },
  {
    name: 'Condo Sales',
    description: 'Navigate the dynamic condo market with confidence. We specialize in both pre-construction and resale condos across the GTA, providing comprehensive analysis of building quality, investment potential, and long-term value.',
    features: ['Pre-construction access', 'Resale market analysis', 'Investment ROI evaluation', 'Building & developer research'],
  },
  {
    name: 'Commercial Real Estate',
    description: 'From retail spaces to investment properties, our commercial division provides strategic guidance for business owners and investors. We understand the unique dynamics of commercial transactions and help you make informed decisions.',
    features: ['Retail & office leasing', 'Investment property sourcing', 'Cap rate & NOI analysis', 'Commercial mortgage connections'],
  },
  {
    name: 'Mortgage Services',
    description: 'Securing the right mortgage is just as important as finding the right property. We connect you with trusted mortgage professionals who deliver competitive rates and flexible terms tailored to your financial situation.',
    features: ['Pre-approval assistance', 'Rate comparison', 'Refinancing options', 'First-time buyer programs'],
  },
  {
    name: 'Lawyer Assistance',
    description: 'Real estate transactions involve complex legal processes. We coordinate with experienced real estate lawyers to ensure your closing is smooth, all documents are properly reviewed, and your interests are fully protected.',
    features: ['Lawyer referral network', 'Title search & insurance', 'Document review', 'Closing coordination'],
  },
  {
    name: 'Free Home Evaluation',
    description: 'Thinking of selling? Know your home\'s true market value with a complimentary, no-obligation evaluation from our experts. We combine local market data, comparable sales, and property condition to give you an accurate picture.',
    features: ['Comparative market analysis', 'Neighborhood pricing trends', 'Improvement recommendations', 'No-obligation consultation'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-heroBg to-brand-primary py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/60 mb-4">What We Do</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Full-Service Real Estate Solutions
          </h1>
          <p className="text-white/80 font-body max-w-2xl mx-auto text-lg">
            Every aspect of your real estate journey — covered. From the first search to the final signature, Team Executive is with you.
          </p>
        </div>
      </section>

      {/* Services Editorial List */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-0">
            {detailedServices.map((service, i) => (
              <div
                key={service.name}
                className={`py-14 ${i > 0 ? 'border-t border-brand-border' : ''}`}
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left — Name & Number */}
                  <div className="lg:w-1/3">
                    <span className="font-heading text-6xl font-extrabold text-brand-primary/10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-textHeading -mt-4">
                      {service.name}
                    </h2>
                  </div>

                  {/* Right — Description & Features */}
                  <div className="lg:w-2/3">
                    <p className="text-brand-textBody font-body leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-brand-textBody font-body">
                          <svg className="w-4 h-4 text-brand-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {f}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-bgAlt">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3">Why Executive</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-textHeading mb-6">
                More Value. More Transparency. More Results.
              </h2>
              <div className="space-y-4 font-body text-brand-textBody leading-relaxed">
                <p>
                  At Executive Real Estate Services, every transaction is built on a foundation of integrity and open communication. Led by Harmahinder Gaind with 15+ years of market expertise, our team delivers outcomes that exceed expectations.
                </p>
                <p>
                  Our commitment to transparency means you always know where you stand. No hidden fees, no surprise conditions — just honest guidance backed by deep knowledge of the Brampton, Mississauga, and Toronto markets.
                </p>
                <p>
                  With 107+ five-star reviews and a 4.9 Google rating, our track record speaks for itself. We do not just help you buy or sell — we help you make financial decisions that pay off for years to come.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white p-8 rounded-card shadow-lg border border-brand-border text-center">
                <div className="text-5xl font-heading font-extrabold text-brand-primary mb-2">{BRAND.business.googleRating}</div>
                <div className="text-yellow-400 text-xl mb-2">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-brand-textMuted text-sm font-body">{BRAND.business.reviewCount}+ Google Reviews</p>
                <div className="mt-6 pt-6 border-t border-brand-border">
                  <div className="text-3xl font-heading font-extrabold text-brand-textHeading">{BRAND.business.yearsExperience}+</div>
                  <p className="text-brand-textMuted text-sm font-body">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Let Us Help You With Your Next Move
          </h2>
          <p className="text-white/80 font-body max-w-xl mx-auto mb-8">
            Contact us for a free consultation and find out how Team Executive can make your real estate goals a reality.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-brand-primary font-heading font-bold text-sm rounded-btn hover:bg-gray-100 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
