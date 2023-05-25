import React from 'react';
import CheckBox from '@/components/checkbox';
import { useAppContext } from '@/hooks';
import { CategoryFiltersProps } from '.';
import { ID_BEST_SELLER_FILTER } from '@/helpers/filters';

function OnlyCheck({ filter, showTitle = true, navigateToFilterPage, shouldNavigateToFilterPage }: CategoryFiltersProps) {
  const { dispatch, state } = useAppContext();

  const { isBestSeller } = state.filters

  if (!filter?.type) return null;

  const { name = [] } = filter;

  const isBestSellerFilter = filter?.id === ID_BEST_SELLER_FILTER;

  const handleChange = () => {
    if(isBestSellerFilter) {

      if (navigateToFilterPage && shouldNavigateToFilterPage) {
        navigateToFilterPage();
      }

      dispatch({
        type: 'FILTERS_ADD_BEST_SELLER',
      })
    }
  }

  return (
    <section >
      <div className="flex justify-between items-center ">
        {showTitle && (
          <h3 className="uppercase text-title">{name}</h3>
        )}
          <CheckBox 
            // TODO Leer el campo que corresponda.
            checked={isBestSellerFilter ? isBestSeller : undefined}
            onChange={handleChange}
          />
      </div>
    </section>
  );
}

export default OnlyCheck;
