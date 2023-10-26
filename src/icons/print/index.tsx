import React from 'react'
import { IconProps } from 'interfaces/icons'

const Print = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>1B137B6A-BD17-4CC2-8677-FE1311674BC2</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Print'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M19,8 C20.66,8 22,9.34 22,11 L22,17 L18,17 L18,21 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L6,8 L6,3 L18,3 L18,8 L19,8 M8,5 L8,8 L16,8 L16,5 L8,5 M16,19 L16,15 L8,15 L8,19 L16,19 M18,15 L20,15 L20,11 C20,10.45 19.55,10 19,10 L5,10 C4.45,10 4,10.45 4,11 L4,15 L6,15 L6,13 L18,13 L18,15 M19,11.5 C19,12.05 18.55,12.5 18,12.5 C17.45,12.5 17,12.05 17,11.5 C17,10.95 17.45,10.5 18,10.5 C18.55,10.5 19,10.95 19,11.5 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Print
