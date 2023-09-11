'use client'

import { CategoryContext } from '@/app/contexts/CategoryContext'
import { Search } from 'lucide-react'
import { type } from 'os'
import React, { useContext, useState } from 'react'

export function SearchBar() {
  const { category, alter } = useContext(CategoryContext)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  function setSelectedCategory(value: string) {
    console.log(value)
    alter(value)
  }
  return (
    <form
      className="flex items-center justify-center gap-6 rounded-lg bg-gray-50 p-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex gap-2">
        <select
          name="category"
          id="category"
          className="form-select border-none bg-transparent text-gray-500 focus:ring-0"
          value={category}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value={''}>Todas as Categorias</option>
          <option value="Arroz">Arroz</option>
          <option value="Feijão">Feijão</option>
          <option value="Açúcar">Açúcar</option>
          <option value="Café">Café</option>
          <option value="Óleo">Óleo</option>
          <option value="Macarrão">Macarrão</option>
          <option value="Detergente">Detergente</option>
          <option value="Farinha">Farinha</option>
          <option value="Sal">Sal</option>
          <option value="Leite">Leite</option>
          <option value="Biscoito">Biscoito</option>
        </select>
        <input
          className="form-input border-none bg-transparent p-0 placeholder:text-gray-300 focus:ring-0"
          type="text"
          name="search"
          id="search"
          placeholder="Digite sua busca..."
          autoComplete="false"
          onChange={() => {}}
        />
      </div>
      <button className="h-8 w-8" type="submit">
        <Search className="text-green-300 hover:text-green-200" />
      </button>
    </form>
  )
}
