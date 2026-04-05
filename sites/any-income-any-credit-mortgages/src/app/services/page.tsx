import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const services = [
  {
    title: 'Bad Credit Mortgages',
    description: 'Your credit score is just one piece of the puzzle. Whether you have a low score, missed payments, or collections on your file, our private lending partners evaluate your full financial picture — including your equity, employment, and ability to make payments. We help clients with credit scores as low as 400 get approved.',
    features: ['Private and alternative lender access', 'Equity-based qualification', 'Flexible payment history requirements', 'Path to prime lending over time'],
  },
  {
    title: 'Self-Employed Mortgages',
    description: 'Running your own business shouldn\'t mean being shut out of homeownership. Banks often struggle with non-traditional income documentation, but our lenders understand the reality of entrepreneurial income. We accept stated income, business bank statements, and alternative proof of earnings.',
    features: ['Stated income programs', 'Bank statement verification', 'Business-for-self documentation', 'Competitive rates for strong equity positions'],
  },
  {
    title: 'New Immigrant Mortgages',
    description: 'Moving to Canada is a major life step — buying your first home here shouldn\'t be impossible. We work with lending programs specifically designed for newcomers, whether you have no Canadian credit history, are on a work permit, or have recently received permanent residency.',
    features: ['No Canadian credit history required', 'Work permit eligible', 'International income consideration', 'Down payment flexibility'],
  },
  {
    title: 'Mortgage Refinancing',
    description: 'Unlock the equity in your home to consolidate debt, fund renovations, or improve your cash flow. Even if your credit has taken a hit since you first got your mortgage, we can find refinancing solutions through alternative lenders at competitive rates.',
    features: ['Debt consolidation', 'Home renovation funding', 'Rate improvement options', 'Cash-out refinancing'],
  },
  {
    title: 'Consumer Proposal & Bankruptcy Mortgages',
    description: 'A consumer proposal or discharged bankruptcy is not the end of your homeownership journey — it\'s a new beginning. We specialize in helping people who have gone through insolvency proceedings get back on track with mortgage solutions tailored to their recovery timeline.',
    features: ['Discharged bankruptcy eligible', 'Active consumer proposal options', 'Rebuilding credit guidance', 'Flexible approval criteria'],
  },
  {
    title: 'Private Lending & Second Mortgages',
    description: 'When you need access to your home equity quickly, a second or third mortgage through private lending can provide the funds you need. We connect you with reputable private lenders who offer competitive terms and fast approvals — often within days, not weeks.',
    features: ['First, second, and third mortgages', 'Fast approval timelines', 'Home equity loans', 'Bridge financing'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '320px',
          backgroundImage: `linear-gradient(135deg, rgba(13,33,55,0.9) 0%, rgba(27,77,110,0.8) 100%), url(${BRAND.images.gallery[1].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '80px 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.accent }}>
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Mortgage Solutions for Every Situation
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
            We don&apos;t believe in one-size-fits-all. Every financial situation is unique, and so is every solution we provide.
          </p>
        </div>
      </section>

      {/* Services List — Editorial layout, alternating */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start pb-16"
                style={{
                  borderBottom: index < services.length - 1 ? `1px solid ${BRAND.colors.border}` : 'none',
                }}
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center justify-center rounded text-sm font-bold"
                      style={{
                        width: 36,
                        height: 36,
                        backgroundColor: BRAND.colors.bgAlt,
                        color: BRAND.colors.primary,
                        borderRadius: BRAND.spacing.radiusButtons,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                    {service.title}
                  </h2>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-base leading-relaxed mb-6" style={{ color: BRAND.colors.textBody }}>
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: BRAND.colors.textBody }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-center" style={{ color: BRAND.colors.secondary }}>
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Getting Approved Is Easier Than You Think
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Consultation', description: 'Tell us about your situation. No judgment, just an honest assessment of your options.' },
              { step: '02', title: 'Document Review', description: 'We review your financials and identify the best lending programs for your profile.' },
              { step: '03', title: 'Lender Matching', description: 'We present your application to our network of 50+ lenders to find the best terms.' },
              { step: '04', title: 'Approval & Closing', description: 'Once approved, we guide you through to closing day. Your keys, your home.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span
                  className="inline-block text-3xl font-bold mb-3"
                  style={{ color: BRAND.colors.accent, fontFamily: 'var(--font-heading)' }}
                >
                  {item.step}
                </span>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.secondary} 100%)`, padding: '64px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '700px', padding: '0 24px' }}>
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Your Situation Has a Solution
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Call us today for a free, no-obligation consultation. We&apos;ll review your options and find the best path forward.
          </p>
          <a
            href="tel:3652319115"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.accent, color: BRAND.colors.bgDark, borderRadius: BRAND.spacing.radiusButtons }}
          >
            Call {BRAND.business.phone}
          </a>
        </div>
      </section>
    </>
  );
}
