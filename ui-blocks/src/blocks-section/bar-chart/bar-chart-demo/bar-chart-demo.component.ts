import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-bar-chart-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './bar-chart-demo.component.html',
    styleUrl: './bar-chart-demo.component.css'
})
export class BarChartDemoComponent {

}
