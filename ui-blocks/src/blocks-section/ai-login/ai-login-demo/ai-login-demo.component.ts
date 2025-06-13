import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-login-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-login-demo.component.html',
    styleUrl: './ai-login-demo.component.css'
})
export class AiLoginDemoComponent {}
