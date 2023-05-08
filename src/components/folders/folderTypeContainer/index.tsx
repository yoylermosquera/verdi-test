import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../../icon';
import * as IconsObject from '../../icon/Icons';
export type IconName = keyof typeof IconsObject;
import folderTypeBackground from '@/assets/images/folderTypeBackground.png';

interface FolderTypeContainerProps {
description: string;
folderIconName: IconName;
className?: string;
 }


function FolderTypeContainer({
description,
folderIconName,
className,
}: FolderTypeContainerProps
) {
const matches = useMediaQuery('(min-width: 768px)');
const iconSize = matches ? 50 : 70;
  return (
    <section className={`w-[9.625rem] h-[16.5rem] flex flex-col items-center bg-gold lg:w-full lg:h-[12.75rem] ${className}`} >
        {/* <Image src={folderTypeBackground} alt='folder_type_background' className='w-full h-full hidden lg:flex' width={100} height={100}/> */}
            <section className='h-[6.5rem] my-auto'>
                <section className='flex flex-row justify-center  '>
                    <Icon size={iconSize} color='black' iconName={folderIconName}/> 
                </section>
                <h3 className='text-input mt-5 w-full h-8 flex flex-row  justify-center text-center' >{description}</h3>
            </section>
    </section>
  );
}

export default FolderTypeContainer;
