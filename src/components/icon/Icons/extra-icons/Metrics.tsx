import React from 'react';

import { IconProps } from '../index';

export function Metrics(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V18.3571C1 18.5276 1.06773 18.6912 1.18829 18.8117C1.30885 18.9323 1.47236 19 1.64286 19H19"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.98225 8.71387H4.3751C3.9313 8.71387 3.57153 9.07364 3.57153 9.51744V15.6246C3.57153 16.0684 3.9313 16.4282 4.3751 16.4282H5.98225C6.42605 16.4282 6.78582 16.0684 6.78582 15.6246V9.51744C6.78582 9.07364 6.42605 8.71387 5.98225 8.71387Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.7679 6.78613H10.1607C9.71695 6.78613 9.35718 7.1459 9.35718 7.5897V15.6254C9.35718 16.0692 9.71695 16.429 10.1607 16.429H11.7679C12.2117 16.429 12.5715 16.0692 12.5715 15.6254V7.5897C12.5715 7.1459 12.2117 6.78613 11.7679 6.78613Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5384 4.21387H15.9313C15.4875 4.21387 15.1277 4.57364 15.1277 5.01744V15.6246C15.1277 16.0684 15.4875 16.4282 15.9313 16.4282H17.5384C17.9822 16.4282 18.342 16.0684 18.342 15.6246V5.01744C18.342 4.57364 17.9822 4.21387 17.5384 4.21387Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
