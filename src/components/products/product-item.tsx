'use client'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { formatCurrency } from '@/function/format-currency'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Image from 'next/image'

type Props = {
  product: Product
}

export const ProductItem = ({ product }: Props) => {
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: 'Produto adicionado ao carrinho',
      description: product.name,
      action: <ToastAction altText="Fechar">Fechar</ToastAction>,
      style: {
        background: 'linear-gradient(to right, #222, #333)',
      },
      duration: 3000,
    })
  }

  return (
    <li className="bg-zinc-100 dark:bg-zinc-900 rounded-md overflow-hidden">
      {/* IMAGE */}
      <div className="relative h-32 w-full rounded overflow-hidden">
        <Image
          className="object-cover"
          src={product.image}
          alt={product.name}
          fill
        />
      </div>

      <div className="p-3 space-y-3">
        <div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-zinc-800 dark:text-zinc-400">
            {formatCurrency(product.price)}
          </p>
        </div>

        <Button
          className="w-full font-semibold text-sm bg-green-500 rounded"
          onClick={handleAddToCart}
          size="sm"
        >
          Adicionar ao carrinho
        </Button>
      </div>
    </li>
  )
}
