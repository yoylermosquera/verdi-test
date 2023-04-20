import React from 'react';
import { IconProps } from '../../index';

export const Portrait = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        
        <path d="M7.90462 12.2168L4.97216 16.3182H15.0324L12.8446 13.2333L11.1542 15.5541L10.7509 16.1078L10.3464 15.555L7.90462 12.2168Z" fill={color} stroke={color}/>
        <ellipse cx="14.5" cy="9.72728" rx="1.5" ry="1.63636" fill={color}/>
        <rect x="1" y="5.90909" width="18" height="13.0909" rx="1" stroke={color} stroke-width="1.8" strokeLinejoin="round"/>
        <path d="M4.5 5.90909L10 1L15.5 5.90909" stroke={color} stroke-width="1.8" strokeLinejoin="round"/>
            
    </svg>
  );
};

