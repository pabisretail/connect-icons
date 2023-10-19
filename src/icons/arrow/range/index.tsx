import React from 'react'
import { IconArrowProps } from 'interfaces/arrow'

const RangeArrow = ({width= '24px', height='24px', fill='#5C5E72'}: IconArrowProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <rect id="path-1" x="0" y="0" width={width} height={height}></rect>
        </defs>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Icon/Arrow/Range">
                <mask id="mask-2" fill="white">
                    <use href="#path-1"></use>
                </mask>
                <g id="Back"></g>
                <polygon id="🖍-Color" fill={fill} mask="url(#mask-2)" points="12 22 17 17 7 17"></polygon>
                <polygon id="🖍-Color" fill={fill} mask="url(#mask-2)" transform="translate(12.000000, 4.500000) scale(1, -1) translate(-12.000000, -4.500000) " points="12 7 17 2 7 2"></polygon>
            </g>
        </g>
    </svg>
  )
}

export default RangeArrow