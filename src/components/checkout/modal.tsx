import type { CheckoutSteps } from '@/types/checkout-steps'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Progress } from '../ui/progress'
import { StepAdress } from './step-adress'
import { StepFinish } from './step-finish'
import { StepUser } from './step-user'

type ModalCheckoutProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export const ModalCheckout = ({ isOpen, onOpenChange }: ModalCheckoutProps) => {
  const [step, setStep] = useState<CheckoutSteps>('user')
  const [progressPercent, setProgressPercent] = useState<number>(0)

  useEffect(() => {
    switch (step) {
      case 'user':
        setProgressPercent(33)
        break
      case 'address':
        setProgressPercent(66)
        break
      case 'finish':
        setProgressPercent(100)
        break
      default:
        setProgressPercent(0)
        break
    }
  }, [step])

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900">
        <DialogHeader>
          <DialogTitle>
            {step === 'user' && 'Dados do cliente'}
            {step === 'address' && 'Dados da entrega'}
            {step === 'finish' && 'Finalizar pedido'}
          </DialogTitle>
          <DialogDescription>
            {step !== 'finish' && 'Preencha os dados do seu pedido.'}
          </DialogDescription>
        </DialogHeader>

        <Progress className="h-1.5" value={progressPercent} />

        <div className="flex flex-col gap-3">
          {step === 'user' && <StepUser setStep={setStep} />}
          {step === 'address' && <StepAdress setStep={setStep} />}
          {step === 'finish' && <StepFinish setStep={setStep} />}
        </div>
      </DialogContent>
    </Dialog>
  )
}
