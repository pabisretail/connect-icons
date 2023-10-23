import { IconProps } from 'interfaces/icons'
import React from 'react'

const Plus = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Plus'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <polygon
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
            points='11 7 11 11 7 11 7 13 11 13 11 17 13 17 13 13 17 13 17 11 13 11 13 7'
          ></polygon>
        </g>
      </g>
    </svg>
  )
}

export default Plus
