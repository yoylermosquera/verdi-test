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
        <section className=' mt-4 w-full flex justify-center  '>
            <section className=' w-36 h-40 '>
                <img 
                className='  rounded-full border-2 '
                src="data:image/jpeg;base64,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" 
                />
                <Icon 
                color='black' 
                iconName='Camera' 
                size={40}
                className='   ' 
                />
            </section>
        </section>

      <h1 className='text-title text-center  mt-[1.375rem] mb-0 '> DENNIS HERRERA</h1>
      <h2 className='text-title text-center  mt-2 mb-6 '>Equipo Comercial</h2>

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[360px] w-full  h-full"
      >
        <section className="flex flex-col mt-0 mb-4">
          <section className=' h-14 w-full flex items-center justify-between border-y border-y-gold-dark'>
            <h1 className='text-title text-center'>
                CORREO
            </h1>

            <span className='text-input text-center'>
                dennis.sierra@antpack.co 
            </span>
          </section>

            <section className=' h-14 w-full flex items-center justify-between border-y border-y-gold-dark'>
                <h1 className='text-title text-center'>
                    TELÉFONO
                </h1>

                <span className='text-input text-center'>
                    +593 98 479 0449 
                </span>
            </section>

            <section className=' h-14 w-full flex items-center justify-between '>
                <h1 className='text-title text-center'>
                    COTIZACIONES ABIERTAS
                </h1>

                <span className='text-input text-center'>
                    420 
                </span>
            </section>

            <section className=' h-14 w-full flex items-center justify-between '>
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
          className={'text-center text-input underline underline-offset-1 hover:cursor-pointer mt-6'}
          onClick={() => { }}
          > 
            Cancelar
          </span>

          <section 
          className={' text-center text-input hover:cursor-pointer mt-4'}
          onClick={() => { }}
          >
            <span 
            className={'text-input  '}
            > 
                Cerrar sesión
            </span>
            <Icon 
                color='black' 
                iconName='SignOut' 
                size={20}
            />
          </section>
        </section>
      </form>
      
    </div>
    
    
  )
} 
export default  ProfileInfo  ;
