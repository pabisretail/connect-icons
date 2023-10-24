import { IconProps } from 'interfaces/icons'
import React from 'react'

const Download = ({width='24px', height='24px', fill='#5C5E72'}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>721CB399-12A1-4B2C-95A5-6F0116F11154</title>
    <defs>
        <rect id="path-1" x="0" y="0" width={width} height={height}></rect>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g id="Icon/Download">
            <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
            </mask>
            <g id="Back"></g>
            <path d="M14.1700001,11 L2,11 L2,13 L14.1700001,13 L10.5799999,16.5900002 L12,18 L18,12 L12,6 L10.5900002,7.40999985 L14.1700001,11 Z M20,20 L22,20 L22,4 L20,4 L20,20 Z" id="🖍-Color" fill={fill} mask="url(#mask-2)" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "></path>
        </g>
    </g>
</svg>
  )
}

export default Download