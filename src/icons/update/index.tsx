import React from 'react'
import { IconProps } from 'interfaces/icons'

const Update = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <title>A7E6DD0D-2EE4-4960-B767-437587790C86</title>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Update'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <g id='update' mask='url(#mask-2)' fill={fill} fill-rule='nonzero'>
            <g transform='translate(3.000000, 3.000000)' id='Shape'>
              <path d='M17.9987834,7.12 L11.2187834,7.12 L13.9587834,4.3 C11.2287834,1.6 6.80878343,1.5 4.07878343,4.2 C1.34878343,6.91 1.34878343,11.28 4.07878343,14 C6.80878343,16.7 11.2287834,16.7 13.9587834,14 C15.3187834,12.65 15.9987834,11.08 15.9987834,9.1 L17.9987834,9.1 C17.9987834,11.08 17.1187834,13.65 15.3587834,15.39 C11.8487834,18.87 6.14878343,18.87 2.63878343,15.39 C-0.861216566,11.92 -0.891216566,6.28 2.61878343,2.81 C6.12878343,-0.66 11.7587834,-0.66 15.2687834,2.81 L17.9987834,0 L17.9987834,7.12 M9.49878343,5 L9.49878343,9.25 L12.9987834,11.33 L12.2787834,12.54 L7.99878343,10 L7.99878343,5 L9.49878343,5 Z'></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Update
