import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox'
import { TextField } from '../../ui/text-field'

const loginSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty('Password is required').min(3),
  rememberMe: z.boolean().default(true),
  search: z.string(),
})

export type LoginFormSchema = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        disabled={false}
        {...register('email')}
        label={'email'}
        type={'fsdfsd'}
        placeholder={'sdffsd'}
        errorMessage={errors.email?.message}
      />

      <TextField
        {...register('password')}
        label={'password'}
        type={'password'}
        errorMessage={errors.password?.message}
      />
      <TextField {...register('search')} label={'search'} type={'search'} />
      <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
