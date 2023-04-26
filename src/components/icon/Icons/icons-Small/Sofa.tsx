import React from 'react';
import { IconProps } from '../../index';

export const Sofa = (props: IconProps) => {
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
        <path d="M5 21C4.71667 21 4.479 20.904 4.287 20.712C4.09567 20.5207 4 20.2833 4 20V19C3.16667 19 2.45833 18.7083 1.875 18.125C1.29167 17.5417 1 16.8333 1 16V11C1 10.1667 1.29167 9.45833 1.875 8.875C2.45833 8.29167 3.16667 8 4 8V6C4 5.16667 4.29167 4.45833 4.875 3.875C5.45833 3.29167 6.16667 3 7 3H17C17.8333 3 18.5417 3.29167 19.125 3.875C19.7083 4.45833 20 5.16667 20 6V8C20.8333 8 21.5417 8.29167 22.125 8.875C22.7083 9.45833 23 10.1667 23 11V16C23 16.8333 22.7083 17.5417 22.125 18.125C21.5417 18.7083 20.8333 19 20 19V20C20 20.2833 19.904 20.5207 19.712 20.712C19.5207 20.904 19.2833 21 19 21C18.7167 21 18.4793 20.904 18.288 20.712C18.096 20.5207 18 20.2833 18 20V19H6V20C6 20.2833 5.90433 20.5207 5.713 20.712C5.521 20.904 5.28333 21 5 21ZM4 17H20C20.2833 17 20.5207 16.904 20.712 16.712C20.904 16.5207 21 16.2833 21 16V11C21 10.7167 20.904 10.479 20.712 10.287C20.5207 10.0957 20.2833 10 20 10C19.7167 10 19.4793 10.0957 19.288 10.287C19.096 10.479 19 10.7167 19 11V15H5V11C5 10.7167 4.90433 10.479 4.713 10.287C4.521 10.0957 4.28333 10 4 10C3.71667 10 3.47933 10.0957 3.288 10.287C3.096 10.479 3 10.7167 3 11V16C3 16.2833 3.096 16.5207 3.288 16.712C3.47933 16.904 3.71667 17 4 17ZM7 13H17V11C17 10.55 17.0917 10.1417 17.275 9.775C17.4583 9.40833 17.7 9.08333 18 8.8V6C18 5.71667 17.904 5.479 17.712 5.287C17.5207 5.09567 17.2833 5 17 5H7C6.71667 5 6.479 5.09567 6.287 5.287C6.09567 5.479 6 5.71667 6 6V8.8C6.3 9.08333 6.54167 9.40833 6.725 9.775C6.90833 10.1417 7 10.55 7 11V13Z" 
        fill={color}
        />
    </svg>
  );
};