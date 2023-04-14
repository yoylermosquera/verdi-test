import React from 'react';
import { IconProps } from '../../index';

export const Curtain = (props: IconProps) => {
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
        <path d="M4.01044 3H9.75434V20.5293C9.75434 20.7001 9.19682 20.8917 9.09116 20.9268C8.64286 21.0751 8.07903 21.1571 7.63231 20.9682C7.09175 20.7387 6.78421 20.1413 6.26376 19.8653C5.8332 19.6378 5.32064 19.676 4.87786 19.8471C4.661 19.9311 4.01044 20.2332 4.01044 20.5412V3Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.00629 7.13174V10.9098" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.58972 16.769V20.9682" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.17041 4.68573H8.70358" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.889 3H14.1451V20.5293C14.1451 20.7001 14.703 20.8917 14.8083 20.9268C15.2566 21.0751 15.8204 21.1571 16.2671 20.9682C16.81 20.7387 17.116 20.1401 17.6368 19.8669C18.0674 19.6393 18.58 19.6776 19.0228 19.8487C19.24 19.9327 19.8902 20.2348 19.8902 20.5427L19.889 3Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.8936 7.13174V10.9098" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.3101 16.769V20.9682" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.7295 4.68573H15.1963" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.75476 4.68573H14.1451" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.01085 4.68573H3.18127" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.7189 4.68573H19.889" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.41479 4.68573H2" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 4.68573H21.5852" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};
