import { IconProps } from 'interfaces/icons'
import React from 'react'

const Block = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>DF494F1E-B9BE-44AF-B3C0-D6B4D5A30B29</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Block'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M2,12 C2,17.52 6.48000002,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48000002 17.52,2 12,2 C6.48000002,2 2,6.48000002 2,12 Z M4,12 C4,10.15 4.63000011,8.44999993 5.69000006,7.0999999 L16.8999996,18.3099995 C15.5499996,19.3699994 13.85,20 12,20 C7.57999992,20 4,16.4200001 4,12 Z M7.0999999,5.69000006 C8.44999993,4.63000011 10.15,4 12,4 C16.4200001,4 20,7.57999992 20,12 C20,13.85 19.3699994,15.5499996 18.3099995,16.8999996 L7.0999999,5.69000006 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Block
