import Image from 'next/image';
import Link from 'next/link';

const MENU_HIGHLIGHTS = [
  {
    name: 'Empanada Variety Pack',
    description: 'Beef, chicken, cheese & veggie — crispy, gluten-free, and halal. Served with complimentary Mama\'s Salsa.',
    price: '3 for $10',
    image: 'https://realempanada.com/wp-content/uploads/2025/07/empanada-variety-pack.jpg',
  },
  {
    name: 'BBQ Chicharron',
    description: 'Slow-cooked pork belly grilled to crispy perfection — a Colombian classic straight from the barbecue.',
    price: 'Market Price',
    image: 'https://realempanada.com/wp-content/uploads/2025/07/Chicharron-on-the-b-q.png',
  },
  {
    name: "Mama's Signature Salsa",
    description: "Four heat levels — Mild, Medium-Hot, Hot, and Fire. Mother's secret recipe, made fresh in-house.",
    price: '$12.99 jar',
    image: 'https://realempanada.com/wp-content/uploads/2025/07/Salsa-jars.png',
  },
  {
    name: 'Tropical Paletas',
    description: 'Handmade popsicles in Mango, Guava, Coconut, Passion Fruit, Strawberry, Blackberry & more.',
    price: '$5.00 each',
    image: 'https://realempanada.com/wp-content/uploads/2025/07/5-POPCYCLE-FLAVOURS.jpg',
  },
] as const;

const REVIEWS = [
  {
    text: 'Absolutely delicious, flavorful, and fresh. The salsas are super fresh too!',
    author: 'Google Review',
    stars: 5,
  },
  {
    text: "The cheese was soft and the dough wasn't too dry or too greasy. Perfect every time.",
    author: 'Google Review',
    stars: 5,
  },
  {
    text: "A Colombian uncle brought these empanadas and I haven't stopped thinking about them.",
    author: 'Google Review',
    stars: 5,
  },
  {
    text: 'Simple, easy, tasty food, norm price, good people. Terrific empanadas and amazing homemade salsa.',
    author: 'Google Review',
    stars: 5,
  },
  {
    text: 'Well-stuffed empanadas with good tasting filling. The fire sauce is no joke — delicious!',
    author: 'Google Review',
    stars: 5,
  },
] as const;

function StarRating({ count }: { readonly count: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://realempanada.com/wp-content/uploads/2020/06/colombian-Empanadas.jpg"
          alt="Authentic Colombian empanadas from Real Empanada"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/65" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            100% Authentic Colombian Empanadas
          </h1>
          <p className="text-white/90 text-lg sm:text-xl font-body mb-8 max-w-2xl mx-auto">
            Gluten-free, halal, and handmade with Mama&apos;s signature recipe.
            Fresh from our kitchen to your table since 2017.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ubereats.com/store/real-empanada-company/-WODgvr7Wa6qSJErIfRq3A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide transition-colors duration-200"
            >
              Order Now
            </a>
            <Link
              href="/menu"
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide transition-colors duration-200"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Gluten-Free', desc: 'All empanadas are naturally gluten-free' },
              { label: 'Halal Certified', desc: 'Prepared following halal standards' },
              { label: 'Locally Sourced', desc: 'Fresh, sustainable, ethical ingredients' },
            ].map((feature) => (
              <div key={feature.label} className="py-4">
                <h3 className="font-heading text-lg font-bold text-heading">{feature.label}</h3>
                <p className="text-body/70 text-sm font-body mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights — Our Empanadas / Nuestras Empanadas */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading mb-1">
              Our Empanadas
            </h2>
            <p className="text-primary font-heading text-lg font-bold mb-3">
              Nuestras Empanadas
            </p>
            <p className="text-body/80 text-lg font-body max-w-2xl mx-auto">
              From our empanadas to Mama&apos;s Signature Salsa and tropical paletas &mdash; every item is made with love and authentic Colombian flavour.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENU_HIGHLIGHTS.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-heading mb-1">{item.name}</h3>
                  <p className="text-body/70 text-sm font-body mb-3 leading-relaxed">{item.description}</p>
                  <span className="text-primary font-bold text-sm">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
            >
              Full Menu / Men&uacute; Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Story Preview — Our Story / Nuestra Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://realempanada.com/wp-content/uploads/2020/06/1580150851-20200125-RealEmpanadaCo7.jpg"
                alt="Real Empanada food preparation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading mb-1">
                Our Story
              </h2>
              <p className="text-primary font-heading text-lg font-bold mb-6">
                Nuestra Historia
              </p>
              <p className="text-body font-body text-lg leading-relaxed mb-4">
                Richard Porras grew up in his parents&apos; family restaurant, Motivos, in west-end Toronto.
                At age 13, he was left as head chef for a day and created a fusion empanada recipe that
                became the house favourite.
              </p>
              <p className="text-body font-body text-lg leading-relaxed mb-6">
                After leaving corporate life on Bay Street in 2017, Richard brought his family&apos;s recipe
                to farmer&apos;s markets across the GTA. The response was overwhelming &mdash; and Real Empanada
                was born.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading mb-1">
              What Our Customers Say
            </h2>
            <p className="text-primary font-heading text-lg font-bold mb-3">
              Lo Que Dicen Nuestros Clientes
            </p>
            <p className="text-body/80 text-lg font-body">
              Rated 4.7 stars on Google with hundreds of happy customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <StarRating count={review.stars} />
                <p className="text-body font-body mt-4 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-muted text-sm font-body mt-3">
                  &mdash; {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Hours — Locations / Ubicaciones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-heading mb-1">
                Locations
              </h2>
              <p className="text-primary font-heading text-lg font-bold mb-6">
                Ubicaciones
              </p>
              <div className="space-y-4 font-body text-body text-lg">
                <p>
                  <strong className="text-heading">Address:</strong><br />
                  281 Scarborough Road, Toronto, ON M4E 3M9
                </p>
                <p>
                  <strong className="text-heading">Hours:</strong><br />
                  Thursday &ndash; Sunday, 11 AM &ndash; 7 PM
                </p>
                <p>
                  <strong className="text-heading">Phone:</strong><br />
                  <a href="tel:+14165754421" className="text-primary hover:text-primary-dark transition-colors">
                    (416) 575-4421
                  </a>
                </p>
                <p className="text-body/70">
                  Curbside pickup, delivery, and wholesale available.
                  Also on UberEats, DoorDash &amp; Skip The Dishes.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://maps.google.com/?q=281+Scarborough+Road+Toronto+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+14165754421"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg uppercase text-sm tracking-wide transition-colors duration-200"
                >
                  Call to Order
                </a>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="https://realempanada.com/wp-content/uploads/2025/07/Beaches-store-front.jpg"
                alt="Real Empanada Beaches storefront"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA — Contact / Contacto */}
      <section className="py-16 bg-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-1">
            Contact Us
          </h2>
          <p className="text-coral font-heading text-lg font-bold mb-4">
            Cont&aacute;ctanos
          </p>
          <p className="text-white/80 font-body text-lg mb-8">
            Wholesale, catering, or just craving empanadas? Reach out &mdash; we&apos;d love to hear from you.
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
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
