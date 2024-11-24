import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-forgot-password-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './forgot-password-demo.component.html',
  styleUrl: './forgot-password-demo.component.css'
})
export class ForgotPasswordDemoComponent { }