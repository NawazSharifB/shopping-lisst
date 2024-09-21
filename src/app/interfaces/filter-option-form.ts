import { FormControl } from "@angular/forms";
import { FilterOption } from "../enums/filter-option";

export interface FilterOptionForm {
  search: FormControl<string>;
  option: FormControl<FilterOption>;
}