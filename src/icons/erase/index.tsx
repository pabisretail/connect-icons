import { IconProps } from 'interfaces/icons'
import React from 'react'

const Erase = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Erase'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,2 C17.5300002,2 22,6.46999979 22,12 C22,17.5300002 17.5300002,22 12,22 C6.46999979,22 2,17.5300002 2,12 C2,6.46999979 6.46999979,2 12,2 Z M15.5900002,7 L12,10.5900002 L8.40999985,7 L7,8.40999985 L10.5900002,12 L7,15.5900002 L8.40999985,17 L12,13.4099998 L15.5900002,17 L17,15.5900002 L13.4099998,12 L17,8.40999985 L15.5900002,7 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Erase
