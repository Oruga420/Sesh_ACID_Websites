import Image from "next/image";
import Link from "next/link";

const FEATURED_DISHES = [
  {
    name: "Pupusas",
    description:
      "Handmade corn tortillas stuffed with cheese, beans, chicharron or loroco. Served with curtido and salsa roja.",
    image:
      "https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-rjldtbf5-food1.jpg",
  },
  {
    name: "Tamales",
    description:
      "Traditional Salvadoran tamales wrapped in banana leaves, filled with seasoned chicken or pork.",
    image:
      "https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-4ndl7y6s-food2.jpg",
  },
  {
    name: "Tacos & Platters",
    description:
      "Authentic Mexican tacos, burritos, and combination platters with rice, beans and fresh toppings.",
    image:
      "https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-2qb974gz-food3.jpg",
  },
] as const;

const REVIEWS = [
  {
    text: "Delicious authentic food. I have been eating it since 2006 today I decided to share how delicious and authentic it is reminds me of home.",
    reviewer: "Sam Son",
    rating: 5,
  },
  {
    text: "I think this is my new favourite spot in the city for pupusas. I got the queso y jalopeno & it was SO good!",
    reviewer: "Angel Osborne",
    rating: 5,
  },
  {
    text: "We were visiting Toronto for the first time and really wanted some authentic Salvadoran food — this place did not disappoint!",
    reviewer: "Shaun Pullin",
    rating: 5,
  },
  {
    text: "Very pleasant, we went there on a weekday, it was nice and quiet, very good pupusas.",
    reviewer: "Carlos Napo Rodriguez",
    rating: 5,
  },
  {
    text: "Great food and good service. The pupusas are amazing.",
    reviewer: "Oscar Castillo",
    rating: 4,
  },
] as const;

const GALLERY_IMAGES = [
  {
    src: "https://itin-dev.wanderlogstatic.com/freeImage/G8zMs0wEn3t86LKh1xZN1rcNDj5Fre2U",
    alt: "Sopa de res — hearty beef and vegetable soup",
  },
  {
    src: "https://itin-dev.wanderlogstatic.com/freeImage/ucvqSw90CGK3gd48xh7hRt9XIThIMVLO",
    alt: "Pupusa close-up with curtido and salsa",
  },
  {
    src: "https://itin-dev.wanderlogstatic.com/freeImage/FqNAGbustgz3GkG4jhC3B51gvmy0YeQ8",
    alt: "Restaurant storefront on Finch Ave W",
  },
  {
    src: "https://itin-dev.wanderlogstatic.com/freeImage/0oeMowCec7GnDcqMYDmf0uFpepcYmqHX",
    alt: "Dining area interior",
  },
] as const;

function StarRating({ count }: { readonly count: number }) {
  return (
    <div className="flex gap-0.5 text-brand-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-26zn94bv-banner.jpg"
          alt="Pupuseria Salvadorena banner — authentic Salvadoran and Mexican food"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <Image
            src="https://d2gqo3h0psesgi.cloudfront.net/auto/pupuseria-salvadorena--mexican-foods-cp6l9mfz-logo.png"
            alt="Pupuseria Salvadorena logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Authentic Salvadoran Pupusas in North York
          </h1>
          <p className="font-body text-lg md:text-xl mb-4 text-gray-100">
            Handmade daily with traditional recipes &mdash; come taste the real
            flavours of El Salvador
          </p>
          <p className="font-body text-sm text-gray-300 mb-8">
            Open 7 days a week &bull; Sun-Sat from 10:30 am
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pupuseriasalvadorenamexicanfoodson.com/pupuseria-salvadorena--mexican-foods/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-maroon text-white font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-maroon-dark transition-colors"
            >
              Order Online
            </a>
            <a
              href="tel:4167434001"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-white hover:text-brand-dark transition-colors"
            >
              Call (416) 743-4001
            </a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-4">
            Our Favourites
          </h2>
          <p className="text-brand-muted text-center font-body mb-12 max-w-2xl mx-auto">
            From classic Salvadoran pupusas to Mexican tacos and tamales &mdash;
            every dish made fresh to order
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_DISHES.map((dish) => (
              <div
                key={dish.name}
                className="bg-brand-card-bg rounded-xl border border-brand-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-2">
                    {dish.name}
                  </h3>
                  <p className="font-body text-brand-body text-sm leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-brand-maroon text-white font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-maroon-dark transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            A Taste of Home
          </h2>
          <p className="font-body text-brand-body text-lg leading-relaxed mb-6">
            Pupuseria Salvadorena has been bringing the authentic flavours of El
            Salvador and Mexico to Finch Ave W in North York for years. Every
            pupusa is handmade to order, stuffed with real cheese, beans, and
            chicharron &mdash; just like back home. Our customers keep coming
            back because they can taste the difference.
          </p>
          <p className="font-body text-brand-body text-lg leading-relaxed">
            Whether you grew up eating pupusas or you&apos;re trying them for the
            first time, we welcome you to our table. Bring your family, bring
            your friends &mdash; this is food meant to be shared.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block border-2 border-brand-maroon text-brand-maroon font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-maroon hover:text-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
            From Our Kitchen
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.alt}
                className="relative aspect-square rounded-lg overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.reviewer}
                className="bg-brand-card-bg rounded-xl border border-brand-border p-6 shadow-sm"
              >
                <StarRating count={review.rating} />
                <p className="font-body text-brand-body mt-4 mb-4 italic leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-body text-brand-muted text-sm font-semibold">
                  &mdash; {review.reviewer}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {REVIEWS.slice(3).map((review) => (
              <div
                key={review.reviewer}
                className="bg-brand-card-bg rounded-xl border border-brand-border p-6 shadow-sm"
              >
                <StarRating count={review.rating} />
                <p className="font-body text-brand-body mt-4 mb-4 italic leading-relaxed">
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

      {/* Map + Hours */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden shadow-sm h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5!2d-79.5256!3d43.7564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b30739b1fcc9b%3A0x982acc5ada7bed61!2sPupuseria%20Salvadorena%20%26%20Authentic%20Mexican%20Foods!5e0!3m2!1sen!2sca!4v1700000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pupuseria Salvadorena location on Google Maps"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-brand-dark mb-4">
                Hours & Location
              </h3>
              <address className="not-italic font-body text-brand-body mb-6">
                <p className="text-lg font-semibold">
                  2459 Finch Ave W, North York, ON M9M 2G1
                </p>
                <p className="mt-2">
                  <a
                    href="tel:4167434001"
                    className="text-brand-maroon hover:text-brand-maroon-dark transition-colors font-semibold"
                  >
                    (416) 743-4001
                  </a>
                </p>
              </address>
              <div className="space-y-2">
                {[
                  { day: "Sunday", time: "10:30 am \u2013 10:00 pm" },
                  { day: "Monday", time: "11:30 am \u2013 9:00 pm" },
                  { day: "Tuesday", time: "11:30 am \u2013 9:00 pm" },
                  { day: "Wednesday", time: "11:30 am \u2013 9:00 pm" },
                  { day: "Thursday", time: "11:30 am \u2013 9:00 pm" },
                  { day: "Friday", time: "11:30 am \u2013 10:00 pm" },
                  { day: "Saturday", time: "10:30 am \u2013 10:00 pm" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between font-body text-brand-body text-sm py-1 border-b border-brand-border"
                  >
                    <span className="font-semibold">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=2459+Finch+Ave+W+North+York+ON+M9M+2G1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-maroon text-white font-bold py-3 px-8 rounded-lg uppercase text-sm hover:bg-brand-maroon-dark transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
