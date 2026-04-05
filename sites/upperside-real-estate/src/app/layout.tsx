import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Upperside Real Estate Limited — Vaughan Real Estate Brokerage',
  description: 'Your trusted partner in GTA real estate. 70+ experienced agents serving Vaughan, Richmond Hill, Toronto, and the Greater Toronto Area.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body pt-10">
        <WatermarkBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
