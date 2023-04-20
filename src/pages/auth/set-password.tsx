import React from 'react';
import { useRouter } from 'next/router'
import { z } from 'zod';

import { NextPageWithLayout } from '../_app';
import { getAuthLayout } from '../../components/layouts/AuthLayout';
import Input from '@/components/input';
import Button from '@/components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SetPasswordSchema = z.object({
  password: z.string().min(8),
  confirm_password: z.string().min(8),
})

const SetPasswordPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { } = useForm({
    resolver: zodResolver(SetPasswordSchema),
  })
  // const { token = '' } = router.query
  // console.log({ token })
  return (
    <div className="h-full px-4 pt-11 pb-13 lg:flex justify-center lg:flex-col items-center lg:p-0 ">
      <h1 className="text-title text-center mb-6">ESTABLECER CONTRASEÑA</h1>
      <form className="lg:max-w-[350px] w-full">
        <section className="px-2.5 flex flex-col gap-6 mb-12">
          <Input placeholder="NUEVA CONTRASEÑA" type={'password'} />
          <Input placeholder="CONFIRMAR CONTRASEÑA" type={'password'} />
        </section>
        <section className="flex flex-col justify-center ">
          <Button type="button" className="mb-4" size="full">
            Establecer contraseña
          </Button>
        </section>
      </form>
    </div>
  );
};

SetPasswordPage.getLayout = getAuthLayout;

export default SetPasswordPage;
