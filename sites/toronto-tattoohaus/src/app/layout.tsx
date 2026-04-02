import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";
import WatermarkBanner from "@/components/WatermarkBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toronto Tattoohaus | Inclusive Tattoo Studio in St. Clair West",
  description:
    "Toronto Tattoohaus is a proudly inclusive and fully accessible tattoo studio on St. Clair Ave W. Specializing in fine line, illustrative, black & grey, and fully custom designs. Book your consultation today.",
  keywords: [
    "tattoo toronto",
    "tattoo studio st clair west",
    "fine line tattoo toronto",
    "illustrative tattoo toronto",
    "black and grey tattoo toronto",
    "custom tattoo toronto",
    "accessible tattoo studio",
    "inclusive tattoo shop",
    "toronto tattoohaus",
    "flash tattoo toronto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${nunitoSans.variable}`}>
      <body className="min-h-screen flex flex-col pt-8">
        <WatermarkBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
