import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-notification-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-notification-demo.component.html',
    styleUrl: './ai-notification-demo.component.css'
})
export class AiNotificationDemoComponent {}
