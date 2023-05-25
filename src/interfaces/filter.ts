
export interface IFilter {
  id:               string;
  name:             string;
  type:             string;
}

export interface IProductFitler {
  inStock?:         boolean;
  minPrice?:        number;
  maxPrice?:        number;
  isBestSeller?:    boolean;
  categories?:      string[];
  collections?:     string[];
  materials?:       string[];
  characteristics?: string[];
  colors?:          string[];
}
