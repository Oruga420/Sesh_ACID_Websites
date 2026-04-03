import Image from "next/image";
import Link from "next/link";

const TIMELINE = [
  {
    title: "The Beginning",
    text: "Graciela moved to Canada from Paraguay, a country where empanadas are a staple in their diet.",
  },
  {
    title: "Growing Up",
    text: "When her son Matthew was born, she would travel back to Paraguay often so that he could experience South American culture.",
  },
  {
    title: "The Craving",
    text: "When Matthew grew older and wasn't able to go to Paraguay as much, one thing became clear... his craving for empanadas grew.",
  },
  {
    title: "Family Tradition",
    text: "Nothing was more exciting than when Graciela would make empanadas for the whole family. Matthew and Graciela began preparing empanadas for their friends as well, and they were always a big hit.",
  },
  {
    title: "The Mission",
    text: "Everywhere you go, there's burgers, pizzas, and tacos... but not empanadas. The mission was simple: to give Canadians the chance to try a new type of food that is delicious, comforting, and unique.",
  },
  {
    title: "Latinito is Born",
    text: "Graciela and Matthew got to work to make Latinito Empanadas a reality. They opened up their first location, and now are able to share their love for empanadas with anyone who wishes to try them.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-red py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-white text-5xl md:text-7xl font-black uppercase">
            Our Story
          </h1>
          <p className="font-body text-white/90 text-lg mt-2">
            From Paraguay to Brampton &mdash; A Family Journey
          </p>
        </div>
      </section>

      {/* Story Infographic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/eb9249be-9ac6-4dd1-b8cd-002972440a95/LAST+LAST+LAST+STORY+PAGE.png"
              alt="The Latinito Empanadas story infographic - Matthew and Graciela's journey from Paraguay to Brampton"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="font-heading text-brand-red text-3xl md:text-4xl font-bold uppercase mb-6">
              The Inspiration
            </h2>
            <p className="font-body text-brand-dark leading-relaxed mb-4">
              Matthew has enjoyed cooking and watching his mother prepare many
              South American dishes since he was a child. His favourite food has
              always been empanadas, and the thought that many people in Ontario
              have never even heard of them inspired him to start an empanada
              business.
            </p>
            <p className="font-body text-brand-dark leading-relaxed mb-4">
              Matthew has always wanted to introduce the delightful South
              American pastries to Canadians, and he hopes to popularize
              empanadas for anyone to enjoy.
            </p>
            <p className="font-body text-brand-dark leading-relaxed font-semibold">
              Latinito Empanadas strives to produce quality food products as
              safe, delicious and as authentic as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-brand-red text-3xl md:text-4xl font-bold uppercase text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-0">
            {TIMELINE.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-brand-red border-4 border-brand-yellow shrink-0" />
                  {i < TIMELINE.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-red/30" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-heading text-brand-dark text-xl font-bold uppercase mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-brand-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-red text-3xl md:text-4xl font-bold uppercase mb-4">
            What Are Empanadas?
          </h2>
          <p className="font-body text-brand-dark max-w-3xl mx-auto leading-relaxed mb-12">
            Empanadas are delicious Latin American pastries that are filled with
            a variety of different ingredients. At Latinito, we make fresh dough
            daily, knead it into perfect discs, add our signature fillings, and
            seal each one with our signature press. Every empanada is cooked
            fresh to order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/bc593b1d-86eb-4439-b207-a4ed82cb1fd2/Screenshot+2023-09-12+234217.png"
                alt="All 8 Latinito empanada varieties"
                fill
                className="object-contain bg-brand-cream"
              />
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/ae300142-ad78-42b2-835d-d515486a8cf5/DIPS+V2.png"
                alt="Latinito homemade dipping sauces"
                fill
                className="object-contain bg-brand-cream"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-red text-3xl font-bold uppercase mb-6">
            Trusted by Leading Organizations
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["SickKids Hospital", "Toyota", "Cargill", "Dufferin Peel"].map(
              (client) => (
                <span
                  key={client}
                  className="bg-white text-brand-dark font-body font-semibold py-3 px-8 rounded-full border-2 border-brand-yellow text-lg"
                >
                  {client}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-white text-3xl md:text-4xl font-bold uppercase mb-4">
            Come Try Something New!
          </h2>
          <p className="font-body text-white/90 mb-8">
            Visit our takeout spot at 860 North Park Dr. in Brampton
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linktr.ee/latinito.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-dark font-bold py-3.5 px-10 rounded-lg uppercase text-lg hover:bg-brand-gold-light transition-colors"
            >
              Order Now
            </a>
            <Link
              href="/menu"
              className="border-2 border-white text-white font-bold py-3.5 px-10 rounded-lg uppercase text-lg hover:bg-white hover:text-brand-dark transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
