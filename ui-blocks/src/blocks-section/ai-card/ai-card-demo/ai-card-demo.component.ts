import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-card-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-card-demo.component.html',
    styleUrl: './ai-card-demo.component.css'
})
export class AiCardDemoComponent {}
