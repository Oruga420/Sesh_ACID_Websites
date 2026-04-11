import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Dania Latina Dominican Hair Salon | Burlington, ON',
  description: 'Dominican hair salon specializing in Afro and curly hair. Dominican blowouts, keratin, extensions, coloring. Walk-ins welcome. Burlington, ON.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Nunito Sans', system-ui, sans-serif" }}>
        <WatermarkBanner />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
