import React from 'react';
import { IconProps } from '../../index';

export function Home(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 8V17.3651C3 17.5335 3.06705 17.695 3.18639 17.814C3.30573 17.9331 3.46759 18 3.63636 18H7.45455V12.6032C7.45455 12.3506 7.55511 12.1083 7.73413 11.9297C7.91314 11.7511 8.15593 11.6508 8.40909 11.6508H11.5909C11.8441 11.6508 12.0869 11.7511 12.2659 11.9297C12.4449 12.1083 12.5455 12.3506 12.5455 12.6032V18H16.3636C16.5324 18 16.6943 17.9331 16.8136 17.814C16.933 17.695 17 17.5335 17 17.3651V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10L10.4375 1.17234C10.2367 0.943855 9.76696 0.941258 9.56246 1.17234L1 10M15.7857 6.66799V1.69161H13.8571V4.67744"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
