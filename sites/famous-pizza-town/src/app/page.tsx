import Link from "next/link";

const deals = [
  {
    name: "Famous Deal",
    includes: "1 Large Pizza (3 toppings), 24 Wings, 3 Pop, 1 Dip",
    highlight: true,
  },
  {
    name: "Famous Wings Special",
    includes: "12 Wings, 4 Garlic Bread, 1 lb Wedges, 3 Pop",
    highlight: false,
  },
  {
    name: "Manager's Special",
    includes: "Large Pizza (5 toppings), Garlic Bread or Wedges, 1 Dip, 2 Free Pop",
    highlight: false,
  },
];

const deliveryPartners = ["TikMe", "Uber Eats", "SkipTheDishes", "DoorDash"];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Now Offering Contactless Delivery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight mb-6">
            Fresh Pizza, Wings &amp; More <br className="hidden sm:block" />
            in <span className="text-primary-500">Scarborough</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            At Famous Pizza Town, we are dedicated to serving the residents of
            Scarborough with delicious pizza, wings, and more. Order for pickup
            or get it delivered right to your door.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+16473523786"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Order Pickup
            </a>
            <Link
              href="/menu"
              className="border border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-3">
              Our Best Deals
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Great food at great prices — that&rsquo;s how we roll.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div
                key={deal.name}
                className={`rounded-xl p-8 ${
                  deal.highlight
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h3
                  className={`font-semibold text-xl mb-3 ${
                    deal.highlight ? "text-white" : "text-gray-800"
                  }`}
                >
                  {deal.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    deal.highlight ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {deal.includes}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400 text-sm">
            Prices available in-store or by phone. Call{" "}
            <a
              href="tel:+16473523786"
              className="text-primary-500 hover:underline"
            >
              (647) 352-3786
            </a>{" "}
            to order.
          </p>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <span className="text-primary-300 text-7xl font-bold">FPT</span>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                Your Neighbourhood Pizza Spot
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Famous Pizza Town has been serving the Scarborough community with
                fresh, flavourful food. From hand-tossed pizzas to crispy wings
                and stuffed panzerotti, every order is made with care using
                quality ingredients.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Whether you&rsquo;re grabbing a quick slice or feeding the whole
                family, we&rsquo;ve got you covered with convenient delivery and
                easy pickup.
              </p>
              <Link
                href="/about"
                className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                Learn more about us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">
            Order Your Way
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Pick up in store or order delivery through your favourite platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {deliveryPartners.map((partner) => (
              <div
                key={partner}
                className="bg-white border border-gray-200 rounded-xl px-8 py-4 text-sm font-medium text-gray-600"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
