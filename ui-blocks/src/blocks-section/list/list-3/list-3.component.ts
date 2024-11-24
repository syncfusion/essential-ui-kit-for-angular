import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-list-3',
    standalone: true,
    imports: [CommonModule, ListViewModule, ButtonModule],
    templateUrl: './list-3.component.html'
})
export class List3Component implements OnInit, OnDestroy {
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
            name: 'Wade Warren',
            content: 'Hey team, I’ve updated the project timeline. Please review the new deadlines and provide feedback by tomorrow.',
            avatar: 'avatar-3.jpg',
            time: '5 min ago'
        },
        {
            id: '2',
            name: 'Albert Flores',
            content: 'The client has approved the initial design draft. Let’s move forward with the next phase of development.',
            avatar: 'avatar-4.jpg',
            time: '32 min ago'
        },
        {
            id: '3',
            name: 'Ralph Edwards',
            content: 'Reminder: Our weekly project sync is scheduled for 10 AM tomorrow. Please come prepared with your progress updates.',
            avatar: 'avatar-5.jpg',
            time: '45 min ago'
        },
        {
            id: '4',
            name: 'Annette Black',
            content: 'We’ve encountered an issue with the current build. I’ll need everyone’s input to troubleshoot and find a quick solution.',
            avatar: 'avatar-14.jpg',
            time: '48 min ago'
        },
        {
            id: '5',
            name: 'Kristin Watson',
            content: 'Great news! We’ve hit the project milestone ahead of schedule. Let’s keep this momentum going for the final phase.',
            avatar: 'avatar-13.jpg',
            time: '1 hr ago'
        }
    ];

    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:608px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-3' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
