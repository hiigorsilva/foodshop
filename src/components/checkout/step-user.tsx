import { useCheckoutStore } from '@/stores/checkout-store'
import type { CheckoutSteps } from '@/types/checkout-steps'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

const formSchema = z.object({
  name: z
    .string({ message: 'Prencha o campo nome' })
    .min(2, 'Digite ao menos 2 caracteres'),
})

type StepUserProps = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepUser = ({ setStep }: StepUserProps) => {
  const { name, setName } = useCheckoutStore(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  })

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name)
    setStep('address')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="gap-2 ml-auto">
          Avançar
          <ArrowRightIcon className="size-4" />
        </Button>
      </form>
    </Form>
  )
}
