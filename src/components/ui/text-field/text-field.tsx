import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '../typography'

import s from './text-field.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  className,
  label,
  type = 'text',
  errorMessage,
  placeholder,
  disabled,
  value,
  ...rest
}: TextFieldProps) => {
  return (
    <div className={s.main}>
      <Typography
        variant="body2"
        as="label"
        className={`${s.label} ${errorMessage ? s.error : ''}`}
      >
        {label}
      </Typography>
      <div className={s.container}>
        <input
          className={`${s[type]} ${s.input}`}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </div>
      <Typography variant="error" as={'div'} className={s.error}>
        {errorMessage}
      </Typography>
    </div>
  )
}
