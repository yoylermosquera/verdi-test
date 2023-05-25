import React from 'react';
import { NextPageWithLayout } from '../_app';

import { BaseLayout } from '@/components/layouts';
import SectionSlider from '@/components/sectionSlider';
import HeroSwiper from '@/components/swiper';

import productSample from '@/assets/images/examples/productSample.png';
import LanguageChangerBox from '@/components/languageChanger';
import useAppContext from '@/hooks/useAppContext';
import Icon from '@/components/icon';
import QuotationType from '@/components/quotationType';


const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  img: productSample,
}));

const MetricsPage: NextPageWithLayout = () => {
  const { user } = useAppContext();

  return (
    <div>
        
      <section className="relative lg:hidden h-14 flex justify-end items-center px-4">
        <span className="w-full"></span>
        <h1 className=" text-title text-center uppercase">
          ¡hola {user?.name}!
        </h1>
        <div className="w-full flex justify-end">
          <LanguageChangerBox language="ES" />
        </div>
      </section>
      <HeroSwiper />

      <div className="flex absolute justify-center items-center h-10 w-10 top-[330px] right-[.875rem] bg-[#B5AE9E] z-50 rounded-full lg:hidden">
        <Icon iconName="Mail" className="z-50" size={20} color={'white'} />
      </div>

        {/* Desde aquí agregar componentes para la vista de métricas. */}

        <div className='w-full flex flex-col '>
            <h1 className=' text-title text-center my-4 lg:my-14'>METRICAS</h1>

            <section>
              DATE COMPONENT (In progress)
            </section>

            <QuotationType
            onClick={(i) => console.log(i , 'TEST')}
            userType='comercial'
            />|

        </div>
      
    </div>
  );
};

MetricsPage.getLayout = (page) => {
  return <BaseLayout title="METRICS - VERDI">{page}</BaseLayout>;
};

export default MetricsPage;
