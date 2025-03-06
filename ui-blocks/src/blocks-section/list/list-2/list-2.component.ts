import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-list-2',
    standalone: true,
    imports: [CommonModule, ListViewModule, CheckBoxModule],
    templateUrl: './list-2.component.html',
    styleUrl: './list-2.component.css'
})
export class List2Component implements OnInit, OnDestroy {
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
            name: 'Esther Howard',
            content: 'New Product Launch: Get 20% Off!',
            subContent: 'Discover our latest product range and enjoy an exclusive discount for a limited time.',
            time: '02:13 PM',
            avatar: 'avatar-8.jpg',
            read: false
        },
        {
            id: '2',
            name: 'Jenny Wilson',
            content: 'Webinar Invite: Boost Your Sales in 2024',
            subContent: 'Join our free webinar and learn top strategies to enhance your marketing campaigns next year.',
            time: '03:15 PM',
            avatar: 'avatar-9.jpg',
            read: false
        },
        {
            id: '3',
            name: 'Eleanor Pena',
            content: 'Limited-Time Offer: Early Access to Premium Features',
            subContent: 'Be the first to try our premium marketing tools with this exclusive early access offer.',
            time: '03:25 PM',
            avatar: 'avatar-10.jpg',
            read: true
        },
        {
            id: '4',
            name: 'Brooklyn Simmons',
            content: 'Unlock Your Marketing Potential with Our New Toolkit',
            subContent: 'Discover how our comprehensive marketing toolkit can help you optimize campaigns and drive better results.',
            time: '04:00 PM',
            avatar: 'avatar-13.jpg',
            read: false
        },
        {
            id: '5',
            name: 'Jane Cooper',
            content: 'Special Event: Meet Us at Marketing Expo 2024',
            subContent: 'Don’t miss our booth at the Marketing Expo—get insights on the latest industry trends.',
            time: '04:14 PM',
            avatar: 'avatar-11.jpg',
            read: true
        },
        {
            id: '6',
            name: 'Floyd Miles',
            content: 'Case Study: How XYZ Company Increased ROI by 50%',
            subContent: 'Explore our latest case study on how targeted marketing helped boost ROI for a leading brand.',
            time: '06:12 PM',
            avatar: 'avatar-2.jpg',
            read: true
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
                if (blockData.name === 'list-2' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
