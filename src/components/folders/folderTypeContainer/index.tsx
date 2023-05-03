import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../../icon';

interface FolderTypeContainerProps {
description: string;
 }


function FolderTypeContainer({
description,
}: FolderTypeContainerProps
) {
  
  return (
    <section className=' w-[9.625rem] h-[16.5rem] flex flex-row justify-center bg-gold lg:w-full lg:h-[12.75rem]' >
        
        <section className=' w-[5.75rem] h-full flex flex.col items-center justify-between '>
            <section className='h-[6.5rem] w-full mt-8 flex flex-col justify-center'>
                <section className='flex flex-row justify-center  '>
                    <Icon size={55} color='black' iconName= 'ClothLarge' /> 
                </section>
                <h3 className=' text-input mt-5 w-full h-8 flex flex-row  justify-center text-center' >{description}</h3>
            </section>
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

export default FolderTypeContainer;
