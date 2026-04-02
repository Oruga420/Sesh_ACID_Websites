import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chameleon Studio | Custom Tattoos, Barbering & Beauty in Mississauga",
  description:
    "Where art meets individuality. Custom tattoos, barbering, piercings, nail artistry, aesthetic injections, and holistic body treatments in Streetsville, Mississauga. Founded May 2022 by Regine Rose.",
  keywords:
    "tattoo Mississauga, custom tattoo, barbering, piercings, nail artistry, body contouring, aesthetic injections, Streetsville, Chameleon Studio",
  openGraph: {
    title: "Chameleon Studio | Where Art Meets Individuality",
    description:
      "Custom tattoos, barbering, piercings, nail artistry, and holistic body treatments in Mississauga.",
    url: "https://chameleonstudio.ca",
    siteName: "Chameleon Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark-900 text-gray-100`}>
        <WatermarkBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
