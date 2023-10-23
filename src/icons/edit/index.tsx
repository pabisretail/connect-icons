import { IconProps } from 'interfaces/icons'
import React from 'react'

const Edit = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>56DF8EAD-DFF5-44CD-A9B5-A0BC88C1D16D</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Edit'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M14.9799995,9.93999958 L5.92000008,19 L5,19 L5,18.0799999 L14.0600004,9.02000046 L14.0600004,9.02000046 L14.9799995,9.93999958 Z M16.9599991,3.28999996 L15.1300001,5.11999989 L18.8799992,8.86999989 L20.7099991,7.03999996 C21.0999991,6.64999998 21.0999991,6.0200001 20.7099991,5.63000011 L18.3700008,3.28999996 C18.1700008,3.08999996 17.9199998,3 17.6599998,3 L17.6599998,3 C17.4099998,3 17.1499991,3.09999996 16.9599991,3.28999996 Z M3,17.25 L3,21 L6.75,21 L17.8099995,9.93999958 L14.0600004,6.19000006 L14.0600004,6.19000006 L3,17.25 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Edit
