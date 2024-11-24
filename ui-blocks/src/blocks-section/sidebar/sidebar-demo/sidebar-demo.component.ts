import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-sidebar-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './sidebar-demo.component.html',
  styleUrl: './sidebar-demo.component.css'
})
export class SidebarDemoComponent { }
