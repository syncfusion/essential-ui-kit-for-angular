import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-plan-comparison-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './plan-comparison-demo.component.html',
  styleUrl: './plan-comparison-demo.component.css'
})
export class PlanComparisonDemoComponent { }
