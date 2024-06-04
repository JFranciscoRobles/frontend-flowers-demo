'use client'
import React from 'react'
import { Button } from '../ui/button'
import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'lucide-react'
import { useAtom } from 'jotai'
import { cartAtom } from 'atom'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { useRemoveFromCart, useUpdateQuantity } from '@/lib/cart-utils'
import Typography from '../ui/typography'

function CartButton () {
  const [cart] = useAtom(cartAtom)
  const removeFromCart = useRemoveFromCart()
  const updateQuantity = useUpdateQuantity()

  const totalItems = cart.reduce((previus, current) => (previus) + current.quantity, 0)
  const totalToPay = cart.reduce((previus, current) => (previus) + current.price * current.quantity, 0)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='m-2' variant='secondary'>
          <ShoppingCartIcon size={24} className='mr-2' /> {totalItems}
        </Button>
      </SheetTrigger>
      <SheetContent className='w-full max-w-sm sm:max-w-lg'>
        <SheetHeader>
          <SheetTitle>Mi Carrito</SheetTitle>
          <SheetDescription>
            <div className='flex flex-col space-y-2'>
              {cart.map((item) => (
                <div className='flex items-center w-full' key={item.id}>
                  <Typography variant='span' size='large' className='mr-2'>{item.quantity}x</Typography>
                  <Typography variant='span' size='small'>{item.name}</Typography>
                  <Typography variant='span' size='small' className='ml-auto mr-2'>Precio: {item.price}</Typography>
                  {item.quantity === 1 && <Button onClick={() => removeFromCart(item.id)} variant='outline' size='sm'><MinusIcon size={12} /></Button>}
                  {item.quantity > 1 && <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} variant='outline' size='sm'><MinusIcon size={12} /></Button>}
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} size='sm' className='ml-2'><PlusIcon size={12} /></Button>
                </div>
              ))}
            </div>
            <Typography>Total: {totalToPay}</Typography>
            {cart.length > 0 &&
              <div className='flex flex-col mt-12'>
                <Button variant='default'>Enviar</Button>
              </div>}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default CartButton
