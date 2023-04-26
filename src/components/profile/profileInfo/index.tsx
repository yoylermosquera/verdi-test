import React from 'react';
import Button from '@/components/button';
import Icon from '@/components/icon';
import ProfileAvatar from '../avatar/ProfileAvatar';
import Link from 'next/link';

function ProfileInfo() {
  return (
    <div className='h-full px-8 '>
        <section className='mt-4 w-full flex justify-center relative'>
          <section className='w-36 h-[9.5rem]'>
            <ProfileAvatar />
          </section>
          <Link href={'/profile/edit'} className='right-0 absolute text-input text-center underline underline-offset-1 hover: cursor-pointer w-[2.5rem]'>
             Editar
          </Link>
        </section>

      <h1 className='text-title text-center  mt-[1.375rem] mb-0 '> DENNIS HERRERA</h1>
      <h2 className='text-title text-center  mt-2 mb-6 '>Equipo Comercial</h2>

      <div
        className="lg:max-w-[360px] w-full  h-full"
      >
        <section className="flex flex-col mt-0 mb-7">
          <section className='h-14 w-full flex items-center justify-between border-y border-y-gold-dark'>
            <h3 className='text-title text-center'>
                CORREO
            </h3>

            <span className='text-title text-center'>
                dennis.sierra@antpack.co 
            </span>
          </section>

            <section className='h-14 w-full flex items-center justify-between border-b border-gold-dark'>
                <h3 className='text-title text-center'>
                    TELÉFONO
                </h3>

                <span className='text-title text-center'>
                    +593 98 479 0449 
                </span>
            </section>

            <section className='h-14 w-full flex items-center justify-between '>
                <h3 className='text-title text-center'>
                    COTIZACIONES ABIERTAS
                </h3>

                <span className='text-title text-center'>
                    420 
                </span>
            </section>

            <section className='h-14 w-full flex items-center justify-between '>
                <h3 className='text-title text-center'>
                    COTIZACIONES CERRADAS
                </h3>

                <span className='text-title text-center'>
                    69
                </span>
            </section>
        </section>
        
        
        <section className="flex flex-col justify-center ">
          <Button type="submit" size="full" className='mb-6'>
            VER COTIZACIONES PENDIENTES
          </Button>

          <Link 
            href={'/profile/change-password'} 
          className={'text-center text-button__line underline hover:cursor-pointer '}
          onClick={() => { }}
          > 
            Cambiar contraseña
          </Link>

          <section 
          className={' text-center text-button__line hover:cursor-pointer mt-4  underline underline-offset-1 '}
          onClick={() => { }}
          >
            <span 
            className={'text-button__line mr-1'}
            > 
                Cerrar sesión
            </span>
            <Icon 
                color='black' 
                iconName='SignOut' 
                size={20}
                className='inline-block'
                
            />
          </section>
        </section>
      </div>
      
    </div>
    
    
  )
} 
export default  ProfileInfo  ;
