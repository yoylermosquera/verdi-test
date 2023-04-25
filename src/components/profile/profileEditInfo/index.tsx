import React from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import Icon from '@/components/icon';

const handleSubmit = () => {
  // Función que se ejecutará para cambiar la contraseña. 
}
function EditInfo() {
  return (
    <div className='h-full px-8 '>
        <section className=' mt-4 w-full flex justify-between  '>
          <section className='w-[2.5rem]'>
            
          </section>
          <section className='w-36 h-[9.5rem] ml border-2 justify-center '>
            FOTO!
          </section>
          <section className='text-input text-center underline underline-offset-1 hover: cursor-pointer w-[2.5rem]'>
            Editar
          </section>
        </section>

      <h1 className='text-title text-center  mb-8 '>MI PERFIL</h1>

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[360px] w-full h-full"
      >
        <section className="flex flex-col gap-6 mt-0 ">
          <Input placeholder="Nombre:"  />
          <Input placeholder="Tipo de usuario?"  />
          <Input placeholder="Email"  />
          <Input placeholder="Teléfono"  />
        </section>
        
        
        <section className="flex flex-col justify-center mt-[9.875rem] ">
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
export default  EditInfo  ;
