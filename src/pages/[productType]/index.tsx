import React, { useState } from 'react';
import { NextPageWithLayout } from '../_app';
import { BaseLayout } from '../../components/layouts/BaseLayout';
import { useRouter } from 'next/router';
import FolderTypeHero from '@/components/folders/folderTypeContainer';
import CategorySection from '@/components/sidebar/CategorySections';
import useAppContext from '@/hooks/useAppContext';
import { getAllFiltersByCategory } from '../../util/getAllFiltersByCategory';
import CategoryFilters from '@/components/sidebar/CategoryFilters';
import ProductCard from '@/components/productCard';
import productSample from '@/assets/images/examples/productSample.png';
import NoProductsContainer from '@/components/folders/noProducts';
import NoContentContainer from '@/components/noContent';
import SectionSlider from '@/components/sectionSlider';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  img: productSample,
}));

const ProductFilterPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { categories } = useAppContext();

  const categoryKey = router.asPath.split('/').at(-1) || '';

  const category = categories?.find(
    (category) => category?.key === categoryKey,
  );

  const { filters } = getAllFiltersByCategory(category!);

  const products: typeof mockData = [];
  return (
    <div className="h-full flex flex-col grow items-center">
      <div className="w-full max-w-lg-wrapper">
        <div className="hidden lg:block lg:mt-6 lg:mb-4 ">
          <FolderTypeHero
            description="TAPETES"
            folderIconName="RugsCarpet"
          />
        </div>

        <section className="grid grid-cols-4 mb-6">
          {filters.map((filter, idx) => {
            return (
              <div key={idx} className="w-full">
                <CategorySection categoryName={filter?.name}>
                  <div className="flex flex-col bg-beige px-6 pt-5 pb-6 gap-6">
                    <CategoryFilters
                      showTitle={false}
                      key={idx}
                      filter={filter}
                    />
                  </div>
                </CategorySection>
              </div>
            );
          })}
        </section>

        {products?.length > 0 ? (
          <section className=" grid grid-cols-4 gap-10">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </section>
        ) : (
          <section className="w-full">
            <div className="w-full flex justify-center">
              <NoContentContainer
                title="Lo sentimos"
                description="No encontramos resultados 
                  con esta búsqueda"
                linkText="Filtrar nuevamente"
                onClicklink={() => {
                  console.log('filter again');
                }}
              />
            </div>
            <div className='w-full'>
              <SectionSlider sectionTitle="Te pueden interesar" products={mockData} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

ProductFilterPage.getLayout = (page) => {
  return <BaseLayout title="Perfil - Editar informacion">{page}</BaseLayout>;
};

export default ProductFilterPage;
