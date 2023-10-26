import { IconProps } from 'interfaces/icons'
import React from 'react'

const Upload = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>5C88EAA0-80AC-4ED3-B9A7-D74BF318308E</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Upload'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M5,16 L5,18.999 L19,18.999 L19,16 L21,16 L21,21 L19,21 L5,20.999 L3,21 L3,16 L5,16 Z M12.0042136,3 L19.0042136,10 L17.59,11.4142136 L12.999,6.824 L13,17 L11,17 L10.999,6.829 L6.41421356,11.4142136 L5,10 L12,3 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Upload
