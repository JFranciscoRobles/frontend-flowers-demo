import { flowersData } from 'data'
import React from 'react'
import { ItemCardInfo } from '../item-card-info'

export function FlowersList () {
  return (
    <div className='p-8'>
      <div className='container grid grid-cols-2 gap-12 mb-12 lg:grid-cols-4'>
        {flowersData.map((item) => (
          <ItemCardInfo key={`section-${item.id}`} {...item} />
        )
        )}
      </div>
    </div>

  )
}
