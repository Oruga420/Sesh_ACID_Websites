import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Menu | Real Empanada",
  description:
    "Authentic Colombian empanadas, Mama's Signature Salsa, tropical paletas, tacos, and chicharron. Gluten-free and halal.",
};

const EMPANADAS = [
  { name: "Beef Empanada", description: "Seasoned ground beef with traditional Colombian spices" },
  { name: "Chicken Empanada", description: "Free-range chicken with aromatic herbs" },
  { name: "Cheese Empanada", description: "Soft melted cheese in a crispy gluten-free shell" },
  { name: "Beyond Meat Empanada", description: "Plant-based pea protein filling — 100% vegan" },
  { name: "Impossible Meat Empanada", description: "Soy-based meat alternative — 100% vegan" },
  { name: "Veggie Empanada", description: "Fresh seasonal vegetables in a golden shell" },
] as const;

const SALSA_LEVELS = [
  { name: "Mild", heat: 1 },
  { name: "Medium-Hot", heat: 2 },
  { name: "Hot", heat: 3 },
  { name: "Fire / Fuego", heat: 4 },
] as const;

const PALETA_FLAVOURS = [
  "Strawberry", "Pineapple", "Mango", "Coconut", "Guava",
  "Passion Fruit", "Blackberry", "Soursop", "Mamey-Sapote",
] as const;

const TACOS = [
  { name: "Carne (Beef)", description: "Slow-cooked beef with garlic citrus cilantro cream" },
  { name: "Pollo (Chicken)", description: "Seasoned chicken with fresh toppings" },
  { name: "Chancho (Pork)", description: "Tender pork carnitas with citrus cream" },
] as const;

function HeatDots({ level }: { readonly level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 4 }, (_, i) => (
        <span
          key={i}
          className={`w-3 h-3 rounded-full ${i < level ? "bg-coral" : "bg-muted/30"}`}
        />
      ))}
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://realempanada.com/wp-content/uploads/2020/06/empanada-at-fresh.jpg"
          alt="Fresh empanadas ready to serve"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">Our Menu</h1>
          <p className="text-white/80 font-body text-lg mt-2">
            Authentic Colombian flavours, made fresh daily
          </p>
        </div>
      </section>

      {/* Empanadas */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-heading mb-2">Empanadas</h2>
              <p className="text-primary font-bold text-lg mb-6">
                Minimum order: 3 for $10.00 — complimentary salsa included
              </p>
              <div className="space-y-4">
                {EMPANADAS.map((item) => (
                  <div key={item.name} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-heading text-lg font-bold text-heading">{item.name}</h3>
                    <p className="text-body/70 font-body text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-heading text-lg font-bold text-heading mb-2">Bulk Pricing</h3>
                <ul className="text-body font-body text-sm space-y-1">
                  <li>4 &ndash; 19 empanadas: <strong>$3.00 each</strong></li>
                  <li>20 &ndash; 49 empanadas: <strong>$2.75 each</strong></li>
                  <li>50 &ndash; 100 empanadas: <strong>$2.50 each</strong></li>
                  <li>100+ empanadas: <strong>$2.25 each</strong></li>
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden sticky top-24">
              <Image
                src="https://realempanada.com/wp-content/uploads/2025/07/empanada-variety-pack.jpg"
                alt="Empanada variety pack"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mama's Salsa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://realempanada.com/wp-content/uploads/2025/07/Salsa-jars.png"
                alt="Mama's Signature Salsa jars"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl font-bold text-heading mb-2">
                Mama&apos;s Signature Salsa
              </h2>
              <p className="text-body font-body text-lg mb-6 leading-relaxed">
                Mother&apos;s secret recipe, made fresh in-house. Four heat levels to match your taste.
                Available in 1oz, 3oz, and full jar sizes.
              </p>
              <div className="space-y-3">
                {SALSA_LEVELS.map((salsa) => (
                  <div key={salsa.name} className="flex items-center justify-between bg-cream rounded-lg p-4">
                    <span className="font-heading font-bold text-heading">{salsa.name}</span>
                    <HeatDots level={salsa.heat} />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-body/70 font-body text-sm space-y-1">
                <p>1oz cup: <strong>$1.75</strong> &bull; 3oz cup: <strong>$3.50</strong> &bull; Full jar: <strong>$12.99</strong></p>
                <p className="text-primary font-semibold">Complimentary 1oz salsa with every empanada order!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paletas & Tacos */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Paletas */}
            <div>
              <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://realempanada.com/wp-content/uploads/2025/07/5-POPCYCLE-FLAVOURS.jpg"
                  alt="Tropical paletas in five flavours"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold text-heading mb-2">
                Tropical Paletas
              </h2>
              <p className="text-primary font-bold text-lg mb-4">$5.00 each</p>
              <div className="flex flex-wrap gap-2">
                {PALETA_FLAVOURS.map((flavour) => (
                  <span
                    key={flavour}
                    className="bg-white text-body font-body text-sm px-3 py-1.5 rounded-full border border-muted/30"
                  >
                    {flavour}
                  </span>
                ))}
              </div>
            </div>

            {/* Tacos */}
            <div>
              <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://realempanada.com/wp-content/uploads/2025/07/chicharron-pork-belly-and-empanada-special.jpg"
                  alt="Chicharron and empanada special"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold text-heading mb-2">
                Tacos &amp; Chicharron
              </h2>
              <p className="text-body font-body text-lg mb-4 leading-relaxed">
                Colombian-style tacos and BBQ chicharron pork belly — served with garlic citrus cilantro cream.
              </p>
              <div className="space-y-3">
                {TACOS.map((taco) => (
                  <div key={taco.name} className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-heading font-bold text-heading">{taco.name}</h3>
                    <p className="text-body/70 font-body text-sm mt-1">{taco.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-cooked / Wholesale CTA */}
      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Frozen Empanadas for Home
          </h2>
          <p className="text-white/80 font-body text-lg mb-8 leading-relaxed">
            Pre-cooked empanadas in packages of 6 — bake in the oven or air fryer from frozen.
            Two complimentary salsas included. Wholesale available for events and catering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14165754421"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
            >
              Call to Order
            </a>
            <a
              href="https://www.ubereats.com/store/real-empanada-company/-WODgvr7Wa6qSJErIfRq3A"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
            >
              Order on UberEats
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
