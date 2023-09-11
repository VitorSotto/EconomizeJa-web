'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PropPagination {
  page: number
  setPage: Function
  totalPages?: number
}

export async function Pagination(prop: PropPagination) {
  return (
    <div className="flex flex-row items-center justify-center">
      <button
        className={prop.page === 1 ? 'text-gray-300' : 'hover:text-gray-300'}
        onClick={() => {
          console.log('Antes de diminuir:', prop.page)
          if (prop.page >= 1) {
            prop.setPage(prop.page - 1)
          }
          console.log('Depois:', prop.page)
        }}
        disabled={prop.page === 1}
      >
        <ArrowLeft width={24} height={24} />
      </button>

      <button
        className={
          prop.page === prop.totalPages
            ? 'text-gray-300'
            : 'hover:text-gray-300'
        }
        onClick={() => {
          prop.setPage(prop.page + 1)
        }}
        disabled={prop.page === prop.totalPages}
      >
        <ArrowRight width={24} height={24} />
      </button>
    </div>
  )
}
