import React from 'react';
import { IconProps } from '../../index';

export const AddIconWhite = (props: IconProps) => {
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
        <path d="M14 6V22M22 14H6" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
