import type { Metadata } from "next";
import { Poppins, Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Esto es Colombia | Authentic Colombian Restaurant & Bar in Toronto",
  description:
    "The best Colombian restaurant and bar in Toronto. Authentic dishes from Cali, live music, events, and vibrant Latin atmosphere on Dufferin Street, North York.",
  openGraph: {
    title: "Esto es Colombia | Colombian Restaurant & Bar",
    description:
      "Authentic Colombian cuisine in Toronto. Bandeja Paisa, Cazuela de Mariscos, live music & events.",
    url: "https://estoescolombiarestaurant.ca",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
