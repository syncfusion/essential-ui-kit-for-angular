import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-floating-menu-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './floating-menu-demo.component.html',
  styleUrl: './floating-menu-demo.component.css'
})
export class FloatingMenuDemoComponent { }
