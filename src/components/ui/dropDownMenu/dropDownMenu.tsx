import { FC, useState } from 'react'

import s from './dropDownMenu.module.scss'
import plugImage from './images/plugImage.png'
import { Menu } from './menu/Menu.tsx'

type DropDownMenuType = {
  userName: string
  userPhoto?: string
  userEmail: string
}
export const DropDownMenu: FC<DropDownMenuType> = ({ userName, userPhoto, userEmail }) => {
  let [open, setOpen] = useState(false)
  const userPhotoPath = userPhoto ? userPhoto : plugImage

  const onClickPhoto = () => {
    setOpen((open = !open))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.wrapperTitle} onClick={() => console.log('onClick name')}>
        <span className={s.title}>{userName}</span>
      </div>
      <img className={s.image} src={`${userPhotoPath}`} alt={'user photo'} onClick={onClickPhoto} />
      <Menu userName={userName} userPhoto={userPhotoPath} userEmail={userEmail} active={open} />
    </div>
  )
}
