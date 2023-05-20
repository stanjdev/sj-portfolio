import './globals.css'
import { Actor } from 'next/font/google'
import { Caveat } from 'next/font/google'

const actor = Actor({ subsets: ['latin'], weight: '400' })
const caveat = Caveat({ subsets: ['latin'], weight: '500' })


export const metadata = {
  title: 'Stan Jeong Portfolio',
  description: 'Showcasing my work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={actor.className}>{children}</body>
    </html>
  )
}
