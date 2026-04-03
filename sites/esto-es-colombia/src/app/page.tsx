import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MENU_HIGHLIGHTS = [
  {
    name: "Bandeja Paisa",
    description:
      "Colombia's national dish: white rice, beans, steak, chicharron, chorizo, sweet plantain, arepa, avocado & fried egg.",
    price: "$25",
    image:
      "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827577-20221216-EstoEsColumbia-10.jpg",
  },
  {
    name: "Cazuela de Mariscos",
    description:
      "Rich seafood stew with basa, shrimp, mussels, calamari, oysters & lobster. Served with coconut rice and plantain.",
    price: "$35",
    image:
      "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671829838-20221216-EstoEsColumbia-11.jpg",
  },
  {
    name: "Empanadas Colombianas",
    description:
      "Crispy fried empanadas stuffed with seasoned minced meat, vegetables and potatoes. A perfect start to any meal.",
    price: "$2 each",
    image:
      "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671826989-20221216-EstoEsColumbia-2.jpg",
  },
  {
    name: "Arroz Marinero",
    description:
      "Seafood rice loaded with shrimp, calamari, mussels and fresh herbs. A Colombian coastal favourite.",
    price: "$30",
    image:
      "https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827049-20221216-EstoEsColumbia-4.jpg",
  },
];

const REVIEWS = [
  {
    author: "David Orozco",
    rating: 5,
    text: "A little taste of Colombia here in North York! We had empanadas followed by the bandeja paisa which massive and absolutely delicious!",
  },
  {
    author: "Carlos Castro",
    rating: 5,
    text: "I love the atmosphere like if you were in a restaurant in Medellin, Cartagena or Bogota, service is phenomenal and the food so good.",
  },
  {
    author: "Paola Vela Duarte",
    rating: 5,
    text: "The best Colombian restaurant that I've tried in Toronto. Clean, warm space where you remember things of your country.",
  },
  {
    author: "BlogTO",
    rating: 5,
    text: "Toronto's Colombian community's go-to place for authentic and honest plates. You feel like you're in Colombia here.",
  },
];

export default function Home() {
  return (
    <>
      <WatermarkBanner />
      <Header />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671826923-20221216-EstoEsColumbia-1.jpg"
            alt="Esto es Colombia restaurant atmosphere"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <div className="relative z-10 text-center px-6 max-w-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://estoescolombiarestaurant.ca/wp-content/uploads/2024/04/esto-es-colombia-logo-and-latina-beer-e1713223979140.png"
              alt="Esto es Colombia logo"
              className="mx-auto h-24 w-auto mb-6"
            />
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              The Best Colombian Restaurant &amp; Bar in Toronto
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Authentic recipes from Cali &mdash; live music, events &amp;
              vibrant Latin atmosphere on Dufferin Street.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/19054613895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-brand-yellow-hover transition-colors"
              >
                Reserve Your Table
              </a>
              <a
                href="https://estoescolombiarestaurant.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white text-white font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-white/10 transition-colors"
              >
                Order Online
              </a>
            </div>
          </div>
        </section>

        {/* ── MENU HIGHLIGHTS ── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-center text-brand-heading mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-center text-brand-muted mb-12 max-w-xl mx-auto">
              Authentic Colombian flavours prepared by celebrated chef Diana
              Arizala, straight from Cali to your plate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MENU_HIGHLIGHTS.map((dish) => (
                <div
                  key={dish.name}
                  className="bg-white border border-brand-border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-brand-heading text-lg">
                        {dish.name}
                      </h3>
                      <span className="text-brand-red font-semibold whitespace-nowrap ml-2">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-sm text-brand-body leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / STORY ── */}
        <section className="bg-brand-bg-alt py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671826943-20221216-EstoEsColumbia-9.jpg"
              alt="Chef Diana Arizala at Esto es Colombia"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-brand-heading mb-6">
                Nuestra Historia
              </h2>
              <p className="text-brand-body leading-relaxed mb-4">
                Chef Diana Patricia Arizala left Cali, Colombia with her four
                children and one dream &mdash; to share her country&apos;s
                incredible cuisine with Canada. After nine years in Winnipeg,
                she moved to Toronto and opened Esto es Colombia in 2016.
              </p>
              <p className="text-brand-body leading-relaxed mb-4">
                &ldquo;I studied as a chef and my whole life has revolved around
                cooking. This is my passion,&rdquo; says Diana. Every dish on
                the menu carries the authentic flavours of her homeland &mdash;
                from the nine-component Bandeja Paisa to the rich Cazuela de
                Mariscos.
              </p>
              <p className="text-brand-body leading-relaxed mb-6">
                Today the restaurant is a vibrant hub for Toronto&apos;s
                Colombian and Latin community, where live music fills the air
                and every guest feels like they have stepped into a restaurant
                in Medellin, Cartagena, or Bogota.
              </p>
              <a
                href="/about"
                className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-6 py-3 hover:bg-brand-yellow-hover transition-colors"
              >
                Read Our Full Story
              </a>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-center text-brand-heading mb-12">
              What Our Guests Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REVIEWS.map((review) => (
                <div
                  key={review.author}
                  className="bg-brand-bg-alt border border-brand-border rounded-lg p-6"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-brand-yellow text-lg">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="text-brand-body text-sm leading-relaxed mb-4 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-brand-heading">
                    {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCATION + HOURS ── */}
        <section className="bg-brand-bg-alt py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-brand-heading mb-6">
                Visit Us
              </h2>
              <address className="not-italic text-brand-body space-y-3 mb-8">
                <p className="text-lg font-medium text-brand-heading">
                  2848 Dufferin St, North York, ON M6B 3S3
                </p>
                <p>
                  <a
                    href="tel:+19054613895"
                    className="text-brand-blue hover:text-brand-blue-hover transition-colors"
                  >
                    (905) 461-3895
                  </a>
                </p>
              </address>

              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-brand-heading mb-4">
                Hours
              </h3>
              <ul className="text-brand-body space-y-2 text-sm">
                <li className="flex justify-between max-w-xs">
                  <span>Monday &ndash; Thursday</span>
                  <span className="font-medium text-brand-heading">
                    11 AM &ndash; 10 PM
                  </span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Friday &ndash; Saturday</span>
                  <span className="font-medium text-brand-heading">
                    11 AM &ndash; 12 AM
                  </span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span className="font-medium text-brand-heading">
                    11 AM &ndash; 10 PM
                  </span>
                </li>
              </ul>

              <a
                href="https://wa.me/19054613895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-6 py-3 hover:bg-brand-yellow-hover transition-colors"
              >
                Make a Reservation
              </a>
            </div>

            <div className="rounded-lg overflow-hidden h-[400px]">
              <iframe
                title="Esto es Colombia location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2!2d-79.4545!3d43.7068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33a5cda5a0c1%3A0x1a6f12a3e15d1f0!2sEsto%20es%20Colombia!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
