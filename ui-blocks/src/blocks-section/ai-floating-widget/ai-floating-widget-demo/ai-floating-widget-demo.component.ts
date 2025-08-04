import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-floating-widget-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-floating-widget-demo.component.html',
    styleUrl: './ai-floating-widget-demo.component.css'
})
export class AiFloatingWidgetDemoComponent {}
