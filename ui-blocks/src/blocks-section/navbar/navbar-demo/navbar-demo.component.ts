import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-navbar-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './navbar-demo.component.html',
  styleUrl: './navbar-demo.component.css'
})
export class NavbarDemoComponent { }