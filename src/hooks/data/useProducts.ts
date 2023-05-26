import { useCallback, useReducer, useRef } from 'react';
import { getProductsParams } from '@/services/products/getProducts';
import { IProductFilter } from '@/interfaces/product';
import { getProducts } from '../../services/products/getProducts';
import { handleRequestError } from '@/util';
import useAppContext from '../useAppContext';

interface State<T> {
  data?: T;
  error?: string;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: string };

type ProductsData = {
  count: number;
  rows: IProductFilter[];
};

export default function useProducts() {

  const { user } = useAppContext()
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<ProductsData> = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (
    state: State<ProductsData>,
    action: Action<ProductsData>,
  ): State<ProductsData> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchProducsts = useCallback(async (params: getProductsParams) => {
    dispatch({ type: 'loading' });
    try {
      const response = await getProducts(params, user?.token!);

      if (![200, 201].includes(response.status)) {
        throw new Error(response.statusText || 'Error loading products');
      }

      const { data } = response.data;

      if (cancelRequest.current) return;

      dispatch({ type: 'fetched', payload: data });
    } catch (error) {
      if (cancelRequest.current) return;
      const erroMsg = handleRequestError(error);
      dispatch({ type: 'error', payload: erroMsg });
    }
  }, [user]);

  return {
    ...state,
    fetchProducsts,
    loading: !state.data && !state.error,
  };
}
