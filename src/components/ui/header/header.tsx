import { ComponentPropsWithoutRef } from 'react'

import s from './header.module.scss'
import image from './img/Logo.png'

type HeaderType = {
  imagePath?: string
} & ComponentPropsWithoutRef<'header'>

export const Header = (props: HeaderType) => {
  const { imagePath = image, children } = props

  return (
    <div className={`${s.wrapperHeader}`}>
      <img src={imagePath} className={s.image} alt={'image'} />
      {children}
    </div>
  )
}
