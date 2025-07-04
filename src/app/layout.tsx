import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar/Navbar'
import Footer from '@/Components/Footer/Footer'
import FeaturesNavbar from '@/Components/Navbar/FeaturesNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PrimeTech',
  description: 'PrimeTech Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="sticky top-0 left-0 w-full z-50 bg-black shadow-md">
          <Navbar />
          <FeaturesNavbar /> {/* Now always visible, handles mobile behavior itself */}
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}