import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-signout-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './signout-demo.component.html',
  styleUrl: './signout-demo.component.css'
})
export class SignoutDemoComponent { }
