import React from 'react';
import { IconProps } from '../../index';

export function TowelLarge(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M29.3072 10.2245L31.6347 13.2943C33.5338 13.4525 34.4502 14.5757 33.7834 16.1567C33.4741 16.8905 32.941 17.2463 32.0229 17.2308C31.5397 17.221 31.3448 17.3709 31.1773 17.7644C30.2689 19.8777 28.8934 20.6843 26.3098 20.6843H23.8019C23.7858 20.9644 23.7601 21.2123 23.7601 21.4573C23.7601 23.2779 23.7601 25.0984 23.7601 26.919C23.7601 28.0183 23.76 28.0183 22.4827 28.0547C22.378 28.0547 22.275 28.0743 22.1187 28.0897C22.0833 28.388 22.0479 28.6779 22.0092 29H20.9945C20.9623 28.7101 20.9284 28.4202 20.8913 28.0925H19.8573C19.8267 28.3726 19.7929 28.6527 19.7558 28.9902H18.704C18.6847 28.6989 18.6653 28.43 18.6444 28.1037H17.5845L17.5122 28.9804H16.4699C16.4377 28.7003 16.404 28.4202 16.3653 28.0897H15.3458L15.2459 28.9944H14.215L14.12 28.1009H13.0666L12.9829 28.9818H11.9424C11.9198 28.7101 11.8972 28.437 11.8699 28.1093H10.8133L10.6941 28.9972H9.69383L9.60197 28.1135H8.547L8.42289 28.9944H7.42753L7.34542 28.1107H6.27755L6.14227 28.9944H5.15808L5.09201 28.1737C5.02275 28.1317 4.98088 28.0869 4.93094 28.0827C3.38467 27.9525 3.38474 27.9539 3.38474 26.5885V17.2323C1.53243 17.4115 -0.068604 17.1958 0.00226683 15.1316C0.0248166 14.4314 0.292174 13.7172 1.11041 13.4735C1.79174 13.2705 2.56968 13.3125 3.34604 13.2424V7.4545C2.39251 7.24444 1.22157 7.73459 0.566012 6.86072C0.229497 6.39145 0.0410635 5.85335 0.0198839 5.30065C-0.00266594 4.55422 0.327609 3.77839 1.23121 3.57533C1.9818 3.40728 2.82416 3.54172 3.57475 3.54172C3.91461 2.93114 4.16105 2.38498 4.50735 1.89343C5.38196 0.651254 6.62533 -0.00694682 8.36328 5.52914e-05C14.376 0.0252629 20.3888 0.00985927 26.4031 0.00985927C28.8192 0.00985927 30.2592 0.850111 31.1161 2.82611C31.3207 3.29945 31.5446 3.53612 32.1824 3.50671C33.0748 3.4675 33.5821 3.91704 33.8608 4.82311C34.2973 6.24314 33.4887 7.25704 31.8329 7.40409C31.638 7.42089 31.3497 7.55673 31.2966 7.69257C30.8762 8.75409 30.1915 9.64336 29.3072 10.2245ZM4.50247 22.6449H22.6744V21.785C22.6744 16.3243 22.6744 10.8627 22.6744 5.40008C22.6744 3.85962 23.1383 2.4592 24.2851 1.25344C24.3434 1.16948 24.3909 1.08026 24.4269 0.987351C18.8522 0.987351 13.3534 0.987351 7.85443 0.987351C6.98626 0.987351 6.33071 1.40748 5.80723 1.96765C4.85209 2.99136 4.51859 4.19852 4.50892 5.48971C4.50248 9.33994 4.50248 13.1897 4.50892 17.039L4.50247 22.6449ZM30.1126 17.3079C29.2718 17.2351 28.4342 17.2841 27.6965 17.067C26.8413 16.8149 26.5901 16.0517 26.64 15.3319C26.6638 14.8024 26.8482 14.2879 27.1746 13.8404C27.9059 12.933 29.1189 13.4735 30.095 13.2705C29.8502 12.1081 28.7404 11.0298 27.5179 10.8729C26.1923 10.6979 25.3193 11.3589 24.6991 12.265C23.5217 13.9847 23.4798 15.8052 24.3045 17.6398C24.8892 18.9394 26.1246 19.823 27.2376 19.718C28.7935 19.578 29.581 18.6215 30.1142 17.4577C30.125 17.4083 30.1266 17.3577 30.119 17.3079H30.1126ZM30.198 7.38168C28.386 7.47971 26.6029 7.53573 26.6222 5.40008C26.6399 3.29105 28.4278 3.41428 30.3124 3.50531C29.9371 2.92973 29.7131 2.4872 29.3894 2.10489C28.133 0.640044 26.3291 0.613435 25.0019 2.01666C23.2769 3.83721 23.3703 7.31166 25.1904 9.01877C26.094 9.86883 27.2553 10.0971 28.299 9.58595C29.2574 9.12941 29.8179 8.39279 30.2045 7.38168H30.198ZM4.5396 27.0758H22.6244V25.653H4.5396V27.0758ZM4.56854 23.663V24.5999H22.6084V23.6574L4.56854 23.663ZM30.6523 4.43519C29.9339 4.43519 29.1882 4.39598 28.4505 4.4464C27.7675 4.49401 27.7271 5.02197 27.7319 5.4505C27.7368 5.87903 27.8173 6.39018 28.4954 6.43079C29.2299 6.4714 29.9709 6.43919 30.6523 6.43919V4.43519ZM30.6523 16.2534V14.2928C29.9548 14.2928 29.2026 14.2648 28.4665 14.3012C27.7675 14.3348 27.7288 14.8613 27.7337 15.2815C27.7385 15.7016 27.769 16.2211 28.481 16.2464C29.2267 16.2744 29.9709 16.2534 30.6554 16.2534H30.6523ZM3.32355 16.2127V14.332C1.39071 14.2297 1.13139 14.1919 1.1491 15.3123C1.16682 16.3458 1.3552 16.322 3.32669 16.2127H3.32355ZM3.38788 4.27554C2.64052 4.44919 1.86734 4.48421 1.33581 4.81471C1.08938 4.96735 1.112 5.94905 1.37293 6.1087C1.8803 6.41819 2.64213 6.41259 3.38788 6.55403V4.27554ZM33.057 15.2731L32.2516 14.3124C32.0729 14.6219 31.8909 14.9314 31.7137 15.2422C31.7081 15.253 31.7052 15.2647 31.7052 15.2766C31.7052 15.2884 31.7081 15.3001 31.7137 15.3109C31.893 15.6208 32.0733 15.9299 32.2548 16.238L33.057 15.2731ZM32.2774 6.43219C32.867 5.91824 33.0151 5.27125 32.6623 4.7727C32.5738 4.64666 32.3934 4.49261 32.2597 4.49261C32.126 4.49261 31.952 4.65926 31.865 4.7867C31.5252 5.29225 31.6928 5.96165 32.2774 6.43219Z" 
        fill={color}
        />

    </svg>
  );
}