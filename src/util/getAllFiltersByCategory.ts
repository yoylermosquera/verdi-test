import {
  Categorie,
  CategoryFilter,
} from '@/services/categories/getCateriesAndFilters';
import { removeDuplicateByKey } from './array';

export const getAllFiltersByCategory = (category: Categorie) => {
  if (!category)
    return {
      filters: [],
    };

  const materialList = category?.collections?.reduce((acc, cur) => {
    return [...acc, ...cur.materials];
  }, [] as Categorie['filters']);

  const material: CategoryFilter = {
    name: 'Material',
    characteristics: removeDuplicateByKey(materialList!, 'name'),
    id: '',
    type: 'MultiChecks',
  };

  const collectionsList = category?.collections?.map((item) => {
    return {
      name: item.name,
      id: item.id,
    };
  });

  const collections: CategoryFilter = {
    name: 'Collections',
    characteristics: removeDuplicateByKey(collectionsList!, 'name'),
    id: '',
    type: 'MultiChecks',
  };

  const filters = [material, collections, ...category?.filters];

  return {
    filters,
  };
};
