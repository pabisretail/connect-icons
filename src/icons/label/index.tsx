import React from 'react'
import { IconProps } from 'interfaces/icons'

const Label = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>6B1BB890-7399-4F48-B1CD-5C8C26DEFAC4</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Label'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M15,5 L5,5.02000046 C3.89999998,5.02000046 3,5.91000021 3,7.01000023 L3,17.0100002 C3,18.1100003 3.89999998,19 5,19 L15,19 C15.67,19 16.2699991,18.6699998 16.6299992,18.1599998 L21,12 L16.6299992,5.84000015 C16.2699991,5.33000016 15.67,5 15,5 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Label
