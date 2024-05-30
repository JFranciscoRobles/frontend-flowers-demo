import { Button } from '@/components/ui/button'
import { flowersData } from 'data'
import Image from 'next/image'

import React from 'react'

function Page () {
  const flowers = [flowersData[0], flowersData[1], flowersData[2], flowersData[3]]

  return (
    <main className='flex flex-col w-full my-8 '>
      <section className='w-full py-20 bg-pink-50'>
        <div className='container grid items-center grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-50'>Descubre la Belleza de las Flores</h1>
            <p className='text-lg text-gray-500 dark:text-gray-400'>
              Explora nuestra colección seleccionada de los flores y arreglos florales más vendidos.
            </p>
            <div className='flex gap-4'>
              <Button variant='default'>Comprar Flores</Button>
              <Button variant='secondary'>Ver arreglos florales</Button>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {flowers.map((flower) => (
              <Image
                key={flower.id}
                alt={flower.nombre}
                className='rounded-lg shadow-lg'
                height='300'
                src={flower.imagen}
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover'
                }}
                width='300'
              />
            ))}
          </div>
        </div>
      </section>
    </main>

  )
}

export default Page
