import { API } from "@/helpers/axios";
import { DataResponse } from "@/interfaces/dataResponse";

export const getAllCategoriesAndFilters = () => {
    return API.get<GetCategoriesResponse>('/categories')
}

type GetCategoriesResponse = DataResponse<Categorie[]>

export interface Categorie {
    id:          string;
    name:        string;
    key:         string;
    createdAt:   string;
    updatedAt:   string;
    deletedAt:   null | string;
    collections?: Collection[];
    filters:     CategoryFilter[];
}

export interface Collection {
    id:        string;
    name:      string;
    materials: CategoryFilter[];
}

type CategoryFilterType = 'OnlyCheck' | 'MultiChecks' | 'Colors' | 'Range' | 'MultiCheck';

export type FilterKey = 'categories' | 'collections' | 'materials' | 'colors' | 'characteristics';
export interface CategoryFilter {
    id:               string;
    name:             string;
    type:             null | CategoryFilterType;
    characteristics?: Characteristic[];
    filterKey?: FilterKey
}

export interface Characteristic {
    id:   string;
    name: string;
    key?:  string;
}
