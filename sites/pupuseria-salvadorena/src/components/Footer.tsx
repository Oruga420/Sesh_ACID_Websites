const HOURS = [
  { day: "Sunday", time: "10:30 am \u2013 10:00 pm" },
  { day: "Monday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Tuesday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Wednesday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Thursday", time: "11:30 am \u2013 9:00 pm" },
  { day: "Friday", time: "11:30 am \u2013 10:00 pm" },
  { day: "Saturday", time: "10:30 am \u2013 10:00 pm" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-brand-gold text-2xl font-bold mb-4">
            Pupuseria Salvadorena
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Authentic Salvadoran pupusas and Mexican favourites, made fresh daily
            in the heart of North York.
          </p>
          <p className="text-gray-300 font-body mt-4 italic">
            &ldquo;Delicious authentic food &mdash; reminds me of home.&rdquo;
          </p>
        </div>

        <div>
          <h4 className="font-heading text-brand-gold text-xl font-bold mb-4">
            HOURS
          </h4>
          <ul className="space-y-1">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex justify-between font-body text-gray-300 text-sm"
              >
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-brand-gold text-xl font-bold mb-4">
            CONTACT
          </h4>
          <address className="not-italic font-body text-gray-300 space-y-2 text-sm">
            <p>2459 Finch Ave W, North York, ON M9M 2G1</p>
            <p>
              <a
                href="tel:4167434001"
                className="hover:text-brand-gold transition-colors"
              >
                (416) 743-4001
              </a>
            </p>
          </address>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/pupuseria_salvadorena07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-gold transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-700 text-center text-gray-500 text-xs font-body">
        &copy; {new Date().getFullYear()} Pupuseria Salvadorena & Authentic
        Mexican Foods. All rights reserved.
      </div>
    </footer>
  );
}
