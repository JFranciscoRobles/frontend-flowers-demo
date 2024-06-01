import { FlowersList } from '@/components/landing/FlowersList'
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
        <FlowersList />
      </div>
    </main>
  )
}

export default Page
