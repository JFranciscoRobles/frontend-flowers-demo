import React from 'react'
import Typography from '../ui/typography'
import { Button } from '../ui/button'
import { productsData } from '@/lib/data'
import { ItemCardInfo } from '../items/item-card-info'
import LinkUI from '../ui/link'

export function ItemsSection () {
  const products = productsData
    .sort(() => Math.random() - Math.random())
    .slice(0, 8)
  return (
    <div className='py-8 bg-primary'>
      <div className='my-8'>
        <Typography variant='h2' className='container text-center text-primary-foreground'>Conoce nuestros mas hermosos ramos.</Typography>
      </div>
      <div className='container grid grid-cols-2 gap-6 my-12 lg:grid-cols-4'>
        {products.map((item) => (
          <ItemCardInfo key={`section-${item.id}`} item={item} />
        )
        )}
      </div>
      <div className='flex justify-center w-full mb-6'>
        <LinkUI href='/flores'>
          <Button variant='secondary' size='lg'>Quiero ver mas Ramos</Button>
        </LinkUI>
      </div>
    </div>

  )
}
