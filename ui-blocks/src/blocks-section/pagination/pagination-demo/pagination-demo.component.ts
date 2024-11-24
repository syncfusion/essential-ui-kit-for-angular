import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-pagination-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './pagination-demo.component.html',
  styleUrl: './pagination-demo.component.css'
})
export class PaginationDemoComponent { }
