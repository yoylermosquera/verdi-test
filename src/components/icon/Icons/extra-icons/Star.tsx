import React from 'react';
import { IconProps } from '../../index';

export const Star = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M21 8.17949H13.3214L11 1L8.67857 8.17949H1L7.25 12.4872L4.83929 19.6667L11 15.1795L17.1607 19.6667L14.75 12.4872L21 8.17949Z" 
        stroke={color} 
        stroke-width="2" 
        strokeLinejoin="round"
        />
    </svg>
  );
};
