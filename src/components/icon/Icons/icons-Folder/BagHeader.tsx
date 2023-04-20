import React from 'react';
import { IconProps } from '../../index';

export function BagHeader(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7.66667V6C6 4.67392 6.52678 3.40215 7.46447 2.46447C8.40215 1.52678 9.67392 1 11 1C12.3261 1 13.5979 1.52678 14.5355 2.46447C15.4732 3.40215 16 4.67392 16 6V7.66667M1.83333 7.66667C1.61232 7.66667 1.40036 7.75446 1.24408 7.91074C1.0878 8.06702 1 8.27899 1 8.5V19.75C1 21.325 2.34167 22.6667 3.91667 22.6667H18.0833C19.6583 22.6667 21 21.3901 21 19.8151V8.5C21 8.27899 20.9122 8.06702 20.7559 7.91074C20.5996 7.75446 20.3877 7.66667 20.1667 7.66667H1.83333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
