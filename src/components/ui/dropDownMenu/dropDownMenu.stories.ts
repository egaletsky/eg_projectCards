import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from './dropDownMenu.tsx'
import userPhoto from './images/Ellipse 54.png'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDownMenu,
  tags: ['autodocs'],
  argTypes: {
    userName: {
      options: ['name', 'Ivan'],
      control: { type: 'radio' },
    },
    userPhoto: {
      options: ['', userPhoto],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const dropDownMenu: Story = {
  args: {
    userName: 'Ivan',
    userPhoto: userPhoto,
    userEmail: 'user-email@gmail.com',
  },
}
export const noPhotoDropDownMenu: Story = {
  args: {
    userName: 'Name',
    userEmail: 'user-email@gmail.com',
  },
}
