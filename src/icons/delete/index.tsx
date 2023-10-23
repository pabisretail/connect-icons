import { IconProps } from 'interfaces/icons'
import React from 'react'

const Delete = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Delete'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 L6,7 L6,19 C6,20.1 6.89999998,21 8,21 Z M16,9 L16,19 L8,19 L8,9 L16,9 Z M14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 L15.5,4 L14.5,3 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Delete
