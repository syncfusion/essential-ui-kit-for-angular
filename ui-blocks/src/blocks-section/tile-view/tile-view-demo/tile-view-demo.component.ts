import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-tile-view-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './tile-view-demo.component.html',
  styleUrl: './tile-view-demo.component.css'
})
export class TileViewDemoComponent { }
