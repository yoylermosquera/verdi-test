import { StaticImageData } from 'next/image';

import productSample from '@/assets/images/examples/productSample.png';
import { CharacteristicsProduct, ListTags, ProductSwipe } from './';
import Icon from '../icon';
import { IProduct, ITag } from '@/interfaces';

interface Props {
  code: number;
  name: string;
  description: string;
  iconSize: number;
  imgs?: StaticImageData[];
  product: IProduct;
  tags: ITag[];
}

export const ProductInfo = ({
  code,
  name,
  imgs,
  description,
  iconSize,
  product,
  tags,
}: Props) => {
  imgs = [productSample, productSample, productSample, productSample];

  return (
    <section className="relative lg:flex lg:pt-10 lg:px-[10rem] 2xl:px-[40rem] lg:gap-10 lg:h-96">
      <div className="mx-5 overflow-hidden lg:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-paragraph font-normal uppercase">{name}</h1>
          <div className="flex gap-5 items-center">
            <h1 className="text-sm italic uppercase">CODE {code}</h1>
            <Icon iconName="Heart" color="black" size={iconSize} />
          </div>
        </div>
        <h1 className="text-title">{description}</h1>
      </div>

      <div className="relative flex flex-row w-full lg:flex-col lg:flex-grow lg:min-h-full lg:overflow-hidden">
        {/* Product Images */}
        <ProductSwipe imgs={imgs} />

        {/* Tags */}
        <ListTags tags={tags} className='hidden lg:flex' />
      </div>
      
      <div className="hidden flex-col gap-4 w-full lg:flex lg:w-[40%] lg:flex-shrink-0 overflow-hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-paragraph font-normal uppercase">{name}</h1>
          <div className="flex gap-5 items-center">
            <h1 className="text-sm italic uppercase">CODE {code}</h1>
            <Icon iconName="Heart" color="black" size={iconSize} />
          </div>
        </div>
        <h1 className="text-title">{description}</h1>

        {/* Characteristics */}
        <CharacteristicsProduct
          minMeasure={product.minMeasure}
          maxMeasure={product.maxMeasure}
          minPrice={product.minPrice}
          maxPrice={product.maxPrice}
          tags={tags}
          className='pt-9'
        />
      </div>
    </section>
  );
};
