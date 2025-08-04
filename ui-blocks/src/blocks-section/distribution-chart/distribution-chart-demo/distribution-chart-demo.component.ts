import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-distribution-chart-demo',
	standalone: true,
  imports: [BlocksComponent],
  templateUrl: './distribution-chart-demo.component.html',
  styleUrl: './distribution-chart-demo.component.css'
})
export class DistributionChartDemoComponent {}
