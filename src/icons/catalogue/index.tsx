import { IconProps } from 'interfaces/icons'
import React from 'react'

const Catalogue = ({width='24px', height='24px', fill='#5C5E72'}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Catalogue'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,2 C13.1045695,2 14,2.8954305 14,4 L19,4 C20.1,4 21,4.89999998 21,6 L21,20 C21,21.1 20.1,22 19,22 L5,22 C3.89999998,22 3,21.1 3,20 L3,6 C3,4.89999998 3.89999998,4 5,4 L10,4 C10,2.8954305 10.8954305,2 12,2 Z M19,6 L5,6 L5,20 L19,20 L19,6 Z M12,16 L12,18 L7,18 L7,16 L12,16 Z M17,12 L17,14 L7,14 L7,12 L17,12 Z M17,8 L17,10 L7,10 L7,8 L17,8 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Catalogue
