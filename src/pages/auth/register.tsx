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

const RegisterPage: NextPageWithLayout = () => {
  return (
    <div className='h-full px-4 pt-11 pb-13 md:flex justify-center md:flex-col items-center md:p-0 '> 
        <h1 className='text-title text-center mb-6'>REGISTRO</h1>
        <form className='md:max-w-[350px]'>
          <section className='px-2.5 flex flex-col gap-4 mb-8'>
            <Select
              options={typeUserList}
              placeholder={'Tipo de usuario'}
            />
            <Input placeholder='nombre' />
            <Input placeholder='apellido' />
            <Input placeholder='apellido' />
            <Input placeholder='fecha nacimiento' type={'date'} />
            <Input placeholder='ciudad y pais' />
            <Input placeholder='dirección' />
            <Input placeholder='nombre de la compañía' />
            <Input placeholder='sitio web' />
            <Select
              options={typeUserList}
              placeholder={'how you found out verdi'}
            />
          </section>
          <section className='flex flex-col justify-center '>
            <Button type='button' className='mb-4' size='full'>Enviar solicitud</Button>
            <Link href={'#'} className={'text-center text-input underline underline-offset-1'}>
              Ya tengo una cuenta
            </Link>
          </section>
        </form>
    </div>
  );
};

RegisterPage.getLayout = (page) => {
  return (
    <AuthLayout imgClassName='h-[22%]' contentClassName='h-[78%]' >
      {page}
    </AuthLayout>
  )
};

export default RegisterPage;