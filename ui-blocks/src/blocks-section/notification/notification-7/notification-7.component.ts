import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DropDownButtonModule, DropDownButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification-7',
  standalone: true,
  imports: [CommonModule, SidebarModule, ButtonModule, ListViewModule, DropDownButtonModule],
  templateUrl: './notification-7.component.html',
  styleUrl: './notification-7.component.css'
})
export class Notification7Component {
    @ViewChild('transactionsDropdown') public transactionsDropdown!: DropDownButtonComponent;
    /* SB Code - Start */
    public currentTheme: string = 'tailwind';
    /* SB Code - End */
    public width: string = '310px';
    private breakpointSubscription!: Subscription;

    constructor(private breakpointObserver: BreakpointObserver) { }

    public ngOnInit(): void {
        this.breakpointSubscription = this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
            this.width = result.matches ? '100%' : '420px';
        });
        /* SB Code - Start */
        window.addEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public ngOnDestroy(): void {
        if (this.breakpointSubscription) {
            this.breakpointSubscription.unsubscribe();
        };
        /* SB Code - Start */
        window.removeEventListener('message', this.handleMessageEvent);
        /* SB Code - End */
    }

    public items: Object[] = [
        { text: 'All Transactions' },
        { text: 'Successful Transactions' },
        { text: 'Pending Transactions' },
        { text: 'Refunds and Reversals' }
    ];

    public transactionData: Object[] = [
        {
            id: 1,
            name: 'Gift Card Sale Confirmation',
            content: 'Your sale UK Steam card worth $200 has been successfully completed, funds are now in your wallet.',
            avatar: 'avatar-3.jpg',
            date: new Date(2024, 1, 10, 9, 32, 12)
        },
        {
            id: 2,
            name: 'BTC Transaction Confirmation',
            content: 'Your BTC transaction of 0.00008 BTC has been successfully processed, funds are now in your wallet.',
            avatar: 'avatar-4.jpg',
            date: new Date(2024, 1, 10, 8, 16, 12)
        },
        {
            id: 3,
            name: 'Failed Transactions',
            content: 'We were unable to process your PayPal payment of N600. Please try again.',
            avatar: 'avatar-5.jpg',
            date: new Date(2024, 1, 10, 8, 0, 12)
        },
        {
            id: 4,
            name: 'BTC Transaction Confirmation',
            content: 'Your BTC transaction of 0.00008 BTC has been successfully processed, funds are now in your wallet.',
            avatar: 'avatar-14.jpg',
            date: new Date(2024, 1, 10, 7, 46, 12)
        }
    ];

    @HostListener('window:resize')
    public onResize(): void {
        if (this.transactionsDropdown.element.classList.contains('e-active')) {
            this.transactionsDropdown.toggle();
        }
    }

    /* SB Code - Start */
    private handleMessageEvent = (event: MessageEvent): void => {
        if (event.origin === window.location.origin) {
            try {
                const blockData = JSON.parse(event.data);
                if (blockData.name === 'notification-7' && blockData.theme) {
                    this.currentTheme = blockData.theme;
                }
            } catch (error) {
                console.error('Error parsing message data: ', error);
            }
        }
    };
    /* SB Code - End */
}
