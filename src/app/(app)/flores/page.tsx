import { Items } from '@/components/items/items'
import Typography from '@/components/ui/typography'
import React from 'react'

function Page () {
  return (
    <main className='flex flex-col w-full my-8 '>
      <div className='my-12'>
        <Typography variant='h1' className='text-center'>
          Conoce nuestro inventario de flores
        </Typography>
      </div>
      <div>
        <Items />
      </div>
    </main>
  )
}

export default Page
