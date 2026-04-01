import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Famous Pizza Town",
  description:
    "Learn about Famous Pizza Town — Scarborough's go-to spot for fresh pizza, wings, and more.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            A neighbourhood pizza shop rooted in quality, flavour, and community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <span className="text-primary-300 text-8xl font-bold">FPT</span>
            </div>
            <div>
              <p className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
                Scarborough&rsquo;s Go-To Pizza Spot
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Famous Pizza Town has been a staple on Victoria Park Avenue,
                  serving the Scarborough community with authentic, freshly made
                  pizza, wings, panzerotti, and more. What started as a simple
                  neighbourhood shop has grown into one of the area&rsquo;s most
                  trusted quick-service restaurants.
                </p>
                <p>
                  We believe great food starts with great ingredients. Our dough
                  is prepared fresh daily, our toppings are never frozen, and
                  every order is made with care. Whether you are grabbing a quick
                  slice on your lunch break or feeding the whole family on a
                  Friday night, we have got you covered.
                </p>
                <p>
                  With convenient delivery through Uber Eats, SkipTheDishes,
                  DoorDash, and TikMe, plus easy in-store pickup, getting your
                  favourite meal has never been simpler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">
              What We Stand For
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Every pizza we make reflects these core values.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Fresh Ingredients",
                description: "Every dish starts with quality ingredients prepared in-house daily. No shortcuts, no compromises.",
              },
              {
                title: "Community First",
                description: "We are proud to be part of the Scarborough community, serving neighbours and families every day.",
              },
              {
                title: "Customer Satisfaction",
                description: "Your experience matters. We go the extra mile to make sure every order is exactly right.",
              },
              {
                title: "Quick & Convenient",
                description: "Whether you dine in, pick up, or get delivery, we make sure your food arrives fast and fresh.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-xl p-8">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Ready to Try Famous Pizza Town?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Stop by, call ahead, or order delivery. We cannot wait to serve you.
          </p>
          <a
            href="tel:+16473523786"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Call (647) 352-3786
          </a>
        </div>
      </section>
    </>
  );
}
