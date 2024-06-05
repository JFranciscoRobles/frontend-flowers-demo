import React from 'react'
import { ItemCardInfo } from '../item-card-info'
import { productsData } from '@/lib/data'

export function FlowersList () {
  return (
    <div className='p-8'>
      <div className='container grid grid-cols-2 gap-12 mb-12 lg:grid-cols-4'>
        {productsData.map((item) => (
          <ItemCardInfo key={`section-${item.id}`} item={item} />
        )
        )}
      </div>
    </div>

  )
}
