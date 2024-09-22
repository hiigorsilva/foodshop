import { useCartStore } from '@/stores/cart-store'
import type { Cart } from '@/types/cart'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { Button } from '../ui/button'

type CartItemQuantityProps = {
  cartItem: Cart
}
export const CartItemQuantity = ({ cartItem }: CartItemQuantityProps) => {
  const { upsertCartItem } = useCartStore(state => state)

  const handlePlusButton = () => {
    upsertCartItem(cartItem.product, 1)
  }

  const handleMinusButton = () => {
    upsertCartItem(cartItem.product, -1)
  }

  return (
    <div className="flex justify-center items-center">
      {/* MINUS */}
      <Button onClick={handleMinusButton} variant="outline" size="icon">
        <MinusIcon className="text-zinc-50 size-4" />
      </Button>

      {/* DISPLAY */}
      <div className="flex justify-center items-center w-9 text-sm">
        {cartItem.quantity}
      </div>

      {/* PLUS */}
      <Button onClick={handlePlusButton} variant="outline" size="icon">
        <PlusIcon className="text-zinc-50 size-4" />
      </Button>
    </div>
  )
}
