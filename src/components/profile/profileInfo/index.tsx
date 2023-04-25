import React from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import Icon from '@/components/icon';

const handleSubmit = () => {
  // Función que se ejecutará para cambiar la contraseña. 
}
function ProfileInfo() {
  return (
    <div className='h-full px-8 '>
        <section className='mt-4 w-full flex justify-between '>
          <section className='w-[2.5rem]'>
            
          </section>
          <section className='w-36 h-[9.5rem] ml border-2 justify-center '>
            FOTO!
          </section>
          <section className='text-input text-center underline underline-offset-1 hover: cursor-pointer w-[2.5rem]'>
             Editar
          </section>
        </section>

      <h1 className='text-title text-center  mt-[1.375rem] mb-0 '> DENNIS HERRERA</h1>
      <h2 className='text-title text-center  mt-2 mb-6 '>Equipo Comercial</h2>

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[360px] w-full  h-full"
      >
        <section className="flex flex-col mt-0 mb-4">
          <section className='h-14 w-full flex items-center justify-between border-y border-y-gold-dark'>
            <h1 className='text-title text-center'>
                CORREO
            </h1>

            <span className='text-input text-center'>
                dennis.sierra@antpack.co 
            </span>
          </section>

            <section className='h-14 w-full flex items-center justify-between border-gold-dark'>
                <h1 className='text-title text-center'>
                    TELÉFONO
                </h1>

                <span className='text-input text-center'>
                    +593 98 479 0449 
                </span>
            </section>

            <section className='h-14 w-full flex items-center justify-between '>
                <h1 className='text-title text-center'>
                    COTIZACIONES ABIERTAS
                </h1>

                <span className='text-input text-center'>
                    420 
                </span>
            </section>

            <section className='h-14 w-full flex items-center justify-between '>
                <h1 className='text-title text-center'>
                    COTIZACIONES CERRADAS
                </h1>

                <span className='text-input text-center'>
                    69
                </span>
            </section>
        </section>
        
        
        <section className="flex flex-col justify-center ">
          <Button type="submit" size="full">
            VER COTIZACIONES PENDIENTES
          </Button>

          <span 
          className={'text-center text-input underline hover:cursor-pointer mt-6'}
          onClick={() => { }}
          > 
            Cancelar
          </span>

          <section 
          className={' text-center text-input hover:cursor-pointer mt-4  underline underline-offset-1 '}
          onClick={() => { }}
          >
            <span 
            className={'text-input mr-1'}
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
      </form>
      
    </div>
    
    
  )
} 
export default  ProfileInfo  ;
