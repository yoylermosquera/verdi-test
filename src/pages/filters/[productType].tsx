import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { NextPageWithLayout } from '../_app';

// hooks
import {
  useAppContext,
  useMediaQuery,
  useIsMounted,
  useProducts,
} from '@/hooks';

// components
import { Button, FetchWrapper, Icon } from '@/components';
import FolderTypeHero from '@/components/folders/folderTypeHero';
import CategorySection from '@/components/sidebar/CategorySections';
import CategoryFilters from '@/components/sidebar/CategoryFilters';
import ProductCard from '@/components/productCard';
import productSample from '@/assets/images/examples/productSample.png';
import NoContentContainer from '@/components/noContent';
import SectionSlider from '@/components/sectionSlider';
import FilterTag from '@/components/filters/FilterTag';
import { BaseLayout } from '@/components/layouts';
import FilterFAB from '@/components/filters/FilterFAB';

// utils
import {
  getAllTagsFromFilters,
  mapIFitlersStateToRequestFilters,
} from '@/util/filters';
import { getAllFiltersByCategory } from '@/util';

// services
import {
  getAllCategoriesAndFilters,
  getCategoryByIdOrKey,
} from '@/services/categories/getCateriesAndFilters';
import { Categorie } from '@/services/categories/getCateriesAndFilters';
import FiltersModalMobile from '@/components/filters/FiltersModalMobile';

const mockData = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  title: `Tapete Heritage - ${i + 1}`,
  description: 'Crin de caballo tejido',
  img: productSample,
}));

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ProductFilterPage: NextPageWithLayout<Props> = ({ category }) => {
  const router = useRouter();

  const { state } = useAppContext();

  const isMobile = useMediaQuery('(max-width: 768px)');

  const [showFiltersSections, setShowFilters] = useState(true);

  const isMounted = useIsMounted();

  const { fetchProducsts, data: productsData, error, loading } = useProducts();

  const { filters } = getAllFiltersByCategory(category!, state.colors);

  const tags = getAllTagsFromFilters(state.filters);

  const products: typeof mockData =
    productsData?.rows?.map((product) => ({
      id: product.id,
      title: product.name,
      description: product.description,
      img: mockData[0].img,
    })) || [];

  const showFilters = showFiltersSections && !isMobile;

  useEffect(() => {
    if (!isMounted()) return;

    // const filtersToRequest =
    fetchProducsts({
      filters: mapIFitlersStateToRequestFilters(state.filters),
    });
  }, [state.filters, fetchProducsts, isMounted]);

  return (
    <div className="h-full flex flex-col grow items-center pb-6">
      <div className="w-full max-w-lg-wrapper">
        <div className="hidden lg:block lg:mt-6 lg:mb-4 ">
          <FolderTypeHero
            description={category?.name}
            folderIconName="RugsCarpet"
          />
        </div>

        <div className="hidden lg:flex  justify-end w-full mb-6">
          <Button variant="white" onClick={() => setShowFilters(!showFilters)}>
            <div className="flex items-center gap-5 justify-between ">
              <Icon iconName={showFilters ? 'Close' : 'Filter'} size={20} />
              <span>FILTER</span>
            </div>
          </Button>
        </div>
        <section className={`grid grid-cols-4 mb-6`}>
          {showFilters ? (
            <>
              {filters.map((filter, idx) => {
                return (
                  <div key={idx} className="w-full relative">
                    <CategorySection className="" categoryName={filter?.name}>
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
            </>
          ) : null}
        </section>

        {tags && tags.length > 0 ? (
          <section className="mb-6 overflow-scroll hide__scroll_bar">
            <div className="flex gap-y-3 gap-x-6 lg:flex-wrap  max-sm:gap-x-3 max-sm:pl-4 ">
              {tags.map((filterValue: any) => (
                <FilterTag {...filterValue} key={filterValue.id} />
              ))}
            </div>
          </section>
        ) : null}

        {/* Filter on mobile sections */}
        <FilterFAB
          onClick={() => {
            setShowFilters(true);
          }}
        />

        {/* Filters Modal */}
        {showFiltersSections && isMobile && (
          <FiltersModalMobile
            open={showFiltersSections}
            onClose={() => setShowFilters(false)}
            filters={filters}
          />
        )}

        {/* Products resutls */}

        <FetchWrapper
          states={{
            loading: loading,
            error: Boolean(error),
            // success: products?.length > 0,
          }}
          succesComponent={
            <>
              {products?.length > 0 ? (
                <section className="max-sm:grid-cols-2 max-sm:px-4 max-sm:gap-4 grid grid-cols-4 gap-10">
                  {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
                </section>
              ) : (
                <section className="w-full">
                  <div className="w-full flex justify-center">
                    <NoContentContainer
                      title="Lo sentimos"
                      description="No encontramos resultados con esta búsqueda"
                      linkText="Filtrar nuevamente"
                      onClicklink={() => {
                        console.log('filter again');
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <SectionSlider
                      sectionTitle="Te pueden interesar"
                      products={mockData}
                    />
                  </div>
                </section>
              )}
            </>
          }
        />
      </div>
    </div>
  );
};

ProductFilterPage.getLayout = (page) => {
  return <BaseLayout title="Filters">{page}</BaseLayout>;
};

export default ProductFilterPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await getAllCategoriesAndFilters();
  const { data: categories = [] } = data;
  return {
    paths: categories?.map(({ key }) => ({
      params: { productType: `${key}` },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<
  { category: Categorie },
  any
> = async ({ params }) => {
  const { productType = '' } = params as { productType: string };

  try {
    const { data } = await getCategoryByIdOrKey(productType);

    const category = data.data;

    return {
      props: {
        category,
      },
      //   revalidate: 60 * 60 * 24,
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};
