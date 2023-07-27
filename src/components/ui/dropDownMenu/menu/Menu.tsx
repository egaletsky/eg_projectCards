import { FC } from 'react'

import { Typography } from '../../typography'
import lodOut from '../images/log-out.svg'
import person from '../images/person-outline.svg'

type MenuType = {
  active: boolean
  userName: string
  userPhoto: string
  userEmail: string
}
import s from './menu.module.scss'

export const Menu: FC<MenuType> = ({ active, userName, userPhoto, userEmail }) => {
  return (
    <div className={`${s.wrapperPopUp} ${active ? s.active : ''} `}>
      <div className={s.userInfo}>
        <img className={s.avatar} src={userPhoto} alt={'user image'} />
        <div className={s.title}>
          <Typography variant={'subtitle2'} as={'span'}>
            {userName}
          </Typography>
          <Typography className={s.email} variant={'caption'} as={'span'}>
            {userEmail}
          </Typography>
        </div>
      </div>
      <hr />
      <div className={s.item}>
        <img src={person} alt={'icon'} />
        <Typography variant={'caption'} as={'span'}>
          {'My Profile'}
        </Typography>
      </div>
      <hr />
      <div className={s.item}>
        <img src={lodOut} alt={'icon'} />
        <Typography variant={'caption'} as={'span'}>
          {'Sing out'}
        </Typography>
      </div>
    </div>
  )
}
