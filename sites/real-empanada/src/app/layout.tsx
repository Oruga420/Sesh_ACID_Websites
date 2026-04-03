import type { Metadata } from "next";
import { Averia_Sans_Libre, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WatermarkBanner } from "@/components/WatermarkBanner";

const averiaSansLibre = Averia_Sans_Libre({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Empanada | Toronto's Best Authentic Colombian Empanadas",
  description:
    "100% authentic Colombian empanadas — gluten-free, halal, handmade with Mama's signature recipe. Order hot & fresh or frozen for home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${averiaSansLibre.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
