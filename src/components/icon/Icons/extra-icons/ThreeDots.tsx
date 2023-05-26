import React from 'react';
import { IconProps } from '../../index';

export const ThreeDots = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        
            <circle cx="4.5" cy="12.5" r="2" stroke={color}/>
            <circle cx="12" cy="12.5" r="2" stroke={color}/>
            <circle cx="19.5" cy="12.5" r="2" stroke={color}/> 
            
    </svg>
  );
};


