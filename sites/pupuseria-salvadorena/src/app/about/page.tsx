import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Pupuseria Salvadorena & Authentic Mexican Foods",
  description:
    "Learn about Pupuseria Salvadorena — bringing the authentic flavours of El Salvador and Mexico to Finch Ave W in North York since day one.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://itin-dev.wanderlogstatic.com/freeImage/FqNAGbustgz3GkG4jhC3B51gvmy0YeQ8"
          alt="Pupuseria Salvadorena storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
            Our Story
          </h1>
          <p className="font-body text-lg text-gray-200">
            A family tradition of authentic Salvadoran cooking
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-rjldtbf5-food1.jpg"
                alt="Handmade pupusas — our signature dish"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-4">
                Handmade With Love
              </h2>
              <p className="font-body text-brand-body leading-relaxed mb-4">
                At Pupuseria Salvadorena, every pupusa is handmade to order using
                traditional recipes passed down through generations. We use fresh
                masa, real cheese, and authentic fillings &mdash; chicharron,
                loroco, frijol &mdash; to create the genuine taste of El
                Salvador.
              </p>
              <p className="font-body text-brand-body leading-relaxed">
                Located on Finch Ave W in the Emery Village neighbourhood of
                North York, we have been serving the community with the same
                commitment to quality and authenticity since day one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="https://itin-dev.wanderlogstatic.com/freeImage/0oeMowCec7GnDcqMYDmf0uFpepcYmqHX"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="font-heading text-3xl font-bold text-brand-dark mb-4">
                More Than Pupusas
              </h2>
              <p className="font-body text-brand-body leading-relaxed mb-4">
                While our pupusas are the star of the menu, we also serve a full
                range of authentic Mexican favourites &mdash; tacos al pastor,
                burritos, quesadillas, and hearty soups like sopa de res that
                warm the soul.
              </p>
              <p className="font-body text-brand-body leading-relaxed">
                Pair your meal with our traditional drinks: Salvadoran horchata,
                agua de jamaica, or tamarindo. Every sip and every bite is made
                to transport you back to Central America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                text: "Traditional recipes, real ingredients, no shortcuts. Every dish is made the way it would be back home in El Salvador and Mexico.",
              },
              {
                title: "Community",
                text: "We are proud to be part of the Emery Village neighbourhood. Our doors are open to everyone — families, friends, and first-timers.",
              },
              {
                title: "Fresh Daily",
                text: "Nothing is pre-made or frozen. Our masa is prepared fresh every morning and each pupusa is made to order when you place it.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-xl border border-brand-border p-8 shadow-sm text-center"
              >
                <h3 className="font-heading text-xl font-bold text-brand-maroon mb-3">
                  {val.title}
                </h3>
                <p className="font-body text-brand-body leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-maroon text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Come Visit Us
          </h2>
          <p className="font-body text-lg mb-8 text-gray-100">
            2459 Finch Ave W, North York &mdash; Open 7 days a week
          </p>
          <a
            href="tel:4167434001"
            className="inline-block bg-white text-brand-maroon font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-cream transition-colors"
          >
            Call (416) 743-4001
          </a>
        </div>
      </section>
    </>
  );
}
