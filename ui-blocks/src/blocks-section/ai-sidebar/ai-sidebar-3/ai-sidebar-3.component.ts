import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-ai-sidebar-3',
    standalone: true,
    imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './ai-sidebar-3.component.html',
    styleUrl: './ai-sidebar-3.component.css'
})
export class AiSidebar3Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '304px';
    public dockWidth: string = '48px';
    public backDrop: boolean = window.innerWidth <= 660;

    public chatHistory: Object[] = [
        {
            message: 'CSS classes',
            date: '12 Mar'
        },
        {
            message: 'Explain quantum computing',
            date: '10 Feb'
        },
        {
            message: 'How to create ERP diagram?',
            date: '22 Jan'
        },
        {
            message: 'API scaling strategies',
            date: '1 Jan'
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
    public handleResize(): void {
        this.backDrop = window.innerWidth <= 660;
        this.width = window.innerWidth <= 768 ? '312px' : '304px';
        this.dockWidth = window.innerWidth <= 768 ? '56px' : '48px';
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'ai-sidebar-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
