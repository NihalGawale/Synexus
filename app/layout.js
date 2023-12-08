import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Synexus',
  description: 'A digital space to collaborate freelancers and skilled individuals',
  // icons: {
  //   icon: '/synexus.ico',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
