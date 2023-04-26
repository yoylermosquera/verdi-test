import React from 'react';
import { IconProps } from '../../index';

export function Galery(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="20" cy="20" r="20" fill={color}/>
        <path d="M26.9231 12H13.0769C11.9299 12 11 12.9299 11 14.0769V25.1538C11 26.3009 11.9299 27.2308 13.0769 27.2308H26.9231C28.0701 27.2308 29 26.3009 29 25.1538V14.0769C29 12.9299 28.0701 12 26.9231 12Z" 
        stroke="white" 
        stroke-linejoin="round"/>
        <path d="M23.4618 17.5388C24.2265 17.5388 24.8464 16.9188 24.8464 16.1541C24.8464 15.3894 24.2265 14.7695 23.4618 14.7695C22.6971 14.7695 22.0771 15.3894 22.0771 16.1541C22.0771 16.9188 22.6971 17.5388 23.4618 17.5388Z" 
        stroke="white" 
        stroke-miterlimit="10"/>
        <path d="M22.0769 23.0678L18.1541 19.1524C17.9045 18.9028 17.569 18.758 17.2162 18.7476C16.8634 18.7371 16.5199 18.8618 16.2559 19.0961L11 23.7692M18.6154 27.2307L23.9522 21.8939C24.1963 21.6494 24.523 21.5049 24.8681 21.4889C25.2132 21.4729 25.5519 21.5865 25.8175 21.8074L29 24.4615" 
        stroke="white" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
    </svg>
  );
}
