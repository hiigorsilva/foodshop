import type { Cart } from '@/types/cart'
import type { Product } from '@/types/product'
import { create } from 'zustand'

type States = {
  cart: Cart[]
}
type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void
}

const initialState: States = {
  cart: [],
}

export const useCartStore = create<States & Actions>(set => ({
  ...initialState,
  upsertCartItem: (product, quantity) =>
    set(state => {
      const productIndex = state.cart.findIndex(
        prod => prod.product.id === product.id
      )
      const hasThisProduct = productIndex <= 0

      const updatedCart = hasThisProduct
        ? [...state.cart, { product, quantity }]
        : state.cart.map((item, index) =>
            index === productIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )

      const filteredCart = updatedCart.filter(item => item.quantity > 0)

      return { ...state, cart: filteredCart }
    }),
}))
