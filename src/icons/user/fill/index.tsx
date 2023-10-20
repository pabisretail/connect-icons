import { IconProps } from 'interfaces/icons'
import React from 'react'

const FillUSer = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/User/Fill'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M16,8 C16,5.78999996 14.21,4 12,4 C9.78999996,4 8,5.78999996 8,8 C8,10.21 9.78999996,12 12,12 C14.21,12 16,10.21 16,8 Z M4,18 L4,20 L20,20 L20,18 C20,15.3399999 14.6700001,14 12,14 C9.32999992,14 4,15.3399999 4,18 Z'
            id='🖍-Color'
            fill='#5C5E72'
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default FillUSer
