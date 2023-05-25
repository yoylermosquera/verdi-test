import { APIServer } from "@/helpers/axios";
import { DataResponse } from "@/interfaces/dataResponse";

export const getAllCategoriesAndFilters = () => {
    return APIServer.get<GetCategoriesResponse>('/categories')
}

export const getCategoryByIdOrKey = (idOrKey: string) => {
    return APIServer.get<GetCategoryResponse>(`/categories/${idOrKey}`)
}


type GetCategoriesResponse = DataResponse<Categorie[]>

type GetCategoryResponse = DataResponse<Categorie>

export interface Categorie {
    id:          string;
    name:        string;
    key:         string;
    icon:        string;
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
    filterKey?: FilterKey;
    categoryId: string;
    categoryKey: string
}

export interface Characteristic {
    id:   string;
    name: string;
    key?:  string;
    colorValue?: string;
}
