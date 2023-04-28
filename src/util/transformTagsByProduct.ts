import { IFilter, IProduct, ITag } from '@/interfaces';

export const transformTagsByProduct = (product: IProduct): ITag[] => {
  let tags: ITag[] = [];
  let filters: IFilter[] = [];

  Object.entries(product).forEach(({ '0': type, '1': value }) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (value.filters) {
        value.filters.forEach((filter: IFilter) => {
          filters.push(filter);
        });
      }
      if (type !== 'category' && type !== 'collection') tags.push({ ...value, type });
    } else if (Array.isArray(value)) {
      value.forEach((val) => {
        if (val.filters) {
          val.filters.forEach((filter: IFilter) => {
            filters.forEach((flt) => {
              if (flt.id === filter.id)
                tags.push({ ...val, type: val.filters[0].name });
            });
          });
        }
      });
    }
  });

  return tags;
};
