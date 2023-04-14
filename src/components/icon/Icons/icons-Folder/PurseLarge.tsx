import React from 'react';
import { IconProps } from '../../index';

export function PurseLarge(props: IconProps) {
  const { size, color, ...restSVGProps } = props;

  return (
    <svg
      {...restSVGProps}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

        <path d="M29.8648 11.8654C28.2846 11.8406 26.7045 11.8571 25.1244 11.8571H21.9764V10.885C21.9764 10.0365 21.9922 9.45533 21.9764 5.9042C21.9606 3.3665 20.47 1.29666 18.084 0.448558C17.6258 0.283235 17.143 0.17577 16.6795 0.0402058C16.1801 -0.00722946 15.8639 -0.0192434 15.0993 0.0402058C11.1648 0.828795 9.58286 3.53844 9.71278 6.95896C9.84622 10.4985 9.76897 11.0748 9.75668 11.9166H8.10106C7.86229 11.8026 7.4901 11.872 7.20392 11.8703C5.42012 11.8555 3.63457 11.8472 1.85078 11.8703C0.621782 11.8885 -0.133203 12.7465 0.0195437 13.8988C0.662132 18.756 1.32579 23.6116 1.95082 28.472C2.12639 29.8475 2.41436 31.0924 4.04541 31.5636H27.7474C28.8728 31.1552 29.5382 30.4394 29.6874 29.2639C30.3423 24.1389 31.0323 19.0139 31.7135 13.8889C31.8487 12.7333 31.1061 11.8852 29.8648 11.8654ZM10.9155 5.33218C10.9664 3.01767 13.4103 1.05198 15.8981 1.10157C18.4931 1.15117 20.7913 3.08545 20.8387 5.48262C20.9195 9.45037 20.8615 10.4498 20.8615 11.7844H10.8909C10.8891 10.4035 10.8242 9.34952 10.9155 5.33218ZM1.18184 13.6046C1.20642 13.3516 1.66288 12.9532 1.94203 12.9433C3.24652 12.8722 4.55804 12.9119 5.93978 12.9119V15.2842H1.37494C1.29594 14.7304 1.12566 14.1551 1.18008 13.6013L1.18184 13.6046ZM5.95032 30.4873C5.4043 30.4873 4.9373 30.522 4.47906 30.4873C3.79258 30.4228 3.31852 30.0542 3.23074 29.4028C2.66423 25.1772 2.10943 20.9499 1.56633 16.7209C1.57441 16.6277 1.59568 16.536 1.62955 16.4481H5.95032V30.4873ZM7.22321 30.4592V13.2177C7.38298 13.102 7.55329 12.9995 7.7113 12.9069H9.74442V13.4326C9.74442 13.9286 9.66365 14.2708 9.16854 14.5899C8.32932 15.1355 8.28192 16.2944 8.95787 17.0003C9.12103 17.1677 9.3178 17.303 9.53683 17.3984C9.75586 17.4937 9.99279 17.5473 10.2339 17.5559C10.4751 17.5645 10.7156 17.528 10.9417 17.4485C11.1678 17.3691 11.3749 17.2482 11.551 17.0929C12.2937 16.4118 12.3551 15.2743 11.5141 14.6891C10.8119 14.1931 10.8224 13.6525 10.926 12.9631H20.8018C20.9195 14.0228 20.9195 14.0228 20.2277 14.6163C20.0487 14.7688 19.9039 14.9535 19.8019 15.1595C19.6999 15.3656 19.6428 15.5888 19.6339 15.8159C19.6251 16.0431 19.6647 16.2696 19.7504 16.4821C19.8361 16.6946 19.9662 16.8888 20.1329 17.0532C20.3104 17.2171 20.5214 17.3455 20.753 17.4304C20.9847 17.5154 21.2323 17.5552 21.4808 17.5474C21.7293 17.5397 21.9735 17.4846 22.1987 17.3854C22.4239 17.2863 22.6254 17.1451 22.791 16.9705C23.4459 16.258 23.3757 15.0776 22.5294 14.5601C21.7622 14.0906 21.9747 13.5401 22.0818 12.9449H24.5643V26.8486C24.5643 27.0949 24.5116 27.371 24.6082 27.5826C24.6105 27.5879 24.6134 27.5929 24.617 27.5975V30.0029L24.2343 30.4526L7.22321 30.4592ZM30.1598 16.9524C29.8625 19.2173 29.5628 21.4827 29.2608 23.7488C29.0361 25.44 28.7973 27.1296 28.5884 28.8242C28.4269 30.1468 28.0248 30.5055 26.6325 30.5055C26.3499 30.5055 26.0672 30.4774 25.7845 30.4625C25.8284 30.4096 25.8723 30.3551 25.9144 30.2972L25.6704 29.9864V27.5247C25.7125 27.3016 25.722 27.0741 25.6985 26.8486C25.6985 23.681 25.6985 20.5134 25.6985 17.3458C25.6985 17.0515 25.7248 16.7589 25.7389 16.468H30.158C30.167 16.6282 30.167 16.7888 30.158 16.9491L30.1598 16.9524ZM30.5495 13.7219C30.4881 14.2378 30.4231 14.7536 30.3529 15.3256H25.788V12.9036C27.154 12.9036 28.4901 12.8937 29.8262 12.9036C30.3564 12.9152 30.6057 13.2177 30.5478 13.7137L30.5495 13.7219Z" 
        fill={color}
        />
        <path d="M18.5546 15.5516H13.7826C13.6429 15.5516 13.5089 15.6039 13.4101 15.6969C13.3113 15.7899 13.2559 15.9161 13.2559 16.0476C13.2559 16.1791 13.3113 16.3053 13.4101 16.3983C13.5089 16.4913 13.6429 16.5436 13.7826 16.5436H18.5546C18.6943 16.5436 18.8282 16.4913 18.927 16.3983C19.0258 16.3053 19.0813 16.1791 19.0813 16.0476C19.0813 15.9161 19.0258 15.7899 18.927 15.6969C18.8282 15.6039 18.6943 15.5516 18.5546 15.5516Z" 
        fill={color}
        />

    </svg>
  );
}