import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const popinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bank Website | TarreDev 💸 ',
  description: 'Follow me for more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
