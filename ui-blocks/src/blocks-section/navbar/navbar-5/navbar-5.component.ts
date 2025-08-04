import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule, BreadcrumbModule, BreadcrumbComponent, OpenCloseMenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-navbar-5',
    standalone: true,
    imports: [CommonModule, MenuModule, BreadcrumbModule, ButtonModule, DropDownButtonModule],
    templateUrl: './navbar-5.component.html',
    styleUrl: './navbar-5.component.css'
})
export class Navbar5Component implements OnInit, OnDestroy {
    @ViewChild('breadcrumb') public breadcrumb!: BreadcrumbComponent;
    @ViewChild('moreOptionsDropdown') public moreOptionsDropdown!: DropDownButtonComponent;
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

    public open(args: OpenCloseMenuEventArgs): void {
        const breadcrumbItem = args.element.querySelector('#item1');
        if (breadcrumbItem) {
            breadcrumbItem.addEventListener('click', () => {
                this.breadcrumb.activeItem = 'CompanyName.com';
            });
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'navbar-5' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */

    @HostListener('window:resize')
    public handleResize(): void {
        this.closeMoreOptionsDropdown(this.moreOptionsDropdown);
        this.closeMainDropdown();
    }

    public closeMoreOptionsDropdown(dropDown: DropDownButtonComponent): void {
        if (dropDown.element.classList.contains('e-active')) {
            dropDown.toggle();
        }
    }
   
    public closeMainDropdown(): void {
        let popup = document.querySelector('#mainDropdown-popup.e-dropdown-popup.e-popup-open');
        if (popup) {
            popup.remove();
        }
    }
}
