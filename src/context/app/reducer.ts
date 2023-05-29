import { Color } from '@/services/categories/colors';
import { Categorie } from '@/services/categories/getCateriesAndFilters';
import {
  AddOrRemoveValueFromArarysByKey,
} from '@/util/array';
import { ActionType, ColorFilter, IFilterValue, PriceRangeFilter } from './actions';

export type State = {
  categories?: Categorie[];
  colors: Color[];
  showSearchSection: boolean;
  filters: {
    // categories: IFilterValue[];
    prices?: {
      name?: string
      minPrice?: number;
      maxPrice?: number;
      filterKey?: string
    };
    isBestSeller?: boolean;
    collections: IFilterValue[];
    materials: IFilterValue[];
    characteristics: IFilterValue[];
    colors: ColorFilter[];
  };
};

export const initialState: State = {
  showSearchSection: false,
  categories: undefined,
  colors: [],
  filters: {
    // prices: {
    //   name: 'Prices',
    //   minPrice: undefined,
    //   maxPrice: undefined,
    // },
    isBestSeller: undefined,
    colors: [],
    collections: [],
    materials: [],
    characteristics: [],
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
    case 'GET_ALL_COLORS':
      return {
        ...state,
        colors: action.payload,
      };

    // FILTERS
    // case 'FILTERS_ADD_CATEGORY':
    //   return {
    //     ...state,
    //     filters: {
    //       ...state.filters,
    //       categories: AddOrRemoveValueFromArarysByKey(
    //         action.payload,
    //         state.filters.categories,
    //         'id',
    //       ),
    //     },
    //   };

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
    case 'FILTERS_ADD_CHARACTERISTIC':
      return {
        ...state,
        filters: {
          ...state.filters,
          characteristics: AddOrRemoveValueFromArarysByKey(
            action.payload,
            state.filters.characteristics,
            'id',
          ),
        },
      };

    case 'FILTERS_ADD_CHARACTERISTIC':
      return {
        ...state,
        filters: {
          ...state.filters,
          characteristics: AddOrRemoveValueFromArarysByKey(
            action.payload,
            state.filters.characteristics,
            'id',
          ),
        },
      };

    case 'FILTERS_ADD_BEST_SELLER':
      return {
        ...state,
        filters: {
          ...state.filters,
          isBestSeller: !state.filters.isBestSeller,
        }
      }

      case 'FILTERS_ADD_COLOR':
        return {
          ...state,
          filters: {
            ...state.filters,
            colors: AddOrRemoveValueFromArarysByKey(
              action.payload,
              state.filters.colors,
              'id',
            ),
          },
        };

      case 'FILTERS_ADD_PRICE_RANGE':
        console.log(action.payload.name);
        return {
          ...state,
          filters: {
            ...state.filters,
            prices: {
              minPrice: action.payload.minPrice,
              maxPrice: action.payload.maxPrice,
              name: action.payload.name,
              filterKey: action.payload.filterKey
            }
          },
        };

    default:
      return state;
  }
};
