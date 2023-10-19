import { IconArrowProps } from 'interfaces/arrow'
import React from 'react'

const DoubleArrow = ({ fill = '#E8E8EA', width = '24px', height = '24px', rotation = '' }: IconArrowProps) => {
  return (
    <svg
      style={rotation !== '' ? { transform: 'rotate(' + rotation + 'deg)' } : { transform: '' }}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <rect id='path-1' x='0' y='0' width='24' height='24'></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Arrow/Double'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M11.61,18 L5.61,12 L11.61,6 L12.9092126,7.32283465 L8.23204724,12 L12.9092126,16.6771654 L11.61,18 Z M17.7044882,18 L11.7044882,12 L17.7044882,6 L19.0037008,7.32283465 L14.3265354,12 L19.0037008,16.6771654 L17.7044882,18 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
            transform='translate(12.306850, 12.000000) scale(-1, 1) translate(-12.306850, -12.000000) '
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default DoubleArrow
