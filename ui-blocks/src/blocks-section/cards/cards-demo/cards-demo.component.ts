import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-cards-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './cards-demo.component.html',
  styleUrl: './cards-demo.component.css'
})
export class CardsDemoComponent { }
