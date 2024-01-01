import type { Metadata } from 'next'
import { inconsolata } from './fonts';
import './globals.css'


export const metadata: Metadata = {
  title: 'Ellington Willoughby',
  description: 'Ellington Willoughby & the Mythical Squid',
  icons: '/images/ew_logo.svg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {children}
      </body>
    </html>
  )
}
