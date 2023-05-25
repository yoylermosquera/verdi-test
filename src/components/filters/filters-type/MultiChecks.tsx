import React from 'react';
import CheckBox from '@/components/checkbox';
import useAppContext from '@/hooks/useAppContext';
import { CategoryFiltersProps } from '.';
import {
  getActionTypeByFilterKey,
  IFilterValue,
} from '../../../context/app/actions';
import { useRouter } from 'next/router';

export function MultiChecks({
  filter,
  showTitle = true,
  isFromSideBar = false,
  navigateToFilterPage,
  shouldNavigateToFilterPage,
}: CategoryFiltersProps) {
  const { dispatch, state } = useAppContext();

  const { filters } = state;

  if (!filter?.type) return null;

  const checkList: IFilterValue[] =
    (filters as any)[filter?.filterKey! || 'characteristics'] || [];

  const { name, characteristics = [] } = filter;

  const handleChange = (value: IFilterValue) => {
    const actionType = getActionTypeByFilterKey(filter?.filterKey!);

    // navigate to the filter page and apply filter

    if (navigateToFilterPage && shouldNavigateToFilterPage) {
      navigateToFilterPage();
    }

    dispatch({
      type: actionType as any,
      payload: value,
    });
  };

  return (
    <section>
      {showTitle && (
        <h3 className="uppercase text-title mb-[1.125rem]">{name}</h3>
      )}
      <div className="px-4 flex flex-col gap-7 ">
        {characteristics?.map((item, index) => {
          const checked = checkList?.some((i) => i.id === item?.id);
          return (
            <div key={index} className="flex gap-3">
              <CheckBox
                checked={checked}
                onChange={() =>
                  handleChange({
                    id: item?.id,
                    name: item?.name,
                    filterKey: filter?.filterKey!,
                    categoryId: filter?.categoryId,
                    categoryKey: filter?.categoryKey,
                  })
                }
              />
              <span className="text-title">{item?.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MultiChecks;
