import { IconProps } from 'interfaces/icons'
import React from 'react'

const LockOpen = ({width='24px', height='24px', fill='#5C5E72'}: IconProps) => {
  return (
    <svg width={height} height={width} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>63FA2A66-B3E2-44DA-A81A-F045EAE49F93</title>
    <defs>
        <rect id="path-1" x="0" y="0" width={width} height={height}></rect>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon/LockOpen">
            <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
            </mask>
            <g id="Back"></g>
            <path d="M14,15 C14,13.9 13.1,13 12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 Z M17,8 L17,6 C17,3.24000001 14.76,1 12,1 C9.24000001,1 7,3.24000001 7,6 L8.89999962,6 C8.89999962,4.28999996 10.29,2.9000001 12,2.9000001 C13.71,2.9000001 15.1000004,4.28999996 15.1000004,6 L15.1000004,8 L6,8 C4.89999998,8 4,8.89999998 4,10 L4,20 C4,21.1 4.89999998,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,10 C20,8.89999998 19.1,8 18,8 L17,8 Z M6,20 L6,10 L18,10 L18,20 L6,20 Z" id="🖍-Color" fill={fill} mask="url(#mask-2)"></path>
        </g>
    </g>
</svg>
  )
}

export default LockOpen