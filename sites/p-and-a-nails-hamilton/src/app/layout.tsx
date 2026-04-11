import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'P & A Nails Hamilton Mountain — Your Neighbourhood Nail Salon',
  description:
    "Hamilton Mountain's most welcoming nail salon. 10+ years of expert manicures, pedicures, and nail art. Walk-ins welcome.",
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
          href="https://fonts.googleapis.com/css2?family=Droid+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <WatermarkBanner />
        <div className="pt-8">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <ChatbotDemo />
      </body>
    </html>
  );
}
