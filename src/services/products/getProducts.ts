import { API } from '@/helpers/axios';
import {
  DataResponse,
  IPagination,
  IProductFitler,
} from '@/interfaces';
import { IProductFilter } from '@/interfaces/product';
import { createQueryParamsFromObject } from '@/util/url';

type GetProductResponse = DataResponse<{
  count: number;
  rows: IProductFilter[];
}>;

export type getProductsParams = {
  query?: IPagination;
  filters?: IProductFitler;
};
export const getProducts = (params: getProductsParams, token?: string) => {
  const query = params.query
    ? `?${createQueryParamsFromObject(params.query)}`
    : '';
  return API.post<GetProductResponse>(`/products/search/${query}`, {}, {
    headers: {
      Authorization: `${token}`,
    },
  });
};