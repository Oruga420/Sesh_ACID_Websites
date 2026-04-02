import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

const styles = [
  "Linework",
  "Portraits",
  "Black & Grey Realism",
  "Color Realism",
  "Script",
  "Dotwork",
  "Minimalism",
  "Japanese Art",
  "Watercolor",
  "Traditional",
  "Neo-Traditional",
  "Cover-ups",
];

const locations = [
  {
    name: "Brampton North",
    address: "470 Chrysler Dr, Unit #24",
    phone: "(905) 789-9993",
  },
  {
    name: "Brampton South",
    address: "1 Steeles Ave E, Unit #19",
    phone: "(905) 454-8086",
  },
  {
    name: "Toronto",
    address: "1386 Gerrard St E, Unit #1",
    phone: "(416) 546-3373",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://905ink.ca/wp-content/uploads/2023/02/Artist_16_1.webp"
            alt="905 INK Tattoo Art"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="font-heading text-7xl md:text-9xl text-white tracking-wider mb-4">
            905 <span className="text-burnt-red">INK</span>
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-gray-300 tracking-widest mb-4">
            TATTOO FACILITY
          </p>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The elegance of brilliance tattoo designs. Custom tattoo design and
            piercing shops serving Toronto and Brampton.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://905ink.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burnt-red hover:bg-burnt-red-dark text-white px-10 py-4 rounded font-semibold text-lg tracking-wide transition-colors uppercase"
            >
              Book Your Session
            </a>
            <Link
              href="/artists"
              className="border-2 border-burnt-red text-burnt-red hover:bg-burnt-red hover:text-white px-10 py-4 rounded font-semibold text-lg tracking-wide transition-colors uppercase"
            >
              Meet Our Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-burnt-red py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-heading text-4xl text-white">3</p>
            <p className="text-white/80 text-sm uppercase tracking-wide">Locations</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-white">5+</p>
            <p className="text-white/80 text-sm uppercase tracking-wide">Artists</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-white">4.7</p>
            <p className="text-white/80 text-sm uppercase tracking-wide">Star Rating</p>
          </div>
          <div>
            <p className="font-heading text-4xl text-white">258+</p>
            <p className="text-white/80 text-sm uppercase tracking-wide">Reviews</p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl text-white tracking-wider mb-4">
              OUR TATTOO STYLES
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From delicate linework to bold realism, our artists master every style
              to bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {styles.map((style) => (
              <div
                key={style}
                className="bg-dark-light border border-dark-lighter rounded-lg p-6 text-center hover:border-burnt-red/50 transition-colors group"
              >
                <p className="text-gray-300 group-hover:text-burnt-red transition-colors font-medium">
                  {style}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl text-white tracking-wider mb-6">
                YOUR STORY, <span className="text-burnt-red">OUR ART</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                At 905 INK, we believe every tattoo tells a story. Our team of
                skilled artists works with you to create custom designs that
                capture your personal narrative in stunning detail.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                With three locations across Brampton and Toronto, we provide a
                safe, clean, and comfortable environment. Our facility is health
                board inspected and approved, using only new needles disposed of
                in approved sharps containers.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-burnt-red">&#10003;</span>
                  Health Board Inspected &amp; Approved
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-burnt-red">&#10003;</span>
                  Private Rooms for Each Session
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-burnt-red">&#10003;</span>
                  Free Custom Design Consultation
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-burnt-red">&#10003;</span>
                  Payment Plans Available (Affirm)
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://905ink.ca/wp-content/uploads/2023/02/Artist_16_1.webp"
                alt="905 INK Studio"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Locations Preview */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl text-white tracking-wider mb-4">
              3 LOCATIONS TO SERVE YOU
            </h2>
            <p className="text-gray-400">Open daily from 12PM to 9PM</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-dark-light border border-dark-lighter rounded-lg p-8 text-center hover:border-burnt-red/30 transition-colors"
              >
                <h3 className="font-heading text-2xl text-burnt-red tracking-wider mb-3">
                  {loc.name}
                </h3>
                <p className="text-gray-400 mb-2">{loc.address}</p>
                <a
                  href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`}
                  className="text-white hover:text-burnt-red transition-colors font-medium"
                >
                  {loc.phone}
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="bg-burnt-red hover:bg-burnt-red-dark text-white px-8 py-3 rounded font-semibold tracking-wide transition-colors uppercase"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-burnt-red to-burnt-red-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wider mb-6">
            READY FOR YOUR NEXT PIECE?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Walk-ins welcome for consultations. Book your appointment today and
            let our artists bring your vision to life.
          </p>
          <a
            href="https://905ink.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-burnt-red hover:bg-cream px-10 py-4 rounded font-bold text-lg tracking-wide transition-colors uppercase inline-block"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
