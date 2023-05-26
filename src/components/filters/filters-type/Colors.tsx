import Icon from '@/components/icon';
import { useAppContext, useAppContextSelector } from '@/hooks';
import { Color } from '@/services/categories/colors';
import React from 'react';
import { CategoryFiltersProps } from '.';
import { ColorFilter } from '../../../context/app/actions';
export function Colors({ filter, showTitle = true, navigateToFilterPage, shouldNavigateToFilterPage }: CategoryFiltersProps) {

  const { dispatch } = useAppContext();
  const colors = useAppContextSelector((state) => state.filters.colors);

  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter;

  const handleChange = (value: ColorFilter) => {
    
    if (navigateToFilterPage && shouldNavigateToFilterPage) {
      navigateToFilterPage();
    }
    dispatch({
      type: 'FILTERS_ADD_COLOR',
      payload: value,
    })

  };

  return (
    <section>
      {showTitle && (
        <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
      )}
      <div className="h-7 pl-4 flex gap-4 w-full  overflow-x-auto hide__scroll_bar">
        {characteristics?.map((item, index) => {
          const isSelected = colors?.some((color) => color.id === item?.id);
          return (
            <div
              onClick={() =>
                handleChange({
                  id: item?.id,
                  name: item?.name,
                  hexacode: item?.colorValue!,
                  filterKey: filter?.filterKey!,
                  categoryId: filter?.categoryId,
                  categoryKey: filter?.categoryKey,
                })
              }
              style={{ backgroundColor: item?.colorValue }}
              key={index}
              className={`flex justify-center items-center cursor-pointer flex-shrink-0 w-6 h-6 rounded-2xl hover:border hover:border-white`}
            >
              {isSelected && (
                <span className="text-white text-sm">&#x2713;</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Colors;
