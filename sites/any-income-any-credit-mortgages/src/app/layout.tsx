import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

export const metadata: Metadata = {
  title: 'Any Income Any Credit Mortgages — Brampton Mortgage Broker | Bad Credit & Alternative Lending',
  description: 'Get approved for a mortgage regardless of income or credit. Specializing in bad credit mortgages, self-employed lending, new immigrant mortgages, and refinancing in Brampton, Mississauga, Toronto, and all of Ontario.',
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
