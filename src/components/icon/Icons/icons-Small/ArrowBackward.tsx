import React from 'react';
import { IconProps } from '../../index';

export const ArrowBackward = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.76923 18L1 9.5L9.76923 1M2.21795 9.5H20" 
        stroke={color}
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  );
};