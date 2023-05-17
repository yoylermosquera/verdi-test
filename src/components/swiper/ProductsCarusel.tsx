import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMediaQuery from '@/hooks/useMediaQuery';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';
import ProductCard from '../productCard';

interface ProductsCaruselProps {
  sectionName: string;
  products: {
    id: string;
    img: string;
    title: string;
    description: string;
  }[];
}

function ProductsCarusel({ products, sectionName }: ProductsCaruselProps) {
  const matches = useMediaQuery('(min-width: 768px)');
  const slidesPerView = matches ? 4 : 2;
  const spaceBetween = matches ? 18 : 16;

  const swiperId = sectionName?.trim()?.toLowerCase()?.replaceAll(' ', '_');
  const leftIconId = `${swiperId}-left`;
  const rightIconId = `${swiperId}-right`;

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-lg-wrapper w-full flex items-center">
        <div className=" hidden lg:block w-10 h-10 hover:opacity-90 -mt-16 cursor-pointer">
          <Icon
            id={leftIconId}
            iconName="LeftArrow"
            size={40}
            color={Colors.gold}
          />
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: `#${rightIconId}`,
            prevEl: `#${leftIconId}`,
          }}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          className={'w-full'}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product}  />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden lg:block w-10 h-10 -mt-16 hover:opacity-90 cursor-pointer">
          <Icon
            id={rightIconId}
            iconName="RightArrow"
            size={40}
            color={Colors.gold}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsCarusel;
