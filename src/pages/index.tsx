import React from 'react';
import { NextPageWithLayout } from './_app';

import SectionSlider from '@/components/sectionSlider';
import { BaseLayout } from '@/components/layouts';
import HeroSwiper from '@/components/swiper';

import productSample from '@/assets/images/examples/productSample.png';
import LanguageChangerBox from '@/components/languageChanger';
import useAppContext from '@/hooks/useAppContext';
import Icon from '@/components/icon';
import Modalbase from '../components/modals/modalBase/index';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  img: productSample,
}));

const HomePage: NextPageWithLayout = () => {
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

      <div className="flex flex-col gap-3 lg:mb-9">
        <SectionSlider
          sectionTitle="Recomendados para ti"
          products={mockData}
        />

        <SectionSlider sectionTitle="best seller" products={mockData} />
      </div>
    </div>
  );
};

HomePage.getLayout = (page) => {
  return <BaseLayout title="HOME - VERDI">{page}</BaseLayout>;
};

export default HomePage;
