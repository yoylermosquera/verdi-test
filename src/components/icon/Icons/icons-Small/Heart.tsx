import React from 'react';
import { IconProps } from '../../index';

export const Heart = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13.9264 1C16.1529 1 17.9765 2.80221 17.9995 4.99748C18.0221 7.1717 17.2172 9.21406 15.4144 11.2802L15.4138 11.2809C13.9283 12.9866 11.9926 14.2198 10.1889 15.3689C9.95668 15.5168 9.72661 15.6634 9.49997 15.8094C9.27302 15.6632 9.04263 15.5164 8.81005 15.3683C7.0066 14.2194 5.07119 12.9864 3.58594 11.282L3.58583 11.2819C1.78482 9.21581 0.979522 7.17182 1.0004 4.99838C1.02365 2.80181 2.84734 1 5.07355 1C6.86053 1 8.06904 2.00279 8.74125 2.78572L9.49997 3.66941L10.2587 2.78572C10.9309 2.00279 12.1394 1 13.9264 1Z" 
        stroke={color} strokeWidth="2"/>
    </svg>
  );
};