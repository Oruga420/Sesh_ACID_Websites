import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-charcoal pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/1600898091086-KY2W9SWXQHUW5OMXCNYY/yst_websiteheader.png"
              alt="Yonge Street Tattoos"
              width={180}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-brand-gray text-sm leading-relaxed">
              Toronto&apos;s longest-running female-owned tattoo shop. Est. 1995.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-brand-gray hover:text-brand-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/artists" className="text-brand-gray hover:text-brand-white text-sm transition-colors">Artists</Link></li>
              <li><Link href="/about" className="text-brand-gray hover:text-brand-white text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-brand-gray hover:text-brand-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-brand-gray text-sm">
              <li>602 Yonge St., 3rd Floor</li>
              <li>Toronto, ON M4Y 1Z3</li>
              <li>
                <a href="tel:416-929-2285" className="hover:text-brand-white transition-colors">
                  416-929-2285
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yongestreettattoos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-white transition-colors"
                >
                  @yongestreettattoos
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-brand-gold uppercase text-xs tracking-widest font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-brand-gray text-sm">
              <li className="flex justify-between"><span>Mon - Wed</span><span>12 - 7 PM</span></li>
              <li className="flex justify-between"><span>Thu - Sat</span><span>12 - 9 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>12 - 6 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-charcoal mt-12 pt-8 text-center text-brand-gray text-xs">
          <p>&copy; {new Date().getFullYear()} Yonge Street Tattoos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
