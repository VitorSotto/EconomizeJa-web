'use client'
import { ReactNode, createContext, useState } from 'react'

interface SearchContextType {
  searchContent: string
  searchInput: (newSearch: string) => void
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchContent, setSearchContent] = useState('')

  function searchInput(newSearch: string) {
    setSearchContent(newSearch) // lowercase
  }

  return (
    <SearchContext.Provider value={{ searchContent, searchInput }}>
      {children}
    </SearchContext.Provider>
  )
}
