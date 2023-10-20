import { IconProps } from 'interfaces/icons'
import React from 'react'

const OutlinedUser = ({width='24px', height='24px', fill='#221c1c'}:IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/User/Outlined'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,15 C15.34125,15 19,16.905 19,17.625 L19,19 L5,19 L5,17.625 C5,16.905 8.65874997,15 12,15 Z M12,5.13750011 C13.305,5.13750011 14.3625004,6.19500004 14.3625004,7.5 C14.3625004,8.80499996 13.305,9.86250043 12,9.86250043 C10.695,9.86250043 9.63749957,8.80499996 9.63749957,7.5 C9.63749957,6.19500004 10.695,5.13750011 12,5.13750011 Z M7.5,7.5 C7.5,9.98625004 9.51374996,12 12,12 C14.48625,12 16.5,9.98625004 16.5,7.5 C16.5,5.01374996 14.48625,3 12,3 C9.51374996,3 7.5,5.01374996 7.5,7.5 Z M3,17.625 L3,21 L21,21 L21,17.625 C21,14.6324999 15.0037501,13.125 12,13.125 C8.99624991,13.125 3,14.6324999 3,17.625 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default OutlinedUser
