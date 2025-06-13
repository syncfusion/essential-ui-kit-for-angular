import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-rating-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './rating-demo.component.html',
    styleUrl: './rating-demo.component.css'
})
export class RatingDemoComponent {}
