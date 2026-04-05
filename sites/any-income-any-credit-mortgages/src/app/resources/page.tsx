import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const faqs = [
  {
    question: 'Can I get a mortgage with bad credit?',
    answer: 'Yes. We work with private and alternative lenders who evaluate your full financial picture — not just your credit score. Clients with scores as low as 400 have been approved through our network. Your equity position, income stability, and down payment all factor into the decision.',
  },
  {
    question: 'What is a private mortgage?',
    answer: 'A private mortgage is a loan from a non-institutional lender — typically an individual investor or a mortgage investment corporation. Private mortgages often have more flexible qualification criteria than banks, making them ideal for borrowers with non-traditional income, credit challenges, or those who need fast funding. Rates are typically higher than bank rates but can serve as a bridge to better terms as your financial situation improves.',
  },
  {
    question: 'How does self-employed mortgage qualification work?',
    answer: 'Traditional banks typically require two years of tax returns (NOAs) from self-employed applicants. Our alternative lenders accept stated income programs, business bank statements, and other non-traditional documentation. If your business generates solid revenue but your taxable income is low due to deductions, we can find lenders who understand that reality.',
  },
  {
    question: 'Can I get a mortgage after bankruptcy?',
    answer: 'Yes, once your bankruptcy has been discharged. The timeline and options depend on how long ago the discharge occurred and what steps you have taken to rebuild your credit. Private lenders can often help immediately after discharge, while alternative lenders may require 12-24 months of re-established credit. We create a plan that matches your recovery timeline.',
  },
  {
    question: 'What is a second mortgage?',
    answer: 'A second mortgage is a loan secured against your home that sits behind your primary (first) mortgage. It allows you to access the equity you have built in your property without breaking your existing mortgage terms. Second mortgages are commonly used for debt consolidation, home renovations, or emergency funding.',
  },
  {
    question: 'How much down payment do I need?',
    answer: 'Down payment requirements vary by lender and program. Traditional mortgages require as little as 5% for primary residences. Some of our alternative lending programs may require 10-20%, depending on the property type and your financial profile. We will assess your situation and let you know exactly what is needed.',
  },
  {
    question: 'Do you serve areas outside Brampton?',
    answer: 'Absolutely. While our office is located in Brampton, we serve clients across all of Ontario — including Mississauga, Toronto, Oakville, Hamilton, Kitchener, and beyond. Many of our consultations are conducted by phone or video, making it convenient regardless of your location.',
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'Required documents vary by program, but generally include: government-issued ID, proof of income (pay stubs, NOAs, or bank statements for self-employed), a recent credit report (we can pull this for you), property details if you have a specific home in mind, and information about your current debts and expenses. We will guide you through exactly what is needed for your specific situation.',
  },
];

const guides = [
  {
    title: 'Understanding Your Credit Score',
    description: 'Your credit score is a three-digit number that lenders use to assess risk. In Canada, scores range from 300 to 900. A score above 680 is generally considered good for traditional lending, but alternative lenders work with scores well below that threshold.',
    tips: [
      'Check your credit report annually at Equifax.ca or TransUnion.ca',
      'Dispute any errors on your report immediately',
      'Keep credit card balances below 30% of your limit',
      'Make all payments on time — even minimum payments count',
      'Avoid applying for multiple credit products in a short period',
    ],
  },
  {
    title: 'First-Time Homebuyer Checklist',
    description: 'Buying your first home in Ontario is exciting but comes with many steps. Here is a simplified roadmap to help you prepare.',
    tips: [
      'Get pre-approved before house hunting',
      'Budget for closing costs (1.5-4% of purchase price)',
      'Understand land transfer tax — Ontario first-time buyers get a rebate up to $4,000',
      'Factor in home inspection and appraisal costs',
      'Consider mortgage insurance if your down payment is under 20%',
      'Work with a licensed mortgage broker to compare rates across lenders',
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center"
        style={{
          minHeight: '280px',
          backgroundImage: `linear-gradient(135deg, rgba(13,33,55,0.9) 0%, rgba(27,77,110,0.8) 100%), url(${BRAND.images.gallery[2].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: BRAND.spacing.contentMaxWidth, padding: '80px 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.accent }}>
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Guides &amp; Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: BRAND.colors.bgMain, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: '900px', padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.secondary }}>
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl mb-10" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Common Mortgage Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <h3 className="text-lg mb-3 flex items-start gap-3" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed ml-8" style={{ color: BRAND.colors.textBody }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt, padding: '80px 0' }}>
        <div className="mx-auto" style={{ maxWidth: '900px', padding: '0 24px' }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: BRAND.colors.secondary }}>
            Guides
          </p>
          <h2 className="text-3xl md:text-4xl mb-10" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Helpful Resources for Homebuyers
          </h2>
          <div className="space-y-10">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="p-8"
                style={{
                  backgroundColor: BRAND.colors.bgCard,
                  borderRadius: BRAND.spacing.radiusCards,
                  border: `1px solid ${BRAND.colors.border}`,
                }}
              >
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: BRAND.colors.textBody }}>
                  {guide.description}
                </p>
                <ul className="space-y-2">
                  {guide.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm" style={{ color: BRAND.colors.textBody }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={BRAND.colors.secondary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg, ${BRAND.colors.primary} 0%, ${BRAND.colors.secondary} 100%)`, padding: '64px 0' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '700px', padding: '0 24px' }}>
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Our team is ready to answer your specific mortgage questions. Reach out for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded text-base font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.accent, color: BRAND.colors.bgDark, borderRadius: BRAND.spacing.radiusButtons }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
