import { Colors } from '@/styles/config/base';
import React from 'react';
import { FilterKey } from '../../services/categories/getCateriesAndFilters';
import Icon from '../icon';
import {
  getActionTypeByFilterKey,
  IFilterValue,
} from '../../context/app/actions';
import useAppContext from '@/hooks/useAppContext';

interface FilterTagProps {
  id?: string;
  name?: string;
  FilterKey?: FilterKey;
}

function FilterTag({ id, name, filterKey, categoryId }: IFilterValue) {
  const { dispatch } = useAppContext();

  const handleDeleteTag = () => {
    const actionType = getActionTypeByFilterKey(filterKey!);
    dispatch({
      type: actionType as any,
      payload: {
        id,
        name,
        filterKey,
        categoryId
      },
    });
  };

  return (
    <div
      className={`h-8 border gap-6 border-gold px-3 flex items-center flex-shrink-0 max-sm:rounded-sm`}
    >
      <p className="flex-grow">{name}</p>
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
