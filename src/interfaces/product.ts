import { Categorie, Characteristic } from "@/services/categories/getCateriesAndFilters";
import { Collection } from '../services/categories/getCateriesAndFilters';
import { IMaterial } from "./material";

export interface IProduct {
  id:              string;
  key:             number;
  name:            string;
  description:     string;
  minMeasure:      number;
  maxMeasure:      number;
  minPrice:        number;
  maxPrice:        number;
  inStock:         boolean;
  createdAt:       string;
  updatedAt:       string;
  deletedAt:       null | string;
  category:        Categorie;
  collection:      Collection;
  material:        IMaterial;
  characteristics: Characteristic[];
}

export interface IProductForCard {
  id: string;
  img: any;
  title: string;
  description: string;
}


export interface IProductFilter {
  id:              string;
  key:             number;
  name:            string;
  description:     string;
  feetPrice:       number;
  metersPrice:     number;
  yardsPrice:      number;
  inStock:         boolean;
  isBestSeller:    boolean;
  createdAt:       string;
  updatedAt:       string;
  deletedAt:       null;
  categoryId:      string;
  maxFeetPrice:    number;
  maxMetersPrice:  number;
  maxYardsPrice:   number;
  category:        ICategory;
  collection:      ICollection;
  material:        IMaterial;
  characteristics: Characteristic[];
  colors:          any[];
}

interface ICategory {
  id:   string;
  key:  string;
  name: string;
}
interface ICollection extends ICategory {

}

