import React from 'react';
import { IconProps } from '../../index';

export function Lupe(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18178 1C7.56358 1 5.98171 1.47985 4.63623 2.37888C3.29074 3.2779 2.24206 4.55572 1.6228 6.05075C1.00354 7.54577 0.841519 9.19085 1.15721 10.778C1.47291 12.3651 2.25215 13.8229 3.39639 14.9672C4.54063 16.1114 5.99849 16.8906 7.58559 17.2063C9.1727 17.522 10.8178 17.36 12.3128 16.7408C13.8078 16.1215 15.0857 15.0728 15.9847 13.7273C16.8837 12.3818 17.3636 10.8 17.3636 9.18178C17.3634 7.01188 16.5014 4.93089 14.967 3.39654C13.4327 1.86219 11.3517 1.00014 9.18178 1Z"
        stroke={color}
        strokeMiterlimit="10"
      />
      <path
        d="M15.2859 15.2859L21 21"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
