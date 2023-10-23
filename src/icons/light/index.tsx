import { IconProps } from 'interfaces/icons'
import React from 'react'

const Light = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>F0D3F7B3-D215-4186-A0A9-BBDDC85D6152</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Light'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M13,20 L13,23 L11,23 L11,20 L13,20 Z M5.63603897,16.9497475 L7.05025253,18.363961 L4.92893219,20.4852814 L3.51471863,19.0710678 L5.63603897,16.9497475 Z M18.363961,16.9497475 L20.4852814,19.0710678 L19.0710678,20.4852814 L16.9497475,18.363961 L18.363961,16.9497475 Z M12,5 C15.8659932,5 19,8.13400675 19,12 C19,15.8659932 15.8659932,19 12,19 C8.13400675,19 5,15.8659932 5,12 C5,8.13400675 8.13400675,5 12,5 Z M12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 Z M23,11 L23,13 L20,13 L20,11 L23,11 Z M4,11 L4,13 L1,13 L1,11 L4,11 Z M19.0710678,3.51471863 L20.4852814,4.92893219 L18.363961,7.05025253 L16.9497475,5.63603897 L19.0710678,3.51471863 Z M4.92893219,3.51471863 L7.05025253,5.63603897 L5.63603897,7.05025253 L3.51471863,4.92893219 L4.92893219,3.51471863 Z M13,1 L13,4 L11,4 L11,1 L13,1 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Light
