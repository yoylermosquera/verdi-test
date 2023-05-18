import React from 'react';
import Button from '../../button';
import Icon from '@/components/icon';

function SuccessMessageModal(
) {

  return (
    <section className='w-[20.625rem] h-[19rem] flex flex-col justify-center border' >
        <section className=' w-[11.75rem] h-[13rem] flex flex-col justify-between mx-auto gap-8'>
            <Icon iconName="TickBoxLarge" color="black" size={75} className='mx-auto'/>
            <p className='text-center text-paragraph'>ELIMINADA CON ÉXITO</p>
            <Button className='mx-auto' size='medium'>CONTINUAR</Button>
        </section>
    </section>
  );
}

export default SuccessMessageModal;
