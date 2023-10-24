import { IconProps } from 'interfaces/icons'
import React from 'react'

const Options = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Options'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M13.9999939,6.00001221 C13.9999939,4.9000121 13.0999936,4.00001221 11.9999939,4.00001221 C10.8999938,4.00001221 9.9999939,4.9000121 9.9999939,6.00001221 C9.9999939,7.10001194 10.8999938,8.00001221 11.9999939,8.00001221 C13.0999936,8.00001221 13.9999939,7.10001194 13.9999939,6.00001221 Z M9.9999939,12.0000122 C9.9999939,13.1000114 10.8999938,14.0000122 11.9999939,14.0000122 C13.0999936,14.0000122 13.9999939,13.1000114 13.9999939,12.0000122 C13.9999939,10.9000115 13.0999936,10.0000122 11.9999939,10.0000122 C10.8999938,10.0000122 9.9999939,10.9000115 9.9999939,12.0000122 Z M9.9999939,18.0000122 C9.9999939,19.1000108 10.8999938,20.0000122 11.9999939,20.0000122 C13.0999936,20.0000122 13.9999939,19.1000108 13.9999939,18.0000122 C13.9999939,16.900011 13.0999936,16.0000122 11.9999939,16.0000122 C10.8999938,16.0000122 9.9999939,16.900011 9.9999939,18.0000122 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Options
