import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import { CloseEye } from './icons/CloseEye.tsx'
import { CloseIcon } from './icons/CloseIcon.tsx'
import { Eye } from './icons/Eye.tsx'
import { Search } from './icons/Search.tsx'
import s from './text-field.module.scss'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  errorMessage?: string
  label?: string
  isSearch?: boolean
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      type = 'text',
      errorMessage,
      placeholder,
      disabled,
      onChange,
      onValueChange,
      ...rest
    },
    ref
  ) => {
    const [passwordIsShown, setPasswordIsShown] = useState(false)
    // const [value, setValue] = useState('')
    const classNames = {
      root: s.root,
      container: s.container,
      label: clsx(s.label, !!errorMessage && s.error),
      input: clsx(s.input, !!errorMessage && s.error, type === 'search' && s.p10),
      disabled: clsx(disabled && s.isDisable),
      search: s.search,
      rightIcon: s.rightIcon,
      button: clsx(s.rightIcon, disabled && s.isDisable),
      focusVisible: s.focusVisible,
      error: clsx(s.error),
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <div className={classNames.root}>
        <Typography variant="body2" as="label" className={classNames.label}>
          {label}
        </Typography>
        <div className={classNames.container}>
          <input
            className={classNames.input}
            type={passwordIsShown ? 'text' : type}
            // value={value}
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
            onChange={handleChange}
            {...rest}
          />
          {type === 'search' && (
            <span className={classNames.disabled}>
              <div className={classNames.search}>
                <Search />
              </div>
              {ref && (
                <button className={classNames.rightIcon} onClick={() => {}}>
                  <CloseIcon />
                </button>
              )}
            </span>
          )}
          {type === 'password' && (
            <button
              type={'button'}
              onClick={() => {
                setPasswordIsShown(value => !value)
              }}
              className={classNames.button}
              disabled={disabled}
            >
              {!passwordIsShown ? <Eye /> : <CloseEye />}
            </button>
          )}
        </div>

        <Typography as={'div'} className={classNames.error}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)
