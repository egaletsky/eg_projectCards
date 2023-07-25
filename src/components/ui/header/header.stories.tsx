import type { Meta, StoryObj } from '@storybook/react'

import imageLogo from './img/Logo.png'

import { Header } from './'

const meta = {
  title: 'Components/header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    imagePath: {
      options: [imageLogo, 'https://imgcorp.com/dominate/home/img/img-logo-white.png'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderSingIn: Story = {
  args: {
    isAuth: false,
    imagePath: imageLogo,
  },
}

export const HeaderWithDropDownMenu: Story = {
  args: {
    isAuth: true,
    imagePath: 'https://imgcorp.com/dominate/home/img/img-logo-white.png',
  },
}
