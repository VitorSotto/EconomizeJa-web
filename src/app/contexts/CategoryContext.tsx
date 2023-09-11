'use client'
import { ReactNode, createContext, useState } from 'react'

interface CategoryContextType {
  category: string
  alter: (newCategory: string) => void
}

export const CategoryContext = createContext({} as CategoryContextType)

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState('')

  function alter(newCategory: string) {
    setCategory(newCategory)
  }

  return (
    <CategoryContext.Provider value={{ category, alter }}>
      {children}
    </CategoryContext.Provider>
  )
}
