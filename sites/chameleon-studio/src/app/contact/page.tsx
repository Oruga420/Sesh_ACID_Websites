import type { Metadata } from "next";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Us | Chameleon Studio",
  description:
    "Get in touch with Chameleon Studio at 248 Queen Street S, Mississauga. Call (647) 328-8992 or email contact@chameleonstudio.ca.",
};

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "10:00 AM - 8:00 PM", closed: false },
  { day: "Wednesday", time: "10:00 AM - 8:00 PM", closed: false },
  { day: "Thursday", time: "10:00 AM - 8:00 PM", closed: false },
  { day: "Friday", time: "10:00 AM - 8:00 PM", closed: false },
  { day: "Saturday", time: "10:00 AM - 8:00 PM", closed: false },
  { day: "Sunday", time: "10:00 AM - 6:00 PM", closed: false },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gold-500">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            Visit us in Streetsville, Mississauga or reach out to book your next
            appointment.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-10 bg-dark-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left - Contact Details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Us
                </h2>
                <address className="not-italic text-gray-300 leading-relaxed">
                  <p className="font-medium text-white">Chameleon Studio</p>
                  <p>248 Queen Street S</p>
                  <p>Mississauga, ON L5M 1L8</p>
                  <p className="text-gray-500 text-sm mt-1">Streetsville Village</p>
                </address>
              </div>

              {/* Phone & Email */}
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact
                </h2>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="text-gray-500 text-sm block">Phone / Text</span>
                    <a href="tel:+16473288992" className="text-gold-500 hover:underline font-medium">
                      (647) 328-8992
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm block">Email</span>
                    <a href="mailto:contact@chameleonstudio.ca" className="text-gold-500 hover:underline font-medium">
                      contact@chameleonstudio.ca
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-500 text-sm block">Instagram DM</span>
                    <a
                      href="https://www.instagram.com/chameleonstudio.ca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 hover:underline font-medium"
                    >
                      @chameleonstudio.ca
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hours
                </h2>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className={h.closed ? "text-gray-500" : "text-gray-300"}>
                        {h.day}
                      </span>
                      <span className={h.closed ? "text-red-400" : "text-gold-500 font-medium"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Online */}
              <div className="text-center">
                <a
                  href="https://chameleonstudiosv.as.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold-500 text-dark-900 px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors w-full"
                >
                  Book Online
                </a>
              </div>
            </div>

            {/* Right - Map */}
            <div>
              <GoogleMap />
              <div className="mt-6 bg-dark-800 border border-dark-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Getting Here
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We&apos;re located on Queen Street South in the heart of historic
                  Streetsville Village, Mississauga. Street parking is available,
                  and we&apos;re easily accessible by transit. Walk-ins are welcome
                  when availability exists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
