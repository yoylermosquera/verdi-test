import React from 'react';
import { IconProps } from '../../index';

export const ArrowUp = (props: IconProps) => {
  const { size, color, className,  ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      className={`rotate-180 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill={color} />
    </svg>
  );
};
