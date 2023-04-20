import { BaseLayout } from '@/components/layouts';
import SwiperVerdi from '@/components/swiper';
import { useSession } from 'next-auth/react';
import React from 'react'
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
    const { data: session, status } = useSession()
  return (
    <div>
        <SwiperVerdi />  
    </div>
  )
}

HomePage.getLayout = (page) => {
  return (
    <BaseLayout title='HOME - VERDI'>
      {page}
    </BaseLayout>
  )
}

export default HomePage;