import React from 'react';
import { NextPageWithLayout } from '../_app';
import AuthLayout from '../../components/layouts/AuthLayout';

const RegisterPage: NextPageWithLayout = () => {
  return (
    <div>
      <h2>REGISTER PAGE</h2>
    </div>
  );
};

RegisterPage.getLayout = (page) => {
  return (
    <AuthLayout imgClassName='h-[22%]' contentClassName='h-[78%]' >
      {page}
    </AuthLayout>
  )
};

export default RegisterPage;