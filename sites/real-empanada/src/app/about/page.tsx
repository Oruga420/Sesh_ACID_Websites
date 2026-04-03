import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Real Empanada",
  description:
    "From Motivos restaurant to farmer's markets to the Beaches — the journey of Richard Porras and Real Empanada.",
};

const TIMELINE = [
  {
    year: "Family Roots",
    title: "Growing Up at Motivos",
    text: "Richard Porras grew up in his parents' family restaurant, Motivos, in west-end Toronto. From a young age, he was helping out the chefs and learning the craft of Colombian cooking.",
  },
  {
    year: "Age 13",
    title: "Richard's Super Empanada",
    text: "Left as head chef for a day, young Richard created a fusion empanada recipe combining two chefs' different styles. Customer feedback was outstanding — he became the main empanada maker from that day forward.",
  },
  {
    year: "2012",
    title: "Motivos Closes",
    text: "Richard's parents closed the restaurant to focus on their respective careers. But customers kept calling, requesting those empanadas for catering events and family gatherings.",
  },
  {
    year: "2017",
    title: "Leaving Bay Street",
    text: "After years of feeling unfulfilled in corporate life, Richard left his Bay Street career to follow his passion for cooking. He introduced the Real Empanada brand to farmer's markets across the GTA.",
  },
  {
    year: "2019",
    title: "First Brick-and-Mortar",
    text: "After a wildly successful farmer's market tour, Real Empanada opened its first location at 825 Dundas Street West in Toronto's west end.",
  },
  {
    year: "2022",
    title: "Beaches Location Opens",
    text: "Expanding into the Kingston Road Village at 281 Scarborough Road, with the grand opening attended by Toronto Deputy Mayor Michael Thompson and Councillor Brad Bradford.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://realempanada.com/wp-content/uploads/2025/07/Empanada-storefront.jpg"
          alt="Real Empanada storefront"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Our Story</h1>
          <p className="text-white/80 font-body text-lg mt-2">
            From Mama&apos;s kitchen to Toronto&apos;s favourite empanada
          </p>
        </div>
      </section>

      {/* Richard's Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl font-heading font-bold text-heading leading-relaxed">
            &ldquo;When I was working on Bay Street, I kept feeling unsatisfied, unfulfilled. I grew up cooking, but it took me some time to figure out that it was really my passion.&rdquo;
          </blockquote>
          <p className="text-primary font-body font-semibold mt-6 text-lg">
            &mdash; Richard Porras, Founder
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-heading text-center mb-14">
            The Journey
          </h2>
          <div className="space-y-8">
            {TIMELINE.map((event) => (
              <div key={event.year} className="flex gap-6">
                <div className="flex-shrink-0 w-28 text-right">
                  <span className="font-heading font-bold text-primary text-lg">{event.year}</span>
                </div>
                <div className="relative flex-shrink-0 w-px bg-muted/40">
                  <div className="absolute top-1 -left-1.5 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-bold text-heading mb-2">{event.title}</h3>
                  <p className="text-body font-body leading-relaxed">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Richard + Team Photo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://beachmetro.com/wp-content/uploads/2024/09/web-Real-Empanada-pic-0217.jpg"
                alt="Richard Porras with his family and empanada team at the Beaches grand opening"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-heading mb-6">
                Meet Richard Porras
              </h2>
              <p className="text-body font-body text-lg leading-relaxed mb-4">
                Richard is the heart and soul of Real Empanada. He gave up corporate life to chase his
                dream of bringing authentic Colombian empanadas to Toronto — the same recipe he perfected
                as a teenager in his parents&apos; kitchen.
              </p>
              <p className="text-body font-body text-lg leading-relaxed mb-4">
                Real Empanada Corporation operates as a restaurant, manufacturer, and distributor. Richard
                partners with District Venture Kitchen, a Toronto food incubator backed by Arlene Dickinson,
                to scale production while keeping quality uncompromised.
              </p>
              <p className="text-body font-body text-lg leading-relaxed">
                Every empanada still follows Mama&apos;s signature recipe — naturally gluten-free, filled with
                love, and served with the family&apos;s famous salsa in four heat levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Taste the Tradition
          </h2>
          <p className="text-white/80 font-body text-lg mb-8">
            Come visit us at the Beaches or order delivery — every empanada comes with
            a complimentary taste of Mama&apos;s Signature Salsa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/store/real-empanada-company/-WODgvr7Wa6qSJErIfRq3A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
            >
              Order Now
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
