import React from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import Icon from '@/components/icon';
import ProfileAvatar from '../avatar/ProfileAvatar';
import Link from 'next/link';

const handleSubmit = () => {
  // Función que se ejecutará para cambiar la contraseña. 
}
function EditInfo() {
  return (
    <div className='h-full px-8 flex flex-col  grow '>
      <div>
        <section className='mt-4 w-full flex justify-center mb-9'>
            <ProfileAvatar showEditIcon />
          </section>

        <h1 className='text-title text-center mb-8 '>MI PERFIL</h1>
      </div>
        

      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[360px] flex flex-col justify-between w-full pb-7 grow"
      >
        <section className="flex flex-col gap-6 mt-0  ">
          <Input placeholder="Nombre:"  />
          <Input placeholder="Tipo de usuario?"  />
          <Input placeholder="Email"  />
          <Input placeholder="Teléfono"  />
        </section>
        
        
        <section className="flex flex-col justify-center">
          <Button type="submit" size="full">
            CONTINUAR
          </Button>

          <Link
            href={'/profile'} 
          className={'text-center text-input underline underline-offset-1 hover:cursor-pointer mt-2'}
          onClick={() => { }}
          > 
          Cancelar
          </Link>
        </section>
      </form>
      
    </div>
    
    
  )
} 
export default  EditInfo  ;
