import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';
import Icon from '../../icon';
import Button from '../../button';
import Input from '@/components/input';

function FolderNameModal(
) {

  return (
    <section className='w-[20.625rem] h-[16.75rem] flex flex-col justify-center border' >
        <section className=' w-64 h-[9.75rem] flex flex-col justify-between mx-auto gap-8 mt-4'>
          <h1 className='text-center text-paragraph font-normal'>INTRODUCE EL NUEVO NOMBRE</h1>
          <Input placeholder='Carpeta de Cortinas'></Input>
          <Button className='mx-auto'>Guardar</Button>
        </section>
    </section>
  );
}

export default FolderNameModal;
