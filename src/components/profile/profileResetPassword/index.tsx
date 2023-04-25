import React from 'react';
import Input from '@/components/input';
import Button from '@/components/button';

const handleSubmit = () => {
  // Función que se ejecutará para cambiar la contraseña. 
}
function ResetPassword() {
  return (
    <div className='h-full px-8'>
      
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

      <h1 className='text-title text-center mt-10 mb-8 '>CAMBIAR CONTRASEÑA</h1>

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[360px] w-full"
      >
        <section className="flex flex-col gap-6 mt-0">
          <Input placeholder="CONTRASEÑA ANTERIOR" type={'password'} />
          <Input placeholder="NUEVA CONTRASEÑA" type={'password'} />
          <Input placeholder="CONFIRMAR CONTRASEÑA" type={'password'} />
        </section>
        
        
        <section className="flex flex-col justify-center mt-40 ">
          <Button type="submit" size="full">
            CONTINUAR
          </Button>

          <span 
          className={'text-center text-input underline underline-offset-1 hover:cursor-pointer mt-2'}
          onClick={() => { }}
          > 
          Cancelar
          </span>
        </section>
      </form>
      
    </div>
    
    
  )
} 
export default  ResetPassword  ;
