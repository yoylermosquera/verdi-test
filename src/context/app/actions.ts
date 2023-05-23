import { Categorie } from '@/services/categories/getCateriesAndFilters';
import { FilterKey } from '../../services/categories/getCateriesAndFilters';

const actionTypeNameList = {
  FILTERS_ADD_CATEGORY: 'FILTERS_ADD_CATEGORY',
  FILTERS_ADD_COLLECTION: 'FILTERS_ADD_COLLECTION',
  FILTERS_ADD_MATERIAL: 'FILTERS_ADD_MATERIAL',
  FILTERS_ADD_CHARACTERISTIC: 'FILTERS_ADD_CHARACTERISTIC',
};

export type IFilterValue = {
    name: string;
    id: string;
}
  

export type ActionType =
  | {
      type: 'GET_ALL_CATEGORIES_AND_FILTERS';
      payload: Categorie[];
    }
  | {
      type: 'TOGGE_SEACH_SECTION_MOBILE';
    }
  | {
      type: 'FILTERS_ADD_CATEGORY';
      payload: IFilterValue;
    }
  | {
      type: 'FILTERS_ADD_COLLECTION';
      payload: IFilterValue;
    }
  | {
      type: 'FILTERS_ADD_MATERIAL';
      payload: IFilterValue;
    }
  | {
      type: 'FILTERS_ADD_CHARACTERISTIC';
      payload: IFilterValue;
    };

export const getActionTypeByFilterKey = (filterKey: FilterKey)  => {
  switch (filterKey) {
    case 'categories':
      return actionTypeNameList.FILTERS_ADD_CATEGORY;
    case 'collections':
      return actionTypeNameList.FILTERS_ADD_COLLECTION;
    case 'materials':
      return actionTypeNameList.FILTERS_ADD_MATERIAL;
    case 'characteristics':
      return actionTypeNameList.FILTERS_ADD_CHARACTERISTIC;
    default:
      return actionTypeNameList.FILTERS_ADD_CHARACTERISTIC;
  }
};
