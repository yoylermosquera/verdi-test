import React from 'react';
import { IconProps } from '../../index';

export const PlusIcon = (props: IconProps) => {
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
       <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill={color}/>
    </svg>
  );
};
