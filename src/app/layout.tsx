import { ReactNode, Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import wait from 'wait'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Notebook',
  description:
    "It's the next Jupyter Notebook I've made (as in second), this one in Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="font-bold my-8 text-6xl">Jupyter in Next</nav>
        <Suspense fallback={<div>Loading cool content...</div>}>
          <Cool />
        </Suspense>
        <Suspense fallback={<div>Loading interesting content...</div>}>
          <Interesting />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  )
}

async function Cool() {
  await wait(2000)
  return <div>because why not</div>
}

async function Interesting() {
  await wait(4000)
  return <div>for learning</div>
}
