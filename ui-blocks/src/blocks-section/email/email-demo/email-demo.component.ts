import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-email-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './email-demo.component.html',
  styleUrl: './email-demo.component.css'
})
export class EmailDemoComponent { }
