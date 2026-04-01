import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Scarborough Fades | Premium Barbershop in Scarborough",
  description:
    "The best haircuts in Scarborough. Precision fades, classic cuts, and beard grooming. Over 60 years of combined experience. Walk-ins welcome.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-brand-black text-white">
        <WatermarkBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
