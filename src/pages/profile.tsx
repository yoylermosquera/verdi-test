import React from 'react'
import { NextPageWithLayout } from './_app';
import { BaseLayout } from '../components/layouts/BaseLayout';

const  ProfilePage: NextPageWithLayout = () => {
  return (
    <div>ProfilePage</div>
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