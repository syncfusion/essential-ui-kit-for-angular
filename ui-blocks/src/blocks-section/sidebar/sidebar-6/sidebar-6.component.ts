import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-6',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-6.component.html',
    styleUrl: './sidebar-6.component.css'
})
export class Sidebar6Component implements OnInit, OnDestroy {
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

    public data1: Object[] = [
        {
            id: 1,
            field: 'Dashboard',
            fontIcon: 'e-grid-view'
        },
        {
            id: 2,
            field: 'Models',
            fontIcon: 'e-send-backward'
        },
        {
            id: 3,
            field: 'Bookmarks',
            fontIcon: 'e-bookmark'
        },
        {
            id: 4,
            field: 'Issues',
            fontIcon: 'sf-icon-info-octagon'
        }
    ];

    public data2: Object[] = [
        {
            id: 1,
            field: 'Library',
        },
        {
            id: 2,
            field: 'Themesberg',
        },
        {
            id: 3,
            field: 'Blocks',
        },
        {
            id: 4,
            field: 'Iconsale',
        }
    ];

    public data3: Object[] = [
        {
            id: 1,
            field: 'Settings',
            fontIcon: 'e-settings'
        },
        {
            id: 2,
            field: 'Help & Getting Started',
            fontIcon: 'e-circle-info'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-6' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
