import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-4',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-4.component.html',
    styleUrl: './sidebar-4.component.css'
})
export class Sidebar4Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public backDrop: boolean = window.innerWidth <= 640;

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

    public navigationMenu: Object[] = [
        {
            id: 1,
            field: 'Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 2,
            field: 'Revenue',
            fontIcon: 'sf-icon-dollar'
        },
        {
            id: 3,
            field: 'Notifications',
            fontIcon: 'sf-icon-notification-bell-01'
        },
        {
            id: 4,
            field: 'Analytics',
            fontIcon: 'e-chart'
        },
        {
            id: 5,
            field: 'Wallets',
            fontIcon: 'e-select-all'
        }
    ];

    public businessCategories: Object[] = [
        {
            id: 1,
            field: 'Sales',
            fontIcon: 'sf-icon-dollar'
        },
        {
            id: 2,
            field: 'Design',
            fontIcon: 'sf-icon-desktop-01'
        },
        {
            id: 3,
            field: 'Fundraising',
            fontIcon: 'sf-icon-dollar'
        },
        {
            id: 4,
            field: 'Internal',
            fontIcon: 'e-comment-show'
        },
        {
            id: 5,
            field: 'Customer Success',
            fontIcon: 'sf-icon-user-tick-02'
        },
        {
            id: 6,
            field: 'Networking',
            fontIcon: 'sf-icon-laptop'
        },
        {
            id: 7,
            field: 'Legal',
            fontIcon: 'e-notes'
        }
    ];

    @HostListener('window:resize')
    public handleResize(): void {
        this.backDrop = window.innerWidth <= 640;
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-4' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
