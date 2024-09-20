import type { Cart } from '@/types/cart'
import { Button } from '../ui/button'

type CartItemQuantityProps = {
  cartItem: Cart
}
export const CartItemQuantity = ({ cartItem }: CartItemQuantityProps) => {
  return (
    <div className="flex justify-center items-center rounded overflow-hidden bg-zinc-400">
      <Button className="rounded-none" size="sm">
        -
      </Button>
      <div className="flex justify-center items-center w-9 text-sm">
        {cartItem.quantity}
      </div>
      <Button className="rounded-none" size="sm">
        +
      </Button>
    </div>
  )
}
