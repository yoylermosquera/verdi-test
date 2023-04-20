import React from 'react';
import { IconProps } from '../../index';

export const CurtainLarge = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="1" y="1" width={size} height={size} stroke={color} strokeLinejoin="round"/>
        <path d="M1 7.00735H4.90478V29.3847C4.90478 30.463 4.03066 31.3371 2.95239 31.3371V31.3371C1.87411 31.3371 1 30.463 1 29.3847V7.00735Z" stroke={color} strokeLinejoin="round"/>
        <path d="M19.9232 7.00735H23.828V29.3847C23.828 30.463 22.9539 31.3371 21.8756 31.3371V31.3371C20.7973 31.3371 19.9232 30.463 19.9232 29.3847V7.00735Z" stroke={color} strokeLinejoin="round"/>
        <path d="M4.90454 7.00735H8.80932V29.3847C8.80932 30.463 7.93521 31.3371 6.85693 31.3371V31.3371C5.77866 31.3371 4.90454 30.463 4.90454 29.3847V7.00735Z" stroke={color} strokeLinejoin="round"/>
        <path d="M23.828 7.00735H27.7328V29.3847C27.7328 30.463 26.8587 31.3371 25.7804 31.3371V31.3371C24.7021 31.3371 23.828 30.463 23.828 29.3847V7.00735Z" stroke={color} strokeLinejoin="round"/>
        <path d="M8.80945 7.00735H12.7142V29.3847C12.7142 30.463 11.8401 31.3371 10.7618 31.3371V31.3371C9.68356 31.3371 8.80945 30.463 8.80945 29.3847V7.00735Z" stroke={color} strokeLinejoin="round"/>
        <path d="M27.7327 7.00735H31.6374V29.3847C31.6374 30.463 30.7633 31.3371 29.6851 31.3371V31.3371C28.6068 31.3371 27.7327 30.463 27.7327 29.3847V7.00735Z" stroke={color} strokeLinejoin="round"/>
    </svg>
  );
};