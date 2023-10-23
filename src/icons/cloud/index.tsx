import { IconProps } from 'interfaces/icons'
import React from 'react'

const Cloud = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Cloud'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,4 C9.1099999,4 6.5999999,5.63999987 5.3499999,8.03999996 C2.33999991,8.35999995 0,10.9100001 0,14 C0,17.3099999 2.69000006,20 6,20 L19,20 C21.76,20 24,17.76 24,15 C24,12.3599999 21.9500003,10.22 19.3500004,10.04 C18.6700004,6.58999991 15.6400001,4 12,4 Z M6,18 C3.78999996,18 2,16.21 2,14 C2,11.79 3.78999996,10 6,10 L6.71000004,10 C7.37000006,7.69000006 9.48000002,6 12,6 C15.04,6 17.5,8.46000004 17.5,11.5 L17.5,12 L19,12 C20.66,12 22,13.34 22,15 C22,16.66 20.66,18 19,18 L6,18 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Cloud
