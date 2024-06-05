import CardAddButton from '@/components/cart/cart-add-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import Typography from '@/components/ui/typography'
import { productsData } from '@/lib/data'

import Image from 'next/image'
import { preguntasFrecuentes } from 'preguntas'
import React from 'react'

function Page ({ params }: { params: { slug: string } }) {
  const product = productsData.find((item) => item.slug === params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className='flex flex-col min-h-screen my-12'>
      <section className='container grid items-center gap-12 px-4 py-12 mx-auto md:grid-cols-2 md:py-20 md:px-6'>
        <div className='flex items-center justify-center'>
          <Image
            src={product.imagen}
            alt={product.nombre}
            width={600}
            height={600}
            className='object-cover w-full border border-gray-200 rounded-lg max-w-[30rem] aspect-square '
          />
        </div>
        <div className='flex flex-col items-start justify-start h-full '>
          {!product.disponibilidad && <div className='w-full px-6 py-4 mt-auto bg-destructive text-destructive-foreground rounded-xl'>No disponible</div>}

          <div className='flex flex-col mb-6 space-y-2'>
            <Typography variant='h1'>{product?.nombre}</Typography>
            <Typography variant='span' className='text-2xl' size='large'>
              ${product?.valor} {product?.moneda}
            </Typography>
          </div>

          <Typography>
            {product?.descripcion}
          </Typography>

          <CardAddButton item={product} />

          <div className='flex flex-wrap gap-6 my-6 '>
            {product.categorias.map((categoria) => (
              <Badge key={categoria} variant='secondary'>
                {categoria}
              </Badge>
            ))}
          </div>

        </div>
      </section>
      <section className='container px-4 py-12 md:py-20 md:px-6'>
        <div className='my-12'>
          <Typography variant='h2' className='text-center'>
            Preguntas frecuentes FAQ
          </Typography>
        </div>
        <Accordion type='multiple' className='container w-full my-12'>
          {preguntasFrecuentes.map((pregunta, index) => (
            <AccordionItem value={index.toString()} key={index} className='w-full'>
              <AccordionTrigger className='w-full'>
                <Typography variant='h3'>{pregunta.pregunta}</Typography>
              </AccordionTrigger>
              <AccordionContent className='w-full'>
                <Typography>{pregunta.respuesta}</Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

export default Page
