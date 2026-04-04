import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Niro Tharmakulasingam | RE/MAX Community Realty — Scarborough Real Estate Broker',
  description: 'Your trusted RE/MAX broker in Scarborough. Client focused, results driven — 9 years of expertise helping buyers, sellers, and investors across the Greater Toronto Area.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col" style={{ paddingTop: '40px' }}>
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
