/* eslint-disable react-hooks/exhaustive-deps */
import RangeSlider from '@/components/rangeSlider';
import { PriceRangeFilter } from '@/context/app/actions';
import {
  useAppContext,
  useAppContextSelector,
  useDebounce,
  useIsMounted,
} from '@/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { CategoryFiltersProps } from '.';

function Range({
  filter,
  showTitle = true,
  navigateToFilterPage,
  shouldNavigateToFilterPage,
}: CategoryFiltersProps) {
  const { dispatch } = useAppContext();

  const firtsSliderRelaseRef = useRef(true);

  const { minPrice = 0, maxPrice = 0 } = useAppContextSelector(
    (state) => state?.filters?.prices || {},
  );

  const [stateValues, setStateValues] = useState<{
    min: number;
    max: number;
  }>({
    min: minPrice!,
    max: maxPrice!,
  });

  const mounted = useIsMounted();

  useEffect(() => {
    if (!mounted()) return;

    if (firtsSliderRelaseRef.current) {
      return;
    }

    const timeOut = setTimeout(() => {
      if (navigateToFilterPage && shouldNavigateToFilterPage) {
        navigateToFilterPage();
      }
      dispatch({
        type: 'FILTERS_ADD_PRICE_RANGE',
        payload: {
          minPrice: stateValues?.min!,
          maxPrice: stateValues?.max!,
          categoryId: filter?.categoryId!,
          filterKey: 'prices',
          categoryKey: filter?.categoryKey!,
          name: filter?.name!,
          id: filter?.id!,
        },
      });
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [stateValues, mounted]);

  if (!filter?.type) return null;

  const { name } = filter;

  return (
    <section>
      {showTitle && (
        <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
      )}
      <div className="pl-4  w-full">
        <RangeSlider
          min={0}
          max={1000}
          value={[stateValues?.min!, stateValues?.max!]}
          onChange={(values) => {
            if (Array.isArray(values)) {
              const [min, max] = values;

              firtsSliderRelaseRef.current = false;
              setStateValues({
                min,
                max,
              });
            }
          }}
          onFocus={() => {
            console.log('focus');
          }}
          onBlur={() => {
            console.log('blur');
          }}
        />
      </div>
    </section>
  );
}

export default Range;
