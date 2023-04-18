import React from 'react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';
import AuthLayout from '@/components/layouts/AuthLayout';
import Button from '@/components/button';
import Select from '@/components/select';
import Input from '@/components/input';

const typeUserList = [
  { value: 'comercial', label: 'USUARIO' },
  { value: 'user', label: 'USUARIO RETAIL' },
]

const sendCodeEmailPage: NextPageWithLayout = () => {
  return (
    <div className='h-full px-4 pt-11 pb-13 md:flex justify-center md:flex-col items-center md:p-0 '> 
        <h1 className='text-title text-center mb-11'>RECUPERAR MI CONTRASEÑA</h1>
        <form className='md:max-w-[350px]'>
          <section className='px-2.5 flex flex-col gap-4 mb-8'>
            
            <Input placeholder='correo' type='email' />
            <p className={'text-left text-input font-light italic '}>
              Ingresa la dirección de correo electrónico al cual deseas recibir el código   
            </p>

          </section>

          <section className={'flex flex-col justify-center'}>
            <Button type='button' className={'mb-4 mt-36 '} size='full'>CONTINUAR</Button>
          </section>
        </form>
    </div>
  );
};

sendCodeEmailPage.getLayout = (page) => {
  return (
    <AuthLayout imgClassName='h-[44%]' contentClassName='h-[56%]' >
      {page}
    </AuthLayout>
  )
};

export default sendCodeEmailPage;