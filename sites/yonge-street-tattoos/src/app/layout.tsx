import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WatermarkBanner from '@/components/WatermarkBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Yonge Street Tattoos | Toronto\'s Longest-Running Female-Owned Tattoo Shop',
  description:
    'Custom tattoos from Toronto\'s finest artists since 1995. Located at 602 Yonge St, 3rd Floor. Walk-ins welcome. Safe & inclusive experience for all.',
  openGraph: {
    title: 'Yonge Street Tattoos | Est. 1995',
    description: 'Toronto\'s longest-running female-owned tattoo shop. Custom tattoos, walk-ins welcome.',
    images: [
      {
        url: 'https://images.squarespace-cdn.com/content/v1/5f69731f8fbe6f65c610e1e4/c11de3cb-16f9-482e-ab54-8ed7b1d93ca6/_MG_2373.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-brand-black text-brand-white">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <WatermarkBanner />
      </body>
    </html>
  );
}
