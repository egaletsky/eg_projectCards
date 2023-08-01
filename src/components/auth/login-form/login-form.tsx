import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'

type FormValues = {
  email: string
  password: string
  search: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value: valueCheck, onChange: onCheckChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        disabled={false}
        {...register('email')}
        label={'email'}
        type={'fsdfsd'}
        placeholder={'sdffsd'}
      />

      <TextField {...register('password')} label={'password'} type={'password'} />
      <TextField {...register('search')} label={'search'} type={'search'} />
      <Checkbox
        onValueChange={onCheckChange}
        checked={valueCheck}
        {...register('rememberMe')}
        label={'remember me'}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
