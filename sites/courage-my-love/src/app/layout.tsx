import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatermarkBanner from "@/components/WatermarkBanner";
import ChatbotDemo from "@/components/ChatbotDemo";

export const metadata: Metadata = {
  title: "Courage My Love — Vintage Treasures Since 1975 | Kensington Market, Toronto",
  description:
    "50 years of handpicked vintage clothing, global beads, antique jewelry & one-of-a-kind treasures in the heart of Kensington Market. Family-run since 1975.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col pt-10">
        <WatermarkBanner businessName="Courage My Love" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  );
}
