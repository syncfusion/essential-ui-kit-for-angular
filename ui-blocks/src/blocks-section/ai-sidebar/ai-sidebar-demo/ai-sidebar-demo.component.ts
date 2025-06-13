import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-sidebar-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-sidebar-demo.component.html',
    styleUrl: './ai-sidebar-demo.component.css'
})
export class AiSidebarDemoComponent {}
