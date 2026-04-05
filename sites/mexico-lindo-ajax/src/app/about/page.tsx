import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import { businessInfo } from '@/lib/brand-tokens'

export const metadata = {
  title: 'About | México Lindo Ajax',
  description: 'Learn about México Lindo Ajax — Ajax\'s favourite authentic Mexican restaurant, serving the Durham Region community with family-made flavours.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#2C3A1E] py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2">
            Our Story
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl font-bold text-white">
            About México Lindo Ajax
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="bg-[#FFFDF8] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2">
                Ajax, Ontario
              </p>
              <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#1E1209] mb-6">
                A Mexican Gem on Harwood Ave
              </h2>
              <p className="text-[#3A2A1A] leading-relaxed mb-4">
                México Lindo has been the go-to destination for authentic Mexican food in Ajax and the Durham Region. Nestled at 200 Harwood Ave South, we&apos;ve built our reputation one plate at a time — serving the kind of honest, home-style Mexican cooking that keeps families coming back week after week.
              </p>
              <p className="text-[#3A2A1A] leading-relaxed mb-4">
                Our kitchen is built on real recipes — slow-braised birria with rich consomme, sizzling fajitas that arrive at your table still singing, enchiladas in our house mole that we make from scratch. No shortcuts, no shortcuts — just real Mexican flavours made with love.
              </p>
              <p className="text-[#3A2A1A] leading-relaxed mb-6">
                We&apos;re proud to be part of the Ajax community. Over 1,000 reviews and a 4.4-star rating tell the story better than we can. Whether it&apos;s a family dinner, a quick lunch, or a celebration — México Lindo is your place.
              </p>
              <Link
                href="/menu"
                className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-8 py-3.5 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
              >
                See Our Menu
              </Link>
            </div>
            <div
              className="h-80 md:h-[500px] rounded-[6px] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80)',
                backgroundColor: '#F7F0E6',
              }}
              role="img"
              aria-label="Warm and welcoming atmosphere at México Lindo Ajax"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-[#F7F0E6] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-body-var)] text-xs uppercase tracking-[0.15em] text-[#D4A024] font-bold mb-2 text-center">
            Why We&apos;re Different
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#1E1209] text-center mb-4">
            What Makes Us Ajax&apos;s Favourite
          </h2>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: 'Authentic Recipes',
                description: 'Our recipes come straight from Mexico — birria consomme, house mole, homemade salsas in red, green, diablo and mole. No fusion, no compromises.',
                icon: '🌮',
              },
              {
                title: 'Family-Run Kitchen',
                description: 'México Lindo is a family operation at heart. Every dish is made with the care you\'d expect from a home kitchen — because that\'s exactly what it is.',
                icon: '👨‍👩‍👧‍👦',
              },
              {
                title: 'Ajax Community',
                description: 'We\'ve been serving Ajax and Durham Region for years. Your neighbours trust us — over 1,000 reviews and a 4.4-star rating on Google.',
                icon: '⭐',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[6px] p-6 border border-[#E0D0B8] text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-[var(--font-heading-var)] text-xl font-bold text-[#1E1209] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7A6A5A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="bg-[#2C3A1E] py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '4.4★', label: 'Google Rating' },
              { value: '1,000+', label: 'Happy Customers' },
              { value: '3', label: 'Delivery Platforms' },
              { value: '200+', label: 'Menu Items' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-[var(--font-heading-var)] text-3xl font-bold text-[#D4A024]">
                  {stat.value}
                </p>
                <p className="font-[var(--font-body-var)] text-xs uppercase tracking-wider text-white/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFFDF8] py-14">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <h2 className="font-[var(--font-heading-var)] text-2xl md:text-3xl font-bold text-[#1E1209] mb-4">
            Come Visit Us Today
          </h2>
          <p className="text-[#7A6A5A] mb-6 max-w-md mx-auto">
            {businessInfo.address} &middot; {businessInfo.phone}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-[#C0533A] text-white font-bold uppercase tracking-[0.08em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#9E3D24] transition-colors"
            >
              Get Directions
            </Link>
            <Link
              href="/menu"
              className="inline-block border border-[#C0533A] text-[#C0533A] font-bold uppercase tracking-[0.08em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#C0533A] hover:text-white transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
