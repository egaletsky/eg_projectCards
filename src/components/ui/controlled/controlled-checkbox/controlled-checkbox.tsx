import { useController, UseControllerProps } from 'react-hook-form'

import { LoginFormSchema } from '../../../auth/login-form/login-form.tsx'
import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps = UseControllerProps<LoginFormSchema> &
  Omit<CheckboxProps, 'onValueChange' | 'checked' | 'id'>

export const ControlledCheckbox = ({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return <Checkbox {...checkboxProps} onValueChange={onChange} checked={Boolean(value)} id={name} />
}
