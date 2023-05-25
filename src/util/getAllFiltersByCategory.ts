import { Color } from '@/services/categories/colors';
import {
  Categorie,
  CategoryFilter,
} from '@/services/categories/getCateriesAndFilters';
import { removeDuplicateByKey } from './array';

export const getAllFiltersByCategory = (
  category: Categorie,
  colors: Color[],
) => {
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
    filterKey: 'materials',
    categoryId: category.id,
    categoryKey: category.key,
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
    filterKey: 'collections',
    categoryId: category.id,
    categoryKey: category.key,
  };

  const defaultFilter: CategoryFilter[] =
    category?.filters?.map((item) => {
      return {
        ...item,
        categoryId: category.id,
        categoryKey: category.key,
      };
    }) || [];

  const colorsCharacteristics = colors.map((color) => {
    return {
      id: color.id,
      name: color.name,
      colorValue: color.hexadecimal,
    };
  });

  const colorsFilter: CategoryFilter = {
    name: 'Colors',
    characteristics: colorsCharacteristics,
    id: '',
    type: 'Colors',
    filterKey: 'colors',
    categoryId: category.id,
    categoryKey: category.key,
  };

  const filters = [material, collections, colorsFilter, ...defaultFilter];

  return {
    filters,
  };
};
