import { ComponentPropsWithoutRef, FC } from 'react'

import { Button } from '../button'

import s from './header.module.scss'
import image from './img/Logo.png'

type HeaderType = {
  imagePath?: string
  isAuth: boolean
} & ComponentPropsWithoutRef<'header'>

export const Header: FC<HeaderType> = ({ imagePath = image, isAuth }) => {
  return (
    <div className={`${s.wrapperHeader}`}>
      <img src={imagePath} className={s.image} alt={'image'} />
      {isAuth ? 'ComponentDropDownMenu' : <Button>{'Sing In'}</Button>}
    </div>
  )
}
