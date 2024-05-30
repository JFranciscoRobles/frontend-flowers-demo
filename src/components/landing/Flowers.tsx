import { flowersData } from 'data'
import React from 'react'
import { DirectionAwareHover } from '../ui-motion/direction-aware-card'

export function Flowers () {
  const flowers = flowersData
    .sort(() => Math.random() - Math.random())
    .slice(0, 8)
  return (
    <div className='p-8 bg-primary '>
      <div className='container grid grid-cols-4 gap-6 my-12'>
        {flowers.map((flower) => (
          <div className='relative flex items-center justify-center' key={flower.id}>
            <DirectionAwareHover imageUrl={flower.imagen}>
              <p className='text-xl font-bold'>{flower.nombre}</p>
              <p className='text-sm font-normal'>${flower.valor} / {flower.moneda}</p>
            </DirectionAwareHover>
          </div>
        )
        )}
      </div>
    </div>
  )
}
