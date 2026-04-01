import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Famous Pizza Town",
  description:
    "Browse our full menu of pizzas, wings, panzerotti, sides, and combo deals.",
};

interface MenuItem {
  readonly name: string;
  readonly description: string;
}

interface MenuCategory {
  readonly title: string;
  readonly description: string;
  readonly items: readonly MenuItem[];
}

const menuCategories: readonly MenuCategory[] = [
  {
    title: "Pizza",
    description:
      "Available in Medium, Large, Extra-Large, Mega, and Party sizes. Customize with your favourite toppings.",
    items: [
      { name: "Build Your Own", description: "Start with our fresh dough and signature sauce, then pile on your choice of premium toppings." },
      { name: "Pepperoni Classic", description: "Generous layers of pepperoni over melted mozzarella. Simple and satisfying." },
      { name: "Meat Lovers", description: "Pepperoni, sausage, bacon, and ham for the serious meat fan." },
      { name: "Veggie Garden", description: "Mushrooms, green peppers, onions, tomatoes, and olives on a bed of cheese." },
      { name: "Canadian Classic", description: "Pepperoni, mushrooms, and bacon — a tried-and-true combination." },
    ],
  },
  {
    title: "Wings",
    description: "Crispy, golden, and tossed in your choice of bold flavour.",
    items: [
      { name: "BBQ Wings", description: "Smoky, sweet, and tangy barbecue glaze." },
      { name: "Hot Wings", description: "Fiery buffalo sauce for those who like it spicy." },
      { name: "Honey Garlic Wings", description: "A sweet and savoury glaze that keeps you reaching for more." },
      { name: "Plain Wings", description: "Crispy and golden — enjoy them on their own or dip in your favourite sauce." },
    ],
  },
  {
    title: "Panzerotti",
    description: "Our 12-inch stuffed panzerotti are filled to the brim and baked golden.",
    items: [
      { name: "Classic Panzerotti", description: "Mozzarella and tomato sauce stuffed in fresh dough, baked until golden." },
      { name: "Custom Panzerotti", description: "Choose up to 3 toppings and we will stuff them inside a perfect pocket of dough." },
    ],
  },
  {
    title: "Sides & More",
    description: "Round out your meal with our tasty sides.",
    items: [
      { name: "Garlic Bread", description: "Toasted with garlic butter and a touch of herbs." },
      { name: "Potato Wedges", description: "Seasoned and baked until crispy on the outside, fluffy inside." },
      { name: "Chicken Fingers & Fries", description: "Crispy breaded chicken strips served with golden fries and dipping sauce." },
      { name: "Dipping Sauces", description: "Marinara, ranch, garlic, and more to complement any order." },
    ],
  },
];

const combos = [
  { name: "Famous Deal", includes: "1 Large Pizza (3 toppings), 24 Wings, 3 Pop, 1 Dip" },
  { name: "Famous Wings Special", includes: "12 Wings, 4 Garlic Bread, 1 lb Wedges, 3 Pop" },
  { name: "Two Large Pizza Deal", includes: "2 Large Pizzas (3 toppings each), 12 Wings, Garlic Bread, Pop, 2 Dips" },
  { name: "Panzerotti Combo", includes: "2 Panzerotti (3 toppings each), 2 Pop, 2 Dips" },
  { name: "Triple Mega Deal", includes: "3 Mega Pizzas (3 toppings each), 24 Wings, 2L Pop, 3 Dips" },
  { name: "Manager's Special", includes: "Large Pizza (5 toppings), Garlic Bread or Wedges, Dip, 2 Free Pop" },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            From signature pizzas to crispy wings and loaded panzerotti,
            there&rsquo;s something for everyone.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {menuCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-1">
                  {category.title}
                </h2>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 transition-colors"
                  >
                    <h3 className="font-semibold text-base text-gray-800 mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
              Combo Deals
            </h2>
            <p className="text-primary-100 max-w-lg mx-auto">
              Feed the crew or treat yourself — our combos offer great value on
              your favourites.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo) => (
              <div
                key={combo.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h3 className="font-semibold text-lg mb-2">{combo.name}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">
                  {combo.includes}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-primary-200 text-sm">
            Call{" "}
            <a
              href="tel:+16473523786"
              className="underline hover:text-white transition-colors"
            >
              (647) 352-3786
            </a>{" "}
            to order.
          </p>
        </div>
      </section>
    </>
  );
}
