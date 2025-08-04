import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-sidebar-11',
    standalone: true,
    imports: [SidebarModule, ButtonModule, ListViewModule],
    templateUrl: './sidebar-11.component.html',
    styleUrl: './sidebar-11.component.css'
})
export class Sidebar11Component implements OnInit, OnDestroy {
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
            name: 'Darlene Robertson',
            profileImage: 'avatar-10.jpg'
        },
        {
            id: 2,
            name: 'Marvin McKinney',
            profileImage: 'avatar-7.jpg'
        },
        {
            id: 3,
            name: 'Ralph Edwards',
            profileImage: 'avatar-3.jpg'
        },
        {
            id: 4,
            name: 'Courtney Henry',
            profileImage: 'avatar-12.jpg'
        },
        {
            id: 5,
            name: 'Darrell Steward',
            profileImage: 'avatar-1.jpg'
        },
        {
            id: 6,
            name: 'Jacobs Jones',
            profileImage: 'avatar-6.jpg'
        },
        {
            id: 7,
            name: 'Robert Fox',
            profileImage: 'avatar-4.jpg'
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
                if (blockData.name === 'sidebar-11' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
