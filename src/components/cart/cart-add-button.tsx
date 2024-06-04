'use client'
import { useAddToCart } from '@/lib/cart-utils'
import { FlowerData } from 'data'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
    item: FlowerData;
}

function CardAddButton ({ item }: Props) {
  const addToCart = useAddToCart()
  return (
    <Button className='my-6 ml-auto' onClick={() => addToCart({ id: item.id, name: item.nombre, price: item.valor, quantity: 1 })}>
      Agregar al carrito
    </Button>
  )
}

export default CardAddButton
