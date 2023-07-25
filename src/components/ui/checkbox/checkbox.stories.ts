import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'
import { useState } from "react";

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [checked, setChecked] = useState(true)

    return (

        <Checkbox {...args} checked={checked} onChange={setChecked} />

  )
  },

  args: {
    label: 'Click here',
    disabled: false,
  },

}




  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const WithLabel: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}
