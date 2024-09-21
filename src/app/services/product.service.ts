import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { SearchOption } from '../interfaces/search-option';
import { FilterOption } from '../enums/filter-option';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly httpClient = inject(HttpClient);

  fetchProduct(searchTerm: SearchOption): Observable<Product[]> {
    return this.httpClient.get<Product[]>('../../assets/list-items.json').pipe(
      map((products: Product[]) => this.filterProducts(searchTerm, products)),
    )
  }

  private filterProducts(searchTerm: SearchOption, products: Product[]): Product[] {
    return products.filter(product => 
      this.filterProductBySearchTerm(searchTerm.search, product) && this.filterProductsByCategory(searchTerm.option, product)
    );
  }

  private filterProductBySearchTerm(searchTerm: string, product: Product): boolean {
    return !!!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  private filterProductsByCategory(option: FilterOption, product: Product): boolean {
    return option === FilterOption.All || product.category === option;
  }
}
