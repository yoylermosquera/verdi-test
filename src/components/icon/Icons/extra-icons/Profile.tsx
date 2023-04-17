import React from 'react';
import { IconProps } from '../../index';

export function Profile(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4884 4.51208L11.4884 4.51215C11.3274 6.79186 9.68713 8.49995 8 8.49995C6.31251 8.49995 4.6697 6.79107 4.51121 4.5119C4.43335 3.38634 4.76571 2.37003 5.4201 1.63297C6.06662 0.904925 6.97747 0.5 8 0.5C9.01419 0.5 9.92218 0.906131 10.5735 1.64072C11.2341 2.38584 11.5671 3.40042 11.4884 4.51208ZM14.7757 17.4999V17.4999H14.769H1.23096V17.4998L1.22416 17.4999C1.12484 17.5013 1.02574 17.4796 0.933797 17.4354C0.84176 17.3912 0.758392 17.3251 0.690802 17.2406L0.690497 17.2402C0.538976 17.051 0.464008 16.7731 0.516741 16.4684L0.516784 16.4681C0.818239 14.7212 1.75514 13.257 3.23981 12.2227C4.56473 11.3004 6.25535 10.7857 8 10.7857C9.74458 10.7857 11.4352 11.3007 12.7603 12.2227C14.2449 13.2567 15.1818 14.7207 15.4832 16.4677L15.4833 16.468C15.536 16.7727 15.461 17.0506 15.3095 17.2398L15.3091 17.2403C15.2415 17.3249 15.1581 17.391 15.0661 17.4353C14.9741 17.4795 14.875 17.5013 14.7757 17.4999Z"
        stroke={color}
      />
    </svg>
  );
}
