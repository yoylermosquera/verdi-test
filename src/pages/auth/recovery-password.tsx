import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { NextPageWithLayout } from '../_app';

// components
import AuthLayout from '@/components/layouts/AuthLayout';
import Button from '@/components/button';
import Input from '@/components/input';

import { resetUserPassword, sendOtpCode } from '@/services/user/';
import { handleRequestError } from '@/util/error';

const ResetPassWordEmailSchema = z.object({
  email: z.string().email(),
});

// const passwordSchema = z.string().min(8, 'Minimo 8 caracteres').max(20, 'maximo 8 caracteres').regex(/[a-zA-Z]/).regex(/\d/);
const passwordSchema = z.string()

const ResetPassWordOtpSchema = z.object({
  otp: z.string().min(6, 'Ingresa un codigo de verificación válido'),
  password: passwordSchema,
  confirm_password: passwordSchema
}).refine(data =>  data.password === data?.confirm_password, {
  message: 'Las contraseñas no coinciden',
  path: ['confirm_password'],
});

type IResetPassWord = {
  email: string;
  otp: string;
  password: string;
  confirm_password: string;
};

const RecoveryPassWordPage: NextPageWithLayout = () => {
  const [emailSend, setMailSend] = useState(false);

  const router = useRouter();

  const { control, formState, handleSubmit } = useForm<IResetPassWord>({
    resolver: zodResolver(
      emailSend ? ResetPassWordOtpSchema : ResetPassWordEmailSchema,
    ),
  });

  const { from = '' } = router.query;

  const { errors } = formState;

  const resetPasswordAndLogin = async (data: IResetPassWord) => {
      await resetUserPassword(data);
    //TODO login with email and password
  }

  const onSubmitSendCode = async (data: IResetPassWord) => {
    toast.promise(sendOtpCode(data?.email), {
      loading: 'Cargando...',
      success: () => {
        setMailSend(true);
        return 'Codigo enviado con exito!';
      },
      error: (e) => {
        return handleRequestError(e);
      },
    });
  };

  const onSubmitResetPassWord = async (data: IResetPassWord) => {
    toast.promise(resetPasswordAndLogin(data), {
      loading: 'Cargando...',
      success: () => {
        return 'Contraseña cambiada con exito!';
      },
      error: (e) => {
        return handleRequestError(e);
      },
    });
  };

  return (
    <div className="h-full px-4 pt-11 pb-13 md:flex md:justify-center md:flex-col items-center md:p-0 ">
      <h1 className="text-title text-center mb-11">
        {from === 'email'
          ? 'ESTABLECER CONTRASENA'
          : 'RECUPERAR MI CONTRASEÑA'}
      </h1>

      {!emailSend ? (
        <form
          onSubmit={handleSubmit(onSubmitSendCode)}
          className="md:max-w-[360px] w-full"
        >
          <section className="px-2.5 flex flex-col gap-6 mb-12">
            <Controller
              control={control}
              name={'email'}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="correo"
                  type="email"
                  errorMsg={errors?.email?.message}
                />
              )}
            />
            <p className="text-paragraph text-black-verdi italic leading-5">
              Ingresa la dirección de correo electrónico al cual deseas recibir
              el código
            </p>
          </section>
          <section className="flex flex-col justify-center ">
            <Button type="submit" className="mb-4" size="full">
              CONTINUAR
            </Button>
          </section>
        </form>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmitResetPassWord)}
          className="md:max-w-[360px] w-full"
        >
          <section className="px-2.5 flex flex-col gap-6 mb-12">
            <Controller
              control={control}
              name={'otp'}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="INGRESA EL CÓDIGO"
                  required
                  type={'number'}
                  errorMsg={errors?.otp?.message}
                />
              )}
            />

            <p className="text-paragraph text-black-verdi italic leading-5">
              El código fue enviado al correo que <br /> ingresaste
            </p>
            <Controller
              control={control}
              name={'password'}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="NUEVA CONTRASEÑA"
                  type={'password'}
                  required
                  errorMsg={errors?.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name={'confirm_password'}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="CONFIRMAR CONTRASEÑA"
                  type={'password'}
                  required
                  errorMsg={errors?.confirm_password?.message}
                />
              )}
            />
          </section>
          <section className="flex flex-col justify-center ">
            <Button type="submit" className="mb-4" size="full">
              {from === 'email' ? 'Guardar contraseña' : 'Cambiar contraseña'}
            </Button>
          </section>
        </form>
      )}
    </div>
  );
};

RecoveryPassWordPage.getLayout = (page) => {
  return (
    <AuthLayout imgClassName="h-[44%]" contentClassName="h-[56%]">
      {page}
    </AuthLayout>
  );
};

export default RecoveryPassWordPage;
