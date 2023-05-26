import React from 'react';
import { IconProps } from '../../index';

export const AddIconBlack = (props: IconProps) => {
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
        <circle cx="14" cy="14" r="13.5" fill={color}/>
        <path d="M14 6V22M22 14H6" stroke="#E9E7E1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
