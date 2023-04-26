import React, { useState } from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import ResetPassword from '../../components/profile/profileResetPassword';
import EditInfo from '../../components/profile/profileEditInfo';
import ProfileInfo from '@/components/profile/profileInfo';


const  ProfileEditPage: NextPageWithLayout = () => {
  return (
    <div className='h-full flex flex-col grow'>
      <EditInfo />
    </div>
  )
}

ProfileEditPage.getLayout = (page) => {
  return (
    <BaseLayout title='Perfil - Editar informacion'>
      {page}
    </BaseLayout>
  )
}

export default ProfileEditPage