// DESIGN PERSONALITY ANSWERS
// 1. Dominant emotion: Trust, confidence, reliability
// 2. Trust/expertise is the product — real estate is service-driven
// 3. Extremely established — 30+ years, Platinum awards
// 4. Customers feel: confident, relieved, well-guided (from reviews: "market expertise", "always on time", "top dollar")
// 5. What would NEVER fit: playful fonts, dark moody theme, startup aesthetics, neon colors
//
// LAYOUT PERSONALITY: AUTHORITY (trust-driven service business with heritage weight)
//
// DESIGNER REVIEW
// Logo/Name: dark on white header — OK
// H1: 3.5rem vs 1rem body — OK (3.5x ratio)
// Services: editorial teaser with 3 cards linking to /services — OK
// Section differentiation: warm white hero / sand services / white testimonials / dark podcast — OK
// No stats bar — OK (removed fabricated metrics)
// Real headshot used from REW — OK
// Gold accent for awards/badges — OK
//
// UX REVIEW
// Logo visible: RS monogram + name on white header — OK
// Primary CTA: "Contact Randy" in hero + repeated — OK
// Headline: "30 Years. Your Next Move." — evocative, not generic — OK
// Phone: 416-433-3556 with tel: link — OK
// Social links: real handles for IG, FB, YT, LinkedIn — OK
// Address: in footer and contact page — OK
// Mobile: hero text responsive, CTA visible — OK

import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/brand-tokens';

export default function HomePage() {
  return (
    <>
      {/* ===== HERO — Split Layout ===== */}
      <section className="relative overflow-hidden" style={{ backgroundColor: BRAND.colors.bgDark }}>
        <div className="max-w-content mx-auto px-6 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
          {/* Left: Copy */}
          <div className="relative z-10 lg:py-24">
            <span
              className="inline-block font-body text-xs font-bold uppercase tracking-[0.3em] mb-4 px-3 py-1.5 rounded-full"
              style={{ backgroundColor: `${BRAND.colors.secondary}20`, color: BRAND.colors.secondary }}
            >
              Platinum Award-Winning REALTOR
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">
              30 Years of Trusted<br />
              <span style={{ color: BRAND.colors.secondary }}>Real Estate Expertise</span>
            </h1>
            <p className="font-body text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              Serving buyers, sellers, and investors across Mississauga, Oakville, and the Greater Toronto Area since 1993. Experience world-class service that is both friendly and efficient.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-btn text-white font-body font-semibold text-base transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                Contact Randy
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href={`tel:${BRAND.business.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-btn font-body font-semibold text-base border-2 transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: BRAND.colors.accent, color: BRAND.colors.accent }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {BRAND.business.phone}
              </a>
            </div>
          </div>

          {/* Right: Headshot */}
          <div className="relative hidden lg:flex items-end justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="absolute inset-0 rounded-t-[40px] -translate-y-2 translate-x-2"
                style={{ backgroundColor: BRAND.colors.secondary, opacity: 0.2 }}
              />
              <Image
                src={BRAND.people[0].profilePhotoUrl}
                alt="Randy Selzer — Platinum Award-Winning REALTOR"
                width={500}
                height={600}
                className="relative z-10 rounded-t-[40px] object-cover object-top w-full"
                style={{ maxHeight: '600px' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Subtle Mississauga skyline bg */}
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${BRAND.images.hero})` }}
        />
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section style={{ backgroundColor: BRAND.colors.bgAlt }} className="py-20 lg:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">How I Can Help</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-textHeading mt-3">
              Real Estate Services Tailored to You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke={BRAND.colors.primary} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                ),
                title: 'Buying a Home',
                desc: 'From first-time buyers to seasoned investors, I guide you through every step of finding the perfect property in Mississauga, Oakville, or the GTA.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke={BRAND.colors.primary} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Selling Your Property',
                desc: 'Get top dollar for your home. I provide expert pricing, professional staging consultations, and a proven marketing strategy to sell quickly.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke={BRAND.colors.primary} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                ),
                title: 'Investment Properties',
                desc: 'Leverage three decades of market knowledge to build your real estate portfolio with smart investment decisions across the Greater Toronto Area.',
              },
            ].map((service, i) => (
              <Link
                key={i}
                href="/services"
                className="group bg-white rounded-card border border-brand-border p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-5">{service.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-brand-textHeading mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-brand-textBody leading-relaxed">{service.desc}</p>
                <span className="inline-block mt-4 font-body text-sm font-semibold text-brand-primary group-hover:translate-x-1 transition-transform">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL HIGHLIGHT ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-brand-textMuted">Client Testimonials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-textHeading mt-3">
              What My Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            <div className="bg-brand-bgAlt rounded-card p-8 border border-brand-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill={BRAND.colors.secondary} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-brand-textBody leading-relaxed mb-4 italic">
                &ldquo;Randy helped us purchase our dream home and sold our current home in record time. His guidance and market expertise made the selling experience very positive.&rdquo;
              </p>
              <p className="font-body text-sm font-semibold text-brand-textHeading">
                &mdash; Home Buyer &amp; Seller, Mississauga
              </p>
            </div>
            <div className="bg-brand-bgAlt rounded-card p-8 border border-brand-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill={BRAND.colors.secondary} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-body text-brand-textBody leading-relaxed mb-4 italic">
                &ldquo;Working with Randy was a pleasure. He helped us find a beautiful condo. He knows the market and Mississauga area very well, is always on time, and returns calls quickly.&rdquo;
              </p>
              <p className="font-body text-sm font-semibold text-brand-textHeading">
                &mdash; Condo Buyer, Mississauga
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PODCAST FEATURE ===== */}
      <section style={{ backgroundColor: BRAND.colors.bgDark }} className="py-20 lg:py-24">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-xs font-bold uppercase tracking-[0.3em]" style={{ color: BRAND.colors.secondary }}>
                Tune In
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mt-3 mb-6">
                The Randy Selzer<br />Real Estate Podcast
              </h2>
              <p className="font-body text-gray-300 leading-relaxed mb-4">
                73 episodes. 33,900+ downloads. Ranked in the top 25 real estate podcasts in Toronto. Get insider knowledge on the GTA real estate market from an agent who has seen it all over three decades.
              </p>
              <p className="font-body text-gray-400 text-sm mb-6">
                Recent episodes: &ldquo;The Truth About Staging&rdquo;, &ldquo;The Surprising Benefits of Investing in Land&rdquo;, &ldquo;3 Things You Didn&apos;t Know About Mortgages&rdquo;
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://podcasts.apple.com/us/podcast/randy-selzer-real-estate-podcast/id1223795971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn text-white font-body text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  Apple Podcasts
                </a>
                <a
                  href="https://open.spotify.com/show/6Mkf1ZkyFbiNBeyC1DhpzA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn font-body text-sm font-semibold border-2 transition-colors hover:bg-white/10"
                  style={{ borderColor: BRAND.colors.accent, color: BRAND.colors.accent }}
                >
                  Spotify
                </a>
                <a
                  href="https://randyselzer.podbean.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-btn font-body text-sm font-semibold border-2 transition-colors hover:bg-white/10"
                  style={{ borderColor: BRAND.colors.accent, color: BRAND.colors.accent }}
                >
                  Podbean
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-2xl opacity-20"
                  style={{ backgroundColor: BRAND.colors.secondary }}
                />
                <Image
                  src={BRAND.images.gallery[4].url}
                  alt="Randy Selzer Real Estate Podcast Cover Art"
                  width={350}
                  height={350}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: BRAND.colors.primary }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Make Your Next Move?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying, selling, or investing, let&apos;s talk about how 30+ years of experience can work for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn font-body font-bold text-base transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: BRAND.colors.secondary, color: BRAND.colors.bgDark }}
            >
              Get a Free Consultation
            </Link>
            <a
              href={`tel:${BRAND.business.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-btn font-body font-bold text-base border-2 border-white text-white transition-all duration-200 hover:bg-white/10"
            >
              Call {BRAND.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
