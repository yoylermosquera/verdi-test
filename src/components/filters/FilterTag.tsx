import React from 'react';
import { Colors } from '@/styles/config/base';
import Icon from '../icon';
import {
  getActionTypeByFilterKey,
  IFilterValue,
} from '../../context/app/actions';
import useAppContext from '@/hooks/useAppContext';
import { ColorCircle } from './filters-type/Colors';

function FilterTag(props: IFilterValue) {
  const { filterKey, name, categoryId, categoryKey, id } = props;

  const { dispatch } = useAppContext();
  const handleDeleteTag = () => {
    if (filterKey === 'prices') {
      const actionType = getActionTypeByFilterKey(filterKey!);
      dispatch({
        type: actionType as any,
        payload: {
          id,
          name,
          filterKey,
          categoryId,
        } as IFilterValue,
      });
      return;
    }

    if (filterKey === 'colors') {
      dispatch({
        type: 'FILTERS_ADD_COLOR',
        payload: props as any,
      });
      return;
    }

    const actionType = getActionTypeByFilterKey(filterKey!);
    dispatch({
      type: actionType as any,
      payload: {
        id,
        name,
        filterKey,
        categoryId,
      } as IFilterValue,
    });
  };

  const colorCode =
    filterKey === 'colors' ? (props as any)?.hexacode || undefined : undefined;
  const nameToShow =
    filterKey === 'prices'
      ? `${(props as any)?.minPrice} - ${(props as any)?.maxPrice}`
      : name;

  return (
    <div
      className={`h-8 border gap-6 border-gold px-3 flex items-center flex-shrink-0 max-sm:rounded-sm`}
    >
      {filterKey === 'colors' && colorCode ? (
        <div className="flex-grow flex gap-1">
          <ColorCircle colorCode={colorCode} onClick={handleDeleteTag} />
          <p>{nameToShow}</p>
        </div>
      ) : (
        <p className="flex-grow">{nameToShow}</p>
      )}

      <div>
        <Icon
          iconName="Close"
          size={12}
          className="cursor-pointer"
          onClick={handleDeleteTag}
          color={Colors.gold}
        />
      </div>
    </div>
  );
}

export default FilterTag;
