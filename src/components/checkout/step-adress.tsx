import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { listStates } from '@/data/form-checkout/list-states'
import { useCheckoutStore } from '@/stores/checkout-store'
import type { CheckoutSteps } from '@/types/checkout-steps'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const formSchema = z.object({
  street: z.string({ message: 'Preencha o campo de endereço' }).min(2),
  number: z.string({ message: 'Preencha o campo de número' }).min(2),
  complement: z
    .string()
    .min(2, 'Complemento precisa ter ao menos 2 caracteres')
    .optional(),
  district: z
    .string({ message: 'Preencha o campo de bairro' })
    .min(2, 'Bairro precisa ao menos 2 caracteres'),
  city: z.string({ message: 'Cidade precisa ao menos 2 caracteres' }).min(2),
  state: z.string({ message: 'Preencha o campo de Estado' }).min(2),
})

type StepAddressProps = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

export const StepAdress = ({ setStep }: StepAddressProps) => {
  const { address, setAddress } = useCheckoutStore(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address },
  })

  const handleOnSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values)
    setStep('address')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Rua</FormLabel>
                <FormControl>
                  <Input autoFocus {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="complement"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Complemento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue
                        className="text-zinc-400"
                        placeholder="Selecione o Estado"
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {listStates.map(item => (
                        <SelectItem key={item.uf} value={item.uf}>
                          {item.state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          <Button
            onClick={() => setStep('user')}
            variant="link"
            size="sm"
            className="gap-2 border border-zinc-800"
          >
            <ArrowLeftIcon className="size-4" />
            Voltar
          </Button>

          <Button
            onClick={() => setStep('finish')}
            type="submit"
            size="sm"
            className="gap-2"
          >
            Avançar
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </form>
    </Form>
  )
}
