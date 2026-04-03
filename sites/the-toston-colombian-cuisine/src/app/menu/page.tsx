import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | The Toston Colombian Cuisine",
  description:
    "Explore our authentic Colombian menu — empanadas, Bandeja Paisa, tostones, ajiaco, arepas, and more. Fresh-made daily in Markham.",
};

const APPETIZERS = [
  {
    name: "Empanadas",
    price: "$3.00 each",
    description: "Crispy handmade empanadas — chicken, beef, or cheese — with house salsa.",
    image: "https://live.staticflickr.com/65535/54066733549_05928f6086_o.jpg",
  },
  {
    name: "Yuca Frita (Cassava)",
    price: "$10.00",
    description: "Golden fried cassava served with aji sauce.",
    image: "https://cdn.gotoeat.net/thetoston/4300-albums-1.jpg",
  },
  {
    name: "Sweet Plantain",
    price: "$9.00",
    description: "Caramelized ripe plantain — naturally sweet and satisfying.",
    image: "https://cdn.gotoeat.net/thetoston/4300-albums-2.jpg",
  },
] as const;

const MAINS = [
  {
    name: "Bandeja Paisa",
    price: "$24.00",
    description:
      "The king of Colombian dishes — rice, plantain, sausage, pork belly, beans, avocado, grilled beef, fried egg, and arepa.",
    image: "https://live.staticflickr.com/65535/54066345906_d60e6f10d0_o.jpg",
  },
  {
    name: "Tostone Combo",
    price: "$21.00",
    description:
      "Flattened green plantain fried to perfection, topped with pulled beef, fresh salad, and avocado.",
    image: "https://live.staticflickr.com/65535/54066676489_6b00674d87_o.jpg",
  },
  {
    name: "Ajiaco",
    price: "$23.00",
    description:
      "Traditional Colombian chicken and potato soup with rice, sweet plantain, and avocado sides.",
    image: "https://live.staticflickr.com/65535/54066809755_8b237485f2_o.jpg",
  },
  {
    name: "Vegetarepa",
    price: "$18.00",
    description: "Loaded arepa with sauteed vegetables, beans, and fresh toppings.",
    image: "https://cdn.gotoeat.net/thetoston/4300-albums-3.jpg",
  },
  {
    name: "Arepa Llanera",
    price: "$20.00",
    description: "Grilled arepa from the Colombian plains, topped with your choice of protein.",
    image: "https://cdn.gotoeat.net/thetoston/4300-albums-4.jpg",
  },
  {
    name: "Porkis Arepa",
    price: "$18.00",
    description: "Hearty arepa loaded with tender pork, crispy chicharron, and toppings.",
    image: "https://cdn.gotoeat.net/thetoston/4300-albums-1.jpg",
  },
] as const;

const SIDES = [
  { name: "Arepazo", price: "$9.00" },
  { name: "Frijoles (Beans)", price: "$10.00" },
  { name: "Colombian Coffee", price: "$3.50" },
] as const;

function MenuCard({
  item,
}: {
  readonly item: { readonly name: string; readonly price: string; readonly description: string; readonly image: string };
}) {
  return (
    <div className="bg-brand-white rounded-xl border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-[family-name:var(--font-heading)] text-brand-coffee text-xl font-semibold">
            {item.name}
          </h3>
          <span className="font-[family-name:var(--font-body)] text-brand-gold font-bold text-lg">
            {item.price}
          </span>
        </div>
        <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://live.staticflickr.com/65535/54066345906_d60e6f10d0_o.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-[#2C1810]/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-white text-5xl md:text-6xl font-bold mb-3">
            Our Menu
          </h1>
          <p className="font-[family-name:var(--font-body)] text-brand-gold text-lg">
            Traditional Colombian flavours, made fresh daily
          </p>
        </div>
      </section>

      {/* Appetizers */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-3xl font-bold mb-8">
            Appetizers &amp; Snacks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPETIZERS.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Dishes */}
      <section className="bg-brand-tan py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-3xl font-bold mb-8">
            Main Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAINS.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Sides & Drinks */}
      <section className="bg-brand-cream py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-brand-coffee text-3xl font-bold mb-8">
            Sides &amp; Drinks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SIDES.map((item) => (
              <div
                key={item.name}
                className="bg-brand-white rounded-lg border border-brand-border p-5 flex items-center justify-between"
              >
                <span className="font-[family-name:var(--font-heading)] text-brand-coffee text-lg font-semibold">
                  {item.name}
                </span>
                <span className="font-[family-name:var(--font-body)] text-brand-gold font-bold">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="font-[family-name:var(--font-body)] text-brand-muted text-sm mt-8 text-center">
            Prices subject to change. Gluten-free and vegetarian options
            available — ask your server.
          </p>
        </div>
      </section>
    </>
  );
}
