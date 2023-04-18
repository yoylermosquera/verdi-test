import React from 'react';
import { IconProps } from '../../index';

export const RightArrowCircle = (props: IconProps) => {
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
      
      <path xmlns="http://www.w3.org/2000/svg" d="M14.7692 11L18 14L14.7692 17M17.5513 14L11 14" 
      stroke={color} 
      stroke-miterlimit="10" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      />     
      
    </svg>
  );
};
