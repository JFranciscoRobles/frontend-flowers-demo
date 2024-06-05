'use client'
import React, { createContext, useContext } from 'react'
import { useAtom } from 'jotai'
import { CartType, cartItemsAtom } from '@/lib/cartAtoms'

const CartContext = createContext<CartType[]>([])

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart] = useAtom(cartItemsAtom)

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)
