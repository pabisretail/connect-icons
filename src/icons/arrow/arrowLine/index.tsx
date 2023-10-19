import { IconArrowProps } from 'interfaces/arrow'
import React from 'react'

const Arrow = ({ fill = '#E8E8EA', width = '24px', height = '24px', rotation = '' }: IconArrowProps) => {
  return (
    <svg
      style={rotation !== '' ? { transform: 'rotate(' + rotation + 'deg)' } : { transform: '' }}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Arrow'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <polygon
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
            points='12 12.5799999 16.5900002 8 18 9.40999985 12 15.4099998 6 9.40999985 7.40999985 8'
          ></polygon>
        </g>
      </g>
    </svg>
  )
}

export default Arrow
