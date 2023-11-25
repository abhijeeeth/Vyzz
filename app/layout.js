import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vysonix',
  description: 'Demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
        <Navbar/>
        <div className={inter.className}>
        {children}
        </div>
        </body>
    </html>
  )
}
