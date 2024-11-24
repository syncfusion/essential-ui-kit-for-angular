import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-grid-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './grid-demo.component.html',
  styleUrl: './grid-demo.component.css'
})
export class GridDemoComponent { }
