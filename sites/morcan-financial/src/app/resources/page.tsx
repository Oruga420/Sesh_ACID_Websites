import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

const calculatorCards = [
  {
    title: 'Mortgage Payment Calculator',
    description: 'Estimate your monthly mortgage payments based on your loan amount, interest rate, and amortization period.',
    icon: '🧮',
  },
  {
    title: 'Affordability Calculator',
    description: 'Find out how much home you can afford based on your income, debts, and down payment.',
    icon: '🏠',
  },
  {
    title: 'Refinance Break-Even',
    description: 'Determine whether refinancing makes financial sense by calculating your break-even point.',
    icon: '📊',
  },
];

const faqItems = [
  {
    question: 'What is a mortgage broker?',
    answer: 'A mortgage broker is a licensed professional who acts as an intermediary between borrowers and lenders. Unlike a bank, which can only offer its own products, a broker like MorCan Financial shops the entire market — over 50 lenders — to find the mortgage that best fits your situation.',
  },
  {
    question: 'How much does it cost to use a mortgage broker?',
    answer: 'In most cases, nothing. Mortgage brokers are compensated by the lender when your mortgage funds. For certain specialty situations (private lending, bad credit), there may be a broker fee — which we always disclose upfront.',
  },
  {
    question: 'How much do I need for a down payment?',
    answer: 'In Canada, the minimum down payment is 5% for homes up to $500,000, 10% on the portion between $500,000 and $1.5 million, and 20% for homes over $1.5 million. First-time buyers may also access the Home Buyers\' Plan (HBP) to withdraw from RRSPs.',
  },
  {
    question: 'Can I get a mortgage with bad credit?',
    answer: 'Yes. While major banks have strict credit requirements, MorCan Financial works with alternative and private lenders who consider the full picture — not just your credit score. We also offer credit improvement programs to help you qualify for better rates in the future.',
  },
  {
    question: 'How long does the mortgage process take?',
    answer: 'Pre-approval can be done in 24-48 hours. A full mortgage approval typically takes 5-10 business days once all documents are submitted. We guide you through every step to keep the process smooth.',
  },
  {
    question: 'What is FSRA and why does it matter?',
    answer: 'FSRA (Financial Services Regulatory Authority of Ontario) is the government body that licenses and regulates mortgage brokers in Ontario. MorCan Financial is fully licensed under FSRA #10687, meaning we are held to strict professional and ethical standards.',
  },
];

const glossaryTerms = [
  { term: 'Amortization', definition: 'The total length of time to pay off your mortgage in full, typically 25-30 years in Canada.' },
  { term: 'Fixed Rate', definition: 'An interest rate that stays the same for the entire term of your mortgage.' },
  { term: 'Variable Rate', definition: 'An interest rate that fluctuates with the Bank of Canada prime rate.' },
  { term: 'CMHC Insurance', definition: 'Mortgage default insurance required when your down payment is less than 20%.' },
  { term: 'Pre-Approval', definition: 'A lender\'s conditional commitment to lend you a specific amount, locking in your rate for up to 120 days.' },
  { term: 'LTV (Loan-to-Value)', definition: 'The ratio of your mortgage to the property\'s appraised value. Lower LTV = better rates.' },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: BRAND.colors.primary }}>
            Resources &amp; Calculators
          </p>
          <h1 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Tools to Make Smarter Mortgage Decisions
          </h1>
          <p className="text-lg max-w-3xl" style={{ color: BRAND.colors.textBody }}>
            Knowledge is power when it comes to your mortgage. Use our calculators, read our FAQs, and learn the language of lending.
          </p>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: BRAND.colors.primary }}>
            Mortgage Calculators
          </p>
          <h2 className="text-3xl mb-10" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Crunch the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {calculatorCards.map((card) => (
              <div
                key={card.title}
                className="p-8 bg-white border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusCards }}
              >
                <span className="text-4xl mb-4 block">{card.icon}</span>
                <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: BRAND.colors.textBody }}>
                  {card.description}
                </p>
                <span className="text-sm font-semibold" style={{ color: BRAND.colors.primary }}>
                  Coming Soon →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-center" style={{ color: BRAND.colors.primary }}>
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Common Mortgage Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                className="bg-white p-6 border"
                style={{ borderColor: BRAND.colors.border, borderRadius: BRAND.spacing.radiusCards }}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: BRAND.colors.textHeading }}>
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: BRAND.colors.textBody }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.bgMain }}>
        <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-center" style={{ color: BRAND.colors.primary }}>
            Mortgage Glossary
          </p>
          <h2 className="text-3xl text-center mb-12" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
            Key Terms Explained
          </h2>
          <div className="space-y-0">
            {glossaryTerms.map((item, i) => (
              <div
                key={item.term}
                className="py-5 flex flex-col md:flex-row md:items-start gap-2 md:gap-8"
                style={{ borderTop: `1px solid ${BRAND.colors.border}` }}
              >
                <span className="text-lg font-semibold md:w-48 shrink-0" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textHeading }}>
                  {item.term}
                </span>
                <p className="flex-1 text-sm" style={{ color: BRAND.colors.textBody }}>
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="mx-auto px-6 text-center" style={{ maxWidth: BRAND.spacing.contentMaxWidth }}>
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-heading)', color: BRAND.colors.textLight }}>
            Still Have Questions?
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
            Joe Taibi and the MorCan team are happy to walk you through any aspect of the mortgage process. No question is too basic.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 text-sm font-semibold transition-all hover:shadow-lg"
            style={{ backgroundColor: BRAND.colors.primary, color: BRAND.colors.textLight, borderRadius: BRAND.spacing.radiusButtons }}
          >
            Ask Joe a Question
          </Link>
        </div>
      </section>
    </>
  );
}
