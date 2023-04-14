import React from 'react';
import { IconProps } from '../../index';

export const UpArrow = (props: IconProps) => {
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
        <path d="M7 14L12 9L17 14H7Z" fill={color}/>
    </svg>
  );
};
