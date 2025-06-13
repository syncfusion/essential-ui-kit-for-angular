import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-pricing-table-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-pricing-table-demo.component.html',
    styleUrl: './ai-pricing-table-demo.component.css'
})
export class AiPricingTableDemoComponent {}
