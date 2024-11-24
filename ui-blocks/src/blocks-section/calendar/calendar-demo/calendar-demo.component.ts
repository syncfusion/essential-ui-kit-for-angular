import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-calendar-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './calendar-demo.component.html',
  styleUrl: './calendar-demo.component.css'
})
export class CalendarDemoComponent { }
