import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-navbar-6',
    standalone: true,
    imports: [CommonModule, AppBarModule, MenuModule, ButtonModule, TextBoxModule, DropDownButtonModule],
    templateUrl: './navbar-6.component.html',
    styleUrl: './navbar-6.component.css'
})
export class Navbar6Component implements OnInit, OnDestroy {
    @ViewChild('profileDropdown') public profileDropdown!: DropDownButtonComponent;
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

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'navbar-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    @HostListener('window:resize')
    public onResize(): void {
        this.closeDropdown(this.profileDropdown);
    }

    public closeDropdown(dropDown: DropDownButtonComponent): void {
        if (dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    }
}