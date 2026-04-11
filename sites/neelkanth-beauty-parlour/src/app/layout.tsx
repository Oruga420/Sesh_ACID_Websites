import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Neelkanth Beauty Parlour — Your Beauty, Our Passion | Markham',
  description:
    'Expert threading, facials, bridal makeup & spa services in Markham. Affordable luxury with warm South Asian hospitality. Walk-ins welcome. (647) 674-8191.',
  openGraph: {
    title: 'Neelkanth Beauty Parlour — Your Beauty, Our Passion',
    description: 'Expert threading, facials, bridal makeup & spa services in Markham, ON.',
    url: 'https://neelkanthbeautyparlour.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-10">
        <WatermarkBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
