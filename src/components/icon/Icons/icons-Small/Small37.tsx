import React from 'react';
import { IconProps } from '../../index';

export const Small37 = (props: IconProps) => {
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
        <path xmlns="http://www.w3.org/2000/svg" d="M7 13V11H17V13H7Z" fill={color}/>
    </svg>
  );
};
