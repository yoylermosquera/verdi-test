import Header from '@/components/header';
import BottomNavigationBar from '@/components/header/BottomNavigationBar';
import SwiperVerdi from '@/components/swiper';
import { useSession } from 'next-auth/react';
import React from 'react'

const HomePage = () => {
    const { data: session, status } = useSession()
  return (
    <div>
        <Header />
        {/* <SwiperVerdi /> */}

        {/* <BottomNavigationBar /> */}
    </div>
  )
}

export default HomePage;