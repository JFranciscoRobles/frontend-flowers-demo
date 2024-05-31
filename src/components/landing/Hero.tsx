import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { flowersData } from 'data'
import { TextGenerateEffect } from '../ui-motion/text-generated-effects'
import { ItemCard } from '../item-card'

export const Hero = () => {
  const flowers = [flowersData[0], flowersData[1], flowersData[2], flowersData[3]]

  return (
    <section className='w-full py-20 '>
      <div className='container grid items-center grid-cols-1 gap-8 md:grid-cols-12'>
        <div className='space-y-6 md:col-span-5'>
          <Typography variant='h1'><TextGenerateEffect words='Descubre la Belleza de las Flores' /></Typography>
          <Typography>
            Explora nuestra colección seleccionada de los flores y arreglos florales más vendidos.
          </Typography>
          <div className='flex gap-4'>
            <Button variant='default'>Comprar Flores</Button>
            <Button variant='secondary'>Ver arreglos florales</Button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 md:col-span-7'>
          {flowers.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
