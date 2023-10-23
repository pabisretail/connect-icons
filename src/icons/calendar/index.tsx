import { IconProps } from 'interfaces/icons'
import React from 'react'

const Calendar = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Calendar'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M8,3 L8,5 L16,5 L16,3 L18,3 L18,5 L19,5 C19.55,5 20.021,5.196 20.413,5.588 C20.8043333,5.97933333 21,6.45 21,7 L21,19 C21,19.55 20.8043333,20.021 20.413,20.413 C20.021,20.8043333 19.55,21 19,21 L5,21 C4.45,21 3.979,20.8043333 3.587,20.413 C3.19566667,20.021 3,19.55 3,19 L3,7 C3,6.45 3.19566667,5.97933333 3.587,5.588 C3.979,5.196 4.45,5 5,5 L6,5 L6,3 L8,3 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z M19,7 L5,7 L5,9 L19,9 L19,7 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Calendar
