import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-9',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-9.component.html',
    styleUrl: './sidebar-9.component.css'
})
export class Sidebar9Component implements OnInit, OnDestroy {
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

    public navigationMenu: Object[] = [
        {
            id: 1,
            fontIcon: 'e-home'
        },
        {
            id: 2,
            fontIcon: 'e-user'
        },
        {
            id: 3,
            fontIcon: 'e-bookmark'
        },
        {
            id: 4,
            fontIcon: 'e-chart'
        },
        {
            id: 5,
            fontIcon: 'e-clock'
        }
    ];

    public inboxMenu: Object[] = [
        {
            id: 1,
            field: 'My Inbox',
            fontIcon: 'e-folder'
        },
        {
            id: 2,
            field: 'Chats',
            fontIcon: 'sf-icon-user-chat'
        },
        {
            id: 3,
            field: 'Assigned to me',
            fontIcon: 'e-user'
        },
        {
            id: 4,
            field: 'Scheduled',
            fontIcon: 'e-day'
        },
        {
            id: 5,
            field: 'Archived',
            fontIcon: 'sf-icon-arrow-broken-square-down'
        },
        {
            id: 6,
            field: 'Closed',
            fontIcon: 'e-circle-close'
        }
    ];

    public supportMenu: Object[] = [
        {
            "id": 1,
            "field": "Docs"
        },
        {
            "id": 2,
            "field": "Help"
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-9' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
