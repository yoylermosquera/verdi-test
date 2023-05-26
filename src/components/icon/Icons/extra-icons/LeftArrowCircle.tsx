import React from 'react';
import { IconProps } from '../../index';

export const LeftArrowCircle = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="13.5" stroke={color}/>
      
      <path d="M13.2308 17L10 14L13.2308 11M10.4487 14H17" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />       
      
    </svg>
  );
};
