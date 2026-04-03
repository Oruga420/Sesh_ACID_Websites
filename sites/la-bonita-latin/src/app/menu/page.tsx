import Image from "next/image";

const MENU_CATEGORIES = [
  {
    name: "Platos Fuertes / Main Dishes",
    items: [
      {
        name: "Bandeja Paisa",
        price: "$24.00",
        description:
          "Rice, plantain, sausage, pork belly, beans, avocado, beef, egg, and arepa — the ultimate Colombian platter.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
      },
      {
        name: "Churrasco",
        price: "$26.00",
        description:
          "Juicy grilled steak served sizzling on a platter with three generous sides.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
      },
      {
        name: "Tilapia a la Plancha",
        price: "$22.00",
        description:
          "Pan-seared tilapia served with coconut rice, salad, and fried plantains.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
      },
      {
        name: "Steak a la Criolla",
        price: "$24.00",
        description:
          "Tender steak topped with creole sauce — onions, tomatoes, and peppers — with rice and beans.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
      },
      {
        name: "Patacone Relleno",
        price: "$18.00",
        description:
          "Flattened green plantain fried and topped with your choice of chicken or beef, salad, and sauces.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
      },
    ],
  },
  {
    name: "Sopas / Soups",
    items: [
      {
        name: "Sancocho Antioqueno",
        price: "$22.00",
        description:
          "Traditional hearty soup with beef, corn, potatoes, yuca, and plantain — served with rice and avocado.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
      },
      {
        name: "Chicken Soup",
        price: "$18.00",
        description:
          "Comforting Colombian-style chicken soup with potatoes, corn, and fresh herbs.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
      },
    ],
  },
  {
    name: "Entradas / Appetizers",
    items: [
      {
        name: "Empanadas (Chicken or Beef)",
        price: "$3.00 each",
        description:
          "Crispy handmade empanadas stuffed with seasoned chicken or beef, served with house salsa.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y",
      },
      {
        name: "Arepa de Choclo",
        price: "$5.00",
        description:
          "Sweet corn arepa grilled and topped with butter and cheese.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
      },
      {
        name: "Vegetarian Platter",
        price: "$16.00",
        description:
          "A generous selection of rice, beans, plantains, avocado, arepa, and salad.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
      },
    ],
  },
  {
    name: "Postres / Desserts",
    items: [
      {
        name: "Tres Leches Cake",
        price: "$8.00",
        description:
          "La Bonita's famous tres leches — a must-try dessert that consistently earns rave reviews from every guest.",
        image: "https://itin-dev.wanderlogstatic.com/freeImage/PznxWnNJbXXoejM77Q8zrgWDNfmFErOn",
      },
    ],
  },
] as const;

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://itin-dev.wanderlogstatic.com/freeImage/1MVkqd4KfRdiBYHqvzTl9P0UnRzh9g5Y"
          alt="Traditional Colombian sancocho soup at La Bonita"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/70 to-[#2B1810]/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-6xl font-bold mb-2">
            Our Menu
          </h1>
          <p className="font-[family-name:var(--font-body)] text-brand-gold text-lg">
            Fresh, authentic, and generously portioned
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {MENU_CATEGORIES.map((category) => (
        <section
          key={category.name}
          className="odd:bg-brand-offwhite even:bg-brand-cream py-16"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="font-[family-name:var(--font-heading)] text-brand-espresso text-3xl font-bold mb-10 text-center">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-brand-white rounded-xl border border-brand-border shadow-sm overflow-hidden flex group"
                >
                  <div className="relative w-36 min-h-[140px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="144px"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] text-brand-espresso text-lg font-bold">
                        {item.name}
                      </h3>
                      <span className="font-[family-name:var(--font-body)] text-brand-red font-bold ml-4 whitespace-nowrap">
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
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-brand-espresso py-16 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-gold text-3xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-brand-offwhite/80 mb-8">
            Call ahead for pickup or visit us at 1065 Canadian Place, Unit 109.
            Don&apos;t forget to ask about pupusas — available by advance order!
          </p>
          <a
            href="tel:9052320915"
            className="bg-brand-red text-white font-[family-name:var(--font-body)] font-semibold px-8 py-3.5 rounded-lg hover:bg-brand-red-dark transition-colors duration-300 inline-block text-lg"
          >
            Call (905) 232-0915
          </a>
        </div>
      </section>
    </>
  );
}
