import React from 'react';
import Button from '@/components/button';
import Icon from '@/components/icon';
import ProfileAvatar from '../avatar/ProfileAvatar';
import Link from 'next/link';

function ProfileInfo() {
  return (
    <div className="h-full px-8 flex-col  grow lg:flex-col lg:justify-between lg:px-0 lg:mt-[3.5rem] lg:max-w-[58.75rem] lg:max-h-[43.625rem]">
      <section className="mt-4 w-full flex justify-center relative lg:justify-between lg:border lg:p-6  ">
        <section className="flex flex-col w-36 lg:ml-2 lg:flex-row lg:w-full lg:gap-10 lg:items-center">
          <section>
            <ProfileAvatar />
          </section>
          <section className="">
            <h1 className="text-title mt-[1.375rem] mb-0 "> DENNIS HERRERA</h1>
            <h2 className="text-title mt-2  ">Equipo Comercial</h2>
          </section>
        </section>
        <Link
          href={'/profile/edit'}
          className="right-0 absolute text-input text-center underline underline-offset-1 hover: cursor-pointer w-[2.5rem] lg:mr-5"
        >
          Editar
        </Link>
      </section>

      <div className="w-full h-fit flex flex-col  mt-6 lg:flex  items-left">
        <section className="flex flex-col mt-0 mb-3 lg:flex-row lg:justify-between ">
          <section className=" my-0 lg:w-[28.625rem] lg:h-36 lg:bg-beige-light lg:pl-5 lg:pr-7 ">
            <section className="h-14 w-full flex items-center justify-between border-y border-y-gold-dark lg:border-t-0">
              <h3 className="text-title text-center ">CORREO</h3>

              <span className="text-title text-center ">
                dennis.sierra@antpack.co
              </span>
            </section>

            <section className="h-14 w-full flex items-center justify-between border-b border-gold-dark">
              <h3 className="text-title text-center ">TELÉFONO</h3>

              <span className="text-title text-center ">+593 98 479 0449</span>
            </section>
          </section>

          <section className="my-0 lg:w-[28.625rem] lg:h-36 lg:bg-beige-light lg:pl-5 lg:pr-7">
            <section className="h-14 w-full flex items-center justify-between lg:border-b lg:border-gold-dark ">
              <h3 className="text-title text-center ">COTIZACIONES ABIERTAS</h3>

              <span className="text-title text-center ">42</span>
            </section>

            <section className="h-14 w-full flex items-center justify-between ">
              <h3 className="text-title text-center ">COTIZACIONES CERRADAS</h3>

              <span className="text-title text-center ">23</span>
            </section>
          </section>
        </section>

        <section className=" flex flex-col justify-between gap-4 ">
          <Button type="submit" size="full">
            VER COTIZACIONES PENDIENTES
          </Button>

          <Link
            href={'/profile/change-password'}
            className={
              'text-center text-button__line underline hover:cursor-pointer lg:hidden '
            }
            onClick={() => {}}
          >
            Cambiar contraseña
          </Link>

          <section
            className={
              ' text-center text-button__line hover:cursor-pointer underline underline-offset-1 lg:mb-4 '
            }
            onClick={() => {}}
          >
            <span className={'text-button__line mr-1'}>Cerrar sesión</span>
            <Icon
              color="black"
              iconName="SignOut"
              size={20}
              className="inline-block"
            />
          </section>
        </section>
      </div>
    </div>
  );
}
export default ProfileInfo;
