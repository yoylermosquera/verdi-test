import React from 'react';
import { IconProps } from '..';

export function CotizationList(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 15 18"
      fill={'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="14"
        height="16.3684"
        rx="1.5"
        stroke={color}
      />
      <path d="M3.1582 4.73633H11.0529" stroke={color} />
      <path d="M3.1582 8.68359H11.0529" stroke={color} />
      <path d="M3.1582 12.6309H7.10557" stroke={color} />
    </svg>
  );
}
