import React from 'react';
import { IconProps } from '../../index';

export const Carpet = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        
        
        <path d="M11.2069 21.4902L21.8031 12.3615C22.4005 11.8468 22.3652 10.8265 21.7243 10.0825L15.5604 2.92763C14.9194 2.18364 13.9155 1.99773 13.3182 2.51239L2.72186 11.6411C2.12446 12.1557 2.15977 13.1761 2.80071 13.9201L8.96464 21.0749C9.60558 21.8189 10.6095 22.0048 11.2069 21.4902Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
        <path d="M11.39 17.5467L17.581 12.2132C18.1062 11.7607 18.1297 10.9268 17.6334 10.3507L14.6897 6.93383C14.1934 6.35771 13.3653 6.2575 12.84 6.71L6.64901 12.0435C6.12376 12.496 6.10032 13.3299 6.59664 13.906L9.54027 17.3229C10.0366 17.899 10.8648 17.9992 11.39 17.5467Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
        <path d="M21.4046 9.71143L22.6025 8.67944" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.065 8.1565L21.2629 7.12451" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.7254 6.60156L19.9233 5.56958" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.3858 5.04663L18.5837 4.01465" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0495 3.49542L17.2474 2.46344" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.44998 21.7333L8.6449 20.7039" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.11045 20.1783L7.30536 19.1489" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.77085 18.6234L5.96576 17.594" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.43131 17.0685L4.62622 16.0391" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.09494 15.5173L3.28986 14.4879" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>


    </svg>
  );
};
