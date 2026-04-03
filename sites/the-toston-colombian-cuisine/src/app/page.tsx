import Image from "next/image";
import Link from "next/link";

const MENU_HIGHLIGHTS = [
  {
    name: "Empanadas",
    price: "$3.00",
    description:
      "Crispy handmade empanadas — chicken, beef, or cheese — served with our house salsa.",
    image:
      "https://live.staticflickr.com/65535/54066733549_05928f6086_o.jpg",
  },
  {
    name: "Bandeja Paisa",
    price: "$24.00",
    description:
      "The king of Colombian dishes — rice, plantain, sausage, pork belly, beans, avocado, beef, egg, and arepa.",
    image:
      "https://live.staticflickr.com/65535/54066345906_d60e6f10d0_o.jpg",
  },
  {
    name: "Tostone Combo",
    price: "$21.00",
    description:
      "Flattened green plantain fried to perfection, topped with pulled beef, salad, and avocado.",
    image:
      "https://live.staticflickr.com/65535/54066676489_6b00674d87_o.jpg",
  },
  {
    name: "Ajiaco",
    price: "$23.00",
    description:
      "Traditional Colombian chicken and potato soup with rice, sweet plantain, and avocado sides.",
    image:
      "https://live.staticflickr.com/65535/54066809755_8b237485f2_o.jpg",
  },
] as const;

const REVIEWS = [
  {
    text: "Oh my gosh from the food to the staff so amazing. She explained us the menu and the culture.",
    author: "Monique F.",
    rating: 5,
  },
  {
    text: "A gem. There's a reason why it's so highly rated. Warm, friendly, cozy and family vibes.",
    author: "J.R. M.",
    rating: 5,
  },
  {
    text: "What an amazing hole in the wall in East Markham! This place has such an authentic and warm feel.",
    author: "Randa",
    rating: 5,
  },
  {
    text: "This is the best chicken I ever try in Toronto. Cristina and Alex made everything with love.",
    author: "Google Reviewer",
    rating: 5,
  },
] as const;

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tue - Thu", time: "12 PM - 7 PM" },
  { day: "Fri - Sat", time: "12 PM - 9 PM" },
  { day: "Sunday", time: "12 PM - 6 PM" },
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://live.staticflickr.com/65535/54066603963_608c6b5982_o.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/70 via-[#2C1810]/40 to-[#2C1810]/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-7xl font-bold mb-4 leading-tight">
            The Toston
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-brand-gold text-xl md:text-2xl mb-2 italic">
            Colombian Cuisine
          </p>
          <p className="font-[family-name:var(--font-body)] text-white/90 text-lg mb-8">
            Authentic paisa flavours crafted with love in Markham
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-brand-gold text-brand-coffee font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-gold-dark transition-colors duration-300 text-lg"
            >
              View Our Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-brand-gold text-brand-gold font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-gold hover:text-brand-coffee transition-colors duration-300 text-lg"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-4xl font-bold text-center mb-4">
            Our Signature Dishes
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-muted text-center mb-12 max-w-2xl mx-auto">
            Every plate tells the story of Colombia — handmade fresh daily by
            Chef Alexander
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
                    <h3 className="font-[family-name:var(--font-heading)] text-brand-coffee text-xl font-semibold">
                      {item.name}
                    </h3>
                    <span className="font-[family-name:var(--font-body)] text-brand-gold font-bold">
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
              className="bg-brand-gold text-brand-coffee font-[family-name:var(--font-body)] font-semibold px-8 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors duration-300 inline-block"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About / Our Story */}
      <section className="bg-brand-tan py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-4xl font-bold mb-6">
              A Taste of Colombia in Markham
            </h2>
            <p className="font-[family-name:var(--font-body)] text-brand-brown mb-4 leading-relaxed">
              The Toston is more than a restaurant — it&apos;s a love letter to
              Colombian cafe culture. Husband-and-wife team{" "}
              <strong>Chef Alexander Sandoval</strong> and{" "}
              <strong>Cristina Arbelaez</strong> opened this cozy 18-seat spot
              to share the flavours they grew up with.
            </p>
            <p className="font-[family-name:var(--font-body)] text-brand-brown mb-4 leading-relaxed">
              &ldquo;We wanted to bring Colombia&apos;s rich cafe culture to
              Canada, so everything here is themed after coffee,&rdquo; says
              Cristina. Alexander is most closely connected to the signature
              toston — a labour-intensive dish where he fries the whole plantain
              before flattening it to create a base for sauteed vegetables or
              meat.
            </p>
            <p className="font-[family-name:var(--font-body)] text-brand-brown leading-relaxed">
              Every dish is made from scratch with traditional paisa recipes. The
              empanadas are hand-formed, the sausage is house-made, and the
              Bandeja Paisa is piled high the way it should be.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://live.staticflickr.com/65535/54066676359_f7536d073f_o.jpg"
              alt="The Toston Colombian Cuisine storefront in Markham"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-brand-cream py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-4xl font-bold text-center mb-4">
            What Our Guests Say
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-muted text-center mb-12">
            Rated 4.7/5 from over 800 Google reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.author}
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
      <section className="bg-brand-tan py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-4xl font-bold text-center mb-12">
            Find Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.5!2d-79.2283!3d43.8544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d56e9c8d4c7b%3A0x6e2c0e8e6e2c0e8e!2s35%20Karachi%20Dr%20Unit%2039%2C%20Markham%2C%20ON%20L3S%200B5!5e0!3m2!1sen!2sca!4v1680000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Toston Colombian Cuisine location"
              />
            </div>

            {/* Hours + Address */}
            <div className="bg-brand-white rounded-xl border border-brand-border p-8 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-brand-coffee text-2xl font-bold mb-6">
                Hours &amp; Location
              </h3>
              <address className="not-italic font-[family-name:var(--font-body)] text-brand-brown mb-6">
                <p className="font-semibold mb-1">
                  35 Karachi Dr. Unit 39
                </p>
                <p className="text-brand-muted mb-3">
                  Markham, ON L3S 0B5
                </p>
                <a
                  href="tel:6476662400"
                  className="text-brand-gold font-semibold hover:text-brand-gold-dark transition-colors duration-300"
                >
                  (647) 666-2400
                </a>
              </address>

              <ul className="space-y-3 font-[family-name:var(--font-body)]">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between border-b border-brand-border pb-2 last:border-0"
                  >
                    <span className="text-brand-brown font-medium">
                      {h.day}
                    </span>
                    <span
                      className={
                        h.time === "Closed"
                          ? "text-brand-red font-semibold"
                          : "text-brand-coffee"
                      }
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://maps.google.com/?q=35+Karachi+Dr+Unit+39+Markham+ON+L3S+0B5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-brand-gold text-brand-coffee font-[family-name:var(--font-body)] font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-dark transition-colors duration-300 inline-block w-full text-center"
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
