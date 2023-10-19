import { IconArrowProps } from 'interfaces/arrow'
import React from 'react'

const DropArrow = ({ fill = '#E8E8EA', width = '24px', height = '24px', rotation = '' }: IconArrowProps) => (
  <svg
    style={rotation !== '' ? { transform: 'rotate(' + rotation + 'deg)' } : { transform: '' }}
    width={width}
    height={height}
    viewBox='0 0 24 24'
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g id='Layout' stroke='none' fill='none'>
      <g id='Layout---Light---Abasto' transform='translate(-296.000000, 0.000000)' fill={fill}>
        <path
          d='M312,8 L296,8 L302.585786,1.41421356 C303.366835,0.633164979 304.633165,0.633164979 305.414214,1.41421356 L312,8 L312,8 Z'
          id='Arrow'
          transform='translate(304.000000, 4.000000) scale(1, -1) translate(-304.000000, -4.000000) '
        ></path>
      </g>
    </g>
  </svg>
)

export default DropArrow
