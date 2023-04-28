import Image, { StaticImageData } from 'next/image';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Icon from '../icon';

interface Props {
  imgs: StaticImageData[];
}
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
export const ProductSwipe = ({ imgs }: Props) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      id="productSwiper"
      className="relative mt-7 w-full h-full lg:mt-0"
      slidesPerView={1}
      spaceBetween={0}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
        el: '#custom_pagination',
        bulletClass: 'swiper-pagination-bullet',
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
      {imgs.map((img: StaticImageData, index) => (
        <SwiperSlide key={index}>
          <div className="h-56 lg:h-auto lg:max-h-[349px] w-full bg-black flex justify-center items-center">
            <Image
              className="w-full h-full lg:cover"
              src={img}
              alt={'product image'}
            />
          </div>
        </SwiperSlide>
      ))}

      <section className="absolute flex flex-col w-full">
        <div className="absolute flex flex-col gap-5 bottom-5 right-1 z-50 lg:right-3">
          <div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] bg-black-verdi rounded-full">
            <Icon
              iconName="Download"
              className="z-50"
              size={20}
              color="white"
              strokeWidth={2}
            />
          </div>
          <div className="flex justify-center items-center w-[3.1rem] h-[3.1rem] bg-black-verdi rounded-full">
            <Icon iconName="Bag" className="z-50" size={20} color="white" strokeWidth={30} />
          </div>
        </div>

        <section className="">
          <div id="custom_pagination" className="swiper-pagination"></div>
        </section>
      </section>
    </Swiper>
  );
};
