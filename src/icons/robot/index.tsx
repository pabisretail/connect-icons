import { IconProps } from 'interfaces/icons'
import React from 'react'

const Robot = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>E942AEF7-5F80-479C-9945-A640F2C54CBA</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Robot'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,2 C13.1,2 14,2.9 14,4 C14,4.74 13.6,5.39 13,5.73 L13,7 L14,7 C17.87,7 21,10.13 21,14 L21,20 C21,21.11 20.11,22 19,22 L5,22 C3.9,22 3,21.11 3,20 L3,14 C3,10.13 6.13,7 10,7 L11,7 L11,5.73 C10.4,5.39 10,4.74 10,4 C10,2.9 10.9,2 12,2 Z M14,9 L10,9 C7.2345695,9 5,11.2345695 5,14 L5,20 L19,20 L19,14 C19,11.2345695 16.7654305,9 14,9 Z M15,13 C16.1,13 17,13.9 17,15 C17,16.11 16.11,17 15,17 C13.89,17 13,16.11 13,15 C13,13.89 13.9,13 15,13 Z M9,13 C10.11,13 11,13.89 11,15 C11,16.11 10.1,17 9,17 C7.9,17 7,16.1 7,15 C7,13.9 7.9,13 9,13 Z'
            id='Combined-Shape'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Robot
