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

export interface IProducts {
  count:           number;
  rows:            IProduct[];
}