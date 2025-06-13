import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
    selector: 'app-line-chart-demo',
    standalone: true,
    imports: [BlocksComponent],
    templateUrl: './line-chart-demo.component.html',
    styleUrl: './line-chart-demo.component.css'
})
export class LineChartDemoComponent {

}
