import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatermarkBanner from "@/components/WatermarkBanner";
import ChatbotDemo from "@/components/ChatbotDemo";

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hanh Beauty Salon & Spa | Brampton's Complete Wellness Destination",
  description:
    "Full-service spa, medispa, and salon in Brampton. Facials, massage, laser treatments, hair services, and more. Multiple locations across Brampton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-body"
        style={{ backgroundColor: "#FAFAF7", color: "#4A5D52" }}
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
