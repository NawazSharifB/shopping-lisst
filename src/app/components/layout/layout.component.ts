import { Component } from '@angular/core';
import { DisplayProductsComponent } from '../display-products/display-products.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [DisplayProductsComponent],
})
export class LayoutComponent {
}
