import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-list-9',
    standalone: true,
    imports: [CommonModule, ListViewModule],
    templateUrl: './list-9.component.html'
})
export class List9Component implements OnInit, OnDestroy {
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
            id: 1,
            time: 'Just now',
            title: 'Great News: Your salary has been deposited!',
            message: 'Your salary for the month September 2024 is credited to your account. Check your balance to ensure everything is accurate!',
            tag: 'financial',
        },
        {
            id: 2,
            time: '7 hours ago',
            title: 'Friendly reminder: Rent payment due soon!',
            message: 'Just a heads-up that your rent payment is due soon. Please make sure to pay on time to avoid any late fees!',
            tag: 'remainder',
        },
        {
            id: 3,
            time: 'Yesterday',
            title: 'Scheduled maintenance notification',
            message: 'We’ll be conducting maintenance in your apartment on Wednesday at 10.00 AM. Please ensure access to your unit.',
            tag: 'maintenance',
        },
        {
            id: 4,
            time: '20 Sep',
            title: 'Don’t forget: Grocery shopping time!',
            message: 'Time to stock up on groceries! Check your pantry for essentials and make your shopping list to save time.',
            tag: 'shopping',
        },
        {
            id: 5,
            time: '20 Sep',
            title: 'Heads Up: Your utility bill is due soon!',
            message: 'Just a reminder that your utility bill is due in one week. Please make sure to pay on time to avoid any interruptions in service!',
            tag: 'financial',
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
                if (blockData.name === 'list-9' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
