import { IconProps } from 'interfaces/icons'
import React from 'react'

const Chart = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
   
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Chart'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 C6.5,2 2,6.5 2,12 Z M19.9300003,11 L13,11 L13,4.07000017 C16.6099999,4.52000016 19.4800003,7.4000001 19.9300003,11 Z M11,4.07000017 L11,19.9400005 C7.06999993,19.4400005 4,16.0599999 4,12 C4,7.94000006 7.06999993,4.56000018 11,4.07000017 Z M13,13 L19.9300003,13 C19.4800003,16.6099999 16.6099999,19.4800003 13,19.9300003 L13,13 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Chart
