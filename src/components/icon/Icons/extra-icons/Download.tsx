import React from 'react';
import { IconProps } from '../../index';

export const Download = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.92311L7 13.8572L13 7.92311M7 13.033L7 1.00004"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1 15V16.7143H13V15" stroke={color} strokeLinecap="round"/>
    </svg>
  );
};
