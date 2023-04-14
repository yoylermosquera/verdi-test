import React from 'react';
import { IconProps } from '../../index';

export const Small33 = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z" 
        fill={color}
        />
    </svg>
  );
};
