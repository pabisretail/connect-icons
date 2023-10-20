import { IconProps } from 'interfaces/icons'
import React from 'react'

const GroupUser = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/User/Group'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M9,13 C10.1,13 11.1833333,13.129 12.25,13.387 C13.3166667,13.6456667 14.3666667,14.0333333 15.4,14.55 C15.8833333,14.8 16.2706667,15.1623333 16.562,15.637 C16.854,16.1123333 17,16.6333333 17,17.2 L17,20 L1,20 L1,17.2 C1,16.6333333 1.146,16.1123333 1.438,15.637 C1.72933333,15.1623333 2.11666667,14.8 2.6,14.55 C3.63333333,14.0333333 4.68333333,13.6456667 5.75,13.387 C6.81666667,13.129 7.9,13 9,13 Z M16.65,13.15 C17.5,13.25 18.3,13.4206667 19.05,13.662 C19.8,13.904 20.5,14.2 21.15,14.55 C21.75,14.8833333 22.2083333,15.254 22.525,15.662 C22.8416667,16.0706667 23,16.5166667 23,17 L23,20 L19,20 L19,17 C19,16.2666667 18.796,15.5623333 18.388,14.887 C17.9793333,14.2123333 17.4,13.6333333 16.65,13.15 Z M9,15 C8.06666667,15 7.14166667,15.1123333 6.225,15.337 C5.30833333,15.5623333 4.4,15.9 3.5,16.35 C3.35,16.4333333 3.22933333,16.55 3.138,16.7 C3.046,16.85 3,17.0166667 3,17.2 L3,18 L15,18 L15,17.2 C15,17.0166667 14.9543333,16.85 14.863,16.7 C14.771,16.55 14.65,16.4333333 14.5,16.35 C13.6,15.9 12.6916667,15.5623333 11.775,15.337 C10.8583333,15.1123333 9.93333333,15 9,15 Z M9,4 C10.1,4 11.0416667,4.39166667 11.825,5.175 C12.6083333,5.95833333 13,6.9 13,8 C13,9.1 12.6083333,10.0416667 11.825,10.825 C11.0416667,11.6083333 10.1,12 9,12 C7.9,12 6.95833333,11.6083333 6.175,10.825 C5.39166667,10.0416667 5,9.1 5,8 C5,6.9 5.39166667,5.95833333 6.175,5.175 C6.95833333,4.39166667 7.9,4 9,4 Z M15,4 C16.1,4 17.0416667,4.39166667 17.825,5.175 C18.6083333,5.95833333 19,6.9 19,8 C19,9.1 18.6083333,10.0416667 17.825,10.825 C17.0416667,11.6083333 16.1,12 15,12 C14.8166667,12 14.5833333,11.9793333 14.3,11.938 C14.0166667,11.896 13.7833333,11.85 13.6,11.8 C14.05,11.2666667 14.3956667,10.675 14.637,10.025 C14.879,9.375 15,8.7 15,8 C15,7.3 14.879,6.625 14.637,5.975 C14.3956667,5.325 14.05,4.73333333 13.6,4.2 C13.8333333,4.11666667 14.0666667,4.06233333 14.3,4.037 C14.5333333,4.01233333 14.7666667,4 15,4 Z M9,6 C8.45,6 7.97933333,6.196 7.588,6.588 C7.196,6.97933333 7,7.45 7,8 C7,8.55 7.196,9.02066667 7.588,9.412 C7.97933333,9.804 8.45,10 9,10 C9.55,10 10.021,9.804 10.413,9.412 C10.8043333,9.02066667 11,8.55 11,8 C11,7.45 10.8043333,6.97933333 10.413,6.588 C10.021,6.196 9.55,6 9,6 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default GroupUser