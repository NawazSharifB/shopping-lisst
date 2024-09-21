import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../interfaces/product';
import { ProductInfoComponent } from './product-info/product-info.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [ProductInfoComponent, MatCardModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
}
