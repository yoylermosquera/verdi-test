import { API } from "@/helpers/axios";
import { DataResponse, IProduct } from "@/interfaces";

type GetProductResponse = DataResponse<IProduct>

export const getProductById = (id: string) => {
    return API.get<GetProductResponse>(`/products/${id}`)
}
