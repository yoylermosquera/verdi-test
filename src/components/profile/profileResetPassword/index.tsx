import React from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import ProfileAvatar from '../avatar/ProfileAvatar';
import Link from 'next/link';

const handleSubmit = () => {
  // Función que se ejecutará para cambiar la info.
};
function ResetPassword() {
  return (
    <div className="h-full px-8 flex flex-col grow  lg:justify-between lg:px-0 lg:mt-[3.5rem] lg:max-w-[58.75rem] lg:max-h-[43.625rem]">
     
      <section className='mt-4 w-full h-auto flex relative lg:justify-between lg:border lg:p-6  '>
        <section className='flex flex-col items-center w-full mx-auto lg:ml-2 lg:flex-row lg:w-full lg:gap-10 lg:items-center'>
          <section>
            <ProfileAvatar showEditIcon />
          </section> 
          <section className='items-center'>
            <h1 className='text-title mt-[1.375rem] mb-0 hidden lg:block '> DENNIS HERRERA</h1>
            <h2 className='text-title mt-2 items-center'>CAMBIAR CONTRASEÑA</h2>
          </section>
        </section>
      </section>

      <div className="w-full h-full mt-6 flex flex-col  lg:justify-items-center ">
        <section className="flex flex-col gap-6 mt-0 lg:hidden">
          <Input placeholder="CONTRASEÑA ANTERIOR" type={'password'} />
          <Input placeholder="NUEVA CONTRASEÑA" type={'password'} />
          <Input placeholder="CONFIRMAR CONTRASEÑA" type={'password'} />
        </section>

        <section className=" flex-col mt-0 mb-3 hidden lg:flex lg:flex-row lg:justify-between lg:bg-beige-light ">
          <section className="my-0 lg:w-[28.625rem] lg:h-36 lg: ">
            <section className="h-14 w-full flex items-center justify-between ">
              <h3 className="text-title text-center lg:ml-5 lg:mr-7">
                CONTRASEÑA
              </h3>
            </section>

            <section className="h-14 w-full flex items-center justify-between lg:pl-5 lg:pr-7 ">
              {/* Agregar Imput de contraseña pero sin editar.*/}
              <Input placeholder="************" type={'password'} disabled />
            </section>
          </section>

          <section className="my-0 lg:w-[28.625rem] lg:h-36 lg:pl-5 lg:pr-7">
            <section className="h-14 w-full flex items-center justify-between">
              <Input placeholder="NUEVA CONTRASEÑA" type={'password'} />
            </section>

            <section className="h-14 w-full flex items-center justify-between">
              <Input placeholder="CONFIRMAR CONTRASEÑA" type={'password'} />
            </section>
          </section>
        </section>
      </div>
      <section className="flex flex-col gap-4 h-full mt-52 lg:mt-0 ">
          <Button type="submit" size="full">
            GUARDAR
          </Button>

          <section
            className={
              'text-center text-button__line hover:cursor-pointer underline underline-offset-1 lg:mb-4 '
            }
            onClick={() => {}}
          >
            <Link
              href={'/profile'}
              className={
                'text-center text-input underline underline-offset-1 hover:cursor-pointer mt-2'
              }
              onClick={() => {}}
            >
              Cancelar
            </Link>
          </section>
        </section>
    </div>
  );
}
export default ResetPassword;
