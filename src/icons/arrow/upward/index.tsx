import React from 'react'
import { IconArrowProps } from 'interfaces/arrow'

const UpwardArrow = ({width= '24px', height='24px', fill='#5C5E72'}: IconArrowProps) => (
<svg width={width} height={height} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <defs>
        <rect id="path-1" x="0" y="0" width={width} height={height}></rect>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Icon/Arrow/Upward">
            <mask id="mask-2" fill="white">
                <use href="#path-1"></use>
            </mask>
            <g id="Back"></g>
            <polygon id="🖍-Color" fill={fill} mask="url(#mask-2)" points="5.41000276 13.4099745 11.0000024 7.82997514 11.0000024 19.9999741 13.0000022 19.9999741 13.0000022 7.82997514 18.5800016 13.4199748 20.0000015 11.9999748 12.0000023 3.99997559 4.00000305 11.9999748"></polygon>
        </g>
    </g>
</svg>
)


export default UpwardArrow