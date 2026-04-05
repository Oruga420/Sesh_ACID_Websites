import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const serviceGroups = [
  {
    category: 'Residential Mortgages',
    services: [
      {
        title: 'First Time Home Buyers',
        description: 'Stepping into homeownership for the first time? We guide you through every stage — from pre-approval to closing. Access government programs, incentives, and the best rates from 50+ lenders.',
      },
      {
        title: 'Mortgage Pre-Approval',
        description: 'Know exactly what you can afford before you start shopping. Our free, no-obligation pre-approvals lock in your rate for up to 120 days while you find the perfect home.',
      },
      {
        title: 'Mortgage Renewals',
        description: 'Your renewal is your biggest opportunity to save. Don\'t just sign what your bank sends — let us shop the market and negotiate a better deal.',
      },
      {
        title: 'Mortgage Refinancing',
        description: 'Access your home equity, lower your rate, or restructure your payments. Refinancing can save you thousands — we help you decide if it\'s the right move.',
      },
      {
        title: 'Renovation Financing',
        description: 'Fund your home improvements through your mortgage equity. Whether it\'s a kitchen reno or a full addition, we structure the financing to fit your project.',
      },
      {
        title: 'Vacation Homes',
        description: 'Buying a cottage or vacation property? Different lenders have different rules for secondary residences — we know which ones to approach.',
      },
    ],
  },
  {
    category: 'Specialty Programs',
    services: [
      {
        title: 'Self-Employed Mortgages',
        description: 'Self-employed borrowers face unique challenges. We work with lenders who understand business income, stated income programs, and non-traditional documentation.',
      },
      {
        title: 'Bad or Poor Credit Mortgages',
        description: 'Credit challenges don\'t have to stop your homeownership journey. We connect you with lenders who look beyond the credit score to find real solutions.',
      },
      {
        title: 'New to Canada',
        description: 'Recently arrived in Canada? Special mortgage programs exist for newcomers. We help immigrants and permanent residents access competitive financing.',
      },
      {
        title: 'Private Mortgage Lending',
        description: 'When traditional lenders say no, private lending can bridge the gap. Short-term solutions to get you where you need to be financially.',
      },
      {
        title: 'Credit Improvement',
        description: 'We don\'t just find you a mortgage — we help you build a path to better credit, so your next renewal or purchase gets even better terms.',
      },
    ],
  },
  {
    category: 'Investment & Commercial',
    services: [
      {
        title: 'Investment Properties',
        description: 'Building a real estate portfolio? We structure financing for rental properties, multi-units, and investment acquisitions with the right leverage strategy.',
      },
      {
        title: 'Commercial Mortgages',
        description: 'From office buildings to retail spaces and industrial properties, our commercial lending relationships cover the full spectrum of business real estate.',
      },
      {
        title: 'Debt Consolidation',
        description: 'Combine high-interest debts into a single, lower-rate mortgage payment. Simplify your finances and potentially save hundreds per month.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: BRAND.colors.accent }}>
            Mortgage Services
          </p>
          <h1 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            14+ Mortgage Solutions. One Trusted Team.
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: '#94A3B8' }}>
            No matter where you are in your financial journey, MorCan Financial has a mortgage solution that fits.
            With access to {BRAND.business.lenders} lending institutions, we find the right product — not just the closest one.
          </p>
        </div>
      </section>

      {/* Service Groups */}
      {serviceGroups.map((group, gi) => (
        <section
          key={group.category}
          className="py-16 lg:py-20"
          style={{ backgroundColor: gi % 2 === 0 ? BRAND.colors.bgMain : BRAND.colors.bgAlt }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: BRAND.colors.primary }}>
              {group.category}
            </p>
            <h2 className="text-3xl mb-10" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
              {group.category}
            </h2>

            {/* Editorial list layout — not card grid */}
            <div className="space-y-0">
              {group.services.map((service, si) => (
                <div
                  key={service.title}
                  className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-12"
                  style={{
                    borderTop: si === 0 ? `2px solid ${BRAND.colors.border}` : `1px solid ${BRAND.colors.border}`,
                  }}
                >
                  <h3
                    className="text-xl md:w-72 shrink-0"
                    style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}
                  >
                    {service.title}
                  </h3>
                  <p className="flex-1 leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            That&apos;s what we&apos;re here for. Tell us your situation, and Joe will recommend the right path forward.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: BRAND.colors.textLight, color: BRAND.colors.primary, borderRadius: BRAND.spacing.radiusButtons }}
            >
              Get a Free Consultation
            </Link>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold border-2 transition-all hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: BRAND.colors.textLight, borderRadius: BRAND.spacing.radiusButtons }}
            >
              Call {BRAND.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
