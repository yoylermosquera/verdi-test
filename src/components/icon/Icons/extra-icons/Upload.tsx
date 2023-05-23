import React from 'react';
import { IconProps } from '../../index';

export function Upload(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="20" cy="20" r="20" fill={color}/>
        <path d="M27 17.9231L20 11L13 17.9231M20 11.9615L20 26" 
        stroke="white" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
        <path d="M13 27V29H27V27" 
        stroke="white" 
        strokeLinecap="round"/> 
    </svg>
  );
}
