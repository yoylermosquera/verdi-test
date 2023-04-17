// import { getAuthLayout } from '@/components/layouts/AuthLayout';
// import React from 'react'

// function SingIn() {
//   return (
//     <div>LOGIN</div>
//   )
// }

// SingIn.getLayout = getAuthLayout;

// export default SingIn;

import React from 'react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';
import AuthLayout from '@/components/layouts/AuthLayout';
import Button from '@/components/button';
import Input from '@/components/input';



const SignInPage: NextPageWithLayout = () => {
  return (
    <div className='h-full px-4 pt-11 pb-13 md:flex justify-center md:flex-col items-center md:p-0 '> 
        <h1 className='text-title text-center mb-11'>INGRESO</h1>

        <form className='md:max-w-[350px]'>
          <section className='px-2.5 flex flex-col gap-4'>
            
            <Input placeholder='correo' type='email' />
            <Input placeholder='contraseña' type={'password'} />
            
            <Link href={'#'} className={'text-left text-input underline underline-offset-1'}>
              Olvidé mi contraseña
            </Link>
            
            <div className='flex items-left mb-24   md:justify-center md:mb-0  md:mt-24' >
              {/* Aquí deseo que en la pantalla de la versión de escritorio, 
              el contenido de este div se vaya al fondo de su contenedor padre.   */}
              <input type="checkbox" placeholder='Recordar mis datos' className={'w-3 h-3 mr-2.5 md:mb-0'} />

              <span className=' text-left italic md:mb-0 '>Recordar mis datos.</span> 
              {/* Cambiar tipo de fuente  */}
            </div>

          </section>

          <section className='flex flex-col justify-center  '>
            <Button type='button' className='mb-4  ' size='full'>INGRESAR</Button>
            <Link href={'#'} className={'text-center text-input underline underline-offset-1'}>
              Quiero registrarme
            </Link>
          </section>
        </form>
       
    </div>
  );
};

SignInPage.getLayout = (page) => {
  return (
    <AuthLayout imgClassName='h-[44%]' contentClassName='h-[56%]' >
      {page}
    </AuthLayout>
  )
};

export default SignInPage;