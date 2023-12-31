'use client'

import ToninLogo from '../assets/Tonin_logo.png'
import AtacadaoLogo from '../assets/Atacadao_logo.jpeg'
import SavegnagoLogo from '../assets/Savegnago_logo.png'
import { api } from '@/lib/api'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Pagination } from './Pagination'
import { ModalProduct } from './Modal'
import { CategoryContext } from '@/app/contexts/CategoryContext'
import { SearchContext } from '@/app/contexts/SearchContext'

interface ProductType {
  id: string
  name: string
  supplier: string
  market: string
  image: string
  priceId: string
}

interface DataType {
  id: string
  category: string
  price: string
  productAt: string
  productId: string
  product: ProductType
}

interface ResponseProductType {
  data?: DataType[]
  page?: number
  pageSize?: number
  totalCount?: number
  totalPages?: number
  filter?: any
}

export async function Products() {
  const { category } = useContext(CategoryContext)
  const { searchContent } = useContext(SearchContext)
  const [data, setData] = useState<ResponseProductType>({ data: [], page: 1 })
  const [page, setPage] = useState<number>(1)
  // const [showResults, setShowResults] = useState(false)
  // const [category, setCategory] = useState<string>('Arroz')
  // const [count, setCount] = useState<ResponseProductType>({})
  // const [data, setData] = useState<ResponseProductType>({})
  // const [data, setData] = useState<ResponseProductType>({})

  async function GetDataProducts(
    pageNumber: number,
    category: string,
    searchContent: string,
  ) {
    // priorizar category ou search & caso haja os dois
    // Search
    if (searchContent === '' && category === '') {
      const { data: response } = await api.get(`/api/products/${pageNumber}`)
      return response
    }

    if (category) {
      // console.log('passou')
      const { data: response } = await api.get(
        `/api/products/category/${category}/${pageNumber}`,
      )
      return response
    }
    // search
    else {
      console.log('else')
      const { data: response } = await api.get(
        `/api/products/search/${searchContent}/${pageNumber}`,
      )
      return response
    }
  }

  useEffect(() => {
    async function fetchData() {
      // console.log(searchContent)
      const result = await GetDataProducts(page, category, searchContent)
      setPage(result.page)
      setData(result)
      console.log(result)

      //
      // setShowResults(true)
    }

    fetchData()
  }, [page, category, searchContent])

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
    // console.log(setModalIsOpen)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    // console.log(setModalIsOpen)
  }

  return (
    <div className="relative z-0">
      <div className="relative z-10 m-auto grid w-4/5 grid-cols-4 gap-4 py-4">
        {data?.data?.map((product: any) => (
          <button key={product.id} onClick={openModal}>
            <a
              href="#"
              className="relative flex flex-col items-center gap-8 rounded-3xl bg-gray-50 p-4 drop-shadow-lg transition-colors hover:bg-gray-100"
            >
              <Image
                width={120}
                height={120}
                src={product.product.image}
                alt={product.name}
              />
              <div className="flex flex-col items-center justify-center">
                <span className="text-center text-sm font-semibold text-gray-500">
                  {product.product.name}
                </span>
                <p className="text-sm font-light text-gray-400">
                  {product.product.market}
                </p>
              </div>
              <p className="flex items-center text-2xl font-bold text-green-400">
                R$ {product.price}
              </p>
              {product.product.market === 'Tonin' && (
                <Image
                  className="absolute bottom-0 right-0 rounded-full border-2 border-green-300 hover:border-green-200"
                  width={48}
                  height={48}
                  src={ToninLogo}
                  alt="Tonin Logo"
                />
              )}
              {product.product.market === 'Atacadão' && (
                <Image
                  className="absolute bottom-0 right-0 rounded-full border-2 border-green-300 hover:border-green-200"
                  width={48}
                  height={48}
                  src={AtacadaoLogo}
                  alt="Atacadão Logo"
                />
              )}
              {product.product.market === 'Savegnago' && (
                <Image
                  className="absolute bottom-0 right-0 rounded-full border-2 border-green-300 hover:border-green-200"
                  width={48}
                  height={48}
                  src={SavegnagoLogo}
                  alt="Savegnago Logo"
                />
              )}
            </a>
          </button>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={data?.totalPages} />
      <ModalProduct isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  )
}
