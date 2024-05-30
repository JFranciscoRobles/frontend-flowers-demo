import { flowersData } from 'data'
import React from 'react'
import { DirectionAwareHover } from '../ui-motion/direction-aware-card'
import Typography from '../ui/typography'
import { Button } from '../ui/button'

export function Flowers () {
  const flowers = flowersData
    .sort(() => Math.random() - Math.random())
    .slice(0, 8)
  return (
    <div className='p-8 bg-primary '>
      <div className='my-8'>
        <Typography variant='h2' className='container text-center text-primary-foreground'>Conoce nuestros mas hermosos ramos.</Typography>
      </div>
      <div className='container grid grid-cols-2 gap-6 my-12 lg:grid-cols-4'>
        {flowers.map((flower) => (
          <div className='flex items-center justify-center' key={flower.id}>
            <DirectionAwareHover imageUrl={flower.imagen}>
              <p className='text-xl font-bold'>{flower.nombre}</p>
              <p className='text-sm font-normal'>${flower.valor} / {flower.moneda}</p>
            </DirectionAwareHover>
          </div>
        )
        )}
      </div>
      <div className='flex justify-center w-full mb-6'>
        <Button variant='secondary' size='lg'>Quiero ver mas Ramos</Button>
      </div>
    </div>

  )
}
