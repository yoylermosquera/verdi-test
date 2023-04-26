import React from 'react'
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import ProfileInfo from '@/components/profile/profileInfo';


const  ProfilePage: NextPageWithLayout = () => {

  return (
    <div className='h-full flex flex-col grow'>
      <ProfileInfo />
    </div>
  )
}

ProfilePage.getLayout = (page) => {
  return (
    <BaseLayout title='Perfil'>
      {page}
    </BaseLayout>
  )
}

export default ProfilePage