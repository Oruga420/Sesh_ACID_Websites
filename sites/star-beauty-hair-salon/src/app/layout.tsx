/*
 * DESIGN PERSONALITY: GALLERY-FORWARD + NEIGHBORHOOD hybrid
 *
 * 5 Personality Questions:
 * 1. Dominant emotion: Warmth + transformation — beauty salon = confidence + renewal
 * 2. Work IS the product: YES — color transformations (balayage, ash blonde, rosegold) are the portfolio
 * 3. Established: Newer location ("welcome to our new location") → clean, modern feel
 * 4. Customers feel: Welcomed, cared for, in skilled hands (4.6★ Google, 5.0★ Facebook)
 * 5. NEVER fits: Dark/gritty, industrial, cold blues, corporate language
 *
 * Layout Personality: B (GALLERY-FORWARD) + D (NEIGHBORHOOD)
 * The ONE thing: Warm rose tones with elegant Cormorant Garamond serif headlines
 * on a blush-warm canvas — feels like a boutique beauty salon, not a generic template.
 */

import type { Metadata } from 'next';
import { BRAND } from '@/lib/brand-tokens';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';
import './globals.css';

export const metadata: Metadata = {
  title: `${BRAND.business.name} — Hair Color Transformations in Scarborough`,
  description: `Expert balayage, color correction, and hair transformations on Kennedy Rd in Scarborough. Walk-ins welcome, appointments recommended. Call ${BRAND.business.phone}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg-main text-brand-text-body antialiased">
        <WatermarkBanner businessName={BRAND.business.name} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
