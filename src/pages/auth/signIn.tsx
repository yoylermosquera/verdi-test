import React from 'react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';
import { getAuthLayout } from '@/components/layouts/AuthLayout';
import Button from '@/components/button';
import Input from '@/components/input';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import CheckBox from '@/components/checkbox';
import Head from 'next/head';

const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type ILoginData = z.infer<typeof LoginSchema>;

const SignInPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { control, formState, handleSubmit } = useForm<ILoginData>({
    resolver: zodResolver(LoginSchema),
  });
  const { errors } = formState;

  const onSubmit = async (data: ILoginData) => {
    const id = toast.loading('Cargando...');
    const res = await signIn('credentials', {
      ...data,
      callbackUrl: '/',
      redirect: false,
    })!;
    if (res?.error) toast.error(res?.error);

    if (res?.ok) {
      toast.success('Ingreso exitoso');
      router.replace(res.url || '/');
    }
    toast.dismiss(id);
  };

  return (
    <div className="h-full px-4 pt-11 pb-13 lg:flex justify-center lg:flex-col items-center lg:p-0 ">
      <Head>
        <title>Registro verdi</title>
      </Head>
      <h1 className="text-title text-center mb-11">INGRESO</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-[350px] w-full"
      >
        <section className="px-2.5 flex flex-col gap-4">
          <Controller
            control={control}
            name={'email'}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="correo"
                type="email"
                required
                errorMsg={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name={'password'}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="contraseña"
                type={'password'}
                required
                errorMsg={errors?.password?.message}
              />
            )}
          />

          <Link
            href={'/auth/recovery-password'}
            className={'text-left text-input underline underline-offset-1'}
          >
            Olvidé mi contraseña
          </Link>

          <div className="flex items-left mb-24   lg:justify-center lg:mb-0  lg:mt-24">
            <CheckBox id="test" labelText="Recordar mis datos." />

            {/* Cambiar tipo de fuente  */}
          </div>
        </section>

        <section className="flex flex-col justify-center  ">
          <Button type="submit" className="mb-4  " size="full">
            INGRESAR
          </Button>
          <Link
            href={'/auth/register'}
            className={'text-center text-input underline underline-offset-1'}
          >
            Quiero registrarme
          </Link>
        </section>
      </form>
    </div>
  );
};

SignInPage.getLayout = getAuthLayout;

export default SignInPage;
