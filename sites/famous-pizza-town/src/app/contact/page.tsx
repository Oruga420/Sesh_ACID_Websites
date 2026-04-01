import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Famous Pizza Town",
  description:
    "Get in touch with Famous Pizza Town. Find our address, phone number, hours, and delivery options.",
};

const hours = [
  { day: "Monday", time: "11:00 AM — 9:00 PM" },
  { day: "Tuesday", time: "11:00 AM — 9:00 PM" },
  { day: "Wednesday", time: "11:00 AM — 9:00 PM" },
  { day: "Thursday", time: "11:00 AM — 9:00 PM" },
  { day: "Friday", time: "11:00 AM — 9:00 PM" },
  { day: "Saturday", time: "11:00 AM — 9:00 PM" },
  { day: "Sunday", time: "12:00 PM — 9:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a question or want to place an order? We are here to help.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
                Contact Details
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Address</p>
                    <p className="font-medium text-gray-800">
                      1947 Victoria Park Avenue<br />Scarborough, ON M1R 1V1
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Phone</p>
                    <a href="tel:+16473523786" className="font-medium text-gray-800 hover:text-primary-500 transition-colors">
                      (647) 352-3786
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">Email</p>
                    <a href="mailto:contact@famouspizzatown.ca" className="font-medium text-gray-800 hover:text-primary-500 transition-colors">
                      contact@famouspizzatown.ca
                    </a>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="mt-10 p-6 bg-white rounded-xl border border-gray-100">
                <h3 className="font-semibold text-base text-gray-800 mb-3">
                  Order Delivery
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  We deliver through the following platforms:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["TikMe", "Uber Eats", "SkipTheDishes", "DoorDash"].map(
                    (platform) => (
                      <span
                        key={platform}
                        className="bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 px-4 py-2 rounded-lg"
                      >
                        {platform}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
                Business Hours
              </h2>
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0"
                    >
                      <span className="text-gray-700 font-medium text-sm">
                        {item.day}
                      </span>
                      <span className="text-gray-500 text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm font-medium">
                    1947 Victoria Park Ave, Scarborough
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
