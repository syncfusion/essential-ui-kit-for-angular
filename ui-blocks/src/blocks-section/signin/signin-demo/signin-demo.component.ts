import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-signin-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './signin-demo.component.html',
  styleUrl: './signin-demo.component.css',
})
export class SigninDemoComponent { }
