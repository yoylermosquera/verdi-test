import React from 'react';
import Input from '@/components/input';
import Button from '@/components/button';
import Icon from '@/components/icon';
import ProfileAvatar from '../avatar/ProfileAvatar';
import Link from 'next/link';
function EditInfo() {
  return (
    <div className="w-full h-fit  my-0 flex flex-col grow">
      <section className="h-full flex flex-col  grow px-4 pt-4 lg:px-64 lg:pt-14 ">
        <div className=" w-full flex justify-center relative lg:justify-between lg:border lg:p-6 ">
          <section className="flex flex-col w-36 lg:ml-2 lg:flex-row lg:w-full lg:gap-10 lg:items-center">
            <section>
              <ProfileAvatar showEditIcon />
            </section>
            <section className="">
              <h1 className="text-title text-center mb-8 mt-9 lg:hidden ">
                MI PERFIL
              </h1>
              <h1 className="text-title mt-[1.375rem] mb-0 hidden lg:block ">
                DENNIS HERRERA
              </h1>
              <h2 className="text-title mt-2 hidden lg:block">
                Equipo Comercial
              </h2>
            </section>
          </section>
        </div>

        <section className="h-full flex flex-col grow justify-between mt-6 mb-4">
          <section className="flex flex-col mt-0 mb-3 lg:flex-row lg:justify-between ">
            <section className="my-0 lg:w-[28.625rem] lg:h-36 lg:bg-beige-light lg:pl-5 lg:pr-7 ">
              <section className="h-14 w-full flex items-center justify-between border-y border-y-gold-dark lg:border-t-0">
                <h3 className="text-title text-center ">CORREO</h3>

                <span className="text-title text-center ">
                  dennis.sierra@antpack.co
                </span>
              </section>

              <section className="h-14 w-full flex items-center justify-between border-b border-gold-dark ">
                <h3 className="text-title text-center ">TELÉFONO</h3>

                <span className="text-title text-center ">
                  +593 98 479 0449
                </span>
              </section>
            </section>

            <section className="my-0 lg:w-[28.625rem] lg:h-36 lg:bg-beige-light lg:pl-5 lg:pr-7">
              <section className="h-14 w-full flex items-center justify-between lg:border-b lg:border-gold-dark ">
                <h3 className="text-title text-center ">
                  COTIZACIONES ABIERTAS
                </h3>

                <span className="text-title text-center ">42</span>
              </section>

              <section className="h-14 w-full flex items-center justify-between ">
                <h3 className="text-title text-center ">
                  COTIZACIONES CERRADAS
                </h3>

                <span className="text-title text-center ">23</span>
              </section>
            </section>
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

          <section className="h-full">
            <section className=" flex flex-col grow gap-4 ">
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
          </section>
        </section>
      </section>
    </div>
  );
}
export default EditInfo;
