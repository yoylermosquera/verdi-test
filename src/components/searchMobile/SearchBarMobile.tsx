import React, { useEffect, useState } from 'react';
import { productsMockData } from '@/util/products';
import Input from '../input';
import ReturnContainer from '../returnContainer';
import SearchProductsResults from './SearchProductsResults';
import useProducts from '@/hooks/data/useProducts';
import useDebounce from '@/hooks/useDebounce';

function SearchBarMobile() {
  const [search, setSearch] = useState('');

  const debouncedValue = useDebounce<string>(search, 500);

  const [showProductsResults, setShowProductsResults] = useState(false);

  const { fetchProducsts, data, error } = useProducts();

  useEffect(() => {
    if (!debouncedValue) return;

    if (!showProductsResults) setShowProductsResults(true);

    fetchProducsts({
      query: {
        search: debouncedValue,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, fetchProducsts]);

  const loadingProducts = !data && !error;
  const errorLoadingProducts = error;

  return (
    <section className="absolute animate__animated w-full z-[100] md:hidden pt-6 px-4 h-full bg-white">
      <ReturnContainer className="mb-6">
        <div>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="BUSCAR"
          />
        </div>
      </ReturnContainer>
      {showProductsResults && (
        <SearchProductsResults
          isLoading={loadingProducts}
          error={errorLoadingProducts}
          products={
            data?.rows?.map((product) => {
              return {
                title: product.name,
                id: product.id,
                description: product.description,
                img: productsMockData[0].img,
              };
            }) as any
          }
        />
      )}
    </section>
  );
}

export default SearchBarMobile;
