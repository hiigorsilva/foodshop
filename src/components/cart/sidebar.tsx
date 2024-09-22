'use client'

import { formatCurrency } from '@/function/format-currency'
import { useCartStore } from '@/stores/cart-store'
import { ShoppingCartIcon } from 'lucide-react'
import { useState } from 'react'
import { ModalCheckout } from '../checkout/modal'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { CartEmpty } from './empty'
import { CartItem } from './item'

export const CartSidebar = () => {
  const { cart } = useCartStore(state => state)
  const [checkoutIsOpen, setCheckoutIsOpen] = useState<boolean>(false)

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative gap-2">
          <ShoppingCartIcon className="size-4" />
          <span className="hidden xs:block">Carrinho</span>
          {cart.length > 0 && (
            <div
              className="absolute -top-1.5 -right-1.5 grid place-content-center 
              text-[0.75rem] text-zinc-50 size-5 rounded-full bg-red-500"
            >
              {cart.length}
            </div>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="max-h-dvh h-full flex flex-col gap-6 bg-zinc-900">
        {/* HEADER */}
        <SheetHeader className="w-full h-fit space-y-6">
          <SheetTitle className="flex items-center gap-3">
            <ShoppingCartIcon className="size-5" strokeWidth={2} />
            Meu carrinho
          </SheetTitle>

          <SheetDescription>Resumo de seus produtos.</SheetDescription>
          <Separator />
        </SheetHeader>

        {/* PRODUTOS */}
        <ul className="flex flex-1 flex-col space-y-6 pr-3 overflow-y-auto">
          {cart.map(cartItem => (
            <CartItem key={cartItem.product.id} cartItem={cartItem} />
          ))}
          {cart.length === 0 && <CartEmpty />}
        </ul>

        {/* FOOTER */}
        <div className="w-full h-fit space-y-6">
          <Separator />

          {/* SUBTOTAL */}
          <div className="flex justify-between items-center text-sm">
            <span>Subtotal:</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <Separator />

          {/* FINALIZAR */}
          <div className="flex justify-center items-center">
            <Button
              onClick={() => setCheckoutIsOpen(true)}
              className="w-full bg-green-500"
              disabled={cart.length === 0}
            >
              Finalizar pedido
            </Button>
          </div>
        </div>

        {/* CHECKOUT */}
        <ModalCheckout
          isOpen={checkoutIsOpen}
          onOpenChange={setCheckoutIsOpen}
        />
      </SheetContent>
    </Sheet>
  )
}
