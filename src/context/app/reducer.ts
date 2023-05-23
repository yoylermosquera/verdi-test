import { Categorie } from '@/services/categories/getCateriesAndFilters';
import {
  AddOrRemoveValueFromArarysByKey,
  AddOrRemoveValueFromArray,
} from '@/util/array';
import { ActionType, IFilterValue } from './actions';

export type State = {
  categories?: Categorie[];
  showSearchSection: boolean;
  filters: {
    categories: IFilterValue[];
    collections: IFilterValue[];
    materials: IFilterValue[];
  };
};

export const initialState: State = {
  showSearchSection: false,
  categories: undefined,
  filters: {
    categories: [],
    collections: [],
    materials: [],
  },
};

export const AppReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES_AND_FILTERS':
      return {
        ...state,
        categories: action.payload,
      };

    //VISUAL
    case 'TOGGE_SEACH_SECTION_MOBILE':
      return {
        ...state,
        showSearchSection: !state.showSearchSection,
      };

    // FILTERS
    case 'FILTERS_ADD_CATEGORY':
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: AddOrRemoveValueFromArarysByKey(
            action.payload,
            state.filters.categories,
            'id',
          ),
        },
      };

    case 'FILTERS_ADD_COLLECTION':
      return {
        ...state,
        filters: {
          ...state.filters,
          collections: AddOrRemoveValueFromArarysByKey(
            action.payload,
            state.filters.collections,
            'id',
          ),
        },
      };

    case 'FILTERS_ADD_MATERIAL':
      const newMaterials = AddOrRemoveValueFromArarysByKey(
        action.payload,
        state.filters.materials,
        'id',
      )
      console.log(
        'payload',
        action.payload,
        newMaterials
      )
      return {
        ...state,
        filters: {
          ...state.filters,
          materials: AddOrRemoveValueFromArarysByKey(
            action.payload,
            state.filters.materials,
            'id',
          ),
        },
      };

    default:
      return state;
  }
};
