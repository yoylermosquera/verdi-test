import React from 'react';
import { IconProps } from '../../index';

export const HeartFilled = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14.6593 1C17.0316 1 18.975 2.91997 18.9995 5.25996C19.0234 7.56391 18.1698 9.72586 16.2653 11.9085L16.2647 11.9092C14.6957 13.7108 12.651 15.0134 10.7528 16.2226C10.4987 16.3845 10.2473 16.5446 9.99996 16.7041C9.75233 16.5444 9.50057 16.3841 9.24618 16.222C7.34818 15.0129 5.30382 13.7106 3.735 11.9103L3.73489 11.9102C1.83235 9.72771 0.978326 7.56411 1.00042 5.26105C1.02512 2.91964 2.96861 1 5.34058 1C7.2432 1 8.52861 2.06803 9.24125 2.89805L9.99996 3.78174L10.7587 2.89805C11.4713 2.06803 12.7567 1 14.6593 1Z" 
        fill={color} 
        stroke={color} 
        strokeWidth="2"
        />
    </svg>
  );
};
