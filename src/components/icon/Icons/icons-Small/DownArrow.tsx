import React from 'react';
import { IconProps } from '../../index';

export const DownArrow = (props: IconProps) => {
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
        <path d="M12 15L7 10H17L12 15Z" fill={color}/>
    </svg>
  );
};
