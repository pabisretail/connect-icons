import React from 'react'
import { IconProps } from 'interfaces/icons'

const Color = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>947D816E-6F08-4A01-ADD2-9B7662F3D35B</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Color'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M18.3700008,3.29249999 C17.9800009,2.9025 17.3499991,2.9025 16.9599991,3.29249999 L13.8400002,6.4124999 L11.9099998,4.50250006 L10.5,5.9124999 L11.9200001,7.33249998 L3,16.2524996 L3,21.0025005 L7.75,21.0025005 L16.6700001,12.0824995 L18.0900002,13.5024996 L19.5,12.0924997 L17.5799999,10.1725001 L20.7000008,7.05250025 C21.1000008,6.65250024 21.0999991,6.02250016 20.7099991,5.63250017 L18.3700008,3.29249999 Z M5,17.0824995 L13.0600004,9.02250051 L14.9799995,10.9424996 L6.92000008,19.0025005 L5,17.0824995 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Color
