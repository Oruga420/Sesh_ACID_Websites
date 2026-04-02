const testimonials = [
  {
    name: "Sarah M.",
    text: "The artists at 905 INK are incredible! They listened to exactly what I wanted and created something even better than I imagined. The shop is super clean and professional.",
    rating: 5,
    location: "Brampton North",
  },
  {
    name: "David K.",
    text: "Best tattoo experience I've ever had. Private rooms, welcoming staff, and amazing attention to detail. My portrait piece turned out absolutely stunning.",
    rating: 5,
    location: "Toronto",
  },
  {
    name: "Priya S.",
    text: "I was nervous about my first tattoo but the team at 905 INK made me feel so comfortable. They took the time to explain everything and the result is beautiful.",
    rating: 5,
    location: "Brampton South",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl text-white tracking-wider mb-4">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            94% recommendation rate with over 258 reviews. Our clients trust us
            with their stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-lighter rounded-lg p-8 border border-dark-lighter hover:border-burnt-red/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-burnt-red"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
