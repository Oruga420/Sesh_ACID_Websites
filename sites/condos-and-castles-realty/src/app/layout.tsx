import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Condos & Castles Realty Inc. — Toronto\'s Boutique Brokerage Since 1999',
  description: 'Independent boutique real estate brokerage specializing in downtown Toronto condos and houses. Buying, selling, renting — with in-house legal and mortgage services. Established 1999.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body bg-brand-bgMain text-brand-textBody pt-10">
        <WatermarkBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
