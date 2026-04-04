import { BRAND } from "@/lib/brand-tokens";
import Link from "next/link";

const categories = [
  {
    title: "Vintage Clothing",
    description:
      "From 50s cocktail dresses to 80s knit sweaters. Cashmere, tweed blazers, tie-dyed pieces, and the legendary $5 rack that stops everyone on the sidewalk.",
    items: [
      "50s & 60s cocktail dresses",
      "70s flared slacks & denim",
      "80s knit sweaters & windbreakers",
      "Vintage cashmere & wool coats",
      "Tweed blazers & sport jackets",
      "The famous $5 outdoor rack",
      "$2 grab bags — mystery vintage",
    ],
    img: BRAND.images.gallery[0].url,
  },
  {
    title: "Beads & Buttons",
    description:
      "A world-class collection sourced from Mexico, Indonesia, Egypt, and beyond. Glass beads, carved bone, gemstones, and handmade buttons from an Indonesian family company.",
    items: [
      "Glass beads from around the world",
      "Carved bone beads",
      "Gemstone beads — amethyst, turquoise, jade",
      "Handmade Indonesian buttons",
      "Mexican workshop beaded products",
      "Vintage & antique beads from every era",
      "Loose beads & pre-strung strands",
    ],
    img: BRAND.images.gallery[1].url,
  },
  {
    title: "Jewelry & Silver",
    description:
      "Silver jewelry from Mexico and Asia. One-of-a-kind pieces handcrafted by Stewart Scriver from vintage finds. Oversized retro earrings, anklets, and estate pieces.",
    items: [
      "Mexican silver jewelry",
      "Asian silver pieces",
      "Stewart's handcrafted one-of-a-kind pieces",
      "Oversized retro earrings",
      "Vintage anklets & bracelets",
      "Estate jewelry collection",
      "Repurposed vintage-to-new designs",
    ],
    img: BRAND.images.gallery[3].url,
  },
  {
    title: "Curiosities & Home",
    description:
      "Stained glass lamps, colored glassware, luchador masks, incense, leather goods, vintage patches, and things you didn't know you needed until you found them.",
    items: [
      "Stained glass lamps",
      "Colored glassware (new addition)",
      "Luchador masks",
      "Scarves & textiles from around the world",
      "Incense & aromatics",
      "Leather goods & bags",
      "Vintage patches & pins",
    ],
    img: BRAND.images.gallery[2].url,
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg-alt py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="text-xs uppercase tracking-[0.2em] text-brand-primary mb-3"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            The Collection
          </p>
          <h1
            className="text-4xl md:text-6xl text-brand-text-heading max-w-2xl mb-6"
            style={{ fontFamily: BRAND.fonts.heading, lineHeight: 1.05 }}
          >
            What You&apos;ll Discover
          </h1>
          <p className="text-lg text-brand-text-muted max-w-lg">
            Every visit reveals something new. The inventory changes constantly
            as the family brings back treasures from around the world.
          </p>
        </div>
      </section>

      {/* Categories — editorial list with images */}
      {categories.map((cat, i) => (
        <section
          key={cat.title}
          className={`py-20 ${i % 2 === 0 ? "bg-brand-bg-main" : "bg-brand-bg-alt"}`}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <div
                  className="aspect-[4/3] rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${cat.img}')`,
                    backgroundColor: BRAND.colors.bgAlt,
                  }}
                />
              </div>
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <h2
                  className="text-3xl text-brand-text-heading mb-4"
                  style={{ fontFamily: BRAND.fonts.heading }}
                >
                  {cat.title}
                </h2>
                <p className="text-brand-text-body mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-text-muted"
                    >
                      <span className="text-brand-primary mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: BRAND.colors.primary }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl text-white mb-4"
            style={{ fontFamily: BRAND.fonts.heading }}
          >
            Ready to Explore?
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            The best way to experience Courage My Love is in person. New
            treasures arrive every week.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-primary font-semibold uppercase tracking-[0.06em] px-8 py-4 text-sm hover:bg-white/90 transition-colors"
            style={{
              borderRadius: BRAND.spacing.radiusButtons,
              fontFamily: BRAND.fonts.heading,
            }}
          >
            Visit Us in Kensington Market
          </Link>
        </div>
      </section>
    </>
  );
}
