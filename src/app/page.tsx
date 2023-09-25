'use client'

import Image from 'next/image'

import { SearchBar } from '@/components/SearchBar'
// import { Pagination } from '@/components/Pagination'
import shopping from '../assets/shopping.svg'
import logo from '../assets/logo.svg'
import background from '../assets/background.svg'
import { Products } from '@/components/Products'
import { Suspense } from 'react'

export default async function Home() {
  const category = ''
  const searchContent = ''
  // console.log(response.data)

  // limite de pagina

  return (
    <div className="relative">
      {/* HEADER */}
      <div className="relative z-0 flex w-full flex-row items-center bg-green-300 px-4 py-2">
        {/* LOGO */}
        <a className="absolute" href="#">
          <Image src={logo} width={68} height={62} alt="logo Ej" />
        </a>

        {/* FORM DE BUSCA */}
        <div className="flex w-full items-center justify-center">
          {/* <form className="flex items-center justify-center gap-6 rounded-lg bg-gray-50 p-2">
            <div className="flex gap-2">
              <select
                name="category"
                id="category"
                className="form-select border-none bg-transparent text-gray-500 focus:ring-0"
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
              />
            </div>
            <button className="h-8 w-8" type="submit">
              <Search className="text-green-300 hover:text-green-200" />
            </button>
          </form> 
          <SearchBar category={0} />
          */}
          <SearchBar category={category} />
        </div>
      </div>

      {/* HERO */}
      <div className="relative z-0 my-16 flex flex-row items-center justify-between gap-8 px-40">
        <div className="w-1/2 text-center">
          <h1 className=" text-3xl font-bold text-green-600">
            BUSQUE SEMPRE OS MAIS BARATOS
          </h1>
          <p className="columns-2xl text-lg text-gray-400">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
        </div>
        <div>
          <Image src={shopping} width={520} height={330} alt="shopping draw" />
        </div>
      </div>

      {/* PRODUCTS */}
      <Suspense
        fallback={
          <p className="text-bold flex items-center justify-center gap-10 text-green-300">
            carregando...
          </p>
        }
      >
        <Products category={category} />
      </Suspense>
      {/*  */}

      {/* BACKGROUD */}
      <Image
        className="absolute top-16 z-[-1]"
        src={background}
        width={1920}
        height={800}
        alt="background waves"
      />
    </div>
  )
}
