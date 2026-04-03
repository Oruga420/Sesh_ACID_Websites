import type { Metadata } from "next";
import { Bitter, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WatermarkBanner } from "@/components/WatermarkBanner";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pupuseria Salvadorena & Authentic Mexican Foods | North York",
  description:
    "Authentic Salvadoran pupusas, tamales, tacos and Mexican favourites made fresh daily at 2459 Finch Ave W, North York. Open 7 days a week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
