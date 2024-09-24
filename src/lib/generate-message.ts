import { useCartStore } from '@/stores/cart-store'
import { useCheckoutStore } from '@/stores/checkout-store'
import { useEffect, useState } from 'react'

type OrderProductProps = {
  quantity: string
  name: string
}

export const generateMessage = (): string => {
  const { cart } = useCartStore(store => store)
  const { name, address } = useCheckoutStore(store => store)

  const [orderProducts, setOrderProducts] = useState<OrderProductProps[]>([])

  useEffect(() => {
    const updatedOrderProducts = cart.map(order => ({
      quantity: order.quantity.toString(),
      name: order.product.name,
    }))
    setOrderProducts(updatedOrderProducts)
  }, [cart])

  const message = `*DADOS DO CLIENTE:*

*Nome:* ${name}
*Endereço:* ${address.street}, ${address.number}, ${address.complement && `(${address.complement}), `}${address.district}, ${address.city}/${address.state}
------------------------------
*PEDIDOS:*

${orderProducts.map(order => `- ${order.quantity}x ${order.name}`).join('\n')}`

  return message
}
