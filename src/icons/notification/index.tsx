import React from 'react'
import { IconProps } from 'interfaces/icons'

const Notification = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
     
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Notification/OFF'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M14,20 C14,21.32 13.1,22.4 12,22.4 C10.9,22.4 10,21.32 10,20 L14,20 Z M12,1 C13.1,1 14,1.9 14,3 L14,3.3 C17,4.2 19,6.9 19,10 L19,16 L21,18 L21,19 L3,19 L3,18 L5,16 L5,10 C5,6.9 7,4.2 10,3.3 L10,3 C10,1.9 10.9,1 12,1 Z M12,5 C9.2,5 7,7.2 7,10 L7,17 L17,17 L17,10 C17,7.2 14.8,5 12,5 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Notification
