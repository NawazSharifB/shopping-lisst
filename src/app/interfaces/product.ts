import { FilterOption } from "../enums/filter-option";

export interface Product {
  name: string;
  price: string;
  description: string;
  category: FilterOption;
}
