import { ComponentPropsWithoutRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type CardProps = {} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = ({}: CardProps) => {
  return (
    <div>
      <SliderRadix.Root className={s.sliderRoot}>
        <SliderRadix.Track className={s.sliderTrack}>
          <SliderRadix.Range className={s.sliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.sliderThumb} />
        <SliderRadix.Thumb className={s.sliderThumb} />
      </SliderRadix.Root>
    </div>
  )
}
