import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-faq-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-faq-demo.component.html',
    styleUrl: './ai-faq-demo.component.css'
})
export class AiFaqDemoComponent {}
