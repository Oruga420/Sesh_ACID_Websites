import type { Metadata } from "next";
import "./globals.css";
import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "905 INK Tattoo Facility | Custom Tattoos & Piercings | Toronto & Brampton",
  description:
    "The elegance of brilliance tattoo designs. Custom tattoo design and piercing shops serving Toronto and Brampton. Specializing in portraits, realism, linework, and more.",
  keywords:
    "tattoo, piercing, 905 INK, Brampton tattoo, Toronto tattoo, custom tattoo, portrait tattoo, realism",
  openGraph: {
    title: "905 INK Tattoo Facility",
    description: "Custom Tattoo Design & Piercing | Toronto & Brampton",
    url: "https://905ink.ca",
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
      <body className="antialiased bg-dark text-gray-100">
        <WatermarkBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
