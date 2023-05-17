import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';
import Icon, { IconName } from '../../icon';

interface FolderTypeContainerProps {
  description: string;
  folderIconName: IconName;
  className?: string;
}

function FolderTypeContainer({
  description,
  folderIconName,
  className,
}: FolderTypeContainerProps) {
  const matches = useMediaQuery('(min-width: 768px)');
  const iconSize = matches ? 50 : 70;
  return (
    <section className={`w-full h-[16.5rem] flex flex-col items-center bg-gold  lg:h-[12.75rem] ${className} border lg:bg-folder-bg lg:bg-no-repeat lg:bg-cover `} >
        
            <section className='h-[6.5rem] my-auto'>
            {/* <Image src={folderTypeBackground} alt='folder_type_background' 
            className='w-full h-full hidden lg:flex' 
            layout='fill'
            /> */}
                <section className='flex flex-row justify-center  '>
                    <Icon size={iconSize} color='black' iconName={folderIconName}/> 
                </section>
                <h3 className='text-input mt-5 w-full h-8 flex flex-row  justify-center text-center' >{description}</h3>
            </section>
    </section>
  );
}

export default FolderTypeContainer;
