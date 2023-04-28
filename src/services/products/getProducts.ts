import { API } from "@/helpers/axios";
import { DataResponse, IProduct } from "@/interfaces";

type GetProductResponse = DataResponse<IProduct[]>

export const getProducts = () => {
    return API.get<GetProductResponse>(`/products`)
}
