import React from 'react';
import { IconProps } from '../../index';

export function BasketLarge(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 20 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

        <path d="M1.78773 15.8477C1.49899 16.0524 1.23468 16.2896 1 16.5545C1 16.5545 2.65645 19.1809 10.4859 19.1809C18.3153 19.1809 19.3552 16.1146 19.3552 16.1146C19.3552 16.1146 17.0177 13.6281 10.1766 13.6281C8.57797 13.6102 6.98372 13.7995 5.4337 14.1913" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 16.549V28.0612C1 28.0612 3.40549 31.641 10.1766 31.641C16.9478 31.641 19.3552 27.3103 19.3552 27.3103V16.1146" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.01245 17C2.01245 17 0.477635 1 9.66187 1C18.8461 1 16.5125 14.5 16.5125 14.5" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0125 1.12996C22.26 -0.571709 18.453 15 18.453 15" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.01251 18.5C5.01251 18.5 4.33536 10.3386 6.82502 5.43267C8.3173 2.48995 11.0125 1 11.0125 1" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 25.282C1 25.282 2.08034 26.2023 5.98401 27.1354" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 20.0606C1 20.0606 2.08034 20.9808 5.98401 21.914" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 22.7956C3.24278 24.1819 5.82119 24.9302 8.45766 24.96" stroke={color} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>

    </svg>
  );
}
