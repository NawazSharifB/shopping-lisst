import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [FilterOptionsComponent],
})
export class LayoutComponent {

}
