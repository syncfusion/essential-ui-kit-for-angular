import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-ai-setting-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './ai-setting-demo.component.html',
    styleUrl: './ai-setting-demo.component.css'
})
export class AiSettingDemoComponent {}
