import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import Icon from '../icon';


interface ProductCardProps {
  id: string;
  // img no debería ser string. Revisar eso... Se procede a cambiar a "any. BY: Dennis" 
  img: any;
  // img: string | StaticImport;
  title: string;
  description: string;
}


function ProductCard({
  img,
  id,
  title,
  description,
}: ProductCardProps) {
  const matches = useMediaQuery('(min-width: 768px)');
  const iconSize = matches ? 16 : 20;

  return (
    <article
      className={`max-h-[16.65rem] h-56 lg:h-[20.75rem] lg:max-h-[500px] w-full flex flex-col`}
      key={id}
    >
      <section className="h-3/5 lg:h-4/5 relative">
        <Image
          className="w-full h-full object-fill"
          src={img}
          alt={title}
        />
        <div className="bg-blend-multiply bg-black30 w-6 h-6 absolute bottom-1 right-1 cursor-pointer flex justify-center items-center ">
          <Icon iconName="Heart" color="white" size={iconSize} />
        </div>
      </section>
      <section className=" h-2/5 lg:h-1/5 pt-5">
        <h2 className="text-input font-normal mb-4">{title}</h2>
        <p className="text-input">{description}</p>
      </section>
    </article>
  );
}

export default ProductCard;
