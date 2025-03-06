import { Component } from '@angular/core';
import { BlocksComponent } from '../../../main-section/blocks/blocks.component';

@Component({
  selector: 'app-modals-demo',
  standalone: true,
  imports: [BlocksComponent],
  templateUrl: './modals-demo.component.html',
  styleUrl: './modals-demo.component.css'
})
export class ModalsDemoComponent {

}
