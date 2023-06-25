import { ReactNode } from 'react'

import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'EconomizeJa',
  description: 'Economize seu dinheiro com a gente!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} bg-gray-50 font-sans`}>
        {/* <SearchBar/> */}
        {children}
      </body>
    </html>
  )
}
