import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { menuHighlights, businessInfo, deliveryPartners } from '@/lib/brand-tokens'

export default function HomePage() {
  return (
    <>
      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(30,20,10,0.72), rgba(30,20,10,0.72)), url(https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1600&q=80)',
            backgroundColor: '#2C3A1E',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20 text-left w-full">
          <p className="font-[var(--font-body-var)] text-sm uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-4">
            Authentic Mexican Restaurant &middot; Ajax, ON
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Real Mexican Flavour in the Heart of Ajax
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            From our famous birria tacos to sizzling fajitas — family-made, community-loved, and trusted by 1,000+ happy customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-8 py-3.5 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
            >
              View Our Menu
            </Link>
            <a
              href="https://www.doordash.com/en-CA/store/mexico-lindo-ajax--oshawa-580721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white font-bold uppercase tracking-[0.08em] text-sm px-8 py-3.5 rounded-[4px] hover:bg-white/10 transition-colors"
            >
              Order Online
            </a>
          </div>
          {/* Rating badge */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex gap-0.5 text-[#D4A024] text-xl">
              {'★'.repeat(5)}
            </div>
            <span className="text-white/70 text-sm">
              <strong className="text-white">4.4 stars</strong> &middot; 1,000+ reviews &middot; Ajax&apos;s top Mexican spot
            </span>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: MENU HIGHLIGHTS ============ */}
      <section className="bg-[#F7F0E6] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2 text-center">
            Signature Dishes
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#1E1209] text-center mb-4">
            What We&apos;re Known For
          </h2>
          <SectionDivider />
          <p className="text-center text-[#7A6A5A] mb-10 max-w-xl mx-auto">
            Authentic recipes made with fresh ingredients — the kind of food that keeps Ajax families coming back
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuHighlights.map((dish) => (
              <div
                key={dish.name}
                className="bg-white rounded-[6px] overflow-hidden shadow-sm border border-[#E0D0B8]"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${dish.image})`,
                    backgroundColor: '#F7F0E6',
                  }}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-[var(--font-heading-var)] text-base font-bold text-[#1E1209]">
                      {dish.name}
                    </h3>
                    <span className="font-[var(--font-body-var)] text-sm font-bold text-[#D4A024] whitespace-nowrap">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#7A6A5A] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: VISIT US CTA ============ */}
      <section className="bg-[#2C3A1E] py-14 md:py-18">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-3">
                Come Visit Us
              </p>
              <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-white mb-4">
                Ajax&apos;s Mexican Home Away From Home
              </h2>
              <p className="text-white/75 text-base leading-relaxed mb-6">
                We&apos;re at 200 Harwood Ave South — easy to find, impossible to forget. Drop in for lunch, bring the family for dinner, or order online for delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block border border-[#D4A024] text-[#D4A024] font-bold uppercase tracking-[0.08em] text-sm px-6 py-3 rounded-[4px] hover:bg-[#D4A024] hover:text-[#1E1209] transition-colors"
                >
                  Get Directions
                </Link>
                <a
                  href={`tel:${businessInfo.phoneHref}`}
                  className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-6 py-3 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-[6px] p-5 border border-white/10">
                <p className="font-[var(--font-body-var)] text-xs uppercase tracking-wider text-[#D4A024] font-bold mb-2">Hours</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li className="flex justify-between"><span>Mon</span><span className="text-red-400">Closed</span></li>
                  <li className="flex justify-between"><span>Tue – Fri</span><span>11:30 AM – 8:30 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>12:00 PM – 9:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>12:00 PM – 6:30 PM</span></li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-[6px] p-5 border border-white/10">
                <p className="font-[var(--font-body-var)] text-xs uppercase tracking-wider text-[#D4A024] font-bold mb-2">Order Delivery</p>
                <div className="flex flex-wrap gap-3">
                  {deliveryPartners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white/70 hover:text-[#D4A024] transition-colors"
                    >
                      {partner.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
