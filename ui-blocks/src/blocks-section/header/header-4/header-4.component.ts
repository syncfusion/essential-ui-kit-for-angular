import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-header-4',
    standalone: true,
    imports: [CommonModule, TabModule, ButtonModule, ChipListModule, DropDownButtonModule],
    templateUrl: './header-4.component.html',
    styleUrl: './header-4.component.css'
})
export class Header4Component implements OnInit, OnDestroy {
    @ViewChild('tab') tab!: TabComponent;
    public overflowMode: string = 'Popup';
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

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.tab.refresh();
        }, 250);
        this.tab.refreshActiveTabBorder();
        this.updateTabItems();
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    @HostListener('window:resize')
    public handleResize(): void {
        this.updateTabItems();
    }

    public updateTabItems(): void {
        if (window.innerWidth < 640) {
            this.overflowMode = 'Popup';
        } else {
            this.overflowMode = 'None';
        }
    }

    public tabCreated(): void {
        setTimeout(() => {
            const badge = this.tab?.element.querySelector('.e-toolbar-item.e-active')?.querySelector('.e-badge');
            if (badge) {
                badge.classList.add('e-badge-primary');
            }
        }, 250);
    }

    public tabSelected(args: any): void {
        args.previousItem.querySelector('.e-badge').classList.remove('e-badge-primary');
        args.selectedItem.querySelector('.e-badge').classList.add('e-badge-primary');
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'header-4' && blockData.theme) {
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
