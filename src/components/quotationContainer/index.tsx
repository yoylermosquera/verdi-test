import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';


interface FolderTypeContainerProps {
description?: string;
dateReceived?: string;
className?: string;
 }

function QuitationContainer({
description,
dateReceived,
className,
}: FolderTypeContainerProps
) {
// const matches = useMediaQuery('(min-width: 768px)');
// const iconSize = matches ? 50 : 70;
  return (
    <section className={`w-[20.5rem] lg:w-[21.75rem] flex flex-col ${className}`} >
       <section className='bg-gold-dark border h-[4.5rem] w-full flex flex-row justify-between px-4'>
            <section className='flex flex-col'>
                <h1 className='text-title'>Tapetes Hotel Neural</h1>
                <span>02/04/21</span>
            </section>
            <section className='flex flex-col'>
                <h1 className='text-title bg-white'>#4256</h1>
                { dateReceived && <span>02/04/21</span>     }
            </section>
       </section>
       <section>

       </section>
    </section>
  );
}

export default QuitationContainer;
