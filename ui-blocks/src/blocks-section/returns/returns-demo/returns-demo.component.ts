import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-returns-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './returns-demo.component.html',
  styleUrl: './returns-demo.component.css'
})
export class ReturnsDemoComponent { }