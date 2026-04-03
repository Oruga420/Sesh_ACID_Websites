import type { Metadata } from "next";
import { Passion_One, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WatermarkBanner } from "@/components/WatermarkBanner";

const passionOne = Passion_One({
  variable: "--font-passion-one",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Latinito Empanadas | Fresh Latin American Empanadas in Brampton",
  description:
    "So Good, One Just Isn't Enough! Fresh, authentic South American empanadas made daily in Brampton, ON. Takeout, delivery & catering. Est. 2020.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${passionOne.variable} ${nunitoSans.variable} h-full antialiased`}
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
