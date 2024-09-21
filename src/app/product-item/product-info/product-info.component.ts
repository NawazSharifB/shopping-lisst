import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent {
  @Input({required: true}) label = '';
  @Input({required: true}) value = '';
}
