import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <WatermarkBanner />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[30vh] min-h-[220px] flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://blogto-production2-baselayer-display.blogto.com/uploads/2022/12/23/1671827169-20221216-EstoEsColumbia-21.jpg"
            alt="Esto es Colombia entrance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Info + Map */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-brand-heading mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Address
                  </h3>
                  <p className="text-brand-heading text-lg">
                    2848 Dufferin St
                    <br />
                    North York, ON M6B 3S3
                  </p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+19054613895"
                    className="text-brand-blue hover:text-brand-blue-hover transition-colors text-lg"
                  >
                    (905) 461-3895
                  </a>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Hours
                  </h3>
                  <ul className="text-brand-body space-y-1">
                    <li className="flex justify-between max-w-xs">
                      <span>Monday &ndash; Thursday</span>
                      <span className="font-medium text-brand-heading">
                        11 AM &ndash; 10 PM
                      </span>
                    </li>
                    <li className="flex justify-between max-w-xs">
                      <span>Friday &ndash; Saturday</span>
                      <span className="font-medium text-brand-heading">
                        11 AM &ndash; 12 AM
                      </span>
                    </li>
                    <li className="flex justify-between max-w-xs">
                      <span>Sunday</span>
                      <span className="font-medium text-brand-heading">
                        11 AM &ndash; 10 PM
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Reservations
                  </h3>
                  <p className="text-brand-body mb-4">
                    Book your table via WhatsApp or call us directly.
                  </p>
                  <a
                    href="https://wa.me/19054613895"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-6 py-3 hover:bg-brand-yellow-hover transition-colors"
                  >
                    WhatsApp Reservation
                  </a>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-brand-muted mb-2">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/estoescolombiarest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-hover transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/estoescolombiarest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-hover transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.youtube.com/@EstoesColombiaTV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-blue-hover transition-colors"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-[500px]">
              <iframe
                title="Esto es Colombia location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2!2d-79.4545!3d43.7068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b33a5cda5a0c1%3A0x1a6f12a3e15d1f0!2sEsto%20es%20Colombia!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* 2nd Floor Events */}
        <section className="bg-brand-bg-alt py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-brand-heading mb-4">
              2nd Floor Venue
            </h2>
            <p className="text-brand-body mb-8 max-w-xl mx-auto leading-relaxed">
              Our upstairs venue hosts live music, private parties, corporate
              events, and celebrations. Experience the vibrant energy of Colombia
              with authentic food, drinks, and entertainment.
            </p>
            <a
              href="https://wa.me/19054613895"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-brand-black font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-brand-yellow-hover transition-colors"
            >
              Inquire About Events
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
