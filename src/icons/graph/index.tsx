import React from 'react'
import { IconProps } from 'interfaces/icons'


const Graph = ({width='24px', height='24px', fill='#5C5E72'}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <title>E3A16D21-99E4-4AE4-A8E3-8BFAB8B82117</title>
    <defs>
        <rect id="path-1" x="0" y="0" width={width} height={height}></rect>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="Icon/Graph">
            <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
            </mask>
            <g id="Back"></g>
            <path d="M19,3 C20.1,3 21,3.89999998 21,5 L21,19 C21,20.1 20.1,21 19,21 L5,21 C3.89999998,21 3,20.1 3,19 L3,5 C3,3.89999998 3.89999998,3 5,3 Z M19,5 L5,5 L5,19 L19,19 L19,5 Z M9,9 L9,17 L7,17 L7,9 L9,9 Z M13,7 L13,17 L11,17 L11,7 L13,7 Z M17,12 L17,17 L15,17 L15,12 L17,12 Z" id="🖍-Color" fill={fill} mask="url(#mask-2)"></path>
        </g>
    </g>
</svg>
  )
}

export default Graph