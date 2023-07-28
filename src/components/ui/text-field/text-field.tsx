import { ComponentPropsWithoutRef, useState } from 'react'

import { Typography } from '../typography'

import { CloseEye } from './icons/CloseEye.tsx'
import { CloseIcon } from './icons/CloseIcon.tsx'
import { Eye } from './icons/Eye.tsx'
import { Search } from './icons/Search.tsx'
import s from './text-field.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
  isSearch?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
  className,
  label,
  type = 'text',
  errorMessage,
  placeholder,
  disabled,
  ...rest
}: TextFieldProps) => {
  const [passwordIsShown, setPasswordIsShown] = useState(false)
  const [value, setValue] = useState('')

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
          className={`${s.input} ${errorMessage ? s.error : ''} ${type === 'search' ? s.p10 : ''} `}
          type={passwordIsShown ? 'text' : type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={e => setValue(e.currentTarget.value)}
          {...rest}
        />
        {type === 'search' && (
          <span>
            <div className={s.search}>
              <Search />
            </div>
            <button className={s.rightIcon} onClick={() => setValue('')}>
              <CloseIcon />
            </button>
          </span>
        )}
        {type === 'password' && (
          <button
            type={'button'}
            onClick={() => {
              setPasswordIsShown(value => !value)
            }}
            className={s.rightIcon}
          >
            {!passwordIsShown ? <Eye /> : <CloseEye />}
          </button>
        )}
        <div className={s.focusVisible}></div>
      </div>

      <Typography as={'div'} className={s.error}>
        {errorMessage}
      </Typography>
    </div>
  )
}
