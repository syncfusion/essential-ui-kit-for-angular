import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { PagerModule } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
 
@Component({
  selector: 'app-header-13',
  standalone: true,
  imports: [PagerModule, TextBoxModule, DateRangePickerModule, DropDownButtonModule, ButtonModule],
  templateUrl: './header-13.component.html'
})
export class Header13Component implements OnInit, OnDestroy {
    @ViewChild('periodDropdown') public periodDropdown!: DropDownButtonComponent;
    @ViewChild('productDropdown') public productDropdown!: DropDownButtonComponent;
    @ViewChild('regionDropdown') public regionDropdown!: DropDownButtonComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
 
    constructor() { }
 
    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }
 
    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public onResize(): void {
        [this.periodDropdown, this.productDropdown, this.regionDropdown].forEach(dropdown => this.closeDropdown(dropdown));
    }

    public closeDropdown(dropDown: DropDownButtonComponent): void {
        if (dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    }
    
    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-13' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
 