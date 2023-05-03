import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';
import Icon from '../../icon';
import Button from '../../button';


function NoProductsContainer(
) {
  return (
    <section className=' w-[12.125rem] h-[12.55rem] flex flex-col justify-between'>
      <Icon size={56} iconName='SadFace' color='gold-dark' className='mx-auto'/>
      <h1 className='text-center text-paragraph -mt-6'>SIN PRODUCTOS</h1>
      <p className='text-center text-paragraph'>No tienes productos aquí</p>
      <span className='text-center text-paragraph underline underline-offset-1 hover:cursor-pointer' >Agregar productos</span>
    </section>
  );
}

export default NoProductsContainer;
