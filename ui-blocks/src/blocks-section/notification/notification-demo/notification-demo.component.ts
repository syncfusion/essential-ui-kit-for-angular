import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-notification-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './notification-demo.component.html',
  styleUrl: './notification-demo.component.css'
})
export class NotificationDemoComponent {

}
