import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { debounceTime, Observable, startWith, tap } from 'rxjs';
import { FilterOptionForm } from '../interfaces/filter-option-form';
import { FilterOption } from '../enums/filter-option';
import { SearchOption } from '../interfaces/search-option';

@Component({
  selector: 'app-filter-options',
  standalone: true,
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.scss'],
  imports: [NgFor, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, NgIf],
})
export class FilterOptionsComponent implements OnInit {
  @Output() searchTermChange = new EventEmitter<SearchOption>(); 
  typeOptions = [
    { value: FilterOption.All, name: 'All Products'},
    { value: FilterOption.Electronics, name: 'Electronics'},
    { value: FilterOption.Clothing, name: 'clothing'},
    { value: FilterOption.Accessories, name: 'Accessories'},
  ];
  private readonly formBuilder = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly filterForm: FormGroup<FilterOptionForm> = <FormGroup<FilterOptionForm>>this.formBuilder.group({
    search: [''],
    option: [FilterOption.All],
  })

  ngOnInit(): void {
    this.onFilterChange();
  }

  get searchControl(): FormControl {
    return this.filterForm.controls.search;
  }

  get optionControl(): FormControl {
    return this.filterForm.controls.option;
  }

  clearSearch(): void {
    this.searchControl.reset();
  }

  private onFilterChange(): void {
    const initialValue: SearchOption = <SearchOption>this.filterForm.value;

    (<Observable<SearchOption>>this.filterForm.valueChanges).pipe(
      startWith(initialValue),
      tap((value: SearchOption) => this.searchTermChange.emit(value)),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe();
  }
}
