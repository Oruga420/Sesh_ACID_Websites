import Image from "next/image";

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11am \u2013 7pm" },
  { day: "Wednesday", time: "11am \u2013 7pm" },
  { day: "Thursday", time: "11am \u2013 7pm" },
  { day: "Friday", time: "11am \u2013 8pm" },
  { day: "Saturday", time: "11am \u2013 8pm" },
  { day: "Sunday", time: "11am \u2013 6pm" },
] as const;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-red py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-white text-5xl md:text-7xl font-black uppercase">
            Contact Us
          </h1>
          <p className="font-body text-white/90 text-lg mt-2">
            Visit us, call us, or place an order online
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-brand-red text-3xl md:text-4xl font-bold uppercase mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="bg-brand-cream rounded-xl p-6 border border-brand-yellow">
                <h3 className="font-heading text-brand-dark text-xl font-bold uppercase mb-3">
                  Location
                </h3>
                <address className="not-italic font-body text-brand-dark">
                  <p className="font-semibold">860 North Park Dr.</p>
                  <p>Brampton, ON L6S 4N5</p>
                  <p className="mt-2">
                    <a
                      href="https://www.google.com/maps/place/860+N+Park+Dr,+Brampton,+ON+L6S+4N5/@43.7298336,-79.7517711,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-red font-semibold hover:text-brand-red-dark transition-colors"
                    >
                      Get Directions &rarr;
                    </a>
                  </p>
                </address>
              </div>

              <div className="bg-brand-cream rounded-xl p-6 border border-brand-yellow">
                <h3 className="font-heading text-brand-dark text-xl font-bold uppercase mb-3">
                  Phone & Email
                </h3>
                <div className="font-body text-brand-dark space-y-2">
                  <p>
                    <a
                      href="tel:9054505353"
                      className="text-brand-red hover:text-brand-red-dark transition-colors font-semibold"
                    >
                      (905) 450-5353
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:6474598595"
                      className="text-brand-red hover:text-brand-red-dark transition-colors font-semibold"
                    >
                      (647) 459-8595
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:latinito.ca@gmail.com"
                      className="text-brand-red hover:text-brand-red-dark transition-colors font-semibold"
                    >
                      latinito.ca@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-brand-cream rounded-xl p-6 border border-brand-yellow">
                <h3 className="font-heading text-brand-dark text-xl font-bold uppercase mb-3">
                  Hours
                </h3>
                <div className="space-y-1.5 font-body text-brand-dark">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "text-brand-red font-semibold"
                            : ""
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl overflow-hidden h-80 md:h-[400px]">
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
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5ff4c4650debdf5d1feff481/3c4ef3fa-6386-423b-973c-618e6e64c801/SUPER+FINAL+LOGO+CIRCLE.png"
                alt="Latinito Empanadas logo"
                fill
                className="object-contain p-8 bg-brand-cream"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Online */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-red text-3xl md:text-4xl font-bold uppercase mb-4">
            Order Online
          </h2>
          <p className="font-body text-brand-dark mb-8 max-w-xl mx-auto">
            Order delivery through DoorDash or SkipTheDishes, or place a pickup
            order through our Linktree.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linktr.ee/latinito.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white font-bold py-3 px-8 rounded-lg uppercase hover:bg-brand-red-dark transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-heading text-brand-red text-3xl font-bold uppercase mb-6">
            Follow Us
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/latinito.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream rounded-xl p-4 border-2 border-brand-yellow hover:shadow-lg transition-shadow"
              aria-label="Instagram"
            >
              <svg
                className="w-8 h-8 text-brand-red"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="font-body text-brand-dark text-sm mt-2 block">
                @latinito.ca
              </span>
            </a>
            <a
              href="https://www.facebook.com/latinito.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream rounded-xl p-4 border-2 border-brand-yellow hover:shadow-lg transition-shadow"
              aria-label="Facebook"
            >
              <svg
                className="w-8 h-8 text-brand-red"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-body text-brand-dark text-sm mt-2 block">
                Latinito
              </span>
            </a>
            <a
              href="https://www.yelp.ca/biz/latinito-empanadas-brampton"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream rounded-xl p-4 border-2 border-brand-yellow hover:shadow-lg transition-shadow"
              aria-label="Yelp"
            >
              <svg
                className="w-8 h-8 text-brand-red"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.564-.83 1.856-.436 1.856.57v3.364c0 .2-.08.4-.24.54l-.35.03zm-8.985 4.89l-.67-5.13c-.12-.96 1.04-1.53 1.73-.85l3.52 3.47c.69.68.17 1.86-.78 1.76l-3.2-.35c-.2-.02-.4-.12-.54-.28l-.06-.62zm-2.32-7.76l4.52-2.52c.87-.48 1.8.5 1.38 1.46l-2.12 4.81c-.42.96-1.8.84-2.06-.17l-.67-2.6c-.08-.3 0-.62.2-.85l-.25-.13zM6.03 16.19c-.58-.29-.58-1.13 0-1.42l4.64-2.32c.87-.44 1.72.6 1.26 1.53l-2.32 4.64c-.46.93-1.8.56-1.8-.5v-1.42l-1.78-.51zm.76-9.38c-.29-.58.27-1.22.89-1.01l4.93 1.72c.93.32.93 1.65 0 1.97l-4.93 1.72c-.62.21-1.18-.43-.89-1.01V6.81z" />
              </svg>
              <span className="font-body text-brand-dark text-sm mt-2 block">
                Yelp
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-16 bg-brand-red text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-white text-3xl md:text-4xl font-bold uppercase mb-4">
            Catering Available
          </h2>
          <p className="font-body text-white/90 mb-6">
            Planning an event? Contact us for catering packages — we&apos;ve
            served SickKids, Toyota, Cargill, and more.
          </p>
          <a
            href="mailto:latinito.ca@gmail.com"
            className="inline-block bg-brand-yellow text-brand-dark font-bold py-3.5 px-10 rounded-lg uppercase text-lg hover:bg-brand-gold-light transition-colors"
          >
            Email for Catering
          </a>
        </div>
      </section>
    </>
  );
}
