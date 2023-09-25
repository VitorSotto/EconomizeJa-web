import { ReactNode } from 'react'

import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { CategoryProvider } from './contexts/CategoryContext'
import { SearchProvider } from './contexts/SearchContext'

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
        <SearchProvider>
          <CategoryProvider>{children}</CategoryProvider>
        </SearchProvider>
      </body>
    </html>
  )
}
