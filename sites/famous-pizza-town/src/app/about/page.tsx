import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Famous Pizza Town",
  description:
    "Learn about Famous Pizza Town — Scarborough's go-to spot for fresh pizza, wings, and more.",
};

const values = [
  {
    title: "Fresh Ingredients",
    description:
      "Every dish starts with quality ingredients prepared in-house daily. No shortcuts, no compromises.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community First",
    description:
      "We are proud to be part of the Scarborough community, serving neighbours and families every day.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your experience matters. We go the extra mile to make sure every order is exactly right.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quick & Convenient",
    description:
      "Whether you dine in, pick up, or get delivery, we make sure your food arrives fast and fresh.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A neighbourhood pizza shop rooted in quality, flavour, and community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <span className="text-white/20 text-8xl font-display font-bold">
                FPT
              </span>
            </div>

            {/* Text */}
            <div>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Scarborough&rsquo;s Go-To Pizza Spot
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
                  every order is made with care. Whether you are grabbing a
                  quick slice on your lunch break or feeding the whole family on
                  a Friday night, we have got you covered.
                </p>
                <p>
                  With convenient delivery through Uber Eats, SkipTheDishes, and
                  DoorDash, plus easy in-store pickup, getting your favourite
                  meal has never been simpler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Every pizza we make reflects these core values.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to Try Famous Pizza Town?
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Stop by, call ahead, or order delivery. We cannot wait to serve you.
          </p>
          <a
            href="tel:+16473523786"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Call (647) 352-3786
          </a>
        </div>
      </section>
    </>
  );
}
