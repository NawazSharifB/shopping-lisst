import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from '../interfaces/product';
import { SearchOption } from '../interfaces/search-option';
import { FilterOption } from '../enums/filter-option';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products$ = new BehaviorSubject<Product[]>([]);

  private readonly httpClient = inject(HttpClient);

  fetchProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('../../assets/list-items.json').pipe(tap(value => this.products$.next(value)));
  }

  filterProducts(searchTerm: Partial<SearchOption>): Product[] {
    return this.products$.value.filter(product => product.name.includes(searchTerm.search || '')).filter(product => {
      if (searchTerm.option === FilterOption.All) {
        return true;
      }

      return product.category === searchTerm.option;
    });
  } 
}
