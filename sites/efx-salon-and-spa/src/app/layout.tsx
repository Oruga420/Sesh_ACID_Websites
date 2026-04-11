import type { Metadata } from 'next';
import { Abel, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

const abel = Abel({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abel',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EFX Salon and Spa | Premium Hair & Beauty Services in Etobicoke',
  description:
    'EFX Salon and Spa — Where everyone is welcome. Expert hair styling, coloring, extensions, spa services, and bridal styling in Etobicoke. Kerastase Partner. 36+ years of excellence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${abel.variable} ${poppins.variable}`}>
      <body className="font-body text-brand-textBody bg-brand-bgMain antialiased">
        <WatermarkBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
