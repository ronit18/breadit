import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Breadit',
  description: 'A Full functional Reddit clone built with Next.js.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={cn('bg-white text-slate-900 antialiased light')} lang="en">
      <body>{children}</body>
    </html>
  )
}
