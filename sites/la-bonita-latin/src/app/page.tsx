import Image from "next/image";
import Link from "next/link";

const MENU_HIGHLIGHTS = [
  {
    name: "Bandeja Paisa",
    price: "$24.00",
    description:
      "The king of Colombian dishes — rice, plantain, sausage, pork belly, beans, avocado, beef, egg, and arepa. Crispy pork belly, tender beef, and perfectly seasoned beans.",
    image:
      "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
  },
  {
    name: "Sancocho Antioqueno",
    price: "$22.00",
    description:
      "Traditional Colombian hearty soup with beef, corn, potatoes, yuca, and plantain — served with rice and avocado on the side.",
    image:
      "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
  },
  {
    name: "Churrasco",
    price: "$26.00",
    description:
      "Juicy grilled steak served sizzling on a platter with three generous sides. Nicely seasoned and cooked to perfection.",
    image:
      "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
  },
  {
    name: "Empanadas",
    price: "$3.00",
    description:
      "Crispy handmade empanadas — chicken or beef — stuffed with fresh ingredients and served with house salsa. A customer favourite.",
    image:
      "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
  },
] as const;

const REVIEWS = [
  {
    text: "Food is delicious, good portions, wonderful service and specially all very fresh food.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "Bandeja paisa was delicious. Crispy pork belly, tender beef and perfectly seasoned beans.",
    author: "Wanderlog Reviewer",
    rating: 5,
  },
  {
    text: "The food here is soooo good! I loved it, has a cozy atmosphere and so clean.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "Perfect spot for fresh and authentic Colombian delights! The passion fruit milk juice took me straight back to Colombia.",
    author: "Google Reviewer",
    rating: 5,
  },
  {
    text: "Do NOT forget to try the 3 leches cake. A must-try dessert that consistently earns rave reviews.",
    author: "Yelp Reviewer",
    rating: 5,
  },
] as const;

function Stars({ count }: { readonly count: number }) {
  return (
    <div className="flex gap-0.5 text-brand-gold">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn"
          alt="La Bonita Latin American feast with churrasco, plantains, and traditional sides"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/75 via-[#2B1810]/40 to-[#2B1810]/75" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-7xl font-bold mb-4 leading-tight">
            La Bonita
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-brand-gold text-xl md:text-2xl mb-2 italic">
            Latin American Restaurant
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/90 text-lg mb-8">
            Authentic Colombian flavours &amp; Latin American classics in Mississauga
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-red-dark transition-colors duration-300 text-lg"
            >
              Explore Our Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-brand-gold text-brand-gold font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-gold hover:text-brand-espresso transition-colors duration-300 text-lg"
            >
              Come Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-4xl font-bold text-center mb-4">
            Our Signature Dishes
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-muted text-center mb-12 max-w-2xl mx-auto">
            Every plate is a celebration of Latin American flavours — generous
            portions made fresh daily from grandmother&apos;s recipes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENU_HIGHLIGHTS.map((item) => (
              <div
                key={item.name}
                className="bg-brand-white rounded-xl border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-xl font-bold">
                      {item.name}
                    </h3>
                    <span className="font-[family-name:var(--font-body)] text-brand-red font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-8 py-3 rounded-lg hover:bg-brand-red-dark transition-colors duration-300 inline-block"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About / Our Story */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-4xl font-bold mb-6">
              A Taste of Latin America in Mississauga
            </h2>
            <p className="font-[family-name:var(--font-body)] text-brand-brown mb-4 leading-relaxed">
              La Bonita was born from a lifelong passion for Latin American
              cooking. The owner grew up working in her{" "}
              <strong>grandmother&apos;s restaurant</strong>, learning the
              recipes and traditions that would shape La Bonita&apos;s kitchen.
            </p>
            <p className="font-[family-name:var(--font-body)] text-brand-brown mb-4 leading-relaxed">
              &ldquo;I grew up seeing her passion and love with which she
              created a high quality menu and variety of flavors. I decided to
              follow her footsteps in creating a space with a cozy atmosphere,
              offering typical Latin American dishes especially from
              Colombia.&rdquo;
            </p>
            <p className="font-[family-name:var(--font-body)] text-brand-brown leading-relaxed">
              Since <strong>2016</strong>, La Bonita has been highlighting Latin
              culture through exquisite dishes that delight the palate of the
              whole family — from hearty Bandeja Paisa to the famous tres leches
              cake that keeps guests coming back.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://itin-dev.wanderlogstatic.com/freeImage/YUVcC6oRCWhxbgBKvFYmoBKvmza7VWeR"
              alt="La Bonita Latin American Restaurant storefront at Canadian Place, Mississauga"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-4xl font-bold text-center mb-4">
            What Our Guests Say
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-muted text-center mb-12">
            Rated 4.3/5 from over 850 Google reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.author + review.text.slice(0, 20)}
                className="bg-brand-white rounded-xl border border-brand-border p-6 shadow-sm"
              >
                <Stars count={review.rating} />
                <p className="font-[family-name:var(--font-body)] text-brand-brown mt-4 mb-4 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm font-semibold">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Hours */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-4xl font-bold text-center mb-12">
            Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d-79.6173!3d43.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3886cfe7a3b1%3A0x4f5c1d7e8e2c1234!2s1065%20Canadian%20Pl%20%23109%2C%20Mississauga%2C%20ON%20L4W%200B8!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Bonita Latin American Restaurant location"
              />
            </div>

            {/* Hours + Address */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-2xl font-bold mb-6">
                Hours &amp; Location
              </h3>
              <address className="not-italic font-[family-name:var(--font-body)] text-brand-brown mb-6">
                <p className="font-semibold mb-1">
                  1065 Canadian Place, Unit 109
                </p>
                <p className="text-brand-muted mb-3">
                  Mississauga, ON L4W 0B8
                </p>
                <a
                  href="tel:9052320915"
                  className="text-brand-red font-semibold hover:text-brand-red-dark transition-colors duration-300"
                >
                  (905) 232-0915
                </a>
              </address>

              <ul className="space-y-3 font-[family-name:var(--font-body)]">
                <li className="flex justify-between border-b border-brand-border pb-2">
                  <span className="text-brand-brown font-medium">
                    Monday - Sunday
                  </span>
                  <span className="text-brand-espresso">
                    11:30 AM - 7:30 PM
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-brand-cream rounded-lg">
                <p className="font-[family-name:var(--font-body)] text-brand-brown text-sm font-semibold">
                  Payment: Cash &amp; E-Transfer Only
                </p>
                <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-1">
                  Extra seating available upstairs for larger groups
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=1065+Canadian+Place+Unit+109+Mississauga+ON+L4W+0B8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-6 py-3 rounded-lg hover:bg-brand-red-dark transition-colors duration-300 inline-block w-full text-center"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
