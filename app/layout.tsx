import type { Metadata } from 'next'
import { Tilt_Neon } from 'next/font/google'
import './globals.css'

const tilt = Tilt_Neon({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ellington Willoughby',
  description: 'Ellington Willoughby & the Mythical Squid',
  icons: '/logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={tilt.className}>{children}</body>
    </html>
  )
}
