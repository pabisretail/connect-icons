import { IconProps } from 'interfaces/icons'
import React from 'react'

const Home = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>

      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Home'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M17,10.1899996 L17,18 L15,18 L15,12 L9,12 L9,18 L7,18 L7,10.1899996 L12,5.69000006 L12,5.69000006 L17,10.1899996 Z M2,12 L5,12 L5,20 L11,20 L11,14 L13,14 L13,20 L19,20 L19,12 L22,12 L12,3 L2,12 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Home
