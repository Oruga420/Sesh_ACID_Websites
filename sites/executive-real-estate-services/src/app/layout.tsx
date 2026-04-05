import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';
import ChatbotDemo from '@/components/ChatbotDemo';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Executive Real Estate Services Ltd. | Brampton Real Estate Brokerage',
  description:
    'Exceptional Services From Exceptional People. 15+ years of trusted real estate expertise in Brampton, Mississauga, Toronto & the GTA. Residential, Commercial, Condos & Mortgage Services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="pt-10 font-body bg-brand-bgMain text-brand-textBody antialiased">
        <WatermarkBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
