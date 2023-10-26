import React from 'react'
import { IconProps } from 'interfaces/icons'

const Location = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>66E35799-E9F9-4A6B-B9AB-FED2CB18C42F</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Location'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M13,1 L13,3.05999994 C17.1700001,3.51999995 20.4800005,6.82999992 20.9400005,11 L23,11 L23,13 L20.9400005,13 C20.4800005,17.1700001 17.1700001,20.4800005 13,20.9400005 L13,23 L11,23 L11,20.9400005 C6.82999992,20.4800005 3.51999995,17.1700001 3.05999994,13 L1,13 L1,11 L3.05999994,11 C3.51999995,6.82999992 6.82999992,3.51999995 11,3.05999994 L11,1 L13,1 Z M12,5 C8.13000011,5 5,8.13000011 5,12 C5,15.8699999 8.13000011,19 12,19 C15.8699999,19 19,15.8699999 19,12 C19,8.13000011 15.8699999,5 12,5 Z M12,8 C14.209139,8 16,9.790861 16,12 C16,14.209139 14.209139,16 12,16 C9.790861,16 8,14.209139 8,12 C8,9.790861 9.790861,8 12,8 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Location
