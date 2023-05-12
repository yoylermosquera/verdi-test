import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../icon';
import { Colors } from '@/styles/config/base';

interface ProductCardProps {
  id?: string;
  img1: any;
  img2: any;
  img3: any;
  title1: string;
  title2: string;
  title3: string;
  folderTitle: string;
  productsAmmount: string;
}

function FolderCard({
  id,
  img1,
  img2,
  img3,
  title1,
  title2,
  title3,
  folderTitle,
  productsAmmount,
}: ProductCardProps) {
  return (
    <article
      className={`h-[14.125rem] max-h-[16.65rem]  lg:h-[13.25rem] lg:max-h-[500px] w-full flex flex-col`}
      key={id}
    >
      <section className="h-3/5 lg:h-4/5 relative flex flex-row">
        <section className="h-full w-3/5">
          <Image
            className="w-full h-full object-fill"
            src={img1}
            alt={title1}
          />
        </section>

        <section className="h-full w-2/5 flex flex-col gap-0">
          <Image className="w-full h-3/5 object-fill" src={img2} alt={title2} />
          <Image className="w-full h-2/5 object-fill" src={img3} alt={title3} />
        </section>

        <div className="bg-blend-multiply bg-black30 w-[1.875rem] h-[1.875rem] absolute bottom-0 right-0 pl-1 pt-1 flex justify-center items-center ">
          <Icon
            iconName="ThreeDots"
            color={Colors.beige}
            size={24}
            className="mx-auto"
          />
        </div>
      </section>
      <section className=" h-2/5 lg:h-1/5 pt-4">
        <h2 className="text-input font-normal uppercase mb-1">{folderTitle}</h2>
        <p className="text-font_10">{productsAmmount} productos</p>
      </section>
    </article>
  );
}

export default FolderCard;
