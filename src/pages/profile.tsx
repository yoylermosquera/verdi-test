import React from 'react'
import { NextPageWithLayout } from './_app';
import { BaseLayout } from '../components/layouts/BaseLayout';
import ResetPassword from '../components/profile/profileResetPassword';
import EditInfo from '../components/profile/profileEditInfo';
import ProfileInfo from '@/components/profile/profileInfo';

const  ProfilePage: NextPageWithLayout = () => {
  return (
    <ProfileInfo/>
    //<EditInfo />
    // <ResetPassword/>
  )
}

ProfilePage.getLayout = (page) => {
  return (
    <BaseLayout title='PERFIL'>
      {page}
    </BaseLayout>
  )
}

export default ProfilePage