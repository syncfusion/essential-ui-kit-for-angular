import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-prompt-card-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-prompt-card-demo.component.html',
    styleUrl: './ai-prompt-card-demo.component.css'
})
export class AiPromptCardDemoComponent {}
