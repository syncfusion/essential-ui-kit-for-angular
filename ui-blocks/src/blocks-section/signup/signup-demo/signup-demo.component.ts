import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-signup-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './signup-demo.component.html',
  styleUrl: './signup-demo.component.css'
})
export class SignupDemoComponent { }
