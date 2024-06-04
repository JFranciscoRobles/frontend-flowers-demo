// cartUtils.ts
import { cartAtom, cartType } from 'atom'
import { useAtom } from 'jotai'

export const useAddToCart = () => {
  const [, setCart] = useAtom(cartAtom)

  return (product: cartType) => {
    setCart((prevCart) => {
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
  const [, setCart] = useAtom(cartAtom)

  return (productId: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId))
  }
}

export const useUpdateQuantity = () => {
  const [, setCart] = useAtom(cartAtom)

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
