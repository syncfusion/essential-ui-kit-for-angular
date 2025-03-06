import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-header-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './header-demo.component.html',
  styleUrl: './header-demo.component.css'
})
export class HeaderDemoComponent {

}
