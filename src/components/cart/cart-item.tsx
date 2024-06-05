import { CartType, useRemoveFromCart, useUpdateQuantity } from '@/lib/cartAtoms'
import React from 'react'
import Typography from '../ui/typography'
import { Button } from '../ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

type Props = {
    item: CartType;
}

function CartItem ({ item }: Props) {
  const removeFromCart = useRemoveFromCart()
  const updateQuantity = useUpdateQuantity()

  const handleRemoveOrUpdateQuantity = (item:CartType) => {
    if (item.quantity === 1) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  return (
    <div className='flex items-center w-full' key={item.id}>
      <Typography variant='span' size='large' className='mr-2'>{item.quantity}x</Typography>
      <Typography variant='span' size='small'>{item.name}</Typography>
      <Typography variant='span' size='small' className='ml-auto mr-2'>Precio: {item.price}</Typography>
      <Button onClick={() => handleRemoveOrUpdateQuantity(item)} variant='outline' size='sm'><MinusIcon size={12} /></Button>
      <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} size='sm' className='ml-2'><PlusIcon size={12} /></Button>
    </div>
  )
}

export default CartItem
