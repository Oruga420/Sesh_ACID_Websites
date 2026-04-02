import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gwan Soon Lee Tattoos & Piercings | Custom Tattoo Studio Mississauga",
  description:
    "Custom tattoos and piercings in the heart of Mississauga near Square One. 25+ years of experience specializing in fine line, black and grey, colour realism tattoos. Free consultations.",
  keywords: [
    "tattoo mississauga",
    "piercings mississauga",
    "custom tattoo square one",
    "fine line tattoo mississauga",
    "colour realism tattoo",
    "black and grey tattoo",
    "gwan soon lee tattoo",
    "tattoo near square one",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col">
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
