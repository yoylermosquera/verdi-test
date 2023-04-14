import React from 'react';
import { IconProps } from '../../index';

export const Small12 = (props: IconProps) => {
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
        
        <path d="M8.2487 22C10.5952 22 12.4974 20.2988 12.4974 18.2002C12.4974 16.1016 10.5952 14.4004 8.2487 14.4004C5.90221 14.4004 4 16.1016 4 18.2002C4 20.2988 5.90221 22 8.2487 22Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M8.24873 19.5461C9.07993 19.5461 9.75375 18.9435 9.75375 18.2002C9.75375 17.4569 9.07993 16.8542 8.24873 16.8542C7.41753 16.8542 6.74371 17.4569 6.74371 18.2002C6.74371 18.9435 7.41753 19.5461 8.24873 19.5461Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M4 18.2002V5.79979C4 3.69998 5.89972 2 8.2487 2C10.5977 2 12.4942 3.69998 12.4942 5.79979V18.2002" stroke={color} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M12.4941 5.06426H19.2844C19.3754 5.06141 19.4662 5.07565 19.5514 5.10617C19.6367 5.1367 19.7147 5.1829 19.7812 5.24214C19.8476 5.30138 19.9012 5.3725 19.9387 5.45143C19.9762 5.53036 19.9971 5.61555 20 5.70214V20.007C19.9924 20.2259 19.8939 20.433 19.7261 20.5829C19.5583 20.7328 19.3348 20.8133 19.1047 20.8067H11.3357" stroke={color} stroke-width="1.5" stroke-miterlimit="10"/>
        <path d="M15.6711 5.06424V20.8067" stroke={color} stroke-width="1.5" stroke-miterlimit="10"/>

    </svg>
  );
};
