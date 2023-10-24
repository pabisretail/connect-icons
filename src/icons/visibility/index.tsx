import { IconProps } from 'interfaces/icons'
import React from 'react'

const Visibility = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>C083069C-520F-4887-8B5B-FB287805F971</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Visibility'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M1,12 C2.73000002,16.3899999 7,19.5 12,19.5 C17,19.5 21.27,16.3899999 23,12 C21.27,7.61000013 17,4.5 12,4.5 C7,4.5 2.73000002,7.61000013 1,12 Z M7,12 C7,9.24000001 9.24000001,7 12,7 C14.76,7 17,9.24000001 17,12 C17,14.76 14.76,17 12,17 C9.24000001,17 7,14.76 7,12 Z M9,12 C9,13.66 10.34,15 12,15 C13.66,15 15,13.66 15,12 C15,10.34 13.66,9 12,9 C10.34,9 9,10.34 9,12 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Visibility
