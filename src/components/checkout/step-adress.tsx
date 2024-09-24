import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { listStates } from '@/data/form-checkout/list-states'
import { useCheckoutStore } from '@/stores/checkout-store'
import type { CheckoutSteps } from '@/types/checkout-steps'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import type { Dispatch, FormEvent, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  street: z.string().min(5, 'Preencha o endereço'),
  number: z.string().min(1, 'Preencha o número'),
  complement: z.string().optional(),
  district: z.string().min(2, 'Preencha o bairro'),
  city: z.string().min(2, 'Preencha a cidade'),
  state: z.string().min(2, 'Preencha o Estado'),
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

  const onSubmit = (formFields: z.infer<typeof formSchema>) => {
    setAddress(formFields)
    setStep('finish')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            size="sm"
            variant="link"
            onClick={() => setStep('user')}
            className="gap-2"
          >
            <ArrowLeftIcon className="size-4" />
            Voltar
          </Button>

          <Button size="sm" type="submit" className="gap-2">
            Avançar
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </form>
    </Form>
  )
}
