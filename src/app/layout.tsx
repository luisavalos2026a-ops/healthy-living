import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healthy Living',
  description: 'Your guide to a healthier lifestyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="main-content" style={{ minHeight: '80vh' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
