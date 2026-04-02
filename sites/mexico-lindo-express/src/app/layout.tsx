// UX REVIEW
// Logo visible: dark text logo on white header — OK
// Primary CTA: "Order Online" in hero + header — OK
// Mobile: hamburger nav, hero readable at 390px — OK
// Real phone: (647) 692-0938 with tel: link — OK
// Address: visible in footer and location section — OK
// Social links: real @mexicolindoex Instagram — OK

import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WatermarkBanner from '@/components/WatermarkBanner'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading-var',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body-var',
})

export const metadata: Metadata = {
  title: 'Mexico Lindo Express | Authentic Mexican Food in Scarborough',
  description:
    'Authentic Mexican street food on Birchmount Road. Famous birria tacos, handmade tortillas, and generous portions. Order online or visit us in Scarborough.',
  keywords: [
    'Mexican restaurant',
    'Scarborough',
    'birria tacos',
    'authentic Mexican food',
    'Birchmount Road',
    'takeout',
  ],
  openGraph: {
    title: 'Mexico Lindo Express',
    description: 'Authentic Mexican street food in Scarborough',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} bg-white text-[#333] pt-8`}
      >
        <WatermarkBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
