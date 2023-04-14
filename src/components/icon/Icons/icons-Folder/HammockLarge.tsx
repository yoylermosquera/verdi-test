import React from 'react';
import { IconProps } from '../../index';

export const HammockLarge = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 38 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.45117 1.61252V15.8296" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.683 1.61249V15.8296" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.3203 15.8296H2.70403C2.10122 15.8296 1.61255 16.4641 1.61255 17.2468C1.61255 18.0296 2.10122 18.6641 2.70403 18.6641H16.3203C16.9231 18.6641 17.4117 18.0296 17.4117 17.2468C17.4117 16.4641 16.9231 15.8296 16.3203 15.8296Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35.4903 15.8296H21.8741C21.2713 15.8296 20.7826 16.4641 20.7826 17.2468C20.7826 18.0296 21.2713 18.6641 21.8741 18.6641H35.4903C36.0931 18.6641 36.5818 18.0296 36.5818 17.2468C36.5818 16.4641 36.0931 15.8296 35.4903 15.8296Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.45532 15.8296L9.51123 7.81564L15.5344 15.8296" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.6436 15.8296L28.6995 7.81564L34.7208 15.8296" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.8909 18.943C15.8909 18.943 16.9096 26.7584 23.8951 27.288C30.8806 27.8175 34.3933 23.7774 35.0045 18.943" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.45541 18.943C3.45541 18.943 2.94603 28.016 14.6667 30.7299C26.3874 33.4438 33.5748 25.9523 34.7209 20.3945" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.6434 18.664C22.6434 18.664 22.5688 22.4299 18.9487 25.1249" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};