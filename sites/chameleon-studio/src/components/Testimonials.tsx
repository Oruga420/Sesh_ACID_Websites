const testimonials = [
  {
    text: "Best tattoo shop around. Very fair pricing and the quality of work is unreal.",
    author: "Verified Client",
    source: "Google Reviews",
    stars: 5,
  },
  {
    text: "Aimee did an amazing job of my fine line tattoo and was able to give me exactly what I wanted.",
    author: "Satisfied Customer",
    source: "Google Reviews",
    stars: 5,
  },
  {
    text: "Clean, professional environment, filled with good energy and friendly staff. Reg is very professional and skilled.",
    author: "Happy Client",
    source: "Google Reviews",
    stars: 5,
  },
];

function StarRating({ count }: { readonly count: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-dark-900 border border-dark-700 rounded-lg p-6 hover:border-gold-500 transition-colors"
            >
              <StarRating count={t.stars} />
              <p className="text-gray-300 italic mb-4 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="text-sm">
                <p className="text-gold-500 font-semibold">{t.author}</p>
                <p className="text-gray-500">{t.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
