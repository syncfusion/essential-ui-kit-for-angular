import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-pricing-card-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './pricing-card-demo.component.html',
  styleUrl: './pricing-card-demo.component.css'
})
export class PricingCardDemoComponent { }
