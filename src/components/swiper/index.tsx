import React, { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import ImgTest from '../../assets/images/examples/salaExampe.png';
import Icon from '../icon';
import Link from 'next/link';

const sliderItems = [
  {
    title: 'Tapete super elegante',
    des: 'De una fibra y materiales super resistenes',
  },
  {
    title: 'Cortina super',
    des: 'Cortina cortina cortina',
  },
  {
    title: 'Otro item super elegante',
    des: 'De una fibra y otro item',
  },
  {
    title: 'Otro item 2',
    des: 'Otro item 2',
  },
];

const HeroSwiper = () => {
  const [curentSlide, setCurrentSlide] = useState(0);

  const currentItem = sliderItems[curentSlide];
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      className="relative"
      slidesPerView={1}
      spaceBetween={0}
      onSlideChange={(e) => setCurrentSlide(e.activeIndex)}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
        el: '#custom_pagination',
        bulletClass: 'swiper-pagination-bullet bg-gold',
      }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
      }}
      navigation={{
        nextEl: '#icon_next_slide',
        prevEl: '#icon_prev_slide',
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <SwiperSlide key={item}>
          <div className="h-56 lg:h-auto lg:max-h-[500px] w-full bg-black flex justify-center items-center">
            <Image
              className="w-full h-full lg:cover"
              src={ImgTest}
              alt={'product image'}
            />
          </div>
        </SwiperSlide>
      ))}

      <section className="flex h-24 lg:h-40 flex-col justify-center items-center absolute bottom-0 left-0 w-full">

        <div className="hidden lg:flex absolute justify-center items-center w-[3.75rem] h-[3.75rem] bottom-6 right-16 bg-[#B5AE9E] z-50 rounded-full  ">
          <Icon iconName="Mail" className="z-50" size={20} color={'white'} />
        </div>

        <div className="absolute top-0 left-0 w-full h-full gradient__carusel_controler isolate"></div>

        <div className="max-w-[1000px] w-full isolate z-10 items-center flex flex-col lg:items-start gap-3 ">
          <div className="hidden lg:block w-full border-white isolate border h-[1px]" />

          <div className="w-full flex justify-center  lg:justify-between">
            <h2 className="text-white text-button__line">
              {currentItem?.title}
            </h2>
            <div className="hidden lg:flex gap-3 ">
              <Icon
                className="pointer"
                id="icon_prev_slide"
                size={28}
                color="white"
                iconName="LeftArrowCircle"
              />
              <Icon
                className="pointer"
                id="icon_next_slide"
                size={28}
                color="white"
                iconName="RightArrowCircle"
              />
            </div>
          </div>

          <h3 className=" hidden lg:block text-white text-title">
            {currentItem?.des}
          </h3>

          <Link
            href={'#'}
            className=" flex gap-2 items-center underline text-white text-button__line"
          >
            Conoce más
            <Icon size={16} color="white" iconName="ArrowForward" />
          </Link>

          <section className="lg:hidden">
            <div id="custom_pagination" className="swiper-pagination"></div>
          </section>
        </div>
      </section>
    </Swiper>
  );
};

export default HeroSwiper;
