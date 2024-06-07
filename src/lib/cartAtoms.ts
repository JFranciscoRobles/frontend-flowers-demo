import { atom, useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { toast } from 'sonner'

export interface CartType {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export const cartItemsAtom = atomWithStorage<CartType[]>('cart', [])

export const useAddToCart = () => {
  const [, setCart] = useAtom(cartItemsAtom)

  return (product: CartType) => {
    setCart((prevCart) => {
      toast.success(`${product.name} ah sido agregado.`)
      const productIndex = prevCart.findIndex((item) => item.id === product.id)
      if (productIndex !== -1) {
        const newCart = [...prevCart]
        newCart[productIndex].quantity += product.quantity
        return newCart
      } else {
        return [...prevCart, product]
      }
    })
  }
}

export const useRemoveFromCart = () => {
  const [, setCart] = useAtom(cartItemsAtom)

  return (productId: string) => {
    toast.error('Producto removido.')
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
  }
}

export const useUpdateQuantity = () => {
  const [, setCart] = useAtom(cartItemsAtom)

  return (productId: string, quantity: number) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === productId)
      if (productIndex !== -1) {
        const newCart = [...prevCart]
        newCart[productIndex].quantity = quantity
        return newCart
      }
      return prevCart
    })
  }
}

export const cartTotalItemsAtom = atom((get) =>
  get(cartItemsAtom).reduce((acc, item) => acc + item.quantity, 0)
)
export const cartTotalToPayAtom = atom((get) =>
  get(cartItemsAtom).reduce((acc, item) => acc + item.price * item.quantity, 0)
)
