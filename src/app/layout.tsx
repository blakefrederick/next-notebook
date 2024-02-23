import { ReactNode, Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import wait from 'wait'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parallel Routes',
  description: 'Just testing paralell routes with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="font-bold my-8 text-6xl">Time for Another Website</nav>
        <main>{children}</main>
        <Suspense fallback={<div>Loading cool content...</div>}>
          <Cool />
        </Suspense>
        <Suspense fallback={<div>Loading interesting content...</div>}>
          <Interesting />
        </Suspense>
      </body>
    </html>
  )
}

async function Cool() {
  await wait(2000)
  return <div>Woo wow content</div>
}

async function Interesting() {
  await wait(4000)
  return <div>Intriguing, quite the content</div>
}
