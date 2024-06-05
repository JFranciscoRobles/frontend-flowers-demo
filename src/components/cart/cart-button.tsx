'use client'
import React from 'react'
import { useAtom } from 'jotai'
import { Button } from '../ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

import Typography from '../ui/typography'
import { cartItemsAtom, cartTotalItemsAtom, cartTotalToPayAtom } from '@/lib/cartAtoms'
import CartItem from './cart-item'

function ShoppingCart () {
  const [cart] = useAtom(cartItemsAtom)
  const [totalItems] = useAtom(cartTotalItemsAtom)
  const [totalToPay] = useAtom(cartTotalToPayAtom)

  const handleSendWhatsApp = () => {
    const phoneNumber = '526645684580'
    const cartDetails = cart.map(item => `${item.quantity}x ${item.name} - Precio: ${item.price}`).join('%0A')
    const message = `Hola, quiero hacer la siguiente compra:%0A${cartDetails}%0ATotal a pagar: ${totalToPay}`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`

    window.open(whatsappUrl, '_blank')
  }

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
              {cart.map((item) => <CartItem item={item} key={item.id} />)}
            </div>
            <Typography>Total: {totalToPay}</Typography>
            {cart.length > 0 &&
              <div className='flex flex-col mt-12'>
                <Button variant='default' onClick={handleSendWhatsApp}>Enviar</Button>
              </div>}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
