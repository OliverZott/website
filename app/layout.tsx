import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Oliver Zott',
  description: 'Personal website of Oliver Zott',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}     
