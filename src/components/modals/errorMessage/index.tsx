import React from 'react';
import Button from '../../button';
import Icon from '@/components/icon';

function ErrorMessageModal(
) {

  return (
    <section className='w-[20.625rem] h-[21.125rem] flex flex-col justify-center border' >
        <section className=' w-[17.5rem] h-[14.375rem] flex flex-col justify-between mx-auto gap-8 mt-1'>
            <Icon iconName="CrossBoxLarge" color="black" size={75} className='mx-auto'/>
            <p className='text-center text-paragraph'>Se presento un error al eliminar la carpeta inténtalo nuevamente</p>
            <Button className='mx-auto px-2 ' size='medium'>VOLVER A INTENTAR</Button>
        </section>
    </section>
  );
}

export default ErrorMessageModal;
