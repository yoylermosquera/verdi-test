import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../../icon';
import FolderTypeContainer from '../folderTypeContainer';

interface FolderPageProps {
// description: string;
 }


function FolderPage({
// description,
}: FolderPageProps
) {
  const matches = useMediaQuery('(min-width: 768px)');
  
  return (
    <section className=' w-full h-full pt-4 px-4 border'>
        <section className=' grid gap-6 grid-cols-2 grid-rows-4'>
            <FolderTypeContainer description='NUEVA CARPETA' />

        </section>
    </section>
    // <article
    //   className={`h-56 lg:h-[20.75rem] lg:max-h-[500px] w-full flex flex-col`}
    // >
    //   <section className="h-3/5 lg:h-4/5 relative">
    //     <Image
    //       className="w-full h-full object-fill"
    //       src={img}
    //       alt={title}
    //     />
    //     <div className="bg-blend-multiply bg-black30 w-6 h-6 absolute bottom-1 right-1  flex justify-center items-center ">
    //       <Icon iconName="Heart" color="white" size={iconSize} />
    //     </div>
    //   </section>
    //   <section className=" h-2/5 lg:h-1/5 pt-5">
    //     <h2 className="text-input font-normal mb-4">{title}</h2>
    //     <p className="text-input">{description}</p>
    //   </section>
    // </article>
  );
}

export default FolderPage;
