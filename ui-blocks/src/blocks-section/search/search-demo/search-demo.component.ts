import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-search-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './search-demo.component.html',
  styleUrl: './search-demo.component.css'
})
export class SearchDemoComponent { }
