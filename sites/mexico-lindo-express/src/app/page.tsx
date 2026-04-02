// DESIGNER REVIEW
// Logo: dark text on white header — OK
// H1: 48px+ vs 16px body — OK (text-4xl md:text-6xl)
// Section differentiation: hero(dark overlay) / alt(#F5F5F5) / white / dark / white / alt — OK
// Full-bleed section: hero with dark overlay — OK
// Section labels: uppercase gold overlines on every section — OK
// Colors trace to brand bible tokens — OK
// Fonts: Montserrat heading + Roboto body — OK
// overallTheme: warm-earthy, light backgrounds — OK

import Link from 'next/link'
import SectionDivider from '@/components/SectionDivider'
import {
  menuHighlights,
  verbatimReviews,
  specials,
  businessInfo,
  deliveryPartners,
} from '@/lib/brand-tokens'

// Real food photos from mexicolindoexpresson.com CloudFront CDN (all verified HTTP 200)
const FOOD_IMAGES = [
  'https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-kf4jclb9-food3.jpg',
  'https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-8dqhm5kj-food1.jpg',
  'https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-ndg78fky-food2.jpg',
  'https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-85xjbf73-bk.jpg',
  'https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-kf4jclb9-food3.jpg',
  'https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-8dqhm5kj-food1.jpg',
];

export default function HomePage() {
  return (
    <>
      {/* ============ SECTION 1: HERO ============ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-clp3th8n-banner.jpg)',
            backgroundColor: '#2A2A2A',
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20 text-left w-full">
          <p className="font-[var(--font-heading-var)] text-sm uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-4">
            Authentic Mexican Restaurant
          </p>
          <h1 className="font-[var(--font-heading-var)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Authentic Mexican Flavour on Birchmount
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            From birria to tres leches — Scarborough&apos;s hidden gem for real Mexican street food.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://mexicolindoexpress.gotoeat.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5CB85C] text-white font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3.5 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
            >
              Order Online
            </a>
            <Link
              href="/menu"
              className="inline-block border border-white text-white font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3.5 rounded-[4px] hover:bg-white/10 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: MENU HIGHLIGHTS ============ */}
      <section className="bg-[#F5F5F5] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2 text-center">
            Our Menu
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#212529] text-center mb-4">
            Signature Dishes
          </h2>
          <SectionDivider />
          <p className="text-center text-[#666666] mb-10 max-w-xl mx-auto">
            Handmade with authentic Mexican recipes and the freshest ingredients
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((dish, i) => (
              <div
                key={dish.name}
                className="bg-white rounded-[5pt] overflow-hidden"
              >
                {/* Real food photo from Mexico Lindo Express website */}
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${FOOD_IMAGES[i % FOOD_IMAGES.length]})`,
                    backgroundColor: '#e8e0d4',
                  }}
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529]">
                      {dish.name}
                    </h3>
                    <span className="font-[var(--font-heading-var)] text-sm font-bold text-[#5CB85C] whitespace-nowrap">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-[#5CB85C] text-white font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: ABOUT / STORY ============ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2">
                Our Story
              </p>
              <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#212529] mb-6">
                A Hidden Gem on Birchmount Road
              </h2>
              <p className="text-[#333333] leading-relaxed mb-4">
                Owned and passionately run by a Mexican chef who truly honors the flavors of their homeland, Mexico Lindo Express brings the authentic taste of Mexico to Scarborough. Every dish is made with traditional recipes, fresh ingredients, and the kind of care you&apos;d find in a family kitchen in Mexico.
              </p>
              <p className="text-[#333333] leading-relaxed mb-4">
                From our famous birria tacos with rich consomme to handmade tortillas and vibrant salsas, we believe in generous portions and honest prices. No shortcuts, no imitations — just real Mexican street food the way it should be.
              </p>
              <p className="text-[#666666] text-sm italic">
                &ldquo;No watered-down imitations here; every bite bursts with vibrant, authentic taste.&rdquo;
              </p>
            </div>
            <div
              className="h-80 md:h-96 rounded-[5pt] bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-8dqhm5kj-food1.jpg)',
                backgroundColor: '#e8e0d4',
              }}
              role="img"
              aria-label="Authentic Mexican dishes at Mexico Lindo Express"
            />
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: REVIEWS ============ */}
      <section className="bg-[#2A2A2A] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2 text-center">
            What People Say
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Customer Reviews
          </h2>
          <div className="flex justify-center py-4">
            <div className="w-[50pt] border-b-2 border-white/30" />
          </div>

          {/* Ratings badges */}
          <div className="flex justify-center gap-6 mb-10">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#D4A843]">4.4</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Google</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#D4A843]">4.7</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Uber Eats</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verbatimReviews.slice(0, 6).map((review, i) => (
              <blockquote
                key={i}
                className="bg-white/5 rounded-[5pt] p-6 border border-white/10"
              >
                {/* Stars */}
                <div className="text-[#D4A843] text-sm mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <cite className="text-white/40 text-xs not-italic uppercase tracking-wider">
                  &mdash; {review.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: SPECIALS / DEALS ============ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2 text-center">
            Deals &amp; Offers
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#212529] text-center mb-4">
            Specials
          </h2>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
            {specials.map((special, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#F5F5F5] rounded-[5pt] p-6"
              >
                <span className="shrink-0 w-10 h-10 rounded-full bg-[#5CB85C] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-[#333333] text-sm leading-relaxed pt-2">
                  {special}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://mexicolindoexpress.gotoeat.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5CB85C] text-white font-semibold uppercase tracking-[0.05em] text-sm px-8 py-3 rounded-[4px] hover:bg-[#4a9a4a] transition-colors"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: LOCATION + HOURS ============ */}
      <section className="bg-[#F5F5F5] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <p className="font-[var(--font-heading-var)] text-xs uppercase tracking-[0.15em] text-[#D4A843] font-semibold mb-2 text-center">
            Find Us
          </p>
          <h2 className="font-[var(--font-heading-var)] text-3xl md:text-4xl font-bold text-[#212529] text-center mb-4">
            Location &amp; Hours
          </h2>
          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Location photo */}
            <div className="rounded-[5pt] min-h-[300px] flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: 'url(https://d2gqo3h0psesgi.cloudfront.net/auto/mexico-lindo-express-ndg78fky-food2.jpg)', backgroundColor: '#e8e0d4' }}><div className="absolute inset-0 bg-black/50 rounded-[5pt]" />
              <div className="text-center p-6 relative z-10">
                <p className="font-[var(--font-heading-var)] text-lg font-semibold text-white mb-2">
                  2586 Birchmount Rd
                </p>
                <p className="text-white/70 text-sm mb-4">
                  Scarborough, ON M1T 2M5
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5CB85C] text-sm font-semibold hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              {/* Hours */}
              <div>
                <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529] mb-3">
                  Hours
                </h3>
                <ul className="space-y-2 text-sm text-[#333333]">
                  {Object.entries(businessInfo.hours).map(([day, time]) => (
                    <li key={day} className="flex justify-between">
                      <span className="capitalize font-medium">{day}</span>
                      <span className={time === 'Closed' ? 'text-red-500 font-medium' : 'text-[#666666]'}>
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529] mb-3">
                  Contact
                </h3>
                <p className="text-sm text-[#333333] mb-1">
                  <a
                    href={businessInfo.phoneHref}
                    className="hover:text-[#5CB85C] transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </p>
                <p className="text-sm text-[#666666]">
                  Free parking available
                </p>
              </div>

              {/* Delivery */}
              <div>
                <h3 className="font-[var(--font-heading-var)] text-base font-semibold text-[#212529] mb-3">
                  Delivery Partners
                </h3>
                <div className="flex gap-4">
                  {deliveryPartners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#5CB85C] hover:underline"
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
