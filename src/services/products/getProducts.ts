import { API } from '@/helpers/axios';
import { DataResponse, IProducts } from '@/interfaces';

type GetProductResponse = DataResponse<IProducts>;

export const getProducts = () => {
  return API.post<GetProductResponse>(`/products`);
};
