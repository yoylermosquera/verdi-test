import React from 'react';
import Button from '../../button';
import Icon from '@/components/icon';

function FoldersContainer(
) {

  return (
    <section className='w-[22.5rem] h-[21.625rem] flex flex-col justify-between rounded-t-3xl border ' >
        <h1 className='mx-auto text-center mt-6'>Selecciona carpeta</h1>
        <section className='w-full h-full flex flex-col gap-4 px-[1.875rem] pt-[1.875rem]'>
            <section className='flex flex-row '>
                <section className='w-[4.5rem] h-[4.5rem] bg-gold flex flex-col justify-center'>
                    <Icon iconName='DottedCookieLarge' color='black' size={32} className='mx-auto' />
                </section>
                <h1 className='text-title my-auto ml-6'>TODOS FAVORITOS</h1>
            </section>
        </section>
        <section className='w-full h-16 flex flex-row bg-beige '>
            <Icon iconName='AddIconWhite' size={40} color='black' className='my-auto mx-10'/>
            <h1 className='text-title justify-center my-auto'>NUEVA CARPETA</h1>
        </section>
    </section>
  );
}

export default FoldersContainer;
