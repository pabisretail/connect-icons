import React from 'react'

import { IconProps } from 'interfaces/icons'

const ErrorAlert = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Alert/Error'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M11.9899998,2 C17.52,2 22,6.48000002 22,12 C22,17.52 17.52,22 11.9899998,22 C6.46999979,22 2,17.52 2,12 C2,6.48000002 6.46999979,2 11.9899998,2 Z M12,4 C7.57999992,4 4,7.57999992 4,12 C4,16.4200001 7.57999992,20 12,20 C16.4200001,20 20,16.4200001 20,12 C20,7.57999992 16.4200001,4 12,4 Z M15.5900002,7 L17,8.40999985 L13.4099998,12 L17,15.5900002 L15.5900002,17 L12,13.4099998 L8.40999985,17 L7,15.5900002 L10.5900002,12 L7,8.40999985 L8.40999985,7 L12,10.5900002 L15.5900002,7 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default ErrorAlert
