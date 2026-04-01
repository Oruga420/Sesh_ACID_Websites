import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Scarborough Fades",
  description: "Visit Scarborough Fades at 2231 Victoria Park Ave. Walk-ins welcome, appointments recommended.",
};

const hours = [
  { day: "Monday", time: "10:00 AM — 8:00 PM" },
  { day: "Tuesday", time: "10:00 AM — 8:00 PM" },
  { day: "Wednesday", time: "10:00 AM — 8:00 PM" },
  { day: "Thursday", time: "10:00 AM — 8:00 PM" },
  { day: "Friday", time: "10:00 AM — 8:00 PM" },
  { day: "Saturday", time: "10:00 AM — 7:00 PM" },
  { day: "Sunday", time: "10:00 AM — 8:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-silver uppercase tracking-[0.2em] text-xs mb-3">
            Come Through
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase mb-4">
            Contact
          </h1>
          <p className="text-brand-silver max-w-lg mx-auto">
            Walk-ins always welcome. Book ahead to skip the wait.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase mb-8">
                Find Us
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-brand-silver text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="font-medium">2231 Victoria Park Ave, Unit 2<br />Scarborough, ON M1R 1V8</p>
                </div>
                <div>
                  <p className="text-brand-silver text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+14163911761" className="font-medium hover:text-brand-silver transition-colors">(416) 391-1761</a>
                </div>
                <div>
                  <p className="text-brand-silver text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@scarboroughfades.com" className="font-medium hover:text-brand-silver transition-colors">info@scarboroughfades.com</a>
                </div>
                <div>
                  <p className="text-brand-silver text-xs uppercase tracking-wider mb-1">Social</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/scarborough_fades/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand-silver transition-colors">Instagram</a>
                    <a href="https://www.facebook.com/ScarboroughFades/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand-silver transition-colors">Facebook</a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://getsquire.com/discover/barbershop/scarborough-fades-scarborough"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-brand-white text-black font-bold px-8 py-4 rounded transition-colors uppercase tracking-wider text-sm"
                >
                  Book Online
                </a>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold uppercase mb-8">
                Hours
              </h2>
              <div className="bg-brand-dark rounded-lg border border-white/5 p-6">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-sm font-medium">{item.day}</span>
                    <span className="text-brand-silver text-sm">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 aspect-video rounded-lg bg-brand-dark border border-white/5 flex items-center justify-center">
                <div className="text-center text-brand-silver">
                  <svg className="w-8 h-8 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">2231 Victoria Park Ave, Scarborough</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
