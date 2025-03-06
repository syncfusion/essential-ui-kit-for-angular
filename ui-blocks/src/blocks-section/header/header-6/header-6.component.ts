import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-header-6',
  standalone: true,
  imports: [CommonModule, TabModule, DropDownButtonModule, ButtonModule, ChipListModule],
  templateUrl: './header-6.component.html',
  styleUrl: './header-6.component.css'
})
export class Header6Component implements OnInit, OnDestroy {
    @ViewChild('tab') tab!: TabComponent;
    @ViewChild('dropdown') public dropdown!: DropDownButtonComponent;
    public overflowMode: string = 'Popup';
    public headerData: any = {new:156, verificationDue:23, approvalDue:18};
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        this.tab.refresh();
        /* SB Code - End */
    }
   
    public ngAfterViewInit(): void {
        /* SB Code - Start */
        setTimeout(() => {
            this.tab.refresh();
        }, 250);
        this.tab.refreshActiveTabBorder();
        this.updateTabItems();
        /* SB Code - End */
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public onResize(): void {
        this.updateTabItems();
        this.closeDropdown(this.dropdown);
    }

    public updateTabItems(): void {
        if (window.innerWidth < 640) {
            this.overflowMode = 'Popup';
        } else {
            this.overflowMode = 'None';
        }
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
                if (blockData.name === 'header-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                     setTimeout(() => {
                        this.tab.refresh();
                    }, 250);
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
