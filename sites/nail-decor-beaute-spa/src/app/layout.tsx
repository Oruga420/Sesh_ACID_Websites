import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatermarkBanner from "@/components/WatermarkBanner";
import ChatbotDemo from "@/components/ChatbotDemo";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nail Decor Beaute & Spa | Premium Nail Salon in Scarborough",
  description:
    "Your destination for exquisite nail art, relaxing pedicures, lash extensions, and spa treatments in Scarborough. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${nunito.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-body"
        style={{ backgroundColor: "#FFF9F7", color: "#5C4444" }}
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
