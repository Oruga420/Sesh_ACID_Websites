import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
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

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Randy Selzer — Platinum Award-Winning REALTOR in Mississauga',
  description:
    'Randy Selzer is a Platinum award-winning real estate agent serving Mississauga, Oakville, and the GTA since 1993. 30+ years of experience. Podcast host. Sutton Group Summit Realty.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="bg-brand-bgMain text-brand-textBody font-body antialiased pt-10">
        <WatermarkBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
