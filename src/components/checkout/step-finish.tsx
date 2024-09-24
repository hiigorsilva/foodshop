import { Button } from '@/components/ui/button'
import { generateMessage } from '@/lib/generate-message'
import { useCheckoutStore } from '@/stores/checkout-store'
import type { CheckoutSteps } from '@/types/checkout-steps'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { Dispatch, SetStateAction } from 'react'

type StepFinishProps = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepFinish = ({ setStep }: StepFinishProps) => {
  const { name } = useCheckoutStore(store => store)

  const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const message = generateMessage()
  const linkWhatsApp = `https://wa.me//${whatsAppNumber}?text=${encodeURI(message)}`

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">Você está quase lá, {name}!</h3>
        <p className="text-zinc-400">
          Confirme o pedido para ser redirecionado ao WhatsApp. Nosso atendente
          irá te guiar sobre o andamento da entrega.
        </p>
      </div>

      <div className="flex justify-between items-center gap-3">
        <Button
          size="sm"
          className="gap-2"
          onClick={() => setStep('address')}
          variant="link"
        >
          <ArrowLeftIcon className="size-4" />
          Voltar
        </Button>

        <Button className="gap-2" asChild>
          <Link href={linkWhatsApp} target="_blank">
            Confirmar pedido
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
