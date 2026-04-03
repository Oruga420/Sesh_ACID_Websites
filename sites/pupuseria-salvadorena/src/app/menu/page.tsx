import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Pupuseria Salvadorena & Authentic Mexican Foods",
  description:
    "Browse our full menu of authentic Salvadoran pupusas, tamales, tacos, burritos, and more. Order online or call (416) 743-4001.",
};

const MENU_SECTIONS = [
  {
    title: "Pupusas",
    description: "Our signature handmade pupusas — choose your filling",
    image:
      "https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-rjldtbf5-food1.jpg",
    items: [
      { name: "Queso (Cheese)", price: "$3.50" },
      { name: "Frijol con Queso (Bean & Cheese)", price: "$3.50" },
      { name: "Chicharron con Queso (Pork & Cheese)", price: "$4.00" },
      { name: "Loroco con Queso", price: "$4.00" },
      { name: "Revueltas (Mixed)", price: "$4.00" },
      { name: "Pupusa de Arroz", price: "$4.50" },
    ],
  },
  {
    title: "Salvadoran Specialties",
    description: "Traditional favourites from El Salvador",
    image:
      "https://itin-dev.wanderlogstatic.com/freeImage/G8zMs0wEn3t86LKh1xZN1rcNDj5Fre2U",
    items: [
      { name: "Tamales de Pollo", price: "$4.00" },
      { name: "Tamales de Puerco", price: "$4.00" },
      { name: "Yuca con Chicharron", price: "$12.00" },
      { name: "Platano Frito con Crema", price: "$8.00" },
      { name: "Sopa de Res", price: "$15.00" },
      { name: "Sopa de Pollo", price: "$13.00" },
    ],
  },
  {
    title: "Mexican Favourites",
    description: "Authentic tacos, burritos, and platters",
    image:
      "https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-2qb974gz-food3.jpg",
    items: [
      { name: "Tacos al Pastor (3)", price: "$12.00" },
      { name: "Tacos de Carne Asada (3)", price: "$13.00" },
      { name: "Burrito de Pollo", price: "$12.00" },
      { name: "Burrito de Carne", price: "$13.00" },
      { name: "Quesadilla Grande", price: "$11.00" },
      { name: "Nachos Supreme", price: "$14.00" },
    ],
  },
  {
    title: "Drinks",
    description: "Natural waters and traditional beverages",
    image:
      "https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-4ndl7y6s-food2.jpg",
    items: [
      { name: "Horchata Salvadorena", price: "$4.00" },
      { name: "Agua de Jamaica", price: "$4.00" },
      { name: "Agua de Tamarindo", price: "$4.00" },
      { name: "Coca-Cola / Pepsi", price: "$2.50" },
      { name: "Jarritos", price: "$3.00" },
    ],
  },
] as const;

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-26zn94bv-banner.jpg"
          alt="Pupuseria Salvadorena food banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
            Our Menu
          </h1>
          <p className="font-body text-lg text-gray-200">
            Authentic Salvadoran &amp; Mexican cuisine &mdash; made fresh daily
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {MENU_SECTIONS.map((section, idx) => (
        <section
          key={section.title}
          className={idx % 2 === 0 ? "py-16 bg-white" : "py-16 bg-brand-cream"}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="font-heading text-3xl font-bold text-brand-dark mb-2">
                  {section.title}
                </h2>
                <p className="font-body text-brand-muted mb-6">
                  {section.description}
                </p>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center py-2 border-b border-brand-border"
                    >
                      <span className="font-body text-brand-body font-medium">
                        {item.name}
                      </span>
                      <span className="font-body text-brand-maroon font-bold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Order CTA */}
      <section className="py-16 bg-brand-maroon text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="font-body text-lg mb-8 text-gray-100">
            Use promo code <strong>FRSTWB</strong> for 10% off your first online
            order!
          </p>
          <a
            href="https://pupuseriasalvadorenamexicanfoodson.com/pupuseria-salvadorena--mexican-foods/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-maroon font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-cream transition-colors"
          >
            Order Online Now
          </a>
        </div>
      </section>
    </>
  );
}
