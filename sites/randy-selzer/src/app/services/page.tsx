import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export const metadata = {
  title: 'Services — Randy Selzer Real Estate',
  description: 'Full-service real estate for buyers, sellers, and investors in Mississauga, Oakville, and the GTA. Free staging consultation, market analysis, and expert negotiation.',
};

const buyerServices = [
  { title: 'Personalized Home Search', desc: 'Tailored property searches based on your lifestyle, budget, and neighborhood preferences across Mississauga, Oakville, and the GTA.' },
  { title: 'First-Time Buyer Guidance', desc: 'Navigate the buying process with confidence. I walk you through every step from pre-approval to closing day.' },
  { title: 'Trusted Lender Network', desc: 'Access a network of trusted mortgage lenders who specialize in all situations — self-employed, new to Canada, or less-than-perfect credit.' },
  { title: 'Offer Strategy & Negotiation', desc: 'Competitive offer strategies backed by 30+ years of market knowledge to help you secure the home at the right price.' },
];

const sellerServices = [
  { title: 'Expert Market Analysis', desc: 'Accurate pricing based on comprehensive comparative market analysis and deep local knowledge. No guesswork — just data.' },
  { title: 'Free Home Staging Consultation', desc: 'A complimentary staging consultation ($200 value) to showcase your home at its very best and attract maximum buyer interest.' },
  { title: 'Professional Marketing', desc: 'High-quality photography, virtual tours, MLS listing optimization, and targeted digital marketing to reach the right buyers.' },
  { title: 'Fast, Efficient Closings', desc: 'Streamlined documentation and experienced coordination with lawyers, inspectors, and lenders for a smooth closing process.' },
];

const investorServices = [
  { title: 'Portfolio Strategy', desc: 'Leverage three decades of market cycles and trends to build a sustainable real estate investment portfolio.' },
  { title: 'Market Opportunity Analysis', desc: 'Identify emerging neighborhoods, pre-construction opportunities, and undervalued properties across the GTA.' },
  { title: 'Rental Property Guidance', desc: 'From tenant screening to cash flow analysis — expert advice on making your investment property work for you.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">Services</span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-brand-textHeading mt-3 mb-6">
            Comprehensive Real Estate<br />Services Since 1993
          </h1>
          <p className="font-body text-lg text-brand-textBody leading-relaxed max-w-2xl">
            Whether you&apos;re buying your first home, selling a property for top dollar, or building an investment portfolio, I bring three decades of expertise to every transaction.
          </p>
        </div>
      </section>

      {/* ===== BUYERS ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}15` }}>
              <svg className="w-6 h-6" fill="none" stroke={BRAND.colors.primary} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">For Buyers</span>
              <h2 className="font-heading text-3xl font-semibold text-brand-textHeading">Find Your Dream Home</h2>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-brand-border">
            {buyerServices.map((svc, i) => (
              <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <h3 className="font-heading text-xl font-semibold text-brand-textHeading">{svc.title}</h3>
                <p className="font-body text-brand-textBody leading-relaxed md:col-span-2">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELLERS ===== */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.secondary}15` }}>
              <svg className="w-6 h-6" fill="none" stroke={BRAND.colors.secondary} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">For Sellers</span>
              <h2 className="font-heading text-3xl font-semibold text-brand-textHeading">Sell for Top Dollar</h2>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-brand-border">
            {sellerServices.map((svc, i) => (
              <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <h3 className="font-heading text-xl font-semibold text-brand-textHeading">{svc.title}</h3>
                <p className="font-body text-brand-textBody leading-relaxed md:col-span-2">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-10 p-6 rounded-card border-2 flex items-center gap-4"
            style={{ borderColor: BRAND.colors.secondary, backgroundColor: `${BRAND.colors.secondary}08` }}
          >
            <svg className="w-8 h-8 shrink-0" fill={BRAND.colors.secondary} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div>
              <p className="font-body font-bold text-brand-textHeading">Complimentary Home Staging Consultation</p>
              <p className="font-body text-sm text-brand-textBody">Every listing includes a free staging consultation — a $200 value — to help your home make the best first impression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INVESTORS ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${BRAND.colors.primary}15` }}>
              <svg className="w-6 h-6" fill="none" stroke={BRAND.colors.primary} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">For Investors</span>
              <h2 className="font-heading text-3xl font-semibold text-brand-textHeading">Build Your Portfolio</h2>
            </div>
          </div>
          <div className="space-y-0 divide-y divide-brand-border">
            {investorServices.map((svc, i) => (
              <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <h3 className="font-heading text-xl font-semibold text-brand-textHeading">{svc.title}</h3>
                <p className="font-body text-brand-textBody leading-relaxed md:col-span-2">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-16" style={{ backgroundColor: BRAND.colors.bgAlt }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-brand-textHeading mb-6">Areas I Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Mississauga', 'Oakville', 'Toronto', 'Erin Mills', 'Lorne Park', 'Gordon Woods', 'Credit Pointe', 'Etobicoke', 'Milton'].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full font-body text-sm border border-brand-border text-brand-textBody bg-white">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white mb-4">Let&apos;s Get Started</h2>
          <p className="font-body text-white/80 mb-8 max-w-lg mx-auto">
            Reach out for a free, no-obligation consultation about your real estate goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn font-body font-bold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND.colors.secondary, color: BRAND.colors.bgDark }}
          >
            Contact Randy Today
          </Link>
        </div>
      </section>
    </>
  );
}
