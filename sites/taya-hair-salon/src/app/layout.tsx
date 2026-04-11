import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'TAYA Hair Salon | K-Beauty Hair Salon in North York, Toronto',
  description:
    'Professional and trendy Toronto hair salon specializing in K-beauty. Expert stylists delivering Korean perms, balayage, and personalized cuts at two North York locations.',
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        <WatermarkBanner />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
