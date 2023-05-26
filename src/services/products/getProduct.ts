import { API } from "@/helpers/axios";
import { DataResponse, IProduct } from "@/interfaces";
import { APIServer } from '../../helpers/axios';

type GetProductResponse = DataResponse<IProduct>

export const getProductByIdServer = (id: string, token: string) => {
    return APIServer.get<GetProductResponse>(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export const getProductById = (id: string, token: string) => {
    return API.get<GetProductResponse>(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}


