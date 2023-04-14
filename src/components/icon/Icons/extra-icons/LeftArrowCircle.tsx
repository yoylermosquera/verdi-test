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
      
      <path d="M14 7L1 4L4.23077 1M1.44872 4H8" stroke={color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
       
      
    </svg>
  );
};
