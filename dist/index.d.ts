import React from 'react';

interface IconProps$2 {
    fillCircle?: string;
    width?: string;
    height?: string;
    fillPath?: string;
}
declare const UnselectedWorkspace: ({ fillPath, fillCircle, width, height }: IconProps$2) => React.JSX.Element;

interface IconProps$1 {
    fillCirle?: string;
    width?: string;
    height?: string;
    fillShadow?: string;
    opacityCompass?: string;
}
declare const SelectedWorkspace: ({ fillCirle, fillShadow, opacityCompass, width, height }: IconProps$1) => React.JSX.Element;

interface IconProps {
    fill?: string;
    width?: string;
    height?: string;
    rotation?: string;
}
declare const ArrowIcon: ({ fill, width, height, rotation }: IconProps) => React.JSX.Element;

export { ArrowIcon, SelectedWorkspace, UnselectedWorkspace };
