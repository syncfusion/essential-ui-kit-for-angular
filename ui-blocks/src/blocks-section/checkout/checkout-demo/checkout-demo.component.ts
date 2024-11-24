import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-checkout-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './checkout-demo.component.html',
  styleUrl: './checkout-demo.component.css'
})
export class CheckoutDemoComponent { }
