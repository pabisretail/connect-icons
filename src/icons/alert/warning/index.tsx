import { IconProps } from 'interfaces/icons'
import React from 'react'

const WarningAlert = ({ width = '24px', height = '24px', fill = '#990808' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>308B7C17-797C-4BD3-80D1-FF4715D4F5DB</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Alert/Warning'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M19.5300007,18 L4.46999979,18 L12,4.98999977 L19.5300007,18 Z M1,20 L23,20 L12,1 L1,20 Z M11,15 L11,17 L13,17 L13,15 L11,15 Z M11,9 L11,13 L13,13 L13,9 L11,9 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default WarningAlert
