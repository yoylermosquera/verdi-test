import React from 'react';
import ProductCard from '../productCard';
import { IProductForCard } from '../../interfaces/product';
import NoContentContainer from '../noContent';
import Spinner from '../spinner';

interface SearchProductsResultsProps {
  isLoading?: boolean;
  error?: string;
  products: IProductForCard[];
  onClickLikeIcon?: (product: IProductForCard) => void;
}
function SearchProductsResults({
  isLoading,
  error,
  products,
  onClickLikeIcon
}: SearchProductsResultsProps) {
  return (
    <div className="w-full h-full">
      {!isLoading && !error && (
        <div className="flex justify-between items-center mb-5">
          <span className="text-paragraph">Resultado de la búsqueda</span>
          <span className="text-paragraph">{products?.length} Productos</span>
        </div>
      )}

      {isLoading && (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      )}

      {!isLoading && products.length === 0 && (
        <div className="w-full flex justify-center">
          <NoContentContainer
            title="Lo sentimos"
            description={error || 'No encontramos resultados con esta búsqueda'}
            linkText="Filtrar nuevamente"
            onClicklink={() => {
              console.log('filter again');
            }}
          />
        </div>
      )}

      {!isLoading && !error && products.length > 0 && (
        <div className="grid grid-cols-2 gap-5 lg:gap-8">
          {products.map((product, idx) => (
            <ProductCard lgMaxHeight='lg:max-h-[16.65rem]' key={idx} {...product} onClickLikeIcon={onClickLikeIcon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchProductsResults;
