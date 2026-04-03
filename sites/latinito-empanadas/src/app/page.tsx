import Image from "next/image";
import Link from "next/link";

const EMPANADA_VARIETIES = [
  {
    name: "Carne",
    description: "Seasoned Beef (Halal)",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/bc593b1d-86eb-4439-b207-a4ed82cb1fd2/Screenshot+2023-09-12+234217.png",
  },
  {
    name: "Pollo",
    description: "Herb Marinated Chicken Breast (Halal)",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/bc593b1d-86eb-4439-b207-a4ed82cb1fd2/Screenshot+2023-09-12+234217.png",
  },
  {
    name: "Corn Havarti",
    description: "Sweet Corn & Havarti Cheese (Vegetarian)",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/bc593b1d-86eb-4439-b207-a4ed82cb1fd2/Screenshot+2023-09-12+234217.png",
  },
  {
    name: "Chorizo",
    description: "Pork Sausage & Cheddar Cheese",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/bc593b1d-86eb-4439-b207-a4ed82cb1fd2/Screenshot+2023-09-12+234217.png",
  },
] as const;

const REVIEWS = [
  {
    text: "The empanadas are fried per order, so they come out hot and crispy. I am truly in love with their Corn Havarti empanadas!",
    reviewer: "Google Review",
  },
  {
    text: "A friend brought me to Latinito Empanadas, saying they were one of the best in the Greater Toronto Area. After trying them, I have to agree!",
    reviewer: "Rach",
  },
  {
    text: "My first time having empanadas and they were AMAZING! Loved the quick service and the many options to choose from.",
    reviewer: "Raeesah C.",
  },
] as const;

const CATERING_CLIENTS = [
  "SickKids Hospital",
  "Toyota",
  "Cargill",
  "Dufferin Peel",
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/eb9249be-9ac6-4dd1-b8cd-002972440a95/LAST+LAST+LAST+STORY+PAGE.png"
          alt="Latinito Empanadas story infographic showing Matthew and Graciela's journey"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/3c4ef3fa-6386-423b-973c-618e6e64c801/SUPER+FINAL+LOGO+CIRCLE.png"
            alt="Latinito Empanadas logo"
            width={140}
            height={140}
            className="mx-auto mb-6"
          />
          <h1 className="font-heading text-5xl md:text-7xl font-black uppercase mb-4">
            So Good, One Just Isn&apos;t Enough!
          </h1>
          <p className="font-body text-lg md:text-xl mb-8 text-gray-100">
            Fresh, authentic South American empanadas made daily in Brampton
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linktr.ee/latinito.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white font-bold py-3.5 px-10 rounded-lg uppercase text-lg hover:bg-brand-red-dark transition-colors"
            >
              Order Now
            </a>
            <Link
              href="/menu"
              className="border-2 border-white text-white font-bold py-3.5 px-10 rounded-lg uppercase text-lg hover:bg-white hover:text-brand-dark transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold text-center uppercase mb-4">
            Our Empanadas
          </h2>
          <p className="text-center text-brand-muted font-body mb-12 max-w-2xl mx-auto">
            Delicious Latin American pastries filled with a variety of
            ingredients. Fresh dough made daily, cooked to order &mdash; $2.69
            each or $2.49 for 24+.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EMPANADA_VARIETIES.map((item) => (
              <div
                key={item.name}
                className="border-2 border-brand-red rounded-xl overflow-hidden bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative h-48 bg-brand-cream">
                  <Image
                    src={item.image}
                    alt={`${item.name} empanada - ${item.description}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-brand-dark text-xl font-bold uppercase">
                    {item.name}
                  </h3>
                  <p className="text-brand-muted font-body text-sm mt-1">
                    {item.description}
                  </p>
                  <p className="text-brand-red font-bold mt-2">$2.69</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-lg uppercase hover:bg-brand-red-dark transition-colors inline-block"
            >
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Churros + Dips Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold text-center uppercase mb-12">
            Churros & Dipping Sauces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-2 border-brand-red overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/cb66803d-3fe7-45e5-b70b-172a9236736d/churros+website.png"
                  alt="Latinito Churros menu - Cinnamon, Vanilla, Coconut flavors"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-brand-dark text-2xl font-bold uppercase">
                  Classic Churros
                </h3>
                <p className="text-brand-muted font-body mt-2">
                  Cinnamon, Vanilla, or Coconut. Paired with our homemade
                  dipping sauces.
                </p>
                <p className="text-brand-red font-bold mt-2">
                  Single $1.99 &bull; Triple $5.49 &bull; Dozen $19.99
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl border-2 border-brand-red overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/ae300142-ad78-42b2-835d-d515486a8cf5/DIPS+V2.png"
                  alt="Latinito dipping sauces - Latino, Chimichurri, Picante, Chipotle Lime, Chocolate, Dulce de Leche"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-brand-dark text-2xl font-bold uppercase">
                  Homemade Dips
                </h3>
                <p className="text-brand-muted font-body mt-2">
                  Latino, Chimichurri, Picante, Chipotle Lime, Chocolate &
                  Dulce de Leche.
                </p>
                <p className="text-brand-red font-bold mt-2">$0.75 each</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-6">
              Our Story
            </h2>
            <p className="font-body text-brand-dark leading-relaxed mb-4">
              Matthew has enjoyed cooking and watching his mother Graciela
              prepare many South American dishes since he was a child. His
              favourite food has always been empanadas, and the thought that many
              people in Ontario have never even heard of them inspired him to
              start Latinito Empanadas.
            </p>
            <p className="font-body text-brand-dark leading-relaxed mb-6">
              From Paraguay to Brampton, the mission is simple: give Canadians
              the chance to try a food that is delicious, comforting, and unique.
            </p>
            <Link
              href="/about"
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-lg uppercase hover:bg-brand-red-dark transition-colors inline-block"
            >
              Read More
            </Link>
          </div>
          <div className="relative h-80 md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/eb9249be-9ac6-4dd1-b8cd-002972440a95/LAST+LAST+LAST+STORY+PAGE.png"
              alt="The Latinito Empanadas story - from Paraguay to Brampton"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold text-center uppercase mb-4">
            What People Are Saying
          </h2>
          <p className="text-center text-brand-muted font-body mb-12">
            Rated 4.9 stars on Google &bull; 4.8 on DoorDash
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border-2 border-brand-yellow p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="w-5 h-5 text-brand-yellow"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-brand-dark italic leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-body text-brand-muted text-sm font-semibold">
                  &mdash; {review.reviewer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-4">
            Catering
          </h2>
          <p className="font-body text-brand-dark max-w-2xl mx-auto mb-8 leading-relaxed">
            From corporate events to birthday parties, Latinito brings the
            fiesta. We&apos;ve catered for some of Canada&apos;s top
            organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {CATERING_CLIENTS.map((client) => (
              <span
                key={client}
                className="bg-brand-cream text-brand-dark font-body font-semibold py-2 px-6 rounded-full border border-brand-yellow"
              >
                {client}
              </span>
            ))}
          </div>
          <div className="relative h-64 max-w-3xl mx-auto rounded-xl overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/329bcca2-ece0-46a3-8aa3-669757baf6b9/Screenshot+2023-09-12+221642.png"
              alt="Latinito Empanadas combo deals for catering"
              fill
              className="object-contain bg-brand-cream"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-brand-red text-4xl md:text-5xl font-bold uppercase mb-6">
              Find Us
            </h2>
            <address className="not-italic font-body text-brand-dark space-y-3 mb-6">
              <p className="font-semibold text-lg">
                860 North Park Dr., Brampton, ON L6S 4N5
              </p>
              <p>
                <a
                  href="tel:9054505353"
                  className="text-brand-red hover:text-brand-red-dark transition-colors"
                >
                  (905) 450-5353
                </a>{" "}
                &bull;{" "}
                <a
                  href="tel:6474598595"
                  className="text-brand-red hover:text-brand-red-dark transition-colors"
                >
                  (647) 459-8595
                </a>
              </p>
              <p>
                <a
                  href="mailto:latinito.ca@gmail.com"
                  className="text-brand-red hover:text-brand-red-dark transition-colors"
                >
                  latinito.ca@gmail.com
                </a>
              </p>
            </address>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-heading text-brand-dark text-xl font-bold uppercase mb-3">
                Hours
              </h3>
              <div className="space-y-1 font-body text-sm">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span className="text-brand-red font-semibold">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Tue &ndash; Thu</span>
                  <span>11am &ndash; 7pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri &ndash; Sat</span>
                  <span>11am &ndash; 8pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>11am &ndash; 6pm</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-80 md:h-full min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.5!2d-79.7517711!3d43.7298336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s860+N+Park+Dr%2C+Brampton%2C+ON+L6S+4N5!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Latinito Empanadas location map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
