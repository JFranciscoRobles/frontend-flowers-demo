import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import { TextGenerateEffect } from '../ui-motion/text-generated-effects'
import { productsData } from '@/lib/data'
import { ItemCard } from '../items/item-card'

export const Hero = () => {
  const products = [productsData[0], productsData[1], productsData[2], productsData[3]]

  return (
    <section className='w-full my-8 md:py-20 '>
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
          {products.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
