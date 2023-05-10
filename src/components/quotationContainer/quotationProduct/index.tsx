import React from 'react';
import Icon from '@/components/icon';
import { Colors } from '@/styles/config/base';
import Image from 'next/image';

interface FolderTypeContainerProps {
  img: any;
  imgTitle: string;
  productName?: string;
  productDescription?: string;
  quotationNumber?: string;
  className?: string;
}

function QuotationProduct({
  img,
  imgTitle,
  productName,
  productDescription,
  quotationNumber,
  className,
}: FolderTypeContainerProps) {
  return (
    <section
      className={`w-[20.5rem] h-[9.25rem] lg:w-[21.75rem] flex flex-row border-2 border-beige ${className}`}
    >
      <section className="w-2/5 h-full">
        <Image className="w-full h-full object-fill" src={img} alt={imgTitle} />
      </section>
      <section className="w-3/5 h-full flex flex-col gap-2 lg:gap-4  px-3 py-2">
        <section className="flex flex-row ">
          <span className="text-font_18 my-auto">
            {productName} #{quotationNumber}
          </span>
        </section>

        <section className="flex flex-col ">
          <span className="text-font_18 my-auto">DESCRIPCIÓN:</span>
          <p className="text-input text-left">{productDescription}</p>
        </section>

        <section className="flex flex-row justify-between">
          <span
            className="text-font_18 underline underline-offset-1 hover:cursor-pointer my-auto"
            onClick={() => {}}
          >
            Ver Cotización
          </span>
          <Icon size={24} iconName="TrashCan" color={Colors.goldDark} />
        </section>
      </section>
    </section>
  );
}

export default QuotationProduct;
