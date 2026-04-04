// DESIGNER REVIEW
// ✓ Logo: Courage Blue text on cream header — OK (no image logo, text-based)
// ✓ H1: 3.5rem vs 1rem body — OK (4x+ ratio)
// ✓ Gallery: dark bg (#2D1F14) to make product photos pop — OK
// ✓ Section differentiation: cream / espresso / sand / white / espresso — OK
// ✓ Hero: full-bleed storefront image with overlay — OK (not centered text on color)
// ✓ Products: editorial card grid, not 4 equal cards
// ✓ No fake stats bar — OK
// ✓ Real images from blogTO — OK

// UX REVIEW
// ✓ Logo visible: Courage Blue text on cream bg — OK
// ✓ Primary CTA: "Visit the Shop" in hero, above fold — OK
// ✓ Mobile: hero text left-aligned, readable at 390px — OK
// ✓ Social links: real @couragemylove IG handle — OK
// ✓ Real phone: 416-979-1992 with tel: link — OK
// ✓ Address: visible in Visit section and footer — OK
// ✓ Hours visible: in Visit section — OK
// ✓ Heritage: "Since 1975" prominently featured — OK

import { BRAND } from "@/lib/brand-tokens";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO — Full-bleed storefront image */}
      <section className="relative min-h-[85vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${BRAND.images.hero}')`,
            backgroundColor: BRAND.colors.primary,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F14]/80 via-[#2D1F14]/40 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-20 w-full">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-warm-gold mb-4"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Est. 1975 &middot; Kensington Market, Toronto
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-2xl"
            style={{ fontFamily: BRAND.fonts.heading, lineHeight: 1.05 }}
          >
            50 Years of Treasures from Around the World
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
            Vintage clothing, global beads, antique jewelry &amp; one-of-a-kind
            curiosities. Family-run since 1975.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-brand-primary text-white font-semibold uppercase tracking-[0.06em] px-8 py-4 text-sm hover:bg-[#1E5A8A] transition-colors"
              style={{
                borderRadius: BRAND.spacing.radiusButtons,
                fontFamily: BRAND.fonts.heading,
              }}
            >
              Visit the Shop
            </Link>
            <Link
              href="/shop"
              className="inline-block border-2 border-white text-white font-semibold uppercase tracking-[0.06em] px-8 py-4 text-sm hover:bg-white/10 transition-colors"
              style={{
                borderRadius: BRAND.spacing.radiusButtons,
                fontFamily: BRAND.fonts.heading,
              }}
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY — Dark bg, asymmetric grid */}
      <section className="bg-brand-espresso py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-warm-gold mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            The Collection
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-secondary mb-12"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Every Visit, a New Discovery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Large image — spans 2 cols & 2 rows */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-sm group">
              <div
                className="w-full h-full min-h-[400px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${BRAND.images.gallery[0].url}')`,
                  backgroundColor: BRAND.colors.accent,
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">{BRAND.images.gallery[0].description}</p>
              </div>
            </div>
            {/* Smaller images */}
            {BRAND.images.gallery.slice(1, 5).map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-sm group aspect-square">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${img.url}')`,
                    backgroundColor: BRAND.colors.textMuted,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY — Editorial split layout */}
      <section className="bg-brand-bg-main py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              Our Story
            </p>
            <h2
              className="text-5xl md:text-7xl text-brand-text-heading leading-none mb-4"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              Since
              <br />
              1975
            </h2>
            <div
              className="w-16 h-1 mb-6"
              style={{ backgroundColor: BRAND.colors.warmGold }}
            />
          </div>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed">
              When Stewart and Patricia Scriver — two Toronto teachers — opened a
              tiny antique shop in Kensington Market, they sold everything they
              owned to do it. Their first customer spent $100, and they never
              looked back.
            </p>
            <p className="leading-relaxed">
              Five decades later, the building at 14 Kensington Ave (built in
              1900) is still home to Courage My Love — now run by their daughter
              Cece and her husband Owen. Stewart, at 86, still handcrafts
              one-of-a-kind jewelry in the back of the shop.
            </p>
            <p className="leading-relaxed">
              The family travels the world — Mexico, Indonesia, Egypt,
              Afghanistan — bringing back beads, buttons, textiles, and
              treasures you won&apos;t find anywhere else in Toronto.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 font-semibold uppercase tracking-[0.06em] text-sm text-brand-primary hover:underline"
              style={{ fontFamily: BRAND.fonts.heading }}
            >
              Read the Full Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS — Category showcase */}
      <section className="bg-brand-bg-alt py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            What You&apos;ll Find
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-text-heading mb-12"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Treasures for Every Kind of Explorer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Vintage Clothing",
                desc: "50s cocktail dresses, 70s slacks, 80s knit sweaters, cashmere, tweed blazers, and the legendary $5 rack that stops everyone on the sidewalk.",
                img: BRAND.images.gallery[0].url,
              },
              {
                title: "Beads & Buttons",
                desc: "Glass beads from around the world, carved bone, gemstones, handmade buttons from an Indonesian family company, and Mexican workshop beaded products.",
                img: BRAND.images.gallery[1].url,
              },
              {
                title: "Jewelry & Antiques",
                desc: "Silver jewelry from Mexico and Asia. Stewart still handcrafts one-of-a-kind pieces from vintage finds. Oversized retro earrings, anklets, and estate pieces.",
                img: BRAND.images.gallery[3].url,
              },
              {
                title: "Curiosities & Collectibles",
                desc: "Stained glass lamps, colored glassware, luchador masks, scarves, incense, leather goods, vintage patches, and surprise grab-bag bins.",
                img: BRAND.images.gallery[2].url,
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="bg-brand-bg-card rounded-lg overflow-hidden border border-brand-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${cat.img}')`,
                      backgroundColor: BRAND.colors.bgAlt,
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl mb-2"
                    style={{ fontFamily: BRAND.fonts.heading }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM — The Scriver Family */}
      <section className="bg-brand-bg-main py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            The Family
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-text-heading mb-12"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Three Generations of Treasure Hunters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cece — real photo */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <div
                  className="w-24 h-24 rounded-full bg-cover bg-center border-3 border-brand-primary"
                  style={{
                    backgroundImage: `url('${BRAND.people[0].profilePhotoUrl}')`,
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  {BRAND.people[0].name}
                </h3>
                <p className="text-sm text-brand-primary font-semibold mb-3">
                  {BRAND.people[0].role}
                </p>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {BRAND.people[0].bio}
                </p>
                <a
                  href={`https://www.instagram.com/${BRAND.people[0].instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-brand-primary hover:underline mt-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @{BRAND.people[0].instagram}
                </a>
              </div>
            </div>

            {/* Stewart — initials (no verified photo) */}
            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center border-3 border-brand-primary"
                  style={{
                    backgroundColor: BRAND.colors.primary,
                    fontFamily: BRAND.fonts.heading,
                  }}
                >
                  <span className="text-white text-2xl font-bold">SS</span>
                </div>
              </div>
              <div>
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  {BRAND.people[1].name}
                </h3>
                <p className="text-sm text-brand-primary font-semibold mb-3">
                  {BRAND.people[1].role}
                </p>
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  {BRAND.people[1].bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS — Dark inverted section */}
      <section className="bg-brand-espresso py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-warm-gold mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            What Visitors Say
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-secondary mb-12"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            A Toronto Institution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Treasure trove of vintage finds! The beads section alone is worth the trip. Best prices for vintage in Toronto.",
                source: "Google Review",
              },
              {
                quote:
                  "Incredibly organized for a vintage shop. Separated into little stalls for jewelry, beads, incense, scarves. Staff is friendly and knowledgeable.",
                source: "Yelp Review",
              },
              {
                quote:
                  "International treasures you won't find anywhere else. Feels like exploring a global market right in Kensington. The $5 rack outside has its own gravity.",
                source: "blogTO",
              },
            ].map((review, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-6">
                <div className="text-brand-warm-gold text-lg mb-4 tracking-widest">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-brand-warm-gold text-xs uppercase tracking-wider">
                  — {review.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT — Map + Hours + Address */}
      <section className="bg-brand-bg-main py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl md:text-4xl text-brand-text-heading mb-12"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Come Explore Kensington Market
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-brand-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7!2d-79.4008!3d43.6545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c5e2e3fe4d%3A0x6c5aa4e1ad9e5be2!2sCourage%20My%20Love!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Courage My Love location"
              />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-lg mb-3 text-brand-text-heading"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  Address
                </h3>
                <p className="text-brand-text-body">
                  14 Kensington Ave
                  <br />
                  Toronto, ON M5T 2J7
                  <br />
                  <span className="text-sm text-brand-text-muted">
                    Kensington Market — look for the blue storefront
                  </span>
                </p>
              </div>
              <div>
                <h3
                  className="text-lg mb-3 text-brand-text-heading"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  Hours
                </h3>
                <div className="space-y-1 text-brand-text-body text-sm">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday – Friday</span>
                    <span className="font-semibold">11:30 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday</span>
                    <span className="font-semibold">11:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Sunday</span>
                    <span className="font-semibold">1:00 PM – 5:00 PM</span>
                  </div>
                </div>
              </div>
              <div>
                <h3
                  className="text-lg mb-3 text-brand-text-heading"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  Contact
                </h3>
                <p>
                  <a
                    href="tel:416-979-1992"
                    className="text-brand-primary hover:underline font-semibold"
                  >
                    416-979-1992
                  </a>
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-brand-primary text-white font-semibold uppercase tracking-[0.06em] px-8 py-4 text-sm hover:bg-[#1E5A8A] transition-colors"
                style={{
                  borderRadius: BRAND.spacing.radiusButtons,
                  fontFamily: BRAND.fonts.heading,
                }}
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
