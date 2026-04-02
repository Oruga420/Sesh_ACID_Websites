import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | 905 INK Tattoo Facility",
  description:
    "Custom tattoos, piercings, laser removal, and aftercare. Specializing in portraits, realism, linework, Japanese art, and more.",
};

const services = [
  {
    title: "Custom Tattoo Design",
    description:
      "Work directly with our artists to create a one-of-a-kind piece that tells your story. Free design consultation included with every booking.",
    features: [
      "Free design consultation",
      "Custom artwork tailored to you",
      "Multiple revision rounds",
      "Digital preview before ink",
    ],
  },
  {
    title: "Body Piercing",
    description:
      "Professional body piercing services in a sterile, comfortable environment. All piercings use surgical-grade jewelry and follow strict hygiene protocols.",
    features: [
      "Surgical-grade jewelry",
      "Sterile single-use equipment",
      "Aftercare kit included",
      "Wide selection of jewelry styles",
    ],
  },
  {
    title: "Laser Removal",
    description:
      "Advanced laser tattoo removal technology coming soon to 905 INK. Safe and effective removal for unwanted tattoos or preparation for cover-up work.",
    features: [
      "Advanced laser technology",
      "Safe for all skin types",
      "Cover-up preparation",
      "Coming Soon",
    ],
  },
  {
    title: "Aftercare Consultation",
    description:
      "Comprehensive aftercare guidance to ensure your new tattoo or piercing heals perfectly. Our team provides personalized care instructions.",
    features: [
      "Personalized healing plan",
      "Product recommendations",
      "Follow-up check-ins",
      "Touch-up scheduling",
    ],
  },
];

const tattooStyles = [
  {
    name: "Linework & Fine Line",
    description: "Delicate, precise lines creating elegant minimalist designs.",
  },
  {
    name: "Portraits",
    description: "Photorealistic portrait work capturing every detail.",
  },
  {
    name: "Black & Grey Realism",
    description: "Stunning monochromatic pieces with incredible depth and shading.",
  },
  {
    name: "Color Realism",
    description: "Vibrant, lifelike tattoos that pop with full color.",
  },
  {
    name: "Japanese Art",
    description: "Traditional Japanese motifs with bold lines and rich symbolism.",
  },
  {
    name: "Watercolor",
    description: "Fluid, painterly designs that mimic watercolor techniques.",
  },
  {
    name: "Neo-Traditional",
    description: "Modern takes on classic tattoo aesthetics with bold outlines.",
  },
  {
    name: "Script & Lettering",
    description: "Custom calligraphy and lettering in any style or language.",
  },
  {
    name: "Dotwork",
    description: "Intricate patterns built entirely from carefully placed dots.",
  },
  {
    name: "Cover-ups",
    description: "Expert transformation of existing tattoos into new masterpieces.",
  },
  {
    name: "Tribal",
    description: "Bold tribal patterns rooted in cultural traditions.",
  },
  {
    name: "Minimalism",
    description: "Simple, clean designs with maximum impact.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-6xl md:text-7xl text-white tracking-wider mb-4">
            OUR <span className="text-burnt-red">SERVICES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From custom tattoo design to professional piercing, we offer
            comprehensive body art services in a safe, welcoming environment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-dark border border-dark-lighter rounded-lg p-8 hover:border-burnt-red/30 transition-colors"
              >
                <h2 className="font-heading text-3xl text-burnt-red tracking-wider mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <span className="text-burnt-red text-sm">&#9679;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tattoo Styles */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl text-white tracking-wider mb-4">
              TATTOO STYLES WE MASTER
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our team specializes in a wide range of tattoo styles. Whatever
              your vision, we have an artist who can bring it to life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tattooStyles.map((style) => (
              <div
                key={style.name}
                className="bg-dark-light border border-dark-lighter rounded-lg p-6 hover:border-burnt-red/30 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{style.name}</h3>
                <p className="text-gray-400 text-sm">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-20 bg-burnt-red">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl text-white tracking-wider mb-6">
            FLEXIBLE PAYMENT OPTIONS
          </h2>
          <p className="text-white/80 text-lg mb-8">
            We offer payment plans through Affirm so you can get the tattoo you
            want today. Deposits available online at shop.905ink.ca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://905ink.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-burnt-red hover:bg-cream px-8 py-3 rounded font-bold tracking-wide transition-colors uppercase"
            >
              Book Appointment
            </a>
            <a
              href="https://shop.905ink.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-burnt-red px-8 py-3 rounded font-bold tracking-wide transition-colors uppercase"
            >
              Visit Shop
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
