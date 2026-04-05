import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MorCan Financial Inc. | Mortgage Brokers in Vaughan & GTA',
  description:
    'Since 1997, MorCan Financial has helped Ontario families find the right mortgage. Access to 50+ lenders. Led by Joe Taibi, FSRA #10687.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: 'var(--font-body)', paddingTop: '36px' }}
      >
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
