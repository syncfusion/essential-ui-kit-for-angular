import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-3',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-3.component.html',
    styleUrl: './sidebar-3.component.css'
})
export class Sidebar3Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
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
        },
        {
            id: 5,
            field: 'Milestones',
            fontIcon: 'sf-icon-clock-rewind'
        },
        {
            id: 6,
            field: 'Labels',
            fontIcon: 'e-circle-check'
        },
        {
            id: 7,
            field: 'Documents',
            fontIcon: 'e-file-new'
        },
        {
            id: 8,
            field: 'Libraries',
            fontIcon: 'sf-icon-light-bulb'
        },
        {
            id: 9,
            field: 'Members',
            fontIcon: 'e-user'
        }
    ];

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'sidebar-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
