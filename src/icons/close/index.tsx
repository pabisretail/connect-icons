import React from 'react'
import { IconProps } from 'interfaces/icons'

const Close = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Close'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <polygon
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
            points='17.5900002 5 12 10.5900002 6.40999985 5 5 6.40999985 10.5900002 12 5 17.5900002 6.40999985 19 12 13.4099998 17.5900002 19 19 17.5900002 13.4099998 12 19 6.40999985'
          ></polygon>
        </g>
      </g>
    </svg>
  )
}

export default Close
