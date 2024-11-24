import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule, SidebarModule, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-1',
    standalone: true,
    imports: [CommonModule, AccordionModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-1.component.html',
    styleUrl: './sidebar-1.component.css'
})
export class Sidebar1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    @ViewChild('accordion') public expandAccordion!: AccordionComponent;
    public currentTheme: string = 'tailwind';
    /* SB Code - End */

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    /* SB Code - Start */
    public ngAfterViewInit(): void {
        this.refreshAccordion(2000);
    }
    /* SB Code - End */

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public data: Object[] = [
        {
            id: 1,
            field: 'Home',
            fontIcon: 'e-home'
        },
        {
            id: 2,
            field: 'My Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 3,
            field: 'Notifications',
            fontIcon: 'sf-icon-notification-bell-01'
        }
    ];

    /* SB Code - Start */
    private refreshAccordion(timeout: number): void {
        setTimeout(() => {
            this.expandAccordion.refresh();
        }, timeout);
    }

    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
        this.refreshAccordion(1000);
    };
    /* SB Code - End */
}
