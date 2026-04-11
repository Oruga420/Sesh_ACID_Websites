import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Diva Nails & Head Spa — Scarborough\'s Nail & Relaxation Destination',
  description:
    'Expert nail artistry, the viral head spa experience, eyelash extensions, facials & more at 2639 Eglinton Ave E, Scarborough. Book your appointment today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WatermarkBanner />
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
