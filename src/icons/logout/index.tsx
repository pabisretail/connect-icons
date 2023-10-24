import { IconProps } from 'interfaces/icons'
import React from 'react'

const Logout = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>B971D7A7-2FA2-4CB8-86BA-DC9C2376EEC5</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/LogOut'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M15.5900002,8.40999985 L18.1700001,11 L8,11 L8,13 L18.1700001,13 L15.5900002,15.5799999 L17,17 L22,12 L17,7 L15.5900002,8.40999985 Z M12,5 L12,3 L4,3 C2.89999998,3 2,3.89999998 2,5 L2,19 C2,20.1 2.89999998,21 4,21 L12,21 L12,19 L4,19 L4,5 L12,5 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Logout
