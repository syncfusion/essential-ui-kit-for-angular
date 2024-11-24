import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-footer-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './footer-demo.component.html',
  styleUrl: './footer-demo.component.css'
})
export class FooterDemoComponent { }
