import { BRAND } from '@/lib/brand-tokens';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-heroBg to-brand-primary py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/60 mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            We Are Here to Help
          </h1>
          <p className="text-white/80 font-body max-w-2xl mx-auto text-lg">
            Ready to start your real estate journey? Reach out to Team Executive — we respond to every inquiry personally.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-brand-primary mb-3">Contact Information</p>
              <h2 className="font-heading text-3xl font-bold text-brand-textHeading mb-8">
                Connect With Team Executive
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-textHeading">Phone</p>
                    <a href={`tel:${BRAND.business.phone}`} className="text-brand-primary font-body hover:underline text-lg">{BRAND.business.phone}</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-textHeading">WhatsApp</p>
                    <a href={`https://wa.me/${BRAND.business.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-body hover:underline text-lg">{BRAND.business.whatsapp}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-textHeading">Email</p>
                    <a href={`mailto:${BRAND.business.email}`} className="text-brand-primary font-body hover:underline">{BRAND.business.email}</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-textHeading">Office</p>
                    <p className="text-brand-textBody font-body">{BRAND.business.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-brand-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-textHeading">Hours</p>
                    <p className="text-brand-textBody font-body">{BRAND.business.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="font-heading font-semibold text-brand-textHeading mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href={BRAND.business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href={BRAND.business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-brand-bgAlt p-8 md:p-10 rounded-card border border-brand-border">
                <h3 className="font-heading text-2xl font-bold text-brand-textHeading mb-2">Send Us a Message</h3>
                <p className="text-brand-textMuted font-body text-sm mb-8">
                  Fill out the form below and one of our team members will get back to you within 24 hours.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-textHeading mb-1.5">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-btn border border-brand-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-semibold text-brand-textHeading mb-1.5">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-btn border border-brand-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-textHeading mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-btn border border-brand-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-textHeading mb-1.5">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-btn border border-brand-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white" placeholder="(905) 555-1234" />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-textHeading mb-1.5">I am a...</label>
                    <select className="w-full px-4 py-3 rounded-btn border border-brand-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white text-brand-textBody">
                      <option>Buyer</option>
                      <option>Seller</option>
                      <option>Investor</option>
                      <option>Renter</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-semibold text-brand-textHeading mb-1.5">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-btn border border-brand-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white resize-none" placeholder="Tell us about your real estate needs..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-primary text-white font-heading font-bold text-sm rounded-btn hover:bg-brand-heroBg transition-all duration-300 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-bgAlt py-16">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-brand-textHeading text-center mb-8">
            Visit Our Office
          </h2>
          <div className="rounded-card overflow-hidden border border-brand-border shadow-sm" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1!2d-79.7528!3d43.6908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15d3e2a3e3a3%3A0x1234567890abcdef!2s5B+Conestoga+Dr%2C+Brampton%2C+ON+L6Z+4N5!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Executive Real Estate Services Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
