import React from 'react';
import { IconProps } from '../../index';

export const Suitcase = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1 5.25H18L17.0556 18H1.94444L1 5.25Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M5.72223 7.13889V1H13.2778V7.13889" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.72223 14.2222H13.2778" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
};
