import React from 'react';
import { IconProps } from '../../index';

export const CrossBoxLarge = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M53 54L21 22M53 22L21 54" 
      stroke={color} 
      stroke-width="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      />  
      <rect  x="0.5" y="0.5" width="74" height="74" 
      stroke={color}
      />   
      
    </svg>
  );
};
