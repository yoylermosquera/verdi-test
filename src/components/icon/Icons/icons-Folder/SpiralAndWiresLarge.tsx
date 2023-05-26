import React from 'react';
import { IconProps } from '../../index';

export const SpiralAndWiresLarge = (props: IconProps) => {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 37 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path xmlns="http://www.w3.org/2000/svg" d="M26.2591 19.5956C21.64 24.596 13.9027 23.9407 10.0039 19.4263V31.6437C10.5085 31.6437 10.9721 31.5733 11.4012 31.6701C11.6859 31.7338 11.9187 32.0351 12.1754 32.2308C11.9252 32.4815 11.6858 32.9323 11.4249 32.9454C10.0601 33.0182 8.6925 33.0182 7.32768 32.9454C7.0495 32.9323 6.79505 32.5057 6.52981 32.2638C6.81877 32.0593 7.08402 31.7624 7.40318 31.6701C7.7633 31.5667 8.173 31.6459 8.61939 31.6459V19.4813C6.81444 21.5615 4.60841 22.6412 2.04871 22.9996C1.76324 23.0462 1.47512 23.0741 1.18614 23.0831C0.666436 23.0831 -0.045188 23.2503 0.00225375 22.4235C0.0173488 22.1772 0.694499 21.8935 1.10854 21.7638C2.53179 21.324 4.06499 21.1173 5.38904 20.4686C7.28455 19.5406 8.50944 17.9442 8.70352 15.6727C8.72939 15.3648 9.11106 15.0899 9.32886 14.7931C9.54451 14.9932 9.92623 15.1757 9.95211 15.4C10.4157 19.3581 13.0897 20.9414 16.4882 21.6142C18.7331 22.078 21.0668 21.6802 23.0417 20.4972C24.8725 19.4175 26.1081 17.8914 26.3518 15.6595C26.3841 15.356 26.7572 15.0877 26.9707 14.8041C27.1864 15.0504 27.6177 15.2945 27.6177 15.5407C27.6586 19.1734 31.5963 21.5065 34.8827 21.7506C35.0617 21.7638 35.2795 21.6868 35.4132 21.7682C35.7589 21.9968 36.0929 22.2434 36.4138 22.507C36.0774 22.7027 35.7345 23.0743 35.4045 23.0634C32.4481 22.9644 29.8841 21.9089 27.7535 19.5252V31.6591C28.1848 31.6591 28.6463 31.5821 29.0733 31.6854C29.3493 31.7536 29.5627 32.0857 29.8064 32.299C29.6016 32.5189 29.4054 32.9213 29.194 32.9301C27.7233 32.9872 26.2483 32.9872 24.7797 32.9301C24.5641 32.9301 24.3765 32.5232 24.1738 32.3056C24.4067 32.0857 24.6051 31.7536 24.8768 31.681C25.2801 31.5755 25.7286 31.6547 26.2526 31.6547L26.2591 19.5956Z" 
        fill={color}
        />
        <path xmlns="http://www.w3.org/2000/svg" d="M17.2766 0.00631211C18.1087 0.0436627 18.928 0.227448 19.6984 0.549509C23.7242 2.21604 24.7856 7.48939 21.7401 10.5291C19.188 13.0756 14.8868 12.3934 13.3768 9.20155C12.136 6.57682 13.5391 3.45018 16.2579 2.79182C18.6968 2.20083 21.0012 4.15416 20.8026 6.64418C20.6296 8.81696 18.2611 10.0967 16.5633 8.94081C15.5061 8.22379 15.2583 6.83756 16.0229 5.90978C16.1931 5.68191 16.4265 5.51123 16.693 5.41981C16.9596 5.32839 17.2469 5.32045 17.5179 5.397C17.6701 5.42874 17.8057 5.51565 17.8996 5.64155C17.9935 5.76746 18.0393 5.92378 18.0283 6.08142C18.0194 6.24695 17.9524 6.40374 17.8395 6.52333C17.7267 6.64292 17.5754 6.7174 17.4132 6.73326C17.2509 6.76151 16.9861 6.84842 16.9691 6.95054C16.922 7.16469 16.9564 7.38901 17.0652 7.57847C17.4432 8.15209 18.3145 8.18251 18.8805 7.67408C19.2169 7.35936 19.4309 6.93207 19.4834 6.47018C19.536 6.00828 19.4235 5.54256 19.1666 5.15799C18.2632 3.73916 16.1318 3.68484 15.0192 5.0537C13.4409 6.99182 14.4126 9.84469 16.905 10.5834C19.1389 11.2483 21.4753 9.77299 22.0455 7.33947C22.6478 4.76254 21.0247 2.17041 18.3829 1.49467C15.3246 0.710293 12.2321 2.82224 11.6704 6.07491C11.0938 9.421 13.2402 12.5824 16.5825 13.3146C20.2772 14.1207 23.9804 11.5938 24.7194 7.75664C24.7856 7.409 24.8155 7.05483 24.8647 6.70501C24.9287 6.2509 25.1807 6.02493 25.5865 6.05318C25.9923 6.08142 26.1994 6.36389 26.1695 6.82886C26.0543 8.97818 25.1323 11.0004 23.5939 12.4781C22.096 13.9664 20.0841 14.7976 17.9904 14.7931C15.8967 14.7886 13.8883 13.9489 12.3965 12.4542C8.68046 8.72353 9.95758 2.24211 14.7864 0.403929C15.5819 0.103349 16.4287 -0.0318536 17.2766 0.00631211Z" 
        fill={color}
        />
    </svg>
  );
};