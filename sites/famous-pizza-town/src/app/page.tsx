import Link from "next/link";

const features = [
  {
    icon: "🍕",
    title: "Handcrafted Pizza",
    description:
      "Every pie is made fresh to order with premium toppings and hand-stretched dough.",
  },
  {
    icon: "🚀",
    title: "Fast Delivery",
    description:
      "Get your food delivered right to your door through Uber Eats, SkipTheDishes, or DoorDash.",
  },
  {
    icon: "⭐",
    title: "Loyalty Rewards",
    description:
      "Earn points on every purchase and unlock exclusive deals as a regular customer.",
  },
];

const popularItems = [
  {
    name: "Classic Pepperoni",
    description: "Loaded with savoury pepperoni and stretchy mozzarella on our signature sauce.",
    tag: "Fan Favourite",
    gradient: "from-red-500 to-orange-400",
  },
  {
    name: "Famous Wings",
    description: "Crispy golden wings tossed in your choice of flavour. Perfect for sharing.",
    tag: "Best Seller",
    gradient: "from-amber-500 to-yellow-400",
  },
  {
    name: "Panzerotti",
    description: "Stuffed with your favourite toppings and baked to golden perfection.",
    tag: "House Special",
    gradient: "from-primary-600 to-primary-400",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-gray-950 to-gray-950" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="max-w-2xl">
            <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Scarborough&rsquo;s Favourite Pizza
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fresh, Flavourful &amp; Delivered{" "}
              <span className="text-primary-500">Fast</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From hand-tossed pizzas to crispy wings and stuffed panzerotti,
              we bring bold flavour right to your neighbourhood. Order for
              pickup or get it delivered.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+16473523786"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
              >
                Call to Order
              </a>
              <Link
                href="/menu"
                className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-base"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              What People Love
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our most popular picks that keep Scarborough coming back for more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                >
                  <span className="text-white/30 text-6xl font-display font-bold">
                    FPT
                  </span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              See Full Menu
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Deals Banner */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Today&rsquo;s Specials
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Check out our daily walk-in specials and combo deals. Great food at
            great prices &mdash; that&rsquo;s how we roll.
          </p>
          <a
            href="tel:+16473523786"
            className="inline-block bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Call for Today&rsquo;s Deals
          </a>
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Order Your Way
          </h2>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto">
            Pick up in store or order delivery through your favourite platform.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Uber Eats", "SkipTheDishes", "DoorDash", "In-Store Pickup"].map(
              (partner) => (
                <div
                  key={partner}
                  className="bg-white border border-gray-200 rounded-xl px-8 py-4 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {partner}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
