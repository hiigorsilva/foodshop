import { ShoppingCartIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const CartSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <ShoppingCartIcon className="size-4" />
          Carrinho
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-zinc-900">
        <SheetHeader>
          <SheetTitle>Meu carrinho</SheetTitle>
        </SheetHeader>
        <div className="space-y-6">
          {/* PEIDIDOS */}
          <div className="flex flex-col gap-6">sdf</div>

          <Separator />

          {/* SUBTOTAL */}
          <div className="flex justify-between items-center text-sm">
            <span>Subtotal:</span>
            <span>R$ 0,00</span>
          </div>

          <Separator />

          {/* FINALIZAR */}
          <div className="flex justify-center items-center">
            <Button className="bg-green-500">Finalizar pedido</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
