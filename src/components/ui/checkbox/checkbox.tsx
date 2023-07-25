/*import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'*/

import { FC } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, disabled, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxRadix.Root className="CheckboxRoot" defaultChecked id="c1">
        <CheckboxRadix.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label className="Label" htmlFor="c1">
        Accept terms and conditions.
      </label>
    </div>
  )
}
