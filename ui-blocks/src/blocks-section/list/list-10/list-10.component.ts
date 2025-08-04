import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-list-10',
    standalone: true,
    imports: [CommonModule, ListViewModule],
    templateUrl: './list-10.component.html',
    styleUrl: './list-10.component.css'
})
export class List10Component implements OnInit, OnDestroy {
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

    public data: Object[] = [
        {
            id: '1',
            date: new Date('2024-10-05'),
            content: 'Refactor primary components to align with system version 1.4.',
            image: 'avatar-12.jpg',
            logo: 'figma.png'
        },
        {
            id: '2',
            date: new Date('2024-10-18'),
            content: 'Design and schedule the monthly newsletter in MailChimp to keep subscribers informed.',
            image: 'avatar-14.jpg',
            logo: 'mailchimp.png'
        },
        {
            id: '3',
            date: new Date('2024-10-25'),
            content: 'Organize a team meeting in Microsoft Teams',
            image: 'avatar-7.jpg',
            logo: 'microsoft.png'
        },
        {
            id: '4',
            date: new Date('2024-11-08'),
            content: 'Design a visually appealing promotional poster for an upcoming event or product launch using Adobe InDesign.',
            image: 'avatar-4.jpg',
            logo: 'adobe.png'
        },
        {
            id: '5',
            date: new Date('2024-12-15'),
            content: 'Create and structure a collaborative document for your team to brainstorm ideas for an upcoming project',
            image: 'avatar-13.jpg',
            logo: 'google.png'
        }
    ]

    @HostListener('window:resize', ['$event'])
    public handleResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:512px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin && /^{"(name":"[^"]+","theme":"[^"]+"|mode":"[^"]+")}$/.test(event.data)) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-10' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
