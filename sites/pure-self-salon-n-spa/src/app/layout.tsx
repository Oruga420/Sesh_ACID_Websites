import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pure Self Salon N Spa | AVEDA Concept Salon & Spa in Markham",
  description:
    "Transform, Relax, Renew, Enhance. Pure Self Salon N Spa is a premier AVEDA Concept Salon & Spa in Markham, ON offering hair, colour, laser, spa, and beauty services. 14+ years of experience.",
  keywords: [
    "salon markham",
    "spa markham",
    "aveda salon",
    "hair salon markham",
    "laser hair removal markham",
    "balayage markham",
    "keratin treatment markham",
    "pure self salon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
