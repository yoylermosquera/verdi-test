import React from 'react';
import Link from 'next/link';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import { NextPageWithLayout } from '../_app';
import AuthLayout from '@/components/layouts/AuthLayout';
import Button from '@/components/button';
import Select from '@/components/select';
import Input from '@/components/input';
import { createUser } from '../../services/user/createUser';
import { isAxiosError } from 'axios';
import { handleRequestError } from '@/util/error';

const typeUserList = [
  { value: 'user', label: 'USUARIO RETAIL' },
  { value: 'company', label: 'EMPRESAS' },
];

const howFindVerdiOptions = [
  { value: '1', label: 'OPCION1' },
  { value: '2', label: 'OPCION2' },
];

const RegisterSchema = z.object({
  type_user: z.string().optional(),
  name: z.string(),
  last_name: z.string(),
  birth_date: z.string(),
  country_city: z.string(),
  address: z.string(),
  company_name: z.string(),
  url: z.string().url('Ingresa una url valida'),
  email: z.string().email(),
  // role: z.string()
});

export type IRegisterUser = z.infer<typeof RegisterSchema>;

const RegisterPage: NextPageWithLayout = () => {
  const { control, setValue, formState, handleSubmit } = useForm<IRegisterUser>(
    {
      resolver: zodResolver(RegisterSchema),
    },
  );

  const { errors } = formState;

  const onSubmit = async (data: IRegisterUser) => {
    toast.promise(
      createUser(data),
      {
        loading: 'Cargando...',
        success: 'Registro exitoso',
        error: (e) => {
          return handleRequestError(e);
        },
      }
    )
  };

  return (
    <div className="h-full px-4 pt-11 pb-13 lg:flex justify-center lg:flex-col items-center lg:p-0 ">
      <h1 className="text-title text-center mb-6">REGISTRO</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-[350px] w-full"
      >
        <section className="px-2.5 flex flex-col gap-4 mb-8">
          <Controller
            name={'type_user'}
            control={control}
            render={({ field }) => {
              const { ref, ...resField } = field;
              return (
                <Select
                  {...resField}
                  isMulti={false}
                  options={typeUserList}
                  placeholder={'Tipo de usuario'}
                  value={typeUserList?.find((opt) => opt.value === field.value)}
                  onChange={(e: any) => {
                    setValue('type_user', e?.value);
                  }}
                  errorMsg={errors?.type_user?.message}
                />
              );
            }}
          />

          <Controller
            name={'name'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                required
                placeholder="nombre"
                errorMsg={errors?.name?.message}
              />
            )}
          />

          <Controller
            name={'last_name'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                required
                placeholder="apellido"
                errorMsg={errors?.last_name?.message}
              />
            )}
          />
          <Controller
            name={'email'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                required
                type={'email'}
                placeholder="Email"
                errorMsg={errors?.email?.message}
              />
            )}
          />
          <Controller
            name={'birth_date'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                name="burth_date"
                type={'date'}
                required
                placeholder="fecha nacimiento"
                errorMsg={errors?.birth_date?.message}
              />
            )}
          />

          <Controller
            name={'country_city'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                name="country_city"
                required
                placeholder="ciudad y pais"
                errorMsg={errors?.country_city?.message}
              />
            )}
          />

          <Controller
            name={'address'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                name="address"
                required
                placeholder="dirección"
                errorMsg={errors?.address?.message}
              />
            )}
          />

          <Controller
            name={'company_name'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                name="company_name"
                required
                placeholder="nombre de la compañía"
                errorMsg={errors?.company_name?.message}
              />
            )}
          />

          <Controller
            name={'url'}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                name="url"
                type={'url'}
                required
                placeholder="sitio web"
                errorMsg={errors?.url?.message}
              />
            )}
          />

          <Select
            options={howFindVerdiOptions}
            placeholder={'how you found out verdi'}
          />
        </section>

        <section className="flex flex-col justify-center ">
          <Button type="submit" className="mb-4" size="full">
            Enviar solicitud
          </Button>
          <Link
            href={'/auth/signin'}
            className={'text-center text-input underline underline-offset-1'}
          >
            Ya tengo una cuenta
          </Link>
        </section>
      </form>
    </div>
  );
};

RegisterPage.getLayout = (page) => {
  return (
    <AuthLayout title='Registro desde layout' imgClassName="h-[22%]" contentClassName="h-[78%]">
      {page}
    </AuthLayout>
  );
};

export default RegisterPage;
