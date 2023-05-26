import React, { useState } from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import ResetPassword from '../../components/profile/profileResetPassword';


const  ProfileChangePasswordPage: NextPageWithLayout = () => {
  return (
    <div className='h-full flex flex-col grow lg:flex-row lg:justify-center'>
      <ResetPassword />
    </div>
  )
}

ProfileChangePasswordPage.getLayout = (page) => {
  return (
    <BaseLayout title='Perfil - Cambio de contraseña'>
      {page}
    </BaseLayout>
  )
}

export default ProfileChangePasswordPage