import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WatermarkBanner from '@/components/WatermarkBanner'
import ChatbotDemo from '@/components/ChatbotDemo'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-heading-var',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body-var',
})

export const metadata: Metadata = {
  title: 'México Lindo Ajax | Authentic Mexican Restaurant in Ajax, ON',
  description:
    'Ajax\'s favourite authentic Mexican restaurant. Famous birria tacos, sizzling fajitas, homemade salsas and more. Dine in, takeout, or order delivery. 200 Harwood Ave S.',
  keywords: [
    'Mexican restaurant Ajax',
    'birria tacos Ajax',
    'Mexico Lindo Ajax',
    'authentic Mexican food Durham Region',
    'Harwood Avenue Ajax',
    'Mexican food delivery Ajax',
  ],
  openGraph: {
    title: 'México Lindo Ajax',
    description: 'Authentic Mexican restaurant in Ajax, ON. Famous birria tacos, fajitas, and homemade salsas.',
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
        className={`${playfair.variable} ${lato.variable} bg-[#FFFDF8] text-[#3A2A1A] pt-8`}
      >
        <WatermarkBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatbotDemo />
      </body>
    </html>
  )
}
