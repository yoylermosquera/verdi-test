import RangeSlider from '@/components/rangeSlider';
import { PriceRangeFilter } from '@/context/app/actions';
import { useAppContext, useAppContextSelector, useDebounce } from '@/hooks';
import React, { useEffect, useState } from 'react';
import { CategoryFiltersProps } from '.';

function Range({
  filter,
  showTitle = true,
  navigateToFilterPage,
  shouldNavigateToFilterPage,
}: CategoryFiltersProps) {
  const { dispatch } = useAppContext();

  const [stateValues, setStateValues] = useState<PriceRangeFilter>({
    min: 0,
    max: 1000,
  })

  const { minPrice, maxPrice } = useAppContextSelector((state) => state.filters);

  const debouncedValue = useDebounce<PriceRangeFilter>(stateValues, 500);

  useEffect(() => {
    if (!debouncedValue) return;

    if (navigateToFilterPage && shouldNavigateToFilterPage) {
      navigateToFilterPage();
    }
    dispatch({
      type: 'FILTERS_ADD_PRICE_RANGE',
      payload: debouncedValue,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter;

  // const handleChange = (value: PriceRangeFilter) => {
  //   if (navigateToFilterPage && shouldNavigateToFilterPage) {
  //     navigateToFilterPage();
  //   }
  //   dispatch({
  //     type: 'FILTERS_ADD_PRICE_RANGE',
  //     payload: value,
  //   });
  // };

  return (
    <section>
      {showTitle && (
        <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
      )}
      <div className="pl-4  w-full">
        <RangeSlider
          min={0}
          max={1000}
          value={[minPrice!, maxPrice!]}
          onChange={(values) => {
            if (Array.isArray(values)) {
              const [min, max] = values;
              setStateValues({
                min,
                max,
              });
            }
          }}
        />
      </div>
    </section>
  );
}

export default Range;
