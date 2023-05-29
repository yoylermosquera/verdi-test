import { Color } from '@/services/categories/colors';
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
  filterKey: FilterKey;
  categoryId: string;
  categoryKey: string;
};

export type ColorFilter  = IFilterValue &  {
  hexacode: string;
}

export type PriceRangeFilter = IFilterValue & {
  minPrice?: number
  maxPrice?:number
}

export type ActionType =
  | {
      type: 'GET_ALL_CATEGORIES_AND_FILTERS';
      payload: Categorie[];
    }
    | {
      type: 'GET_ALL_COLORS';
      payload: Color[];
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
    }
  | {
      type: 'FILTERS_ADD_BEST_SELLER';
    }
  | {
      type: 'FILTERS_ADD_COLOR';
      payload: ColorFilter
    }
  | {
      type: 'FILTERS_ADD_PRICE_RANGE';
      payload: PriceRangeFilter
    }


export const getActionTypeByFilterKey = (filterKey: FilterKey) => {
  if (!filterKey) return actionTypeNameList.FILTERS_ADD_CHARACTERISTIC;

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
