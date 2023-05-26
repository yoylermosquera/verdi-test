import { APIServer } from "@/helpers/axios";
import { DataResponse } from "@/interfaces";

export const getAllColors = () => {
    return APIServer.get<ColorsResponse>(`/colors`)
}

type ColorsResponse = DataResponse<Color[]>

export interface Color {
    id:          string;
    name:        string;
    hexadecimal: string;
    createdAt:   string | null;
    updatedAt:   string | null;
    deletedAt:   string | null;
}
