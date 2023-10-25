import React from 'react'
import { IconProps } from 'interfaces/icons'

const CheckCircle = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>6A415C4B-A668-4FCD-B3CB-E52118B010E7</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/CheckCircle/On'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M2,12 C2,17.52 6.48000002,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48000002 17.52,2 12,2 C6.48000002,2 2,6.48000002 2,12 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
          <polygon
            id='Vector'
            fill='#FFFFFF'
            mask='url(#mask-2)'
            points='5 12 6.40999985 10.5900002 10 14.1700001 17.5900002 6.57999992 19 8 10 17'
          ></polygon>
        </g>
      </g>
    </svg>
  )
}

export default CheckCircle
