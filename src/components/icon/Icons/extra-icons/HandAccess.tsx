import React from 'react';
import { IconProps } from '../../index';

export function HandAccess(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12.4545V5.82297C1 5.50318 1.15804 5.1965 1.43934 4.97038C1.72064 4.74426 2.10218 4.61723 2.5 4.61723C2.89782 4.61723 3.27936 4.74426 3.56066 4.97038C3.84196 5.1965 4 5.50318 4 5.82297V9.10287V3.41148C4 3.0917 4.15804 2.78502 4.43934 2.5589C4.72064 2.33277 5.10218 2.20574 5.5 2.20574C5.89782 2.20574 6.27936 2.33277 6.56066 2.5589C6.84196 2.78502 7 3.0917 7 3.41148V8.5V2.20574C7 1.88596 7.15804 1.57927 7.43934 1.35315C7.72064 1.12703 8.10218 1 8.5 1C8.89782 1 9.27935 1.12703 9.56066 1.35315C9.84196 1.57927 10 1.88596 10 2.20574V8.5M10 8.53768V4.01435C10 3.69457 10.158 3.38789 10.4393 3.16177C10.7206 2.93565 11.1022 2.80861 11.5 2.80861C11.8978 2.80861 12.2794 2.93565 12.5607 3.16177C12.842 3.38789 13 3.69457 13 4.01435V11.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 12.3152C1 16.7743 3.90876 19 7.90831 19C11.9079 19 13.5308 17.4959 14.453 15.6576L16.8487 10.1883C17.1513 9.5027 17.0141 8.86689 16.3092 8.53227C15.6038 8.19727 14.6771 8.36971 14.2953 8.97589L12.5 13.0001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
