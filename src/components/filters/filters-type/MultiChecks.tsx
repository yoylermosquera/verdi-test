import React from 'react';
import CheckBox from '@/components/checkbox';
import useAppContext from '@/hooks/useAppContext';
import { CategoryFiltersProps } from '.';
import { getActionTypeByFilterKey, IFilterValue } from '../../../context/app/actions';

export function MultiChecks({
  filter,
  showTitle = true,
}: CategoryFiltersProps) {
  const { dispatch, state } = useAppContext();
  const { filters } = state;

  const checkList: IFilterValue[] = (filters as any)[filter?.filterKey!] || [];

  if (!filter?.type) return null;

  const { name, characteristics = [] } = filter;

  const handleChange = ( value : { id: string, name: string }) => {
    const actionType = getActionTypeByFilterKey(filter?.filterKey!);
    // console.log({
    //   actionType,
    //   value,
    // })

    dispatch({
      type: actionType as any,
      payload: value,
    });
  };

  console.log({ checkList });

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
                onChange={() => handleChange({
                  id: item?.id,
                  name: item?.name,
                })}
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
