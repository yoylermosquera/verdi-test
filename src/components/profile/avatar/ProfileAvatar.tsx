import Image from 'next/image';
import React from 'react';

import DefaultAvatar from '@/assets/images/Photoprofile.png';
import test from '@/assets/images/examples/productSample.png';
import Icon from '@/components/icon';

interface ProfileAvatarProps {
  showEditIcon?: boolean;
  avatarUrl?: string;
}

function ProfileAvatar({ showEditIcon = false }: ProfileAvatarProps) {
  return (
    <div className={'w-36 h-[9.5rem] relative'}>
      <div className="w-full h-full rounded-full overflow-hidden ">
        <Image
          loading="lazy"
          className="w-full h-full object-cover"
          src={DefaultAvatar}
          alt={'avatar'}
        />
      </div>
      {showEditIcon && (
        <div className="z-10 absolute bottom-0 -right-3 rou-full">
          <Icon iconName="Camera" size={40} color="black" />
        </div>
      )}
    </div>
  );
}

export default ProfileAvatar;
