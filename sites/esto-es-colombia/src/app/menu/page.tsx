import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CATEGORIES = [
  {
    name: "Platos Fuertes",
    items: [
      {
        name: "Bandeja Paisa",
        description:
          "White rice, beans, steak, chicharron, chorizo, sweet plantain, arepa, avocado & fried egg.",
        price: "$25",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827577-20221216-EstoEsColumbia-10.jpg",
      },
      {
        name: "Cazuela de Mariscos",
        description:
          "Basa filets, shrimp, mussels, calamari, oysters & lobster in rich seafood broth. Coconut rice & plantain.",
        price: "$35",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671829838-20221216-EstoEsColumbia-11.jpg",
      },
      {
        name: "Arroz Marinero",
        description:
          "Seafood rice loaded with shrimp, calamari, mussels and fresh herbs.",
        price: "$30",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827049-20221216-EstoEsColumbia-4.jpg",
      },
      {
        name: "Pargo Frito",
        description:
          "Whole fried red snapper served with coconut rice, plantain and salad.",
        price: "$28",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827095-20221216-EstoEsColumbia-20.jpg",
      },
      {
        name: "Churrasco con Chimichurri",
        description:
          "Grilled steak with house chimichurri sauce, served with rice, beans and salad.",
        price: "$26",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671826943-20221216-EstoEsColumbia-9.jpg",
      },
    ],
  },
  {
    name: "Entradas & Antojitos",
    items: [
      {
        name: "Empanadas Colombianas",
        description:
          "Crispy fried empanadas with seasoned minced meat, vegetables and potatoes.",
        price: "$2 each",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671826989-20221216-EstoEsColumbia-2.jpg",
      },
      {
        name: "Arepa de Chocolo con Queso",
        description:
          "Sweet corn arepa filled with melted mozzarella cheese.",
        price: "$8",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827113-20221216-EstoEsColumbia-19.jpg",
      },
      {
        name: "Patacones con Hogao",
        description:
          "Twice-fried green plantain discs topped with tomato and onion hogao sauce.",
        price: "$10",
        image:
          "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827129-20221216-EstoEsColumbia-14.jpg",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <WatermarkBanner />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827150-20221216-EstoEsColumbia-15.jpg"
            alt="Esto es Colombia dining experience"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
              Nuestro Men&uacute;
            </h1>
            <p className="text-gray-200 mt-3 text-lg">
              Authentic Colombian flavours from Cali
            </p>
          </div>
        </section>

        {/* Menu Categories */}
        {CATEGORIES.map((cat) => (
          <section
            key={cat.name}
            className="bg-white py-16 px-6 border-b border-brand-border last:border-b-0"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-brand-heading mb-10">
                {cat.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white border border-brand-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-[family-name:var(--font-heading)] font-semibold text-brand-heading">
                          {item.name}
                        </h3>
                        <span className="text-brand-red font-semibold whitespace-nowrap ml-2">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-brand-body leading-relaxed">
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
        <section className="bg-brand-bg-alt py-16 px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-brand-heading mb-4">
            Ready to Taste Colombia?
          </h2>
          <p className="text-brand-body mb-8 max-w-lg mx-auto">
            Reserve your table or order online for delivery and pickup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/19054613895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-brand-yellow-hover transition-colors"
            >
              Reserve Now
            </a>
            <a
              href="https://estoescolombiarestaurant.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-brand-heading text-brand-heading font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-brand-heading hover:text-white transition-colors"
            >
              Order Online
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
