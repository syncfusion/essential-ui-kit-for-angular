import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-unlock-session-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './unlock-session-demo.component.html',
  styleUrl: './unlock-session-demo.component.css'
})
export class UnlockSessionDemoComponent { }
