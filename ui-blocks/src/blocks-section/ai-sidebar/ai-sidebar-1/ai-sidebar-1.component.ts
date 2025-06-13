import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-ai-sidebar-1',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './ai-sidebar-1.component.html',
    styleUrl: './ai-sidebar-1.component.css'
})
export class AiSidebar1Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public backDrop: boolean = window.innerWidth <= 660;

    public navigationMenu: Object[] = [
        {
            id: 1,
            field: 'Home',
            fontIcon: 'sf-icon-home-10'
        },
        {
            id: 2,
            field: 'Prompt box',
            fontIcon: 'e-notes'
        },
        {
            id: 3,
            field: 'AI chat',
            fontIcon: 'e-comment-show'
        },
        {
            id: 4,
            field: 'Library',
            fontIcon: 'e-print-layout'
        },
        {
            id: 5,
            field: 'Art',
            fontIcon: 'e-edit'
        }
    ]

    public supportMenu: Object[] = [
        {
            id: 1,
            field: 'Settings',
            fontIcon: 'e-settings'
        },
        {
            id: 2,
            field: 'Help',
            fontIcon: 'sf-icon-help-circle'
        },
        {
            id: 3,
            field: 'Upgrade Plan',
            fontIcon: 'e-arrow-right'
        }
    ];

    constructor() {}

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

    @HostListener('window:resize')
    public onResize(): void {
        this.backDrop = window.innerWidth <= 660;
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-1' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
