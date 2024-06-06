'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useAddToCart } from '@/lib/cartAtoms'
import { Product } from '@/lib/data'

type Props = {
    item: Product;
}

function CardAddButton ({ item }: Props) {
  const addToCart = useAddToCart()

  const handleAddToCart = () => {
    addToCart({ id: item.id, name: item.nombre, price: item.valor, quantity: 1 })
  }

  return (
    <Button className='my-6 ml-auto' onClick={handleAddToCart}>
      Agregar al carrito
    </Button>
  )
}

export default CardAddButton
