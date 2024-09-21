import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';
import { SearchOption } from '../interfaces/search-option';
import { ProductService } from '../services/product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [FilterOptionsComponent],
})
export class LayoutComponent {
  productList: Product[] = [];

  private readonly DestroyRef = inject(DestroyRef);
  private readonly productService = inject(ProductService);
  
  onSearchTermChange(searchTerm: Partial<SearchOption>): void {
    this.fetchItems(searchTerm);
  }

  private fetchItems(searchTerm: Partial<SearchOption>): void {
    this.productService.fetchProduct().pipe(
      tap(value => console.log(value)),
      map(() => this.productService.filterProducts(searchTerm)),
      tap(products => this.productList = products),
      takeUntilDestroyed(this.DestroyRef)).subscribe();
  }
}
