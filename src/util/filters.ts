import type { IFilterValue } from '@/context/app/actions';
import { IProductFitler } from '@/interfaces';
import { State } from '../context/app/reducer';
export const getAllTagsFromFilters = (filters: State['filters']) => {
  const filterKeys = Object.keys(filters);

  const filtersValues = filters as any;

  const tags = filterKeys.reduce((acc, key) => {
    const isArray = Array.isArray(filtersValues[key]);

    if (isArray) {
      return [...acc, ...filtersValues[key]];
    }

    if (key === 'prices') {
      return [
        ...acc,
        {
          name: filtersValues[key]?.name,
          minPrice: filtersValues[key]?.minPrice,
          maxPrice: filtersValues[key]?.maxPrice,
          filterKey: filtersValues[key]?.filterKey,
        },
      ];
    }

    // TODO handle other types

    return acc;
  }, [] as any);

  return tags;
};

const mapListToIds = <T>(list: T extends { id: string }[] ? T : any) => {
  return list.map((item) => item.id);
};

const getCategoriesFromFilters = (filters: State['filters']) => {
  const collectionsCategories = filters.collections.map(
    (collection) => collection.categoryId,
  );
  const materialsCategories = filters.materials.map(
    (material) => material.categoryId,
  );
  const characteristicsCategories = filters.characteristics.map(
    (characteristic) => characteristic.categoryId,
  );

  const colorsCategories = filters.colors.map((color) => color.categoryId);

  const allCategories = [
    ...new Set([
      ...characteristicsCategories,
      ...materialsCategories,
      ...collectionsCategories,
      ...colorsCategories,
    ]),
  ];

  return allCategories;
};

export const mapIFitlersStateToRequestFilters = (
  filters: State['filters'],
): IProductFitler => {
  const categories = getCategoriesFromFilters(filters);

  const collections =
    filters.collections.length > 0
      ? mapListToIds(filters.collections)
      : undefined;

  const materials =
    filters.materials.length > 0 ? mapListToIds(filters.materials) : undefined;

  const characteristics =
    filters.characteristics.length > 0
      ? mapListToIds(filters.characteristics)
      : undefined;
  const colors =
    filters.colors.length > 0 ? mapListToIds(filters.colors) : undefined;

  return {
    categories: categories?.length > 0 ? categories : undefined,
    collections,
    materials,
    characteristics,
    isBestSeller: filters.isBestSeller ? true : undefined,
    colors,
    minPrice: filters?.prices?.minPrice ?? undefined,
    maxPrice: filters?.prices?.maxPrice ?? undefined,
  };
};
