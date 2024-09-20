import { formatCurrency } from '@/function/format-currency'
import type { Cart } from '@/types/cart'
import Image from 'next/image'
import { CartItemQuantity } from './item-quantity'

type CartItemProps = {
  cartItem: Cart
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <li className="flex justify-between items-center gap-4">
      {/* IMAGE */}
      <div className="relative w-16 h-12 overflow-hidden rounded">
        <Image
          className="object-cover"
          src={`${cartItem.product.image}`}
          alt={cartItem.product.name}
          sizes="(max-width: 768px) 100vw, 100px"
          priority
          fill
        />
      </div>

      {/* DETAILS */}
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{cartItem.product.name}</h3>
        <p className="text-sm text-zinc-400">
          {formatCurrency(cartItem.product.price)}
        </p>
      </div>

      {/* QUANTITY */}
      <div>
        <CartItemQuantity cartItem={cartItem} />
      </div>
    </li>
  )
}
