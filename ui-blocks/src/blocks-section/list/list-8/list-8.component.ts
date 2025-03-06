import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-list-8',
    standalone: true,
    imports: [CommonModule, ListViewModule],
    templateUrl: './list-8.component.html'
})
export class List8Component implements OnInit, OnDestroy {
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
            time: '12:00 PM',
            name: 'Robert Darlen',
            message: 'It was worth watching. I had the most fun out today.',
            image: 'avatar-1.jpg',
            badge: '7'
        },
        {
            id: '2',
            time: '10:56 AM',
            name: 'Arlene McCoy',
            message: 'How many NPCs are there?',
            image: 'avatar-8.jpg',
            status: { isViewed: true }
        },
        {
            id: '3',
            time: 'Yesterday',
            name: 'Theresa Webb',
            message: 'Same here! Work has been a whirlwind. I just got back from a project in Seattle. The coffee there is amazing!',
            image: 'avatar-9.jpg',
            status: { isViewed: false }
        },
        {
            id: '4',
            time: '24 Sep',
            name: 'Kristina Watson',
            message: 'Actually, I started taking a pottery class! It’s so much fun. What about you?',
            image: 'avatar-10.jpg'
        },
        {
            id: '5',
            time: '22 Sep',
            name: 'Floyd Miles',
            message: 'Hey, Jamie! It’s been ages! How have you been?',
            image: 'avatar-4.jpg',
            status: { isViewed: false }
        },
        {
            id: '6',
            time: '20 Sep',
            name: 'Jane Cooper',
            message: 'That sounds awesome! I’ve been getting into hiking. There’s a great trail near my place.',
            image: 'avatar-11.jpg',
            status: { isViewed: true }
        }
    ]

    @HostListener('window:resize', ['$event'])
    public onResize(event: UIEvent): void {
        const width = (event.target as Window).innerWidth;
        this.checkWindowSize(width);
    }

    public checkWindowSize(width: number): void {
        this.width = width < 1024 ? "width:100%" : "max-width:610px";
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'list-8' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
