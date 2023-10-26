import React from 'react'
import { IconProps } from 'interfaces/icons'


const Folder = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>6DD00774-E041-4E10-905D-B34C965EFD8D</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Carpet'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M20,18 L4,18 L4,8 L20,8 M20,6 L12,6 L10,4 L4,4 C2.89,4 2,4.89 2,6 L2,18 C2,19.1045695 2.8954305,20 4,20 L20,20 C21.1045695,20 22,19.1045695 22,18 L22,8 C22,6.89 21.1,6 20,6 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Folder
