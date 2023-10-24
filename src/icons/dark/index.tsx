import { IconProps } from 'interfaces/icons'
import React from 'react'

const Dark = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
 
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Dark'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M9.10000038,7.5 C9.10000038,11.5799999 12.4200001,14.8999996 16.5,14.8999996 C17.18,14.8999996 17.8499998,14.8100001 18.4899998,14.6300001 C17.4499998,17.1900001 14.9300001,19 12,19 C8.1400001,19 5,15.8599999 5,12 C5,9.06999993 6.80999994,6.55000019 9.36999989,5.51000023 C9.18999988,6.15000021 9.10000038,6.81999999 9.10000038,7.5 Z M3,12 C3,16.9699998 7.03000021,21 12,21 C16.9699998,21 21,16.9699998 21,12 C21,11.54 20.9599996,11.0800003 20.8999996,10.6400003 C19.9199996,12.0100003 18.3200001,12.8999996 16.5,12.8999996 C13.52,12.8999996 11.1000004,10.48 11.1000004,7.5 C11.1000004,5.69000006 11.9899997,4.07999992 13.3599997,3.0999999 C12.9199997,3.03999991 12.46,3 12,3 C7.03000021,3 3,7.03000021 3,12 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Dark
