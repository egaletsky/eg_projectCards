/*import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'*/

import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'
import checkboxChecked from './img/checked.svg'
// import checkboxUnchecked from './img/unchecked.svg'

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, disabled, label }) => {
  const classs = s.label + ' ' + disabled ? s.disabled : ''

  // eslint-disable-next-line no-console
  console.log(classs)

  return (
    <LabelRadix.Root className={s.label + ' ' + disabled && s.disabled}>
      {/*<LabelRadix.Root className={s.label + ' ' + disabled && s.disabled}>*/}
      <div className={`{s.buttonWrapper} {disabled && s.disabled}`}>
        <CheckboxRadix.Root
          className={s.root}
          checked={checked}
          onCheckedChange={() => onChange(!checked)}
          disabled={disabled}
        >
          <CheckboxRadix.Indicator className={s.indicator}>
            <img src={checkboxChecked} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      {label}
    </LabelRadix.Root>
  )
}
