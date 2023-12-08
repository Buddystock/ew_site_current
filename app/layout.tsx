import type { Metadata } from 'next'
import { Karla } from 'next/font/google'
import './globals.css'

const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ellington Willoughby',
  description: 'Ellington Willoughby & the Mythical Squid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
