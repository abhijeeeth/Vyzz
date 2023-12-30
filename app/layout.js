import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/NavBar/NavBar'
import Footer from './Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vysonix',
  description: 'We make eerything Possible',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <Navbar />
        <div className={inter.className}>
          {children}
        </div>

      </body>
    </html>
  )
}
