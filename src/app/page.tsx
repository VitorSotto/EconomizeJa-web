'use client'

import Image from 'next/image'
import { useState } from 'react'

import { api } from '@/lib/api'
import { SearchBar } from '@/components/SearchBar'
import { Pagination } from '@/components/Pagination'

import shopping from '../assets/shopping.svg'
import logo from '../assets/logo.svg'
import background from '../assets/background.svg'
import ToninLogo from '../assets/Tonin_logo.png'
import AtacadaoLogo from '../assets/Atacadao_logo.jpeg'
import SavegnagoLogo from '../assets/Savegnago_logo.png'

export default async function Home() {
  const [page, setPage] = useState<number>(1)

  const { data: response } = await api.get(`/api/products/${page}`)

  return (
    <div className="relative">
      {/* HEADER */}
      <div className="relative z-10 flex w-full flex-row items-center bg-green-300 px-4 py-2">
        {/* LOGO */}
        <Image
          className="absolute"
          src={logo}
          width={68}
          height={62}
          alt="logo Ej"
        />

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
          </form> */}
          <SearchBar />
        </div>
      </div>

      {/* HERO */}
      <div className="relative z-10 my-16 flex flex-row items-center justify-between gap-8 px-40">
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
      <div className="relative z-10 m-auto grid w-4/5 grid-cols-4 gap-4 py-4">
        {response.data.map((product: any) => (
          <a
            key={product.id}
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
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />

      {/* BACKGROUD */}
      <Image
        className="absolute top-16 z-0"
        src={background}
        width={1920}
        height={800}
        alt="background waves"
      />
    </div>
  )
}
