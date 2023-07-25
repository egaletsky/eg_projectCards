import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

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
    children: <Button>{'Sing In'}</Button>,
    imagePath: imageLogo,
  },
}
export const Header2: Story = {
  args: {
    children: <Button>{'Sing In'}</Button>,
    imagePath: 'https://imgcorp.com/dominate/home/img/img-logo-white.png',
  },
}
