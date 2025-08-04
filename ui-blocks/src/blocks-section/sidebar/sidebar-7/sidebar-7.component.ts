import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-7',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ProgressBarModule, ListViewModule],
    templateUrl: './sidebar-7.component.html',
    styleUrl: './sidebar-7.component.css'
})
export class Sidebar7Component implements OnInit, OnDestroy {
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

    public supportMenu: Object[] = [
        {
            id: 1,
            field: 'Docs',
            fontIcon: 'e-file-new'
        },
        {
            id: 2,
            field: 'Component',
            fontIcon: 'e-send-to-back'
        },
        {
            id: 3,
            field: 'Help',
            fontIcon: 'e-circle-info'
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
                if (blockData.name === 'sidebar-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
