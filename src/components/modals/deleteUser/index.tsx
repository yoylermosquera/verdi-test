import useMediaQuery from '@/hooks/useMediaQuery';
import React from 'react';
import Icon from '../../icon';
import Button from '../../button';

function DeleteProfileModal(
) {

  return (
    <section className='w-[20.625rem] h-[16.625rem] flex flex-col justify-center border' >
        <section className='w-[13.875rem] h-[9.125rem] flex flex-col justify-between mx-auto'>
          <p className='text-center text-paragraph py-auto align-top pt-6'>
            ¿Estás seguro que deseas eliminar este usuario?
          </p>
          <section className='flex flex-row justify-between w-full- h-12'>
          <Button className="" size="small">
            NO
          </Button>
          <Button size="small" variant='white'>
            SI
          </Button>
          </section>
        </section>
    </section>
  );
}

export default DeleteProfileModal;
