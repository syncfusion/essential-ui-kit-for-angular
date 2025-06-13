import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-search-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-search-demo.component.html',
    styleUrl: './ai-search-demo.component.css'
})
export class AiSearchDemoComponent {}
