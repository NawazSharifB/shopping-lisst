import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
}
