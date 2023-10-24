import React from 'react'
import { IconProps } from 'interfaces/icons'

const Favorite = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fillRule='evenodd'>
        <g id='Icon/Favorite'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,5.09000015 C10.91,3.81000018 9.24000001,3 7.5,3 C4.42000008,3 2,5.42000008 2,8.5 C2,12.28 5.4000001,15.3600011 10.5500002,20.0400009 L12,21.3500004 L13.4499998,20.0300007 C18.5999999,15.3600006 22,12.28 22,8.5 C22,5.42000008 19.5799999,3 16.5,3 C14.76,3 13.09,3.81000018 12,5.09000015 Z M12,18.6499996 L11.8999996,18.5499992 C7.13999939,14.2399993 4,11.3900001 4,8.5 C4,6.5 5.5,5 7.5,5 C9.03999996,5 10.5399997,5.99000013 11.0699997,7.36000013 L12.9399996,7.36000013 C13.4599996,5.99000013 14.96,5 16.5,5 C18.5,5 20,6.5 20,8.5 C20,11.3900001 16.8600006,14.2399993 12.1000004,18.5499992 L12,18.6499996 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Favorite
