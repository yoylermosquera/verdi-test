import { Categorie } from '@/services/categories/getCateriesAndFilters';

export type ActionType = {
  type: 'GET_ALL_CATEGORIES_AND_FILTERS';
  payload: Categorie[];
};

type State = {
  categories?: Categorie[];
};

export const AppReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES_AND_FILTERS':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
