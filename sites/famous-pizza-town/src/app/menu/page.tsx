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
  readonly gradient: string;
  readonly items: readonly MenuItem[];
}

const menuCategories: readonly MenuCategory[] = [
  {
    title: "Pizza",
    description:
      "Available in Medium, Large, Extra-Large, Mega, and Party sizes. Customize with your favourite toppings.",
    gradient: "from-primary-600 to-primary-400",
    items: [
      {
        name: "Build Your Own",
        description:
          "Start with our fresh dough and signature sauce, then pile on your choice of premium toppings.",
      },
      {
        name: "Pepperoni Classic",
        description:
          "Generous layers of pepperoni over melted mozzarella. Simple and satisfying.",
      },
      {
        name: "Meat Lovers",
        description:
          "Pepperoni, sausage, bacon, and ham for the serious meat fan.",
      },
      {
        name: "Veggie Garden",
        description:
          "Mushrooms, green peppers, onions, tomatoes, and olives on a bed of cheese.",
      },
      {
        name: "Canadian Classic",
        description:
          "Pepperoni, mushrooms, and bacon — a tried-and-true combination.",
      },
    ],
  },
  {
    title: "Wings",
    description:
      "Crispy, golden, and tossed in your choice of bold flavour. Perfect for sharing or all for yourself.",
    gradient: "from-amber-500 to-yellow-400",
    items: [
      {
        name: "BBQ Wings",
        description: "Smoky, sweet, and tangy barbecue glaze.",
      },
      {
        name: "Hot Wings",
        description: "Fiery buffalo sauce for those who like it spicy.",
      },
      {
        name: "Honey Garlic Wings",
        description:
          "A sweet and savoury glaze that keeps you reaching for more.",
      },
      {
        name: "Plain Wings",
        description:
          "Crispy and golden — enjoy them on their own or dip in your favourite sauce.",
      },
    ],
  },
  {
    title: "Panzerotti",
    description:
      "Our 12-inch stuffed panzerotti are filled to the brim with your favourite toppings and baked golden.",
    gradient: "from-orange-500 to-red-400",
    items: [
      {
        name: "Classic Panzerotti",
        description:
          "Mozzarella and tomato sauce stuffed in fresh dough, baked until golden.",
      },
      {
        name: "Custom Panzerotti",
        description:
          "Choose up to 3 toppings and we will stuff them inside a perfect pocket of dough.",
      },
    ],
  },
  {
    title: "Sides & More",
    description: "Round out your meal with our tasty sides.",
    gradient: "from-green-500 to-emerald-400",
    items: [
      {
        name: "Garlic Bread",
        description: "Toasted with garlic butter and a touch of herbs.",
      },
      {
        name: "Potato Wedges",
        description: "Seasoned and baked until crispy on the outside, fluffy inside.",
      },
      {
        name: "Chicken Fingers & Fries",
        description:
          "Crispy breaded chicken strips served with golden fries and dipping sauce.",
      },
      {
        name: "Dipping Sauces",
        description: "Marinara, ranch, garlic, and more to complement any order.",
      },
    ],
  },
];

const combos = [
  {
    name: "Famous Wings Special",
    includes: "12 wings, 4 garlic bread, 1 lb wedges, 3 pop",
  },
  {
    name: "Two Large Pizza Deal",
    includes: "2 large pizzas (3 toppings each), 12 wings, garlic bread, pop, 2 dips",
  },
  {
    name: "Panzerotti Combo",
    includes: "2 panzerotti (3 toppings each), 2 pop, 2 dips",
  },
  {
    name: "Triple Mega Deal",
    includes: "3 mega pizzas (3 toppings each), 24 wings, 2L pop, 3 dips",
  },
  {
    name: "Famous Deal",
    includes: "1 large pizza (3 toppings), 24 wings, 3 pop, 1 dip",
  },
  {
    name: "Manager's Special",
    includes: "Large pizza (5 toppings), garlic bread or wedges, dip, 2 free pop",
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            From signature pizzas to crispy wings and loaded panzerotti,
            there&rsquo;s something for everyone.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {menuCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-start gap-6 mb-8">
                <div
                  className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {category.title[0]}
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-1">
                    {category.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-base mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Combo Deals
            </h2>
            <p className="text-primary-100 max-w-lg mx-auto">
              Feed the crew or treat yourself &mdash; our combos offer great
              value on your favourites.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo) => (
              <div
                key={combo.name}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="font-semibold text-lg mb-2">{combo.name}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">
                  {combo.includes}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-primary-200 text-sm">
            Prices available in-store or by phone. Call{" "}
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
