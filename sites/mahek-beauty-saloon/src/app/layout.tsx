import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Mahek Beauty Saloon — Hair, Bridal & Spa | Etobicoke & Brampton',
  description:
    'Mahek Beauty Saloon: 19+ years of expert hair styling, bridal makeup, facials, and grooming services in Etobicoke and Brampton. Book your appointment today.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Mulish:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col" style={{ fontFamily: "'Mulish', 'Segoe UI', sans-serif" }}>
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
