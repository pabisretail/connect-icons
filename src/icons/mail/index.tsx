import { IconProps } from 'interfaces/icons'
import React from 'react'

const Mail = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>759CFBD1-D392-4C51-BBEC-08AB4EEDD092</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Mail'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M4,4 C2.89999998,4 2.00999999,4.89999998 2.00999999,6 L2,18 C2,19.1 2.89999998,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.89999998 21.1,4 20,4 L4,4 Z M4,18 L4,8 L12,13 L20,8 L20,18 L4,18 Z M4,6 L20,6 L12,11 L4,6 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Mail
