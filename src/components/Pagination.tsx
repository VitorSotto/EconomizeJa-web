'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PropPagination {
  page: number
  setPage: Function
}

export async function Pagination(prop: PropPagination) {
  return (
    <div className="flex flex-row items-center justify-center">
      <button
        className="hover:text-gray-300"
        onClick={() => {
          if (prop.page >= 1) {
            prop.setPage(prop.page - 1)
          }
        }}
      >
        <ArrowLeft width={24} height={24} />
      </button>

      <button
        className="hover:text-gray-300"
        onClick={() => {
          prop.setPage(prop.page + 1)
        }}
      >
        <ArrowRight width={24} height={24} />
      </button>
    </div>
  )
}
