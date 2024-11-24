import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-list-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './list-demo.component.html',
  styleUrl: './list-demo.component.css'
})
export class ListDemoComponent { }
