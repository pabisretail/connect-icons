import { IconProps } from 'interfaces/icons'
import React from 'react'

const Search = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>1420F015-3ECE-429E-A922-514518FEF04F</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Search'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M11,3 C15.4194209,3 19,6.58056921 19,11 C19.002803,12.7851759 18.4068245,14.5106359 17.3212708,15.9068015 L21.0000684,19.5858548 L19.5873142,21.0015277 L15.9068015,17.3212708 C14.5106359,18.4068245 12.7851759,19.002803 11,19 C6.58056921,19 3,15.4194209 3,11 C3,6.58056921 6.58056921,3 11,3 Z M11,5 C7.68542691,5 5,7.68542691 5,11 C5,14.3145657 7.68542691,17 11,17 C12.5603633,17.00245 14.0598964,16.3949469 15.1785651,15.3071365 L15.3071365,15.1785651 C16.3949469,14.0598964 17.00245,12.5603633 17,11 C17,7.68542691 14.3145657,5 11,5 Z'
            id='Combined-Shape'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Search
