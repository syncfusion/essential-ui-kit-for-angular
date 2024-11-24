import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-chat-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './chat-demo.component.html',
  styleUrl: './chat-demo.component.css'
})
export class ChatDemoComponent { }
