import React from 'react';
import ProductsCarusel from '../swiper/ProductsCarusel';

interface SectionSliderProps {
  sectionTitle: string;
  products: {
    id: string;
    // Corregir el "any" dentro de img. By:Dennis
    img: any;
    title: string;
    description: string;
  }[];
}
function SectionSlider({ products, sectionTitle }: SectionSliderProps) {
  return (
    <section className="w-full mt-6 lg:mt-9 flex flex-col items-center">
      <h2 className="mb-7 uppercase text-title">{sectionTitle}</h2>
      <ProductsCarusel sectionName={sectionTitle} products={products} />
    </section>
  );
}

export default SectionSlider;
