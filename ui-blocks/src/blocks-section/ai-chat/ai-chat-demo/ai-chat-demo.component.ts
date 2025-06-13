import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-chat-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-chat-demo.component.html',
    styleUrl: './ai-chat-demo.component.css'
})
export class AiChatDemoComponent {}
