import React from 'react';
import { NextPageWithLayout } from '../_app';
import { getAuthLayout } from '../../components/layouts/AuthLayout';
import Input from '@/components/input';
import Button from '@/components/button';

const RecoveryPasswordPage: NextPageWithLayout = () => {
  return (
    <div className="h-full px-4 pt-11 pb-13 md:flex justify-center md:flex-col items-center md:p-0 ">
      <h1 className="text-title text-center mb-6">RECUPERAR MI CONTRASEÑA</h1>
      <form className="md:max-w-[360px]  w-full">
        <section className="px-2.5 flex flex-col gap-6 mb-12">
          <Input placeholder="INGRESA EL CÓDIGO" type={'number'} />
          <p className="text-paragraph text-black-verdi italic leading-5">
            El código fue enviado al correo que <br /> ingresaste
          </p>
          <Input placeholder="NUEVA CONTRASEÑA" type={'password'} />
          <Input placeholder="CONFIRMAR CONTRASEÑA" type={'password'} />
        </section>
        <section className="flex flex-col justify-center ">
          <Button type="button" className="mb-4" size="full">
            Cambiar contraseña
          </Button>
        </section>
      </form>
    </div>
  );
};

RecoveryPasswordPage.getLayout = getAuthLayout;

export default RecoveryPasswordPage;
