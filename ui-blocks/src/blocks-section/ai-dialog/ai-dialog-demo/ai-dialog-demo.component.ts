import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-dialog-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-dialog-demo.component.html',
    styleUrl: './ai-dialog-demo.component.css'
})
export class AiDialogDemoComponent {}
