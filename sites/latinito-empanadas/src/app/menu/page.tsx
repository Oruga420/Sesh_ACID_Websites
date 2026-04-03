import Image from "next/image";

const EMPANADAS = [
  { name: "Carne", description: "Seasoned Beef", badge: "Halal" },
  { name: "Pollo", description: "Herb Marinated Chicken Breast", badge: "Halal" },
  { name: "Chorizo", description: "Pork Sausage & Cheddar Cheese", badge: null },
  { name: "Tuna Cheddar", description: "Pacific Tuna & Cheddar Cheese", badge: null },
  { name: "Ham Swiss", description: "Smoked Ham & Swiss Cheese", badge: null },
  { name: "Corn Havarti", description: "Sweet Corn & Havarti Cheese", badge: "Vegetarian" },
  { name: "Queso", description: "Soft Cheese & Spiced Tomato Sauce", badge: "Vegetarian" },
  { name: "Veggie Sazon", description: "Black Beans & Sauteed Vegetables", badge: "Vegetarian" },
] as const;

const DIPS = [
  "Latino",
  "Chimichurri",
  "Picante",
  "Chipotle Lime",
  "Chocolate",
  "Dulce de Leche",
] as const;

const CHURRO_FLAVORS = ["Cinnamon", "Vanilla", "Coconut"] as const;

const COMBOS = [
  { num: "1", price: "$9.99", contents: "3 Empanadas, 1 Dip, 1 Drink" },
  { num: "2", price: "$14.99", contents: "4 Empanadas, 2 Dips, 1 Churro, 1 Drink" },
  { num: "3", price: "$22.69", contents: "6 Empanadas, 3 Dips, 2 Churros, 1 Drink" },
  { num: "4", price: "$29.69", contents: "8 Empanadas, 4 Dips, 2 Churros, 2 Drinks" },
  { num: "Family", price: "$37.99", contents: "12 Empanadas, 4 Dips, 3 Drinks" },
  { num: "Fiesta", price: "$52.99", contents: "15 Empanadas, 5 Dips, 5 Churros, 4 Drinks" },
] as const;

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-red py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-white text-5xl md:text-7xl font-black uppercase">
            Menu
          </h1>
          <p className="font-body text-white/90 text-lg mt-2">
            Fresh dough made daily, cooked to order
          </p>
        </div>
      </section>

      {/* Empanadas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-2">
              Empanadas
            </h2>
            <p className="font-body text-brand-dark text-lg">
              $2.69 each &bull; $2.49 for 24 or more
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/bc593b1d-86eb-4439-b207-a4ed82cb1fd2/Screenshot+2023-09-12+234217.png"
              alt="Latinito Empanadas full menu - all 8 varieties with cross-section photos"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EMPANADAS.map((item) => (
              <div
                key={item.name}
                className="border-2 border-brand-red rounded-xl p-5 bg-white hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-brand-dark text-xl font-bold uppercase">
                    {item.name}
                  </h3>
                  {item.badge && (
                    <span className="text-xs font-body font-semibold text-white bg-brand-red rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-brand-muted font-body text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dips */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-2">
              Dipping Sauces
            </h2>
            <p className="font-body text-brand-dark text-lg">$0.75 each</p>
          </div>
          <div className="relative max-w-3xl mx-auto mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/ae300142-ad78-42b2-835d-d515486a8cf5/DIPS+V2.png"
              alt="Latinito dipping sauces menu"
              width={1000}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
            {DIPS.map((dip) => (
              <div
                key={dip}
                className="bg-white border-2 border-brand-yellow rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-heading text-brand-dark font-bold uppercase text-sm">
                  {dip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Churros */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-2">
              Churros
            </h2>
            <p className="font-body text-brand-dark text-lg">
              Single $1.99 &bull; Triple $5.49 &bull; Dozen $19.99
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/cb66803d-3fe7-45e5-b70b-172a9236736d/churros+website.png"
              alt="Latinito Churros - Cinnamon, Vanilla, Coconut"
              width={800}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {CHURRO_FLAVORS.map((flavor) => (
              <div
                key={flavor}
                className="bg-brand-cream border-2 border-brand-yellow rounded-xl py-3 px-8 text-center"
              >
                <p className="font-heading text-brand-dark font-bold uppercase">
                  {flavor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-2">
              Combos
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/329bcca2-ece0-46a3-8aa3-669757baf6b9/Screenshot+2023-09-12+221642.png"
              alt="Latinito Empanadas combo deals"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {COMBOS.map((combo) => (
              <div
                key={combo.num}
                className="bg-white border-2 border-brand-red rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-brand-red text-2xl font-bold uppercase">
                    {combo.num}
                  </h3>
                  <span className="font-heading text-brand-dark text-2xl font-bold">
                    {combo.price}
                  </span>
                </div>
                <p className="text-brand-muted font-body text-sm">
                  {combo.contents}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-brand-muted font-body text-sm mt-6">
            *Upgrade canned pop to a bottled beverage for $0.99
          </p>
        </div>
      </section>

      {/* Allergen Notice */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-body text-brand-muted text-sm">
            Our products use ingredients that may contain traces of wheat, milk,
            eggs, soy & nuts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-white text-3xl md:text-4xl font-bold uppercase mb-4">
            Ready to Order?
          </h2>
          <a
            href="https://linktr.ee/latinito.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-brand-dark font-bold py-3.5 px-10 rounded-lg uppercase text-lg hover:bg-brand-gold-light transition-colors"
          >
            Order Now
          </a>
        </div>
      </section>
    </>
  );
}
