import Link from "next/link";

const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11am \u2013 7pm" },
  { day: "Wednesday", time: "11am \u2013 7pm" },
  { day: "Thursday", time: "11am \u2013 7pm" },
  { day: "Friday", time: "11am \u2013 8pm" },
  { day: "Saturday", time: "11am \u2013 8pm" },
  { day: "Sunday", time: "11am \u2013 6pm" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-brand-yellow text-2xl font-bold mb-4">
            LATINITO EMPANADAS
          </h3>
          <p className="text-gray-300 font-body leading-relaxed">
            Fresh, authentic South American empanadas made daily in Brampton.
            Est. 2020.
          </p>
          <p className="text-gray-300 font-body mt-4 italic">
            &ldquo;So Good, One Just Isn&apos;t Enough!&rdquo;
          </p>
        </div>

        <div>
          <h4 className="font-heading text-brand-yellow text-xl font-bold mb-4">
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
          <h4 className="font-heading text-brand-yellow text-xl font-bold mb-4">
            CONTACT
          </h4>
          <address className="not-italic font-body text-gray-300 space-y-2 text-sm">
            <p>860 North Park Dr., Brampton, ON L6S 4N5</p>
            <p>
              <a
                href="tel:9054505353"
                className="hover:text-brand-yellow transition-colors"
              >
                (905) 450-5353
              </a>
            </p>
            <p>
              <a
                href="tel:6474598595"
                className="hover:text-brand-yellow transition-colors"
              >
                (647) 459-8595
              </a>
            </p>
            <p>
              <a
                href="mailto:latinito.ca@gmail.com"
                className="hover:text-brand-yellow transition-colors"
              >
                latinito.ca@gmail.com
              </a>
            </p>
          </address>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/latinito.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-yellow transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/latinito.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-yellow transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.yelp.ca/biz/latinito-empanadas-brampton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-yellow transition-colors"
              aria-label="Yelp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308c.564-.83 1.856-.436 1.856.57v3.364c0 .2-.08.4-.24.54l-.35.03zm-8.985 4.89l-.67-5.13c-.12-.96 1.04-1.53 1.73-.85l3.52 3.47c.69.68.17 1.86-.78 1.76l-3.2-.35c-.2-.02-.4-.12-.54-.28l-.06-.62zm-2.32-7.76l4.52-2.52c.87-.48 1.8.5 1.38 1.46l-2.12 4.81c-.42.96-1.8.84-2.06-.17l-.67-2.6c-.08-.3 0-.62.2-.85l-.25-.13zM6.03 16.19c-.58-.29-.58-1.13 0-1.42l4.64-2.32c.87-.44 1.72.6 1.26 1.53l-2.32 4.64c-.46.93-1.8.56-1.8-.5v-1.42l-1.78-.51zm.76-9.38c-.29-.58.27-1.22.89-1.01l4.93 1.72c.93.32.93 1.65 0 1.97l-4.93 1.72c-.62.21-1.18-.43-.89-1.01V6.81z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-700 text-center text-gray-500 text-xs font-body">
        &copy; {new Date().getFullYear()} Latinito Empanadas. All rights
        reserved.
      </div>
    </footer>
  );
}
