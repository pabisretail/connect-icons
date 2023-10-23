import { IconProps } from 'interfaces/icons'
import React from 'react'

const Support = ({ width = '24px', height = '24px', fill = '#5C5E72' }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <rect id='path-1' x='0' y='0' width={width} height={height}></rect>
      </defs>
      <g id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Icon/Support'>
          <mask id='mask-2' fill='white'>
            <use href='#path-1'></use>
          </mask>
          <g id='Back'></g>
          <path
            d='M12,3 C7.30999994,3 3,6.64999962 3,12.2799997 C2.39999998,12.6199997 2,13.26 2,14 L2,16 C2,17.1 2.89999998,18 4,18 L5,18 L5,11.8999996 C5,8.02999973 8.13000011,4.9000001 12,4.9000001 C15.8699999,4.9000001 19,8.02999973 19,11.8999996 L19,19 L11,19 L11,21 L19,21 C20.1,21 21,20.1 21,19 L21,17.7800007 C21.59,17.4700007 22,16.8599994 22,16.1399994 L22,13.8400002 C22,13.1400002 21.59,12.5300003 21,12.2200003 C21,6.7300005 16.7399998,3 12,3 Z M10,13 C10,12.4477152 9.55228472,12 9,12 C8.44771522,12 8,12.4477152 8,13 C8,13.5522847 8.44771522,14 9,14 C9.55228472,14 10,13.5522847 10,13 Z M16,13 C16,12.4477152 15.5522847,12 15,12 C14.4477152,12 14,12.4477152 14,13 C14,13.5522847 14.4477152,14 15,14 C15.5522847,14 16,13.5522847 16,13 Z M12.0499687,6 C9.01996875,6 5.759969,8.50999975 6.01996899,12.4499998 C8.48996902,11.4399998 10.3499687,9.24000001 10.8799686,6.55999994 C12.1899686,9.19000006 14.8799696,11 17.9999695,11.0299997 C17.5199695,8.17999983 15.0399687,6 12.0499687,6 Z'
            id='🖍-Color'
            fill={fill}
            mask='url(#mask-2)'
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Support
