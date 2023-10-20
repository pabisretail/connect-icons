import { IconProps } from 'interfaces/icons'
import React from 'react'

const SuccessAlert = ({ width = '24px', height = '24px', fill = '#63a814' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Alert/Success'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M10,14.1700001 L6.40999985,10.5900002 L5,12 L10,17 L18,9 L16.5900002,7.57999992 L10,14.1700001 Z M2,12 C2,17.52 6.48000002,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48000002 17.52,2 12,2 C6.48000002,2 2,6.48000002 2,12 Z M4,12 C4,7.57999992 7.57999992,4 12,4 C16.4200001,4 20,7.57999992 20,12 C20,16.4200001 16.4200001,20 12,20 C7.57999992,20 4,16.4200001 4,12 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default SuccessAlert
