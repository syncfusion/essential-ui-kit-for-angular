import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-12',
    standalone: true,
    imports: [SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-12.component.html',
    styleUrl: './sidebar-12.component.css'
})
export class Sidebar12Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
        {
            id: 1,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '36,888'
        },
        {
            id: 2,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '36,719'
        },
        {
            id: 3,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '24,988'
        },
        {
            id: 4,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '16,588'
        },
        {
            id: 5,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '64,748'
        },
        {
            id: 6,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '54,238'
        },
        {
            id: 7,
            name: 'Bitcoin',
            image: 'bitcoin.png',
            currentValue: '43,777'
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
                if (blockData.name === 'sidebar-12' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
