import React from 'react'
import { Badge } from '@/components/ui/badge'
import Typography from '@/components/ui/typography'
import CardAddButton from '@/components/cart/cart-add-button'
import { Product } from '@/lib/data'

interface ProductInfoProps {
  product: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { nombre, valor, moneda, categorias, descripcion } = product

  return (
    <div className='flex flex-col items-start justify-start h-full'>
      <div className='flex flex-col mb-6 space-y-2'>
        <Typography variant='h1'>{nombre}</Typography>
        <Typography variant='span' className='text-2xl' size='large'>
          ${valor} {moneda}
        </Typography>
        <div className='flex flex-wrap gap-6 my-6'>
          {categorias.map((categoria) => (
            <Badge key={categoria} variant='secondary'>
              {categoria}
            </Badge>
          ))}
        </div>
      </div>
      <Typography>{descripcion}</Typography>
      <CardAddButton item={product} />
    </div>
  )
}

export default ProductInfo
