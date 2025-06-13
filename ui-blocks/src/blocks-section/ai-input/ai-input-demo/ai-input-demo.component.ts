import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-input-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-input-demo.component.html',
    styleUrl: './ai-input-demo.component.css'
})
export class AiInputDemoComponent {}
