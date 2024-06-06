import React from 'react'
import { productsData } from '@/lib/data'
import { ItemCardInfo } from './item-card-info'

export function Items () {
  return (

    <div className='container grid gap-6 p-8 mb-12 md:grid-cols-2 lg:gap-12 lg:grid-cols-4'>
      {productsData.map((item) => (
        <ItemCardInfo key={`section-${item.id}`} item={item} />
      )
      )}
    </div>

  )
}
