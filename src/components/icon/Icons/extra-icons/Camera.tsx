import React from 'react';
import { IconProps } from '../../index';

export function Camera(props: IconProps) {
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
        <path d="M24.4316 14.9694L23.1838 12.9978C22.9208 12.6913 22.5603 12.5 22.1562 12.5H17.8438C17.4397 12.5 17.0792 12.6913 16.8163 12.9978L15.5684 14.9694C15.3055 15.2764 14.9666 15.5 14.5625 15.5H11.75C11.3522 15.5 10.9706 15.658 10.6893 15.9393C10.408 16.2206 10.25 16.6022 10.25 17V26C10.25 26.3978 10.408 26.7794 10.6893 27.0607C10.9706 27.342 11.3522 27.5 11.75 27.5H28.25C28.6478 27.5 29.0294 27.342 29.3107 27.0607C29.592 26.7794 29.75 26.3978 29.75 26V17C29.75 16.6022 29.592 16.2206 29.3107 15.9393C29.0294 15.658 28.6478 15.5 28.25 15.5H25.4844C25.0789 15.5 24.6945 15.2764 24.4316 14.9694Z" 
        stroke="white" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
        <path d="M20 24.5C22.0711 24.5 23.75 22.8211 23.75 20.75C23.75 18.6789 22.0711 17 20 17C17.9289 17 16.25 18.6789 16.25 20.75C16.25 22.8211 17.9289 24.5 20 24.5Z" 
        stroke="white" 
        stroke-miterlimit="10"/>
        <path d="M13.8125 15.4062V14.375H12.6875V15.4062" 
        stroke="white" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
    </svg>
  );
}
