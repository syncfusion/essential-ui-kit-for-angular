import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-list-7',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule],
    templateUrl: './list-7.component.html'
})
export class List7Component implements OnInit, OnDestroy {
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width!: string;

    constructor() { }

    public ngOnInit(): void {
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
        this.checkWindowSize(window.innerWidth);
    }

    public ngOnDestroy(): void {
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public notifications: Object[] = [
        {
            id: '1',
            name: 'Kristina',
            date: '02:25 PM on 29, July 2024',
            type: 'sent you a photo',
            image: 'avatar-10.jpg'
        },
        {
            id: '2',
            name: 'Report created successfully',
            date: '02:25 PM on 29, July 2024',
            letter: 'PM',
            tag: 'report'
        },
        {
            id: '3',
            name: 'Alex Johnson',
            date: '02:25 PM on 29, July 2024',
            type: 'sent you a photo',
            image: 'avatar-4.jpg'
        },
        {
            id: '4',
            name: 'Reminder: Employee Welfare Meeting today!',
            date: '02:25 PM on 29, July 2024',
            letter: 'HR',
            tag: 'remainder'
        },
        {
            id: '5',
            name: 'Floyd Miles',
            date: '02:25 PM on 29, July 2024',
            type: 'sent you a photo',
            image: 'avatar-6.jpg'
        }
    ]

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:610px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
